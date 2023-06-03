import { Logo, FormContainer, SCLink } from "../../style/LoginCadastro";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { URLbase } from "../../Consts/URLbase";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Cadastro() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    const [able, setAble] = useState(false);
    const navigate = useNavigate();

    function info(e){
        e.preventDefault();

        const info = {
            email: email,
            name: name,
            image: picture,
            password: password 
        }

        setAble(true);
        axios.post(URLbase+"sign-up", info)
            .then(response => {
                console.log(response.data);
                navigate("/");
            })
            .catch(error => {
                alert(error.response.data.message);
                setAble(false);
            })

    }
    return (
        <CadastroPage>
            <Logo>
                <img src={logo} />
                <span>TrackIt</span>
            </Logo>
            <FormContainer>
                <form onSubmit={info}>
                    <input
                        data-test="email-input"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={able}
                        required
                    />
                    <input
                        data-test="password-input"
                        type="password"
                        placeholder="senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        disabled={able}
                        required
                    />
                    <input
                        data-test="user-name-input"
                        type="name"
                        placeholder="nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        disabled={able}
                        required
                    />
                    <input
                        data-test="user-image-input"
                        type="picture"
                        placeholder="foto"
                        value={picture}
                        onChange={e => setPicture(e.target.value)}
                        disabled={able}
                        required
                    />
                    <button 
                        data-test="signup-btn"
                        type="submit"
                        disabled={able}
                        required>
                            {able ? (
                            <ThreeDots color="#FFFFFF" height={20} width={20} />
                             ) : (
                                "Entrar"
                             )}
                    </button>
                </form>
            </FormContainer>
            <SCLink>
                <Link to="/">
                    <span data-test="login-link">Já tem uma conta? Faça login!</span>
                </Link>
            </SCLink>
        </CadastroPage>
    )
}

const CadastroPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
