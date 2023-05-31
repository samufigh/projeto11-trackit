import { LoginPage, Logo, FormContainer } from "./style";
import logo from "../../assets/logo.png";

export default function Login() {
    return (
        <LoginPage>
            <Logo>
                <img src={logo} />
                <span>TrackIt</span>
            </Logo>
            <FormContainer>
                <form>
                    <input
                        placeholder="email"
                    />
                    <input
                        placeholder="senha"
                    />
                    <button>Entrar</button>
                </form>
                <span>Não tem uma conta? Cadastre-se!</span>
            </FormContainer>
        </LoginPage>
    )
}