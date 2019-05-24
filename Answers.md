1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map(), .filter(), .concat() and we use Object.assign() to create new objects and extends properties

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    action are like arguments that we pass in to our reducers and is where we code how we want to handle data a certain way depending on the type of action that is happening/being requested. Reducers are pure functions that take in the current state and the our actions as arguments and returns a new object depending on our action type. store contains our state for our application

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    application state is never mutate is just a clone from the original object and component state is not accessible from other components. When we want to have access to the state from a different component is when we would want to use application state. 

1.  What is middleware?

    is a function to intercept a process and run a function at the intercept point usually to perform asynchronous operation.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk allows us to make the reducer synchronous flow to a asynchronous flow and we can make API calls from our action creators. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect()
