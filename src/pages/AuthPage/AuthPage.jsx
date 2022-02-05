import { useState } from 'react';
import "./AuthPage.css";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <h5 className='fakelink' onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Need to create an account? Click Here ':' Already registered for the site? Click here to log in'}</h5>
      </div>
      <aside>
        <h2> Color-Me-Impressed</h2>
        <p>This application is designed to help you interact with and select a color / color scheme for an upcoming project. Select from a palette of existing colors or choose your own with the color picker.</p>

        <p>This app was made possible through the use of <span> <a href="https://www.thecolorapi.com/">The Color API</a></span>. Without it, this project could not function. </p>

      </aside>

    </main>
  )
}


