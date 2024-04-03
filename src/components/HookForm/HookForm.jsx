import useInputState from "../../hooks/useinputstate";

const HookForm = () => {

    const [name,handleNameChange]= useInputState('Rojoni1');


    const handleSubmit = e =>{
        console.log('form Data ', name)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name=""/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
            
        </div>
    );
};

export default HookForm;