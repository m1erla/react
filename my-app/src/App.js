import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import {useState, userState} from 'react';
import User from "./components/User"

// const name = "Furkan"
// const surname = "Karakus"
// const isLoggedIn = true

// const friends = [
//   {
//     id: 1,
//     name: "Furkan Karakus",
//     age: 24
//   },
//   {
//     id: 2,
//     name: "Emma Stone",
//     age: 32
//   },
  
//   {
//     id: 3,
//     name: "Tom Hardy",
//     age: 45
//   },
  
//   {
//     id: 4,
//     name: "Ryan Gosling",
//     age: 42
//   },
  


// ]
// function App(){
//   //  return React.createElement("div", null, "Hello")

//   return (
//     <>
//     <User 
//     name="Furkan" 
//     surname="Karakus" 
//     isLoggedIn={true} 
//     age={"24"}
//     friends = {friends}
//     address={
//       {
//         title: "London Manchester",
//         zip: 44
//       }
//     }
//     />

//     {/* <h1> {isLoggedIn && `My name is ${name}, and surname is ${surname} `}</h1>
    
//     {!isLoggedIn && 'You dont log in'} */}
//     {/* <h1>{isLoggedIn ? `My name is ${name} surname is ${surname}` : "You dont access to your account."} </h1> */}
    
//     </>

//   )


// }

function App(){
  const [name, setName] = useState('Emma')
  const [age, setAge] = useState(24)
  console.log(name, age)
  return(
    <div className='App'>
     <h1>Hello {name}</h1>
     <h2>{age}</h2>
     <button onClick={() => setName("Emily")}>Change Name</button>
     <button onClick={() => setAge(18)}>Change Age</button>
    </div>
  )
}



export default App
