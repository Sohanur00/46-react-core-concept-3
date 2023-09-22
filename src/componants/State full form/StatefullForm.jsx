import { useState } from "react";


const StatefullForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('')



    const handleSubmit = e => {
        e.preventDefault();

        if (password.length < 6) {
            setError('password must be 6 charetor')

        } else {

            setError('');
        }
        console.log(email, password, name)

    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value)

    }

    const handlePasswordChange = e => {

        console.log(e.target.value)
        setPassword(e.target.value)

    }
    const handleNameChange = e => {

        setName(e.target.value)

    }

    return (
        <div className="text-center">

            <form onSubmit={handleSubmit}>

                <input

                    onChange={handleNameChange}

                    type="text" name="name" placeholder="Type name here" className="input  input-accent mb-2 " />

                <br />


                <input

                    onChange={handleEmailChange}

                    type="email" name="email" placeholder="Type email here" className="input  input-accent  mb-2 " />

                <br />
                <input
                    onChange={handlePasswordChange}

                    type="password" name="password" placeholder="Type password here" className="input  input-accent  mb-2 " required />

                <br />


                <input type="submit" value="submit" className="btn bg-emerald-300" />

                {
                    error && <p>{error}</p>

                }

            </form>

        </div>
    );
};

export default StatefullForm;