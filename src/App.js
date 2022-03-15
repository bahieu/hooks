import {useCallback, useState,useContext} from 'react'
import Content from './Content'
import './App.css'
import Avatar from './useEffect-timer'
import FakeChat from './useEffect-FakeChat'
import Count from './useRef-demo'
import Increase from './reactMemo-demo'
import Product from './useMemo'
import TodoApp from './Todo'
import {ThemeProvider} from './ThemeContext'
import {ThemeContext} from './ThemeContext'




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
  
  
  const context = useContext(ThemeContext)
  
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
    
    {/* Demo useReducer
    <TodoApp/> */}

    {/* Demo useContext() */}
    
    <button onClick={context.toggleTheme}>Toggle theme</button>
    <Content />
   </div>    
   
    );

}
 
export default App;
