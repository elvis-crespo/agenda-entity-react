import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Modal } from '../Components/Modal'


// const ContainerTitle = styled.div`
//   /* background-color: white; */
//   /* height: 15vh; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-family: 'Klee One', sans-serif;
//   position: relative;
//   svg{
//     width:35px;
//     height:35px;
//     position: absolute;
//     top: 30px;
//     left: 20px;
//     transform: translateY(-50%);
//     transition: 0.5s;
//     opacity: 0.7;
//     /* fill: #d8edf5; */
//     fill:#a3da7c;
//     &:hover{
//       fill: #e6bc0c;
//       opacity: 0.6;
//     }
//   }
// `
// const ContainerBody = styled.div`
//   /* background: linear-gradient(100deg, #285776, #2f82ab );
//   background-color: #285776; */
//   background-image: url("/loki-wallpaper.jpg");
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   `
// const ContainerSection = styled.div`
//   /* background-color: #2f82ab36; */
//   background-color:  #f6faf318;
//   height: 70%;
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: nowrap;
//   border-radius: 15px;
//   backdrop-filter: blur(5px);
//   border: 1px solid #f6faf3;

//   form{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     width: auto;
//       label{
//         position: relative;
//         height: 60px;
//         width: 275px;
//         &[required]:invalid {
//          border: thin dotted red;
//         }
//         p{
//           color: #f6faf3;
//           font-size: 15px;
//           font-weight: bold;
//           font-family: miriam libre;
//           position: absolute;
//           top: 11%;
//           left: 4%;
//           transition: 0.3s;
//           /* backdrop-filter: blur(0.2rem); */
//         }

//         input{
//           border: 1px solid #b6dbeb;
//           background-color: #6b915c;
//           color: black;
//           font-size: 16px;
//           border-radius: 10px;
//           width: 100%;
//           height: 50%;
//           padding: 10px;
//           transition: 0.3s;
//           font-family: miriam libre;
//           &:focus ~ p{
//             font-size: 11px;
//             color:white;
//             top: -12%;
//             left: 40%;
//             transition: 0.5s;
//             font-weight: bold;
//           }
//           &:hover{
//             border: 0px;
//           }
//         }
//       }
//       button{
//         width: auto;
//         color: #396e90;
//         border: 3px solid #396e90;
//         /* background-color:#b6dbeb; */
//         background-color:#e6bc0c;
//         font-weight: bold;
//         font-family: miriam libre;
//         font-size: 18px;
//         text-align: center;
//         border-radius: 10px;
//         opacity: 0.7;
//         width: 70px;
//         height: 30px;
//         opacity: 0.7;
//         cursor: pointer;
//         &:hover{
//           color: white;
//           border: 3px solid white;
//           background-color: #a3da7c;
//           opacity: 0.7;
//         }
//       }  
//   }
//   `
// const ContainerFooter = styled.footer`
//     height: 10vh;
//     display: flex;
//     justify-content: center;//x
//     align-items: center;//y
//     background: radial-gradient( #63ae34, #3d692c);

//   a{
//     display: flex;
//     justify-content: center;//x
//     align-items: center;//y
//     text-decoration: none;
//     text-align: center;
//     flex-direction: row;
//     color: #acc8cf;
//     fill: #acc8cf;
//     &:hover{
//       p, svg{
//         color: white;
//         fill: white;
//       }
//       /* svg{
//       } */
//     }
//       p{
//         padding-left: 10px;
//         font-family: Arial, Helvetica, sans-serif;
//         font-size: 20px;
//         text-align: center;
//         font-weight: bold;
//         transition: 0.3s;
//       }
//       svg{
//         transition: 0.3s;
//       }
//   }
// `


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

const Container = styled.div`
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
    justify-content: center;
    flex-direction: column;
    div{
      position: relative;
      width: 250px;
      margin: 100px;
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
        font-size: 1em;
        color: rgba(255, 255 ,255, 0.25);
        text-transform: uppercase;
        transition: 0.5s;
      }
    }
    /* input{
      font-size: 20px;
      margin: 80px;
      width: auto;
      height: 35%;
      border-radius: 10px;
      border: 3px solid #b6dbeb;
      padding: 8px;
      transition: 0.5s;
      &:focus + label,
      &:placeholder-shown + label */
      /* &:focus-within + label */
      /* {
        padding: 0 8px 0 8px;
        font-weight: bold;
        font-size: 15px;
        background-color: #cfcdcd;
        translate: 0.625rem -1.5rem;
        border-color: white;
        border-radius: 10px;
        border: 3px solid #b6dbeb;
        transition: 0.5s;
      }
    } */
    /* label{
      font-size: 20px;
      font-family: 'Klee One', sans-serif;
      position: absolute;
      top: 50%;
      left: 17%;
      transform: translateY(-50%);
      border: 2px solid transparent;
      pointer-events: none;
      transition: translate 250ms,
      background-color 250ms,
      border-color 250ms;
        
    } */
    
    button{
      border: double 2px;
      padding: 6px;
      /* width: 120px; */
      height: 35px;
      width: auto;
      color: #396e90;
      border: 1px solid #396e90;
      background-color: white;
      font-weight: bold;
      font-family: sans-serif;
      font-size: 18px;
      border-radius: 8px;
      opacity: 0.7;
      transition: 0.5s;
      &:hover{
        background-color: #1D2B3A;
        border: 1px solid white;
        color: white;
        opacity: none;
        font-size: 14px;
        font-weight: lighter;
        cursor: pointer;
      }
    }
  }
  dialog{
    width: 85%;
    height: auto;
    border-radius: 12px;
    border: none;
    background-color: #ff010124;
    display: flex;
    align-items: baseline;
    justify-content: center;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    
    button{
      top: 0;
      width: 35px;
      height: 35px;
      margin-right: 8px;
      color: #000000a9;
      background-color: #db3232b3;
      font-size: 25px;
      border-radius: 5px;
      border: double 2px;
      /* padding: 6px; */
      text-align: center;
      font-family: sans-serif;
      opacity: 0.7;
      &:hover{
        color: #0e0d0d;
        border: 3px solid black;
        background-color: #ff0101;
        opacity: none;
        cursor: pointer;
      }
    }
  }
`

const ContainerFooter = styled.footer`
  height: 10vh;
  background-color:  #1D2B3A;
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

const ButtonContainer = styled.div`
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`

const ContainerModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    
    h1{
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    p{
        font-size: 12px;
        margin-bottom: 20px;
    }

    img {
        width: 100%;
        vertical-align: top;
        border-radius: 3px;
    }

    table{
      width: 100%;
      height: auto;
      padding: 25px;
      th{
        border-radius: 5px;
        margin: 15px 15px 30px 15px ;
        font-family: miriam libre;
        font-weight: bold;
        border: 5px solid #3b757f;
        background-color:#2d464c;
        color: #bfe0e2;
      } 
      td{
        border-radius: 5px;
        margin: 15px;
        text-align: center;
        font-family: miriam libre;
        border: 5px solid #bfe0e2;
        background-color: #bfe0e2;
      }
    }
`

const Button = styled.button`
    display: block;
    padding: 10px 30px;
    border-radius: 100px;
    color: #fff;
    border: none;
    background-color: #1766DC;
    cursor: pointer;
    font-family: 'Miriam libre';
    font-weight: 500;
    transition: .3s ease all;

    &:hover{
        background: #0066FF;
    }
`


export const SearchContactPage = () => {

  const [input, setInput] = useState('')
  const [userGet, setUserGet] = useState([])
  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (input.length > 0)
      getData()
  }

  const getData = async () => {
    try {
      const response = await axios.get('https://localhost:7128/api/Contact/search-name',
        {
          params: {
            name: input
          },
          // responseType: 'json'
        })
      // .then(function (response) {
      //   // console.log(response.data);
      //   // console.log(response.status);
      //   // console.log(response.statusText);
      //   // console.log(response.headers);
      //   console.log(response.config);
      // });
      const data = await response.data
      setUserGet(data)

    } catch (error) {
      console.log('Se ha producido un error: ', error)
    }
  }

  return (
    <>
      <ContainerTitle>
        <NavLink to='/'>
          <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg"><path d="M0 35C0 54.3291 15.6709 70 35 70C54.3291 70 70 54.3291 70 35C70 15.6709 54.3291 0 35 0C15.6709 0 0 15.6709 0 35ZM35.7825 19.6269C36.0335 19.8759 36.2331 20.172 36.3697 20.4981C36.5063 20.8243 36.5774 21.1741 36.5788 21.5278C36.5802 21.8814 36.5119 22.2318 36.3779 22.559C36.2439 22.8862 36.0467 23.1839 35.7976 23.4349L26.9937 32.3077H49.4712C50.1852 32.3077 50.87 32.5913 51.3749 33.0963C51.8798 33.6012 52.1635 34.286 52.1635 35C52.1635 35.714 51.8798 36.3988 51.3749 36.9038C50.87 37.4087 50.1852 37.6923 49.4712 37.6923H26.9937L35.7976 46.5651C36.0466 46.8164 36.2437 47.1142 36.3777 47.4417C36.5116 47.7691 36.5797 48.1197 36.5782 48.4734C36.5766 48.8272 36.5054 49.1772 36.3686 49.5034C36.2318 49.8296 36.032 50.1257 35.7808 50.3748C35.5295 50.6238 35.2317 50.8209 34.9043 50.9548C34.5768 51.0888 34.2262 51.1569 33.8725 51.1553C33.5187 51.1538 33.1687 51.0826 32.8425 50.9457C32.5163 50.8089 32.2202 50.6092 31.9712 50.3579L18.6123 36.8964C18.1118 36.3921 17.831 35.7104 17.831 35C17.831 34.2896 18.1118 33.6079 18.6123 33.1036L31.9712 19.6421C32.2202 19.3905 32.5165 19.1905 32.8429 19.0536C33.1694 18.9166 33.5196 18.8454 33.8737 18.844C34.2277 18.8426 34.5785 18.911 34.906 19.0454C35.2336 19.1797 35.5314 19.3773 35.7825 19.6269Z" />       </svg>
        </NavLink>
        <h1>Search Contact</h1>
      </ContainerTitle>

      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              required="requeired"
            />
            <label>Enter a keyword</label>
          </div>

          <button
            type="submit"
            onClick={() => {
              if(input.length > 0)
              setModalOpen(true)
            }}
          >
            Search
          </button>
        </form>
      </Container>

      <div>
        <Modal
          state={modalOpen}
          changeState={setModalOpen}
          title='Contact Records'
          showHeader={true}
          showoverlay='true'
          modalposition={'center'}
          padding={''}
        >
          <ContainerModal>
            <h1>Contacts</h1>
            <table >
              <thead>
                <tr>
                  <th >Name</th>
                  <th >Surname</th>
                  <th >Cell Phone</th>
                  <th >Location</th>
                </tr>
              </thead>
              <tbody>
                {userGet.map(user => {
                  return (
                    <tr key={user.id}>
                      {/* <th scope="row">{user.id}</th> */}
                      <td>{user.names}</td>
                      <td>{user.surnames}</td>
                      <td>{user.cellPhone}</td>
                      <td>{user.location}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table >
           
            <Button
              onClick={() => setModalOpen(!modalOpen)}
            >Accept</Button>
          </ContainerModal>
        </Modal>
      </div >

      <ContainerFooter>
        <NavLink to='/'>
          <svg strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"></path></svg>
          <p>Home</p>
        </NavLink>
      </ContainerFooter>

      {/* <ContainerTitle>
        <NavLink to='/'>
        <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg"><path d="M0 35C0 54.3291 15.6709 70 35 70C54.3291 70 70 54.3291 70 35C70 15.6709 54.3291 0 35 0C15.6709 0 0 15.6709 0 35ZM35.7825 19.6269C36.0335 19.8759 36.2331 20.172 36.3697 20.4981C36.5063 20.8243 36.5774 21.1741 36.5788 21.5278C36.5802 21.8814 36.5119 22.2318 36.3779 22.559C36.2439 22.8862 36.0467 23.1839 35.7976 23.4349L26.9937 32.3077H49.4712C50.1852 32.3077 50.87 32.5913 51.3749 33.0963C51.8798 33.6012 52.1635 34.286 52.1635 35C52.1635 35.714 51.8798 36.3988 51.3749 36.9038C50.87 37.4087 50.1852 37.6923 49.4712 37.6923H26.9937L35.7976 46.5651C36.0466 46.8164 36.2437 47.1142 36.3777 47.4417C36.5116 47.7691 36.5797 48.1197 36.5782 48.4734C36.5766 48.8272 36.5054 49.1772 36.3686 49.5034C36.2318 49.8296 36.032 50.1257 35.7808 50.3748C35.5295 50.6238 35.2317 50.8209 34.9043 50.9548C34.5768 51.0888 34.2262 51.1569 33.8725 51.1553C33.5187 51.1538 33.1687 51.0826 32.8425 50.9457C32.5163 50.8089 32.2202 50.6092 31.9712 50.3579L18.6123 36.8964C18.1118 36.3921 17.831 35.7104 17.831 35C17.831 34.2896 18.1118 33.6079 18.6123 33.1036L31.9712 19.6421C32.2202 19.3905 32.5165 19.1905 32.8429 19.0536C33.1694 18.9166 33.5196 18.8454 33.8737 18.844C34.2277 18.8426 34.5785 18.911 34.906 19.0454C35.2336 19.1797 35.5314 19.3773 35.7825 19.6269Z" />       </svg>
        </NavLink>
      </ContainerTitle> */}
      {/* 
      <ContainerBody>
      <ContainerSection>
          <form onSubmit={handleSubmit}>
            <label>
              <input type="text"
                // placeholder='  Enter your names'
                onChange={handleInput}
                name='names' />
              <p>Names</p>
            </label>

            <label>
              <input type="text"
                // placeholder='  Enter you surnames'
                onChange={handleInput}
                name='surnames' />
              <p>Surnames</p>
            </label>

            <label>
              <input type="text"
                // placeholder='  Enter your number phone'
                onChange={handleInput}
                name='cellPhone' />
              <p>Number Phone</p>
            </label>
            
            <label>
              <input ty pe="text"
                // placeholder='  Enter your location'
                onChange={handleInput}
                name='location' />
              <p>Location</p>
            </label>

            <button type="submit" >Save</button>

          </form>
        </ContainerSection>
      </ContainerBody> */}

      {/* <ContainerFooter>
        <NavLink to='/'>
          <svg strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z"></path></svg>
          {/* &nbsp; */}

    </>
  )
}
