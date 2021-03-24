import './index.css';

const SignUp = () => {

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h2>Sign Up</h2>

                <form>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" />
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" />
                    </div>
                    <div className="submit">
                        <button>Sign Up!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;