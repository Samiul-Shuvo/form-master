import { useState } from "react";

const StatefulForm = () => {
    const [email,setEmail] = useState(null)
    const [password,setPassword] = useState(null)
    const [name,setName] = useState('Samiul')
    const [error,setError] = useState('')


    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length<6){
            setError('Password must be 6 character')
        }else{
            setError('');
        }
        console.log(email,password,name)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handleNameChange = e =>{
        setName(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)

    }
    return (
        <div>
            <form form onSubmit={handleSubmit}>
                <input value={name}
                onChange={handleNameChange}
                type="text" name=""/>
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" id=""  required/>
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;