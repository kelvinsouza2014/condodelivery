import {} from 'react'
import {Link} from 'react-router-dom'
// import App from './App.jsx'
// import Login from './routes/Login.jsx'
// import Authentication_phone from './routes/Authentication_phone.jsx'
// import Register from './routes/Register.jsx'
// import Authentication_email from './routes/Authentication_email.jsx'
// import Initial from './routes/Initial.jsx'
// import Follow_up from './routes/Follow_up.jsx'
// import Assessment from './routes/Assessment.jsx'
// import Settings from './routes/Settings.jsx'
// import Profile from './routes/Profile.jsx'

function Aplication () {
  return(
    <>
      <ul>
        <Link to="/">App</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Authentication_phone">Authentication_phone</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Authentication_email">Authentication_email</Link>
        <Link to="/Initial">Initial</Link>
        <Link to="/Follow_up">Follow_up</Link>
        <Link to="/Assessment">Assessment</Link>
        <Link to="/Settings">Settings</Link>
        <Link to="/Profile">Profile</Link>
      </ul>
    </>
  )
}
export default Aplication
