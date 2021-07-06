import React, { FormEvent, useState } from "react";
import logo from "../../Assets/Images/TemBilheteLogo.png";
import api from "../../Services/api";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { InputComponent } from "../../Components/Input/Index";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const history = useHistory();
  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    const loginCheck = await api.post("/loginWeb", {
      user,
      password,
      headers: {
        Authorization: "teste",
      },
    });

    if (loginCheck.data !== true) {
      return setErro(loginCheck.data);
    } else {
      return history.push("/home");
    }
  };
  return (
    <div className="mainContainer">
      <div className="logoArea">
        <img src={logo} alt="Logo Tem Bilhete?" />
      </div>
      <div className="formArea">
        <form className="formContent" onSubmit={handleLogin}>
          <h2>Login</h2>
          <InputComponent
            className="userInput"
            label="Usuário: "
            placeholder="Informe o seu usuário"
            name="user"
            value={user}
            id="user"
            setValue={setUser}
            required
          />
          <InputComponent
            className="passwordInput"
            label="Senha : "
            type="password"
            placeholder="Senha"
            name="password"
            id="password"
            value={password}
            setValue={setPassword}
          />
          <p>{erro}</p>
          <a className="forgotPassword" href="'">
            Esqueceu sua senha?
          </a>
          <br />
          <div className="buttonArea">
            <button className="buttonForm" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
