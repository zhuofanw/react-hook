import React, {useState} from 'react';

const App = () => {
    const [count,setCount] = useState(0)

    return(
        <div>
            <p>
                your clicked {count} times
            </p>
            <button onClick={() => setCount(count + 1)}>add 1</button>
            <button onClick={() => setCount(count - 1)}>add 1</button>
        </div>
    )
}


export default App;