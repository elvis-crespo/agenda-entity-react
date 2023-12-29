import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* color: ${props => props.$inputColor || "#BF4F74"}; */
    background: ${props => props.showoverlay ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, 0)'};
    padding: 40px;
    display: flex;
    align-items: ${props => props.modalposition ? props.modalposition : 'center'};//y
    justify-content: center;//x
`
const ContainerModal = styled.div`
    width: 70vw;
    min-height: 120px;
    max-height: 80vh;
    background: #ffffffd3;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: ${props => props.padding ? props.padding : '20px'};
`
const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
    h3{
        font-weight: 500;
        font-size: 15px;
        color: #2961a0;
    }
    `
const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 20px;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: #2961a0;
    font-weight: bold;
    transition: .3s ease all;

    &:hover{
        background: #e6dfdf;
        color: red;
    }
    
    svg{
        width: 100%;
        height: 100%;
    }
`

export const Modal = ({
    children,
    state,
    changeState,
    title = 'Default title',
    showHeader,
    showoverlay,
    modalposition,
    padding 
}) => {
    return (
        <>
            {state &&
                <Overlay showoverlay={showoverlay} modalposition={modalposition}>
                    <ContainerModal padding={padding}>
                        {showHeader &&
                            <HeaderModal>
                                <h3>{title}</h3>
                            </HeaderModal>
                        }
                        <CloseButton
                            onClick={() => changeState(!state)}
                        >
                            <svg stroke="currentColor" fill="currentColor" strokewidt="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path></svg>
                        </CloseButton>

                        {children}
                    </ContainerModal>
                </Overlay>
            }
        </>
    )
}
