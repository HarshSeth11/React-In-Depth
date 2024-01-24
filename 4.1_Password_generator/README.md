# ------------------------------------------ useCallback ------------------------------------------------------------

- In the example I provided earlier, there is no child component. The `Counter` component is a simple example that demonstrates how to use **useCallback** to memoize a function definition between re-renders. 

However, in a more complex application, you might have a parent component that renders multiple child components. In that case, you can use **useCallback** to memoize a function that is passed down to the child components as a prop. This can help prevent unnecessary re-renders of the child components.

For example, let's say you have a parent component called `App` that renders two child components called `Child1` and `Child2`. You want to pass a function called `handleClick` down to both child components as a prop. You can use **useCallback** to memoize the `handleClick` function so that it only changes when its dependencies change:

```javascript
import React, { useState, useCallback } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <Child1 handleClick={handleClick} />
      <Child2 handleClick={handleClick} />
    </div>
  );
}
```

In this example, we have a parent component called `App` that has a state variable called `count`. We also have a function called `handleClick` that increases the count by 1. 

We pass the `handleClick` function down to both child components as a prop. By using **useCallback**, we can memoize the `handleClick` function so that it only changes when the `count` state changes. This way, we can avoid unnecessary re-renders of the child components.



# --------------------------------------------- useEffect -----------------------------------------------------------

In React, `useEffect` is a hook that allows you to perform side effects in your functional components. Side effects can include data fetching, subscriptions, manual DOM manipulations, and more. `useEffect` is used to manage these side effects in a way that aligns with React's component lifecycle.

The basic syntax of `useEffect` looks like this:

```jsx
useEffect(() => {
  // Code to run as the side effect
  // This function will be executed after the component renders

  // You can return a cleanup function if needed
  return () => {
    // Cleanup code (optional)
  };
}, [/* dependency array */]);
```

Here's a breakdown of the key concepts related to `useEffect`:

1. **Effect Function:** The first argument to `useEffect` is a function that contains the code for your side effect. This function will be executed after the component renders.

2. **Dependency Array:** The second argument to `useEffect` is an optional array of dependencies. If any of the dependencies change between renders, the effect function will be re-executed. If the dependency array is omitted, the effect runs after every render.

3. **Cleanup Function:** If your effect involves any clean-up logic, such as canceling subscriptions or clearing intervals, you can return a function from the effect. This function will be executed when the component unmounts or when the dependencies change and the effect is re-executed.

Here are a few common use cases for `useEffect`:

- **Data Fetching:** You can use `useEffect` to fetch data from an API and update the component's state.

  ```jsx
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://api.example.com/data');
      const data = await result.json();
      setData(data);
    };

    fetchData();
  }, []); // Empty dependency array means it runs once after the initial render
  ```

- **Subscriptions:** If your component needs to subscribe to external events (e.g., WebSocket events), `useEffect` is used to manage the subscription.

  ```jsx
  useEffect(() => {
    const socket = new WebSocket('wss://example.com/socket');

    // Event handler
    const handleSocketMessage = (event) => {
      // Handle incoming messages
    };

    // Subscribe
    socket.addEventListener('message', handleSocketMessage);

    // Cleanup function
    return () => {
      // Unsubscribe when the component unmounts or when dependencies change
      socket.removeEventListener('message', handleSocketMessage);
    };
  }, []); // Empty dependency array means it runs once after the initial render
  ```

Remember that using `useEffect` without a dependency array or with an empty dependency array means it will run once after the initial render. If you have dependencies, the effect will run whenever those dependencies change.

Additionally, if you omit the cleanup function and the effect function returns a promise, React will wait for the promise to resolve before considering the effect as "cleaned up." This behavior can be useful for scenarios like asynchronous clean-up logic.

1. useEffect with no dependencies: This hook runs on every render of the component. It is useful for effects that don’t depend on any state or props. For example, you can use this hook to log something to the console every time the component renders.

2. useEffect with an empty dependency array: This hook runs only once when the component mounts. It is useful for effects that only need to run once, such as fetching data from an API.

3. useEffect with a dependency array: This hook runs whenever one of the dependencies changes. It is useful for effects that depend on state or props. For example, you can use this hook to update the title of the page whenever the count state changes.





# ------------------------------- useRef -----------------------------------------------------------


In React, the `useRef` hook is used to create mutable objects that persist across renders without causing the component to re-render when the reference changes. It provides a way to access and interact with a DOM element or to persist values between renders without triggering a re-render.

Here are the key aspects of the `useRef` hook:

1. **Creating a Ref:**
   You can create a ref using the `useRef` function:

   ```jsx
   import { useRef } from 'react';

   const myRef = useRef(initialValue);
   ```

   The `initialValue` is an optional argument that you can use to set the initial value of the ref. Commonly, refs are initialized without an initial value.

2. **Accessing the Ref Object:**
   The `useRef` hook returns a mutable object with a `current` property. This `current` property holds the current value of the ref.

   ```jsx
   console.log(myRef.current);
   ```

   You can read and update the `current` property to access or modify the value held by the ref.

3. **Use Cases:**
   - **Accessing DOM Elements:** You can use `useRef` to get a reference to a DOM element and interact with it imperatively.

     ```jsx
     const myInputRef = useRef(null);

     useEffect(() => {
       myInputRef.current.focus(); // Focus on the input element
     }, []);
     ```

   - **Storing Mutable Values:** You can use `useRef` to store values that don't trigger a re-render when changed.

     ```jsx
     const counterRef = useRef(0);

     useEffect(() => {
       counterRef.current += 1; // Mutable value that doesn't trigger re-render
     }, []);
     ```

   - **Persisting Values Across Renders:**
     Values stored in `useRef` persist across renders and won't cause the component to re-render when the `current` property is modified.

4. **Avoiding Re-renders:**
   Unlike state variables, changes to the `current` property of a ref do not trigger a re-render. This makes `useRef` suitable for mutable values that shouldn't affect the rendering of the component.

   ```jsx
   const MyComponent = () => {
     const myRef = useRef(0);

     const handleClick = () => {
       myRef.current += 1; // This won't trigger a re-render
       console.log(myRef.current);
     };

     return (
       <button onClick={handleClick}>Increment</button>
     );
   };
   ```

Remember that the `useRef` hook is not intended for triggering re-renders based on its changes. If you need to trigger a re-render when a value changes, consider using the `useState` hook instead.