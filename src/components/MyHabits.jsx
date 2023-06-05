import { useContext, useState, useEffect } from "react";
import { URLenviar } from "../Consts/URLbase";
import axios from "axios";
import { InfoContext } from "../contexts/InfoUser";
import styled from "styled-components";
import Days from "./Days";

export default function MyHabits(){

    const days=['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [habits, setHabits] = useState([]);
    const {login} = useContext(InfoContext);
    
    useEffect(() => {
        const config = {
            headers: {
                Authorization: "Bearer " + login.token
            }
        }
        axios.get(URLenviar+'habits', config)
            .then(response => {
             setHabits(response.data);
             })}, [])  
        
    
    return (
        <>  
            {console.log(habits)}
            {habits.map ((habit, i) => (
                <ShowHabits>  
                    <h1
                        data-test="habit-name"
                    >{habit.name}</h1>
                    <Buttons>
                        {days.map((day, index)=>(
                            <div key={index}>
                                <Button id={index} marcados={habits[i].days}>
                                    {console.log(habit.days)}
                                    {day}
                                </Button>
                            </div>
                    ))}
                    </Buttons>
                </ShowHabits>
            ))}
        </>
    )
}
const ShowHabits = styled.div`
    margin-left: 18px;
    margin-right: 18px; 
    height: 91px;
    border-radius: 5px;
    h1 {
        margin-top: 13px;
    }
`
const Buttons = styled.div`
    display: flex;
    margin-left: 18px;
    margin-top: 4px;
    margin-bottom: 29px;
`
const Button = styled.button`
        width: 30px;
        height: 30px;
        left: 36px;
        top: 218px;
        background: ${({id, marcados}) => 
            marcados.includes(id) ? '#CFCFCF' : '#FFFFFF'};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${({id, marcados}) =>
            marcados.includes(id) ? '#FFFFFF' : '#D4D4D4'};
        margin-right: 4px;
        cursor: pointer;
    
`