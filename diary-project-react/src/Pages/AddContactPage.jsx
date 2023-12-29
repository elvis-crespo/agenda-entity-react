import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
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
    width:35px;
    height:35px;
    position: absolute;
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
  background-color: #0e7490;
  `
const ContainerSection = styled.div`
  background-color:  #1D2B3A;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Maria libre', sans-serif;
  form{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 30px;
    div{
      position: relative;
      width: 250px;
      height: auto;
      input{
        width: 100%;
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        background: #1D2B3A;
        border-radius: 5px;
        outline: none;
        color: #FFF;
        font-size: 1em;
        &:valid ~ label,
        &:focus ~ label{
          color: #ddebe6;
          transform: translateX(15px) translateY(-5px);
          font-size: 0.65em;
          padding: 0 10px;
          background: #1D2B3A;
          border-left: 1px solid #ddebe6;
          border-right: 1px solid #ddebe6;
          letter-spacing: 0.2em;
        }
        &:valid ,
        &:focus {
          border: 1px solid #ddebe6;
        }
        &:valid :nth-child(2),
        &:focus :nth-child(2){
          background: #ddebe6;
          color:  #1D2B3A;
          border-radius: 3px;
        }
        
      }
      label{
        position: absolute;
        left: 0;
        padding: 10px;
        pointer-events: none;
        font-size: 0.9em;
        color: rgba(255, 255 ,255, 0.25);
        text-transform: uppercase;
        transition: 0.5s;
      }
    }
    
      h2{
        text-align: center;
        margin: 10px;
        font-family: 'Maria libre', sans-serif;
        font-size: 35px;
        color: #FFF;
      }
      
      button{
        border: double 2px;
        padding: 6px;
        width: 120px;
        position: absolute;
        top: 87%;
        left: 50%;
        transform: translateY(-50%);
        transform: translateX(-50%);
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
  `
const ContainerFooter = styled.footer`
    height: 10vh;
    background-color: #1D2B3A;
    display: flex;
    justify-content: center;//x
    align-items: center;//y
  
  a{
    display: flex;
    justify-content: center;//x
    align-items: center;//y
    text-decoration: none;
    text-align: center;
    color: #acc8cf;
    fill: #acc8cf;
    &:hover{
      p, svg{
        color: white;
        fill: white;
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

export const AddContactPage = () => {

  const [postContact, setPostContact] = useState({
    names: '',
    surnames: '',
    cellPhone: '',
    location: ''
  })
  const handleInput = (event) => {
    setPostContact({ ...postContact, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://localhost:7128/api/Contact/add-contact',
        postContact,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.data;
      setPostContact(data);
    } catch (error) {
      console.log('Se ha producido un error: ', error);
    }
  };

  var contentHtml = `
  <p>Names: ${postContact.names.toLowerCase()}</p>
  <p>Surnames: ${postContact.surnames}</p>
  <p>Cell Phone: ${postContact.cellPhone}</p>
  <p>Location: ${postContact.location}</p>
`
  const alertSave = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      html: contentHtml,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
      // BarProp: true,
      // timer: 5000,
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
          handleSubmit(new Event('submit'));

        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const validateForm = () => {
    if (!postContact.names || !postContact.surnames || !postContact.cellPhone) {
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
        <h1>Add Contact</h1>
      </ContainerTitle>

      <ContainerBody>
        <ContainerSection>
          <form >
            <h2>Enter personal information</h2>
            <div>
              <input type="text"
                onChange={handleInput}
                required="required"
                name='names' />
              <label>
                Enter your name
              </label>
            </div>

            <div>
              <input type="text"
                required='required'
                onChange={handleInput}
                name='surnames' />
              <label>
                Enter your last name
              </label>
            </div>
            <div>
              <input type="text"
                required='required'
                onChange={handleInput}
                name='cellPhone' />
              <label>
                Enter your number phone
              </label>
            </div>

            <div>
              <input type="text"
                required='required'
                onChange={handleInput}
                name='location' />
              <label>
                Enter your location
              </label>
            </div>

            <button type='button' onClick={() => {
              if (postContact.names.length > 0 && postContact.surnames.length > 0)
                alertSave()
            }}>Save</button>
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

