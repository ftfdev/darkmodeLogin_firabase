import Switch from "../switch/index";
import google from "../../image/google.png";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from "../../service/firebase";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Card = () => {
  const [user, setUser] = useState<User>({} as User);
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (passwordRef.current) {
      passwordRef.current.type = showPassword ? "password" : "text";
    }
  };

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="item-container">
        <div className="header">
          <Switch />
        </div>
        <div className="section">
          <h1 className="label-login">Login</h1>
          <div className="login">
            <div className="email">
              <h1>E-mail</h1>
              <input
                type="email"
                className="input"
                placeholder="nome@email.com"
              />
            </div>

            <div className="password">
              <h1>Senha</h1>
              <input ref={passwordRef} type="password" className="input" />
              {showPassword ? (
                <FaEye
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEyeSlash
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <h1 className="forgot-passoword">Esqueceu a senha?</h1>

            <button className="button-login">LOGIN</button>
          </div>

          <div>
            <div>
              <h1 className="register-google">Ou faça login com</h1>
              <div>
                <img
                  src={google}
                  alt="logo-google"
                  onClick={signInWithGoogle}
                />
              </div>
            </div>
          </div>

          <h1 className="register">
            Não tem conta? <span>Cadastre-se</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
