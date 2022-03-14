import {useCallback, useState} from 'react'
import Content from './useEffect-demo'
import Avatar from './useEffect-timer'
import FakeChat from './useEffect-FakeChat'
import Count from './useRef-demo'
import Increase from './reactMemo-demo'
import Product from './useMemo'
import Job from './useReducer-demo'
function App() {

  // Demo useState()
  /* const [counter,setCounter] = useState(1)
   const handleIncrease = () => {
    setCounter(counter+1)
   }
   const handleDecrease = () => {
     setCounter(counter-1)
  }*/
  
  const [show,setShow] = useState(false)
  const [count,setCount] = useState(0)
  
const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount +1)
  },[])
  
  return (

    // Demo useState()
     /*<div className="App" style={{padding:20, textAlign : 'center', fontSize:30}}>     
     <h1> {counter} </h1>
     <button onClick = {handleDecrease} style={{marginRight:20}}>Decrease</button>
     <button onClick = {handleIncrease}>Increase</button>
     </div>
    */
   
   <div style = {{padding:20}}>
     {/* <button onClick = {()=> setShow(!show)}>Toggle</button>
    {show&&<Count />} */}

    {/* Demo React.memo()
    <Increase onIncrease = {handleIncrease}/>
    <h1>{count}</h1>       */}   
    
    {/* Demo useMemo
     <Product/>    */}
    
    Demo useReducer
    <Job/>
   </div>  
    );
}
 
export default App;
