import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    /* So here the function calls will be sent in batches. So, react will see them as the same operation and perform it only once.
    So, the counter will increase by only 1 count.*/
    /*
    setCount(count + 1);
    console.log(count); // 0
    setCount(count + 1);
    console.log(count); // 0
    setCount(count + 1);
    console.log(count); // 0
    setCount(count + 1);
    console.log(count); // 0
    */


    /* Now here the logic will be different, it might seem like a same operation but the setCount is passed with a arrow function
    which will take the previous value of the count and than increment it unlike the previous operation.*/

    /* This ensures that each setCount call operates on the latest state, avoiding issues with batching. 
    The console.log(count) statements, however, will still print the current value of count (not the updated value), as setState is asynchronous. */

    /*
    setCount(prevCount => prevCount + 1);
    console.log(count); // 0
    setCount(prevCount => prevCount + 1);
    console.log(count); // 0
    setCount(prevCount => prevCount + 1);
    console.log(count); // 0
    setCount(prevCount => prevCount + 1);
    console.log(count); // 0
    */

    /* Note : Console log will give the same value as of count at the time of change, as the jobs are first batched and then executed later on this all happens due to performance optimization and Fibre Which is one of the algorithm of the React is responsible for this. */
  }

  const decrementCount = () => {
    count > 0 ? setCount(count - 1) : 0;
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={incrementCount}>increment</button>
      <button onClick={decrementCount}>decrement</button>
    </>
  )
}

export default App
