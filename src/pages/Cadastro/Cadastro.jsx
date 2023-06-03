import { Logo, FormContainer, SCLink } from "../../style/LoginCadastro";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { URLbase } from "../../Consts/URLbase";
import { useState } from "react";

export default function Cadastro( props ) {
    const {email, password, name, picture, setEmail, setPassword, setName, setPicture} = props; 
    const [able, setAble] = useState(false);

    function info(e){
        e.preventDefault();

        const info = {
            email: email,
            name: name,
            image: picture,
            password: password 
        }

        axios.post(URLbase+"sign-up", info)
            .then(response => {
                console.log(response.data);
                setAble(true);
            })
            .catch(response => {
                console.log(response)
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
                            Cadastrar
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
