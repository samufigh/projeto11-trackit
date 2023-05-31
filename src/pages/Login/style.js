import styled from "styled-components";

export const LoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Logo = styled.div`
    margin-top: 68px;
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 250px;
    }
    span{
        font-size: 69px;
        font-family: 'playball';
        line-height: 86px;
        color: #126BA5;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    form{
        display: flex;
        flex-direction: column;
        input{
            padding-left: 11px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            margin-bottom: 6px;
            width: 303px;
            height: 45px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            ::placeholder{
                font-family: 'Lexend Deca';
                font-style: normal;
                font-weight: 400;
                font-size: 19.976px;
                line-height: 25px;
                color: #DBDBDB;
            }
            
        }
        button{
            width: 308px;
            height: 47px;
            background: #52B6FF;
            border: 0px;
            border-radius: 4.7px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 20.976px;
            line-height: 26px;
            color: #FFFFFF;
        }
    }
    span{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 13.976px;
            line-height: 17px;
            text-align: center;
            text-decoration-line: underline;
            margin-top: 25px;
            color: #52B6FF;
        }
`