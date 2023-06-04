import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <Footer>
            <Link data-test="habit-link" to="/habitos">
              <p>Hábitos</p>
              </Link>
            <Link data-test="today-link" to='/hoje'>
                <p>círculo</p>
            </Link>
            <Link data-test="history-link" to="/historico">
                <p>Histórico</p>
            </Link> 
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    justify-content:space-around;
    align-items: center;
    height: 70px;
    background-color: white;
    width:100%;
    box-shadow: 0px 4px 4px 0px #00000026;
    position: fixed;
    bottom:0;
    p {
        height: 22px;
        width: 68px;
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color:#52B6FF;
    }
    a{
        text-decoration: none;
    }
`