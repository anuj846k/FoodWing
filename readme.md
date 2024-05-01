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
 


## 2 types of Routing in web application 

- Client Side Routing
- Server Side Routing

    ## Client Side Routing 
        - Provides a smoother user experience by avoiding full page reloads. 
        - We can use React Router Dom from npm for client side routing.
        - Dynamic content updates using JavaScript.
    
    ## Server Side Routing
        - Full page reloads occur when the URL changes. This makes website slower
        - Server determines which content to send based on the URL.
        - Server determines which content to send based on the URL. [Nodejs is used for that remember making ```app.get('/about', (req, res) => {
        res.send('Welcome to about us page');
        }); ```]

