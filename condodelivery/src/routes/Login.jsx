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
    if (user.current.value == 'Admin' && password.current.value == '12345') {
    sessionStorage.setItem('user', 'Admin');
    sessionStorage.setItem('password', '12345');
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