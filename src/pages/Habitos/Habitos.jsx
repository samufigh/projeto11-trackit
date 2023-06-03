import { useContext } from "react";
import { InfoContext } from "../../contexts/InfoUser";
import Header from "../../components/Header"

export default function Habitos(){
    const { login } = useContext(InfoContext);

    return(
        <>
            <Header />
            <p>oi</p>
            {console.log(login)}
        </>
    )
}