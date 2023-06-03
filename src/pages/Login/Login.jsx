import { LoginPage, Logo, FormContainer, SCLink } from "../../style/LoginCadastro";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import {URLbase} from "../../Consts/URLbase"
import axios from "axios";

export default function Login( props ) {
    const {email, password, setEmail, setPassword} = props;

    function login(e){
        e.preventDefault();

        const info = {
            email: email,
            password: password
        }

        axios.post(URLbase+"login", info)
            .then((response) => {
                console.log(response.data);
            })
            .catch((response) => {
                alert(response.response.data.message)
            })
    }

    return (
        <LoginPage>
            <Logo>
                <img src={logo} />
                <span>TrackIt</span>
            </Logo>
            <FormContainer>
                <form onSubmit={login}>
                    <input
                        data-test="email-input"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        data-test="password-input"
                        type="password"
                        placeholder="senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button data-test="login-btn">Entrar</button>
                </form>
            </FormContainer>
            <SCLink>
                <Link to="/cadastro">
                    <span data-test="signup-link">Não tem uma conta? Cadastre-se!</span>
                </Link>
            </SCLink>
        </LoginPage>
    )
}