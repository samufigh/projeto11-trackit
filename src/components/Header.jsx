import styled from "styled-components"
import { useContext } from "react";
import { InfoContext } from "../contexts/InfoUser";

export default function Header(){
    const {login} = useContext(InfoContext);

    return(
        <>
            <Box>
                <p>TrackIt</p>
                <img src={login.image} alt="image"/>
            </Box>
         </>
    )
}

const Box = styled.div`
    
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 70px;
    background-color: #126BA5;
    width:100%;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    top: 0;
    margin-bottom:28px;
    p {
        height: 49px;
        width: 97px;
        left: 18px;
        font-size: 39px;
        margin: 0px 18px;
        font-weight: 400;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: left;
        top: 10px;
        border-radius: nullpx;
        color: #FFFFFF;
        font-family: Playball;
        
    }
    
    img {
        width: 51px;
        margin: 0px 18px;
        border-radius: 98.5px;
        height: 51px;
        object-fit: cover;
    }
`