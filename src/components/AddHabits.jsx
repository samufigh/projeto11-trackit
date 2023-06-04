import styled from "styled-components";

export default function AddHabits(){
    return (
        <Box>
            <p>Meus hábitos</p>
            <span>+</span>
        </Box>
    )
}

const Box = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    p{
        font-family: Lexend Deca;
        margin: 28px 18px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    span{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        font-family: Lexend Deca;
        margin: 21px 18px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #52B6FF;
        font-size: 26.976px;
        border-radius: 4.63636px;
        cursor: pointer;
    }
`