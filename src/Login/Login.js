import React, { useState, useEffect } from "react";
import { httpClient } from './HTTPClient';
import { useNavigate } from 'react-router-dom';
//import logoasa from './assets/images/logo.png;
import '././Login/Login.css';


//-----------professor


    //./assets/images/logo.png


export default function App() {
    //const navigate = useNavigate();
    const [stateLogin, setStateLogin] = useState({
        nome: "",
        senha: ""
    });
    
    


    const validar = () => {


        let dados = {
            nome: stateLogin.nome,
            senha: stateLogin.senha
        }

        let p = httpClient().post("Login/Validar", dados);
        p.then(r => {
            return r.json()
        })
            .then(r => {

                if (r.sucesso) {
                    sessionStorage.setItem("autenticado", "true");
                   // navigate("/todolist");

                }
                else {

                    alert(r.msg);
                }
            }
            )
    }

    
    let saida =
        <>
            
            <div className="login">
                <h1>Login</h1>
                    <input type="text"
                          placeholder="seu@email.com"
                          required="required"
                          value={stateLogin.nome}
                          onChange={(event) => { setStateLogin({ ...stateLogin, nome: event.target.value }) }}
                          />
      
                      <input type="password"
                          placeholder="Senha"
                          value={stateLogin.senha}
                          onChange={(event) => { setStateLogin({ ...stateLogin, senha: event.target.value }) }} />
      
                      <button type="button" className="btn btn-primary btn-block btn-large" onClick={validar}>Validar</button>
                      
                <p><a href="">Cadastrar-se ?</a></p>
            </div>

            
        </>

    return (saida);
} 