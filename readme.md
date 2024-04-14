# React Hooks 

(Normal Js utility functions)
-useState() 80% will be used->Superpowerful state variable change in react
-useEffect() 20% will be used

## React virtual Dom concept or Reconciliation

Whenever state or props is changed using hooks like useState and useEffect, react creates a new virtual DOM and then compares it with the old DOM ,it sees if there is any difference btw each of them ,if yes it Updates the Real DOM.
TO be more specific:-
If differences are found (for example, different attributes, different order of elements, or different content), React will update only those parts on the real DOM, rather than re-rendering the entire DOM. This selective updating makes React applications very performance efficient and faster.



