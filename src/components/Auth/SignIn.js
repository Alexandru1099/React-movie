import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.css";

const SignIn = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url = "http://localhost:3000/signin";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {})
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className="auth">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className="control">
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className="actions">
          {!isLoading && <button onClick={submitHandler}>Login</button>}
          {isLoading && <p>Sending request...</p>}
          <Link to="/signup">
            <button type="button" className="toggle">
              Create new account
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
