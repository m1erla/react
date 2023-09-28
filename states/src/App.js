
import './App.css';
import {useEffect, useState} from 'react';
import Counter from './components/Counter';

// function App() {
//  const [name, setName] = useState("Emma")
//  const [age, setAge] = useState(32)
//  const [friends, setFriends] = useState(["Furkan Karakus","Tom Hardy" ])
//  const [address, setAddress] = useState({title: 'London', zip: 343432 })
//  return(
//    <div>Hello {name}
//    <h1>{age}</h1>
//    <button onClick={() => setName('Emily')}>Change name</button>
//    <button onClick={() => setAge(24)}>Change age</button>
//      <hr />

//      <br />

//   <h2>Friends</h2>
  
//   {
//    friends.map((friend, index) => (
//     <div key={index}>{friend}</div>
//    ))}

//   <br />
//      <button onClick={() => setFriends([...friends, "Ryan Gosling"])}>Add new friend</button>
   
//      <hr />
//      <br />
     
//     <h2>Address</h2>
//     <div>{address.title} {address.zip}</div>

//     <br />

//     <button onClick={() => setAddress({...address, title: 'New York'})}>Change Address</button>
   
//    </div>
//  )
  
// }
function App (){
  // const [number, setNumber] = useState(0)
  // const [name, setName] = useState('')
  // useEffect(() => {
  //   console.log('The component mount has been updated');
  // }, [])
  // useEffect(() => {
  //   console.log('The state number has been updated');
  // }, [number])

  // useEffect(() =>{
  //   console.log('The state name has been changed');
  // }, [name])
  
 
  // return(
   
  //  <div>
  //     <h1>{number}</h1>
  //     <button onClick={() => setNumber(number + 1)}>Change</button>
  //     <br />
  //     <hr /> 
   
  //     <h1>{name}</h1>
  //     <button onClick={() => setName("Emily Jean Stone")}>Change</button>
   
  //  </div>
  // )

  const[isVisible, setIsVisible] = useState(true)

  return(
    <div className='App'> 
    {isVisible &&  <Counter  />}

    <button onClick={() => setIsVisible(!isVisible)}>Toggle Visible</button>
    </div>
  )
}






export default App;
