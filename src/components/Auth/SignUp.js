import { useState, useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AuthForm.css';

const SignUp = () => {
    const history = useHistory();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const nameInputRef = useRef();
    const genderInputRef = useRef();
    const ageInputRef = useRef();

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
        const enteredName = nameInputRef.current.value;
        const enteredGender = genderInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

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
            <h1>Create Account</h1>
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
                <div className="control">
                    <label htmlFor='text'>Your Name</label>
                    <input type='text' id='name' required ref={nameInputRef} />
                </div>
                <div className="control">
                    <label htmlFor='text'>Your Gender</label>
                    <input type='text' id='gender' required ref={genderInputRef} />
                </div>
                <div className="control">
                    <label htmlFor='number'>Your Age</label>
                    <input type='number' id='age' required ref={ageInputRef} />
                </div>
                <div className="actions">
                    {!isLoading && (
                        <button>Create Account</button>
                    )}
                    {isLoading && <p>Sending request...</p>}
                    <Link to='/signin'>
                        <button
                            type='button'
                            className="toggle"
                        >Login with existing account
                        </button>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default SignUp;
