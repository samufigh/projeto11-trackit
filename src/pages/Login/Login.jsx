import { LoginPage, Logo, FormContainer, SCLink } from "../../style/LoginCadastro";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import {URLbase} from "../../Consts/URLbase";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { InfoContext } from "../../contexts/InfoUser";

export default function Login() {
    const { setLogin } = useContext(InfoContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [able, setAble] = useState(false);
    const navigate = useNavigate();

    function login(e){
        e.preventDefault();

        const info = {
            email: email,
            password: password
        }
        setAble(true);

        axios.post(URLbase+"login", info)
            .then((response) => {
                navigate("/hoje");
                setLogin(response.data);
            })
            .catch((error) => {
                alert(error.response.data.message);
                setAble(false);
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
                    <button 
                        data-test="login-btn"
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
                <Link to="/cadastro">
                    <span data-test="signup-link">Não tem uma conta? Cadastre-se!</span>
                </Link>
            </SCLink>
        </LoginPage>
    )
}