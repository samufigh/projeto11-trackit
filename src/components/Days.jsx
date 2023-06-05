import styled from "styled-components";
import { useState } from "react";

export default function Days(props){
    const {selectedDays, setSelectedDays} = props
    const [select, setSelect] =  useState(false);
    const days=['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function selected(i){

        let add = true;
        
        selectedDays.map(selected => {
            if (i === selected ){
                add = false;
            }
        })
        
        if(add === true){
            setSelectedDays([...selectedDays, i])
            console.log([...selectedDays, i])
        } else {
            let newDays = [];
            let indexDays = [...selectedDays];

            indexDays.forEach(indice => {
                if (indice != i) {

                    newDays.push(indice);
                }
            })

            setSelectedDays(newDays);

    }
        
    }

    return (
        <Buttons>
            {days.map((day, index)=>(
                <div key={index}>
                    <Button
                        data-test="habit-day"
                        id={index}
                        array={selectedDays}
                        onClick={()=>selected(index)}    
                    >{day}</Button>
                </div>
            ))}
        </Buttons>
    )
}

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
        background: ${({array, id}) => 
            array.includes(id) ? '#CFCFCF' : '#FFFFFF'};
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: ${({ array, id }) =>
            array.includes(id) ? '#FFFFFF' : '#D4D4D4'};
        margin-right: 4px;
        cursor: pointer;
    
`