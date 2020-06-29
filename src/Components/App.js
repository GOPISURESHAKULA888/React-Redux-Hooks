import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, Decrement,Login } from '../Actions';
import { Button } from 'antd';


const App = () => {
  const counter = useSelector(state => state.counterdata)
  const islogged = useSelector(state => state.Loggeddata)
  const dispatch=useDispatch()
  return (  
    <div style={{position:'absolute',top:"50%",left:"40%"}}>
      
      <div>
      <Button onClick={()=>dispatch(increment(5))} >+</Button>
      <span style={{color:'green',fontSize:30,margin:'0px 20px'}}>Count:&nbsp;&nbsp;{counter}</span>
      <Button onClick={()=>dispatch(Decrement())} >-</Button><br/><br/>
      </div>
      <Button type="primary"  style={{margin:"0px 20px"}} onClick={()=>dispatch(Login())} danger>please click to login in </Button><br/><br/>
      {
        islogged?<h2 style={{color:'skyblue'}}> Hi your login in </h2>:''
      }
    </div>
  );
}
 
export default App;