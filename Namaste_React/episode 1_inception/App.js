//CREATING ELEMENT USING REACT 
const heading = React.createElement(
    "h1",
    {id:"heading" , xyz: "abc"},
    "Hello world from React from app.js!!!!"
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)





//CREATING NESTED ELEMENT USING REACT 
// const parent = React.createElement(
//     "div",
//     {id : "parent"},
//     React.createElement(
//         "div",
//         {id : "child"},
//        React.createElement("h1",{},"Iam h1 tagg") 
//     )

// );
// console.log(parent)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render (parent)


//CREATING NESTED ELEMENT WITH SIBLING TAGS USING REACT 


// const parent = React.createElement(
//     "div",
//     {id : "parent"},
//     [React.createElement(
//         "div",
//         {id : "child"},
//        [React.createElement("h1",{},"Iam h1 tagg"),React.createElement("h2",{},"Iam h2 tagg")] 
//     ),
//     React.createElement(
//         "div",
//         {id : "child"},
//        [React.createElement("h1",{},"Iam h1 tagg"),React.createElement("h2",{},"Iam h2 tagg")] 
//     )
//     ]

// );
// console.log(parent)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render (parent)