import { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

// import AuthContext from '../../store/auth-context';
import './AuthForm.css';

const SignIn = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    //   const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    //   const switchAuthModeHandler = () => {
    //     setIsLogin((prevState) => !prevState);
    //   };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        // optional: Add validation

        setIsLoading(true);
        let url =
            'http://localhost:3000/signin';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!';
                        // if (data && data.error && data.error.message) {
                        //   errorMessage = data.error.message;
                        // }

                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                const expirationTime = new Date(
                    new Date().getTime() + +data.expiresIn * 1000
                );
                // authCtx.login(data.idToken, expirationTime.toISOString());
                // history.replace('/');
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <section className="auth">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className="control">
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailInputRef} />
                </div>
                <div className="control">
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passwordInputRef}
                    />
                </div>
                <div className="actions">
                    {!isLoading && (
                        <button 
                        onClick={submitHandler}>Login</button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                    <Link to='/signup'>
                        <button
                            type='button'
                            className="toggle"
                        >Create new account
                        </button>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default SignIn;
