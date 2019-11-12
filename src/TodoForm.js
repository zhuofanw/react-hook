import React ,{useState}from 'react';

const useInputValue =  (initialValue) => {
    const [value,setValue] = useState(initialValue);

    return{
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue('')
    }
}

export default ({onSubmit}) => {
    const text = useInputValue("");
    return(
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            text.resetValue();
        }}>

            <input type="text" {...text}/>
        </form>

);
}