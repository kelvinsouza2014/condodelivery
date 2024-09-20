// import {} from 'react'
import {useRef} from 'react'

function Login () {

  /* Hook - useRef, ele retorna uma referência a um elemento ou componente sem renderizar novamente */
  const user = useRef();
  const password = useRef();

  // Gravando os dados na sessão
  const getUser = sessionStorage.getItem('user');
  const getPassword = sessionStorage.getItem('password');

  const handleSubmit = () => {
    if (user.current.value == 'Morador' && password.current.value == '12345') {

      //Criando um token de autenticação
      let token = Math.random().toString(16).substring(2) +
                  Math.random().toString(16).substring(2)

      sessionStorage.setItem('user', 'Morador');
      sessionStorage.setItem('password', token);
    } else {
      alert("Usuário ou senha invalido !")
    }
  };
  getUser;
  getPassword;

  return(
    <>
    <form onSubmit={handleSubmit}>
      <p>
        Usuário:
        <input type="text" placeholder="Digite seu usuário" ref={user} />
      </p>
      <p>
        Senha:
        <input type="password" placeholder="Digite sua senha" ref={password} />
      </p>
      <button type="submit">Entrar</button>
    </form>
    </>
  )
}
export default Login;