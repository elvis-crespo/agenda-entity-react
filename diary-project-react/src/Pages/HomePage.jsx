import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const ContainerTitle = styled.div`
    background-color: #1D2B3A;
    height: 30vh;
    display: flex;
    justify-content: center; //x
    align-items: center; //y
    font-family: 'Klee One', sans-serif;
    font-size: 50px;

    h1 { 
        text-align: center;
        color: #fff;
    }
`

const ContainerChild = styled.div`
    background-color: white;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

   
    p {
        /* height:14em;  */
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

export const HomePage = () => {
   
    return (
        <>
            <ContainerTitle>
                <h1>Diary</h1>
            </ContainerTitle>
            <ContainerChild>
                <div >
                    <NavLink to='/add-appoint'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 000-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></svg>
                        <p>Add Appointment</p>
                    </NavLink>
                </div>
                <div >
                    <NavLink to='/add-contact'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>
                        <p>Add Contact</p>
                    </NavLink>
                </div>
                <div >
                    <NavLink to='/consult-Appoint'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>
                        <p>Consult Appointment</p>
                    </NavLink>
                </div>
                <div >
                    <NavLink to='search-contact'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM21.4462 20.032L22.9497 21.5355L21.5355 22.9497L20.032 21.4462C19.4365 21.7981 18.7418 22 18 22C15.7909 22 14 20.2091 14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18C22 18.7418 21.7981 19.4365 21.4462 20.032ZM18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"></path></svg>
                        <p>Search Contact</p>
                    </NavLink>
                </div>
            </ContainerChild>
        </>
    )
}
