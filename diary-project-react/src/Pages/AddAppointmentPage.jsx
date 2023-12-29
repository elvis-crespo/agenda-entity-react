import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Swal from 'sweetalert2'

const ContainerTitle = styled.div`
  background-color: white;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Klee One', sans-serif;
  position: relative;
  h1{
    font-size: 50px;
    text-align: center;
  }
  svg{
    position: absolute;
    width:35px;
    height:35px;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    transition: 0.5s;
    opacity: 0.4;
    fill: #0e7490;
    &:hover{
      fill: black;
      opacity: 0.5;
    }
  }
`
const ContainerBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1D2B3A;
  height: 75vh;
`
const commonInputStyles = `
  label{
  height: 90px;
  p{
      // text-align: center;
      font-size: 13px;
      font-weight: bold;
      font-family: miriam libre;
  }
  input{
    margin: 8px 0px 8px 40px;
    margin-left: 40px;
    width: auto;
    height: 35%;
    border-radius: 5px;
    border: 1px solid #1D2B3A;
    padding: 8px;
  }
  textarea{
    width: 85%;
    height: 60%;
    border: 1px solid #1D2B3A;
    border-radius: 5px;
    margin-top: 8px;
    margin-left: 40px;
    padding: 8px;
  }
}

`
const ContainerSection = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 90%;
  flex-direction: column;
  form:first-child{
    ${commonInputStyles}
    padding: 10px 50px;
    button{
      top: 30%;
      left: 50%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      padding: 6px;
      width: 120px;
      color: #396e90;
      border: 3px solid #396e90;
      background-color: white;
      font-weight: bold;
      font-family: sans-serif;
      font-size: 18px;
      border-radius: 8px;
      opacity: 0.7; 
      &:hover{
          color: white;
          border: 3px solid white;
          background-color: #396e90;
          opacity: none;
          cursor: pointer;
        }
    } 
  }
  form:nth-child(2){
    ${commonInputStyles}
    
    padding: 0px 50px 20px 50px;
    /* height: 70%; */
    width: auto;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    position: relative;
    
  button{
    top: 95%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    position: absolute;
    padding: 6px;
    width: 120px;
    color: #396e90;
    border: 3px solid #396e90;
    background-color: white;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 18px;
    border-radius: 8px;
    opacity: 0.7;
    &:hover{
          color: white;
          border: 3px solid white;
          background-color: #396e90;
          opacity: none;
          cursor: pointer;
        }
  } 
  select{
    margin: 8px 0px 8px 40px;
    width: auto;
    height: auto;
    border-radius: 5px;
    border: 1px solid #1D2B3A;;
    padding: 8px;
    font-weight: bold;
    option{
      font-weight: bold;
      background-color: #32b7c0;
    }
  }
}
`
const ContainerFooter = styled.footer`
  height: 10vh;
  background-color:#1D2B3A;
  display: flex;
  align-items: center;
  justify-content: center;
  
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #acc8cf;
    fill: #acc8cf;
    &:hover{
      p,svg{
       color: #f8ebeb;
       fill: #f8ebeb;
     }
    }
    p{
      padding-left: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        transition: 0.3s;
    }
    svg{
      transition: 0.3s;
    }
  }
`

export const AddAppointmentPage = () => {

  const [names, setNames] = useState('')
  const [input, setInput] = useState('')
  const [contactId, setContactId] = useState('')
  const [userGet, setUserGet] = useState([])
  const [formData, setFormData] = useState({
    date: '',
    description: '',
  })

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const changeInputSearch = (e) => {
    setInput(e.target.value)
  }

  const changeId = (event) => {
    setContactId(event.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.length > 0)
    getData()
  }
  const getData = async () => {
    try {
      const response = await axios.get('https://localhost:7128/api/Contact/search-name',
        {
          params: {
            name: input
          },
        })
      const data = await response.data
      setUserGet(data)
    } catch (error) {
      console.log(error, "Ha ocurrido un error")
    }
  }
  const postData = async (e) => {
    await axios({
      method: 'post',
      url: 'https://localhost:7128/api/Diary/add',
      data: {
        // fecha: `${input + ":00.864Z"}`,
        date: formData.date,
        description: formData.description,
        contactId: contactId
      }
    });
    setFormData({
      date: '',
      description: '',
    });
  }



  const alertSelect = () => {
    const options = {}; // Aquí almacenarás las opciones del select

    userGet.map(user => {
      (options[user.id] = `${user.names} ${user.surnames}`);
    });
    Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: options,
      inputPlaceholder: "Select a contact",
      showCancelButton: true,
      inputValue: contactId,
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedUserId = result.value;
        setNames(options[selectedUserId])
        // setContactId(selectedUserId)
        setContactId(selectedUserId)
        Swal.fire(`You selected: ${options[selectedUserId]} `);
      } else {
        Swal.fire("Selection canceled");
      }
    });
  };


  var contentHtml = `
  <p>Day of the consult: ${formData.date.toLowerCase()}</p>
  <p>Description of the consult: ${formData.description.toLowerCase()}</p>
  <p>Name of the contact: ${names.toLowerCase()}</p>

`
  const alertSave = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      html: contentHtml,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
     
      timerProgressBar: true,
      icon: 'question',
      showCloseButton: true,
      allowEnterKey: false,
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "submit", "success");
        if (validateForm()) {
          Swal.fire('Success', 'Form data is valid, proceed with save', 'success');
          postData(new Event('submit'));
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const validateForm = () => {
    if (!formData.date || !formData.description || !names) {
      Swal.fire('Error', 'All fields are required', 'error');
      return false;
    }
    return true;
  };

  return (
    <>
      <ContainerTitle>
        <NavLink to='/'>
          <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg"><path d="M0 35C0 54.3291 15.6709 70 35 70C54.3291 70 70 54.3291 70 35C70 15.6709 54.3291 0 35 0C15.6709 0 0 15.6709 0 35ZM35.7825 19.6269C36.0335 19.8759 36.2331 20.172 36.3697 20.4981C36.5063 20.8243 36.5774 21.1741 36.5788 21.5278C36.5802 21.8814 36.5119 22.2318 36.3779 22.559C36.2439 22.8862 36.0467 23.1839 35.7976 23.4349L26.9937 32.3077H49.4712C50.1852 32.3077 50.87 32.5913 51.3749 33.0963C51.8798 33.6012 52.1635 34.286 52.1635 35C52.1635 35.714 51.8798 36.3988 51.3749 36.9038C50.87 37.4087 50.1852 37.6923 49.4712 37.6923H26.9937L35.7976 46.5651C36.0466 46.8164 36.2437 47.1142 36.3777 47.4417C36.5116 47.7691 36.5797 48.1197 36.5782 48.4734C36.5766 48.8272 36.5054 49.1772 36.3686 49.5034C36.2318 49.8296 36.032 50.1257 35.7808 50.3748C35.5295 50.6238 35.2317 50.8209 34.9043 50.9548C34.5768 51.0888 34.2262 51.1569 33.8725 51.1553C33.5187 51.1538 33.1687 51.0826 32.8425 50.9457C32.5163 50.8089 32.2202 50.6092 31.9712 50.3579L18.6123 36.8964C18.1118 36.3921 17.831 35.7104 17.831 35C17.831 34.2896 18.1118 33.6079 18.6123 33.1036L31.9712 19.6421C32.2202 19.3905 32.5165 19.1905 32.8429 19.0536C33.1694 18.9166 33.5196 18.8454 33.8737 18.844C34.2277 18.8426 34.5785 18.911 34.906 19.0454C35.2336 19.1797 35.5314 19.3773 35.7825 19.6269Z" />       </svg>
        </NavLink>
        <h1>Add Appointment</h1>
      </ContainerTitle>

      <ContainerBody>

        <ContainerSection>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Enter the name of the person you want to meet with</p>
              <input type='text'
                placeholder='Enter a keywork'
                value={input}
                onChange={changeInputSearch}
              />
            </label>

            <button
              type="submit"
            >Search</button>
          </form>

          <form >
            <label >
              <p>DateTime of Appointment</p>
              <input
                type="datetime-local"
                name='date'
                onChange={handleFormData}
              />
            </label>

            <label>
              <p>Choose a contact</p>
              <select defaultValue='-1' onChange={changeId} onClick={alertSelect}>
                <option disabled value='-1'>{names}</option>
              </select>
            </label>


            <label>
              <p>Description</p>
              <textarea
                placeholder='&nbsp;Information about your appointment' cols="80" rows="10"
                name='description'
                onChange={handleFormData}></textarea>
            </label>

            <button type="button" onClick={alertSave}>Save</button>
          </form>
        </ContainerSection>
      </ContainerBody>


      <ContainerFooter>
        <NavLink to='/'>
          <svg strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"></path></svg>
          <p>Home</p>
        </NavLink>
      </ContainerFooter>

    </>
  )
}
