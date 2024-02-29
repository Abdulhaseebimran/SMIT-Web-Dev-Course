import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header, Footer } from "./components";
import Card from "./components/Card";

// const name = "Abdul Haseeb";
// const foo = () => {
//   alert("Hello World");
// };

// const student = [{
//   name: "Abdul Haseeb",
//   age: 21,
//   rollNo: 123
// },
// {
//   name: "Ali",
//   age: 22,
//   rollNo: 124
// }]

// function App() {

//   return (
//     <div>
//     <img className='react-img' src={reactLogo} alt="react logo" />
//     <h1 style={{backgroundColor: "gray", border: "2px solid red"}}>HELLO WORLD</h1>
//     <ul>
//       {
//         student.map((std,idx) => <li>{std.name}</li>)
//       }
//     </ul>
//     </div>
//   )
// }

// export default App

{
  /* <button onClick={foo}>Click Me</button> */
}
// {<h1>{student.name}</h1>}

function App() {
  let arr = ["One", "Two", "Three", "Four", "Five"];
  const getData = (a) => {
    console.log("parent", a);
  }
  return (
    <>
      <div>
        {arr.map((item, idx) => (
          <Card key={idx} val={item} idx={idx} getData={getData}/>
        ))}
      </div>
    </>
  );
}

export default App;
