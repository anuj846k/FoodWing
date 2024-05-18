## Notes of React.js [most important notes]🎯


# React Hooks 

(Normal Js utility functions)
-useState() 80% will be used->Superpowerful state variable change in react
-useEffect() 20% will be used

## 🔴React virtual Dom concept or Reconciliation

Whenever state or props is changed using hooks like useState and useEffect, react creates a new virtual DOM and then compares it with the old DOM ,it sees if there is any difference btw each of them ,if yes it Updates the Real DOM.
TO be more specific:-
If differences are found (for example, different attributes, different order of elements, or different content), React will update only those parts on the real DOM, rather than re-rendering the entire DOM. This selective updating makes React applications very performance efficient and faster.



## 🔴useEffect() important topic
    
    useEffect() hook has two arguments one is callback function and other is empty dependencies array which means If you pass an empty array ([]), the effect will only run once after the first render.
    If there will be no dependencies array the api will be called again and again,This is because by default, effects run after every completed render.
    

## Q: How will `useEffect` behave if we `don't add` a `dependency array`?

A: Syntax of `useEffect` is:

```
useEffect(() => {}, []);
```

Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.

```
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```

Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.

```
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```

Case 3 : When the `dependency array contains a condition`, the callback function will be executed `one time` during the initial render of the component and also rerender if there is a `change in the condition`.

```
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```





## 🔴2 types of Routing in web application 

- Client Side Routing
- Server Side Routing

    ## ✅Client Side Routing 
        - Provides a smoother user experience by avoiding full page reloads. 
        - We can use React Router Dom from npm for client side routing.
        - Dynamic content updates using JavaScript.
    
    ## ✅Server Side Routing
        - Full page reloads occur when the URL changes. This makes website slower
        - Server determines which content to send based on the URL. [Nodejs is used for that remember making ```app.get('/about', (req, res) => {
        res.send('Welcome to about us page');
        }); ```]

## Q: What is `SPA`?

A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.


## 🔴React Component Lifecycle and API Calls

In React, when dealing with components that require data from an external source such as an API, it's important to understand the lifecycle and the sequence of events to ensure a smooth user experience. Here's a breakdown of the typical sequence:

- **Load**: When a React component is loaded, it initiates the rendering process.
- **Render**: The component renders based on its initial state and props. This initial render might not have any dynamic data.
- **API Call**: After the initial render, if your component needs data from an external source (like an API), you make the API call. This is typically done in lifecycle methods like `componentDidMount`. This method is called once after the initial render, ensuring that the component is fully initialized and mounted in the DOM.
- **Render Again with Data**: Once the data is fetched from the API, the component's state or props are updated with this new data. This triggers a re-render of the component, but this time with the dynamic data included. The UI updates to reflect the fetched data.

## Why Render Before API Call?

The reason we follow the sequence of `load -> render -> API call -> render` is primarily due to the asynchronous nature of JavaScript and the React lifecycle. Making API calls is often asynchronous, so if we were to make the API call before rendering, the UI would freeze or display incomplete data until the API call completes. By rendering first and then making the API call, we ensure that the initial UI is displayed quickly, providing a better user experience. Once the data is fetched, we update the UI with the complete information.

## Benefits of This Approach🤔

- **Improved User Experience**: Displaying the initial UI quickly and then updating it with fetched data provides a smoother experience for the user.

- **Separation of Concerns**: Separating rendering from data-fetching logic makes the code easier to understand, maintain, and debug.

- **Controlled Rendering**: Rendering before making the API call gives better control over the UI, preventing freezing or incomplete data display.

By following this sequence, React components can efficiently handle data fetching from APIs while maintaining a responsive and user-friendly interface.




# Optimising our APP 🚀

## Q: When and why do we need `lazy()`?
A : `lazy()` is a function provided by React for loading components lazily, meaning they're loaded only when they're actually rendered.
By using `lazy()`, you can reduce the size of the initial JavaScript payload that needs to be fetched and parsed by the browser, speeding up the initial load time of your app.
It's particularly useful for components that are not always needed, such as modals or dialog boxes, or for large components that can slow down the initial load time of your app.
    Example usage:
        - const About=lazy(()=>import ("./src/components/About"))
    In this example About will onle be loaded when it's rendered for the first time.    
## Q: What is Suspense ??
A: `<Suspense>` lets you display a fallback until its children have finished loading
        - <Suspense fallback={<Loading />}>
        <SomeComponent />
      </Suspense>


### Q: Why we got this `error`: A component was suspended while responding to `synchronous input`. This will cause the `UI` to be replaced with a `loading indicator`. To `fix this`, `updates that suspend` should be wrapped with `start transition`? How does `suspense fix` this error?
A: Wrapping a component inside Suspense is indeed necessary when using lazy-loaded components or when a component might suspend.

## Q:`Advantages and Disadvantages` of using this `code splitting pattern`?
A: 
- **Advantages**
    - `Improved Performance` You can significantly reduce the initial load time of your app. This is especially beneficial for users with slow internet connections.

    - `Code splitting` encourages you to break your app into smaller, more manageable components, which can make your codebase easier to understand and maintain.

- **Disadvantages**
    - `Complexity` :Implementing code splitting can add complexity to your codebase. You need to decide where to split your code, handle loading states, and manage potentially more network requests.

    - `Dependency` on Network Speed ,If a user has a slow internet connection,they might experience delays when loading your codebase.

## Q: When do we and why do we need suspense?    
A: We need to use React's `<Suspense>` when we want to wait for some code to load and display a fallback UI while we’re waiting. This is often used with lazy() for code splitting.





# Data is the new oil 🪙

## Controlled and uncontrolled data 
- **Uncontrolled Components:**
    - In uncontrolled components, the parent doesn't directly manage or control the state of the child components. Instead, the child components manage their own state internally.

- **Controlled Components:**
    - Controlled components allow the parent to manage and control the state of the child components. The parent passes down the state to the children as props, and any changes to the state are managed by the parent component.

## Q: What is prop drilling?

A:`Props drilling` is a term used in the React community to refer to the process of passing data from one part of the React Component tree to another by going through other parts that do not need the data, but merely pass it along

## Q: What is lifting the state up?

A:Sometimes,you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as `lifting state up`

`Example of lifting state up`:
Accordian example :Let’s say you want to change it so that only one panel(accordian are like 2 panels are there inside accordian) is expanded at any given time.
    
- **Steps for lifting state up to parent's component**
    - Remove state from the child components.
    - Pass hardcoded data from the common parent.
    - Add state to the common parent and pass it down together with the event handlers.


This will allow the `Accordion` component to coordinate both `Panels` and only expand one at a time.

##  Q: What are Context Provider and Context Consumer?

A:  `Context API` consists of two main components: the `Context Provider` and the `Context Consumer`. The provider is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the consumer is used to access the context and its data from within a component.


## Q: If you dont pass a value to the provider does it take the default values?

A: The Context.Provider component accepts a value prop which will be available to all child components that consume the context. If you don't pass a value prop to the Context.Provider, it will use the default value that was passed to React.createContext() when the context was created.


---------------------------------------------------------------------------------



# 🟪 Redux Toolkit

    - Install @reduxjs/toolkit and react-redux
    - Build our own store 
    - Connect or subscribe our store to app.
    - Create a slice(cartSlice)
    - dispatch(action)
    - Selector for reading data

## Q:Advantages of using Redux Toolkit over Redux?

A: **Simplified Redux Setup**:reduces boilerplate code and makes Redux development faster.Redux Toolkit provides utilities like `createSlice`,`createReducer`, and `configureStore`.

**Immutability with Immer**:Redux Toolkit integrates Immer under the hood, allowing you to write reducers that appear to `mutate` state directly, but are actually creating new `immutable` states behind the scenes.This simplifies state management.

**Concise Code**: With `Redux Toolkit's` createSlice function, you can define reducers and action creators in a single file, reducing the need for separate action type constants and action creator functions. This leads to cleaner and more concise code.




## Q: Explain Dispatcher?
A:You dispatch actions using the dispatch function provided by Redux. This function is typically accessed via the Redux store. When you dispatch an action, Redux Toolkit ensures that it flows through the middleware (if any) and reaches the appropriate reducers.


## Q: Explain Reducer?

A:A Reducer in Redux is a pure function responsible for determining how the application state should change in response to actions dispatched to the Redux store. It takes the current state and an action as arguments, and returns a new state object representing the updated application state.

The sum up basically is Reducer is function that the slice our store based on the action dispatched. 


## Q: Explain Slice?

A: So first we create a Redux store for example appStore.js and then inside that we import a slice which means a portion of redux store that contains both state data and logic to update the state .Slices are created by createSlice function provided by Redux Toolkit.

## Q: Explain createSlice and the configuration it takes.
A: createSlice function takes a single argument which is an object containing the configuration details like this createSlice({})
Below is an example of Slice and createSlice :
```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

```


## Q: Explain Selector.

Selector are like special tools that help you to `read` operations its like You are `Subscribing to the store`.

If you want to pick anything from store You can pick it up but after Subscribing using useSelector.

They make it easier to get just the right data for your components, so you don't have to dig through everything yourself. 



# Types of testing (developer)
- Unit Testing ✅
- Integration Testing✅
- End to End Testing -e2e training 

# Setting up testing in our App
- Install React testing library. 
- Install jest.
- Install babel dependencies.
- Configure Babel
- Create babel.config.js in root level of file.
- Configure parcel config file to disable default babel transpilation
- Jest Configuration
- Install jsdom library
- Install(npm i -D) and Include @babel/preset-react - to make JSX work in test cases 
- npm i -D @testing-library/jest-dom

## notes of testing our project
 - __ is known as Dunder in __test___ 
 - Whenever there are multiple items we use getAllByRole()


