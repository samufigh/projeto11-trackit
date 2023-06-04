import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styled from "styled-components";

export default function Historico(){
    return(
        <Historic>
            <Header />
            <h1>Histórico</h1>
            <h2>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </h2>
            <Menu />
        </Historic>
    )
}

const Historic = styled.div`
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        margin-top: 98px;
        margin-left: 18px;
        margin-right: 18px;
        color: #126BA5;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        margin: 17px 18px;
        color: #666666;
    }
`