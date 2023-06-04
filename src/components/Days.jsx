import styled from "styled-components";

export default function Days(){
    return (
        <Buttons>
            <button>D</button>
            <button>S</button>
            <button>T</button>
            <button>Q</button>
            <button>Q</button>
            <button>S</button>
            <button>S</button> 
        </Buttons>
    )
}

const Buttons = styled.div`
    display: flex;
    margin-left: 18px;
    margin-top: 4px;
    margin-bottom: 29px;
    button{
        width: 30px;
        height: 30px;
        left: 36px;
        top: 218px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        margin-right: 4px;
        cursor: pointer;
    }
`