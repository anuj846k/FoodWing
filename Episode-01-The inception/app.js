const parent=React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:'child'},[
        React.createElement("div",{},"i am h1 tag"),
        React.createElement("div",{},"i am h2 tag"),
    ]),
    React.createElement("div",{id:'child2'},[
        React.createElement("div",{},"i am h1 tag"),
        React.createElement("div",{},"i am h2 tag"),
    ]),
])


//thats where the jsx comes into the picture
// and we will not use React.createElement() method again


console.log(parent);



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);//render appends this in the div root in the index.html file