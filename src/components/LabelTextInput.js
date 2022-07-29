export default function LabelTextInput({ name, value, setValue, inputType }) {
    return (
        <div className="Form-InputWrapper">
            <label htmlFor={name}>{name}</label> 
            <input 
                name={name} 
                type={inputType || "text"} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            /> 
        </div> 
    ); 
} 