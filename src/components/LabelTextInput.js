export default function LabelTextInput({ name, value, setValue, inputType }) {
    return (
        <div className="Form-InputWrapper">
            <label htmlFor={name} className="Login-Labels">{name}</label> 
            <br></br>
            <input 
                name={name} 
                type={inputType || "text"} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                autoComplete="off" 
                className="Login-Inputs" 
            /> 
        </div> 
    ); 
} 