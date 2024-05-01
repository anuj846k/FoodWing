## Notes of React.js [most important notes]


# React Hooks 

(Normal Js utility functions)
-useState() 80% will be used->Superpowerful state variable change in react
-useEffect() 20% will be used

## React virtual Dom concept or Reconciliation

Whenever state or props is changed using hooks like useState and useEffect, react creates a new virtual DOM and then compares it with the old DOM ,it sees if there is any difference btw each of them ,if yes it Updates the Real DOM.
TO be more specific:-
If differences are found (for example, different attributes, different order of elements, or different content), React will update only those parts on the real DOM, rather than re-rendering the entire DOM. This selective updating makes React applications very performance efficient and faster.



## useEffect() important topic
    - useEffect() hook has two arguments one is callback function and other is empty dependencies array which means If you pass an empty array ([]), the effect will only run once after the first render.
    - If there will be no dependencies array the api will be called again and again,This is because by default, effects run after every completed render.

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



## 2 types of Routing in web application 

- Client Side Routing
- Server Side Routing

    ## Client Side Routing 
        - Provides a smoother user experience by avoiding full page reloads. 
        - We can use React Router Dom from npm for client side routing.
        - Dynamic content updates using JavaScript.
    
    ## Server Side Routing
        - Full page reloads occur when the URL changes. This makes website slower
        - Server determines which content to send based on the URL. [Nodejs is used for that remember making ```app.get('/about', (req, res) => {
        res.send('Welcome to about us page');
        }); ```]

## Q: What is `SPA`?

A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.


## React Component Lifecycle and API Calls
In React, when dealing with components that require data from an external source such as an API, it's important to understand the lifecycle and the sequence of events to ensure a smooth user experience. `Here's a breakdown of the typical sequence`:

`Load `: When a React component is loaded, it initiates the rendering process.
`Render`: The component renders based on its initial state and props. This initial render might not have any dynamic data.
`API Call`: After the initial render, if your component needs data from an external source (like an API), you make the API call. This is typically done in lifecycle methods like componentDidMount. This method is called once after the initial render, ensuring that the component is fully initialized and mounted in the DOM.
`Render Again with Data`: Once the data is fetched from the API, the component's state or props are updated with this new data. This triggers a re-render of the component, but this time with the dynamic data included. The UI updates to reflect the fetched data.
## Why Render Before API Call?
The reason we follow the sequence of `load -> render -> API call -> render` is primarily due to the asynchronous nature of JavaScript and the React lifecycle. Making API calls is often asynchronous, so if we were to make the API call before rendering, the UI would freeze or display incomplete data until the API call completes. By rendering first and then making the API call, we ensure that the initial UI is displayed quickly, providing a better user experience. Once the data is fetched, we update the UI with the complete information.

## Benefits of This Approach
`Improved User Experience`: Displaying the initial UI quickly and then updating it with fetched data provides a smoother experience for the user.
`Separation of Concerns`: Separating rendering from data-fetching logic makes the code easier to understand, maintain, and debug.
`Controlled Rendering`: Rendering before making the API call gives better control over the UI, preventing freezing or incomplete data display.

By following this sequence, React components can efficiently handle data fetching from APIs while maintaining a `responsive and user-friendly interface`.