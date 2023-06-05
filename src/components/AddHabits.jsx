import styled from "styled-components";
import Days from "./Days";
import { useState, useContext } from "react";
import { URLenviar } from "../Consts/URLbase";
import axios from "axios";
import { InfoContext } from "../contexts/InfoUser";

export default function AddHabits(){
    const [name, setName] = useState('');
    const [click, setClick] =  useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const { login } = useContext(InfoContext);

    function createHabit(){
        setClick(!click);
    }
    function submit(){
        const config = {
            headers: {
                Authorization: "Bearer " + login.token
            }
        }
        console.log(config);

        const request={
            name: `${name}`,
            days: selectedDays
        }
        console.log(URLenviar)
        axios.post(URLenviar+'habits', request, config)
        .then((response) => {
            console.log(response.data)
            setClick(!click)
        })
        .catch(erro => console.log(erro))

    }
    return (
        <>
            <Box>
                <p>Meus hábitos</p>
                <span
                    data-test="habit-create-btn"
                    onClick={createHabit}
                >+</span>
            </Box>

            {click && 
                <Habit data-test="habit-create-container">
                    <input 
                        placeholder="nome do hábito" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)} />
                    <Days selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
                    <Submit>
                        <p data-test="habit-create-cancel-btn" onClick={()=> setClick(false)}>Cancelar</p>
                        <button data-test="habit-create-save-btn" disabled={(name==='' || selectedDays===[]) ? true : false} onClick={submit}>Salvar</button>
                    </Submit>
                </Habit>
            }
        </>
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

const Habit = styled.div`
    background: aliceblue;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin: 0px 18px;
    input{
        margin-top: 18px;
        margin-left: 18px;
        margin-right: 18px;
        margin-bottom: 4px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        padding-left: 11px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        ::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
`
const Submit =  styled.div`
    display: flex;
    margin: 0px 15px 16px 19px;
    justify-content: flex-end;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 23px;
        cursor: pointer;
    }
    button{
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 0px;
    }
`