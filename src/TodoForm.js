import React ,{useState}from 'react';

const useInputValue =  (initialValue) => {
    const [value,setValue] = useState(initialValue);

    return{
        value,
        onChange: e => setValue(e.target.value)
    }
}

export default () => {
    const text = useInputValue("nihao");
    // const email = useInputValue("zhuofan1108@gmail.com");
    return(
        <div>
            <form action="">
                <input type="text" {...text}/>
            </form>
            {/*<input type="text" value={value} onChange={e => setValue(e.target.value)}/>*/} //重构此行代码
            <input type="text" {...text}/>
            {/*<input type="text" {...email}/>*/}
        </div>

);
}