import { useContext } from "react";
import { InfoContext } from "../../contexts/InfoUser";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styled from "styled-components";
import AddHabits from "../../components/AddHabits";

export default function Habitos(){
    const { login } = useContext(InfoContext);

    return(
        <Habits>
            <Header />
            <AddHabits />
            <h1>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </h1>
            {console.log(login)}
            <Menu />
        </Habits>
    )
}

const Habits = styled.div`
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        margin: 7px 18px;
        color: #666666;
    }
`