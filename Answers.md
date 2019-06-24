1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Array.concat()
Object.asign()
Array.filter()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?


`actions` in redux are the functions invoked when we interact with the user interface of the application.

`reducers` are the method called to perform updates on the redux store. `reducers` in redux should always be a pure function that has no side effect on the state, it takes the previous state as an argument and returns the new state without mutating the previous state. 

the redux `store` is like the data bank where the state of the application lives.

The `store` is known as the single source of truth because it houses the data the application uses and all interactivty on the application would dispatch an action that will call a reducer method to connect to the state to get the data it needs.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is available all over the application while Component state is only available to the housing component or it's children through props. It would be a good time to use Component state when dealing with a form that only that component needs its data. Application state should be used when more than one component needs access to the data in state.

4.  What is middleware?

A middleware in the case of redux, serves as a bridge between the store and action dispatchers.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk is a middleware that allow us do async functions with redux.

6.  Which `react-redux` method links up our `components` with our `redux store`?

`connect`
