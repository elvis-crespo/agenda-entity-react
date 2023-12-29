import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ContainerHeader = styled.div`
    background-color: #1D2B3A;
    height: 30vh;
    display: flex;
    justify-content: center; //x
    align-items: center; //y
    font-family: 'Klee One', sans-serif;
    font-size: 50px;
    position: relative;
    h1 { 
        text-align: center;
        color: #FFF;
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
    fill: #eeeff0;
    /* fill: #0e7490; */
    &:hover{
      fill: #FFF;
      opacity: 0.5;
    }
  }
`

const ContainerBody = styled.div`
    background-color: white;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

   
    p {
        width:10em;
        text-align: center;
        font-family: sans-serif;
        font-size: 25px;
        color: black;
        font-family: 'Klee One', sans-serif;
        font-weight: bold;
    }
    a{
        text-decoration: none;
        display: inline-block;
        transform: scale(0.8);
        transition: 0.5s;
        &:hover{
            transform: scale(1);
        } 
        svg {
            margin-top: 70px;
            margin-left: 70px;
            margin-right: 70px;
            margin-bottom: 10px;
            color: black;
            transition: 0.5s;
            &:hover
            {
                color: #3f3f3f;               
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

export const ConsultAppointmentPage = () => {
  return (
    <>
      <ContainerHeader>
        <NavLink to='/'>
          <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg"><path d="M0 35C0 54.3291 15.6709 70 35 70C54.3291 70 70 54.3291 70 35C70 15.6709 54.3291 0 35 0C15.6709 0 0 15.6709 0 35ZM35.7825 19.6269C36.0335 19.8759 36.2331 20.172 36.3697 20.4981C36.5063 20.8243 36.5774 21.1741 36.5788 21.5278C36.5802 21.8814 36.5119 22.2318 36.3779 22.559C36.2439 22.8862 36.0467 23.1839 35.7976 23.4349L26.9937 32.3077H49.4712C50.1852 32.3077 50.87 32.5913 51.3749 33.0963C51.8798 33.6012 52.1635 34.286 52.1635 35C52.1635 35.714 51.8798 36.3988 51.3749 36.9038C50.87 37.4087 50.1852 37.6923 49.4712 37.6923H26.9937L35.7976 46.5651C36.0466 46.8164 36.2437 47.1142 36.3777 47.4417C36.5116 47.7691 36.5797 48.1197 36.5782 48.4734C36.5766 48.8272 36.5054 49.1772 36.3686 49.5034C36.2318 49.8296 36.032 50.1257 35.7808 50.3748C35.5295 50.6238 35.2317 50.8209 34.9043 50.9548C34.5768 51.0888 34.2262 51.1569 33.8725 51.1553C33.5187 51.1538 33.1687 51.0826 32.8425 50.9457C32.5163 50.8089 32.2202 50.6092 31.9712 50.3579L18.6123 36.8964C18.1118 36.3921 17.831 35.7104 17.831 35C17.831 34.2896 18.1118 33.6079 18.6123 33.1036L31.9712 19.6421C32.2202 19.3905 32.5165 19.1905 32.8429 19.0536C33.1694 18.9166 33.5196 18.8454 33.8737 18.844C34.2277 18.8426 34.5785 18.911 34.906 19.0454C35.2336 19.1797 35.5314 19.3773 35.7825 19.6269Z" />       </svg>
        </NavLink>
        <h1>Diary</h1>
      </ContainerHeader>

      <ContainerBody>
        <div >
          <NavLink to='/query-date'>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path><path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"></path><path d="m22 22-1.5-1.5"></path></svg> 
            <p>Search by current</p>
          </NavLink>
        </div>
        <div >
          <NavLink to='/query-contact'>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><circle cx="10" cy="8" r="4"></circle><path d="M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zM19.43 18.02c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
            <p>Search by Contact</p>
          </NavLink>
        </div>
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
