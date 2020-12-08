import React, {useState} from 'react';

function Counter() {
  // create a state variable for counting
  const [count, setCount] = useState(0);

    return <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>

}

export default Counter;