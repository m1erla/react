import {useEffect, useState} from 'react'


// function Counter() {
//     const [counter, setCounter] = useState(0)
//     const increase = () =>{
//         setCounter(1)
//     }
    
//     const descrease = () => {
//         setCounter(counter - 1)
//     }
    


//      return (
//     <div>
//         <h1>{counter}</h1>
       
//         <button onClick={descrease}>Decrease</button>
//         <button onClick={increase}>Increase</button>
//     </div>
//   )
// }

// function Counter() {
//     const[count, setCount] = useState(0)
     
//     const Increase = () => {
//         setCount(count + 1)
//     }

//     const Descrease = () => {
//          setCount(count - 1)
//     }
//     return (
//        <>
//          <h1>{count}</h1>

//          <button onClick={() => setCount(count + 1)}>increase</button>
//          <button onClick={() => setCount(count - 1)}>decrease</button>
//        </>

//     )
// }

function Counter () {
    const[number, setNumber] = useState(0)
   
     
   
    useEffect(() =>{
        console.log('Did componend mount');
        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)
    
      
      return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        console.log('the number state updated!');
    }, [number])



    return(
      <div>
      <h1>{number}</h1>
      <br/>
 
      <button onClick={() => setNumber(number + 1)}>Click</button>

      </div>

    )
}


export default Counter