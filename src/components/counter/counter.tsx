import { Button } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { COUNTER_PAGE, USER_PAGE } from '../../assets/constant';


/**
 * @description Counter component.
 * Component used for Increment Count and Reset count functionality
*/
const Counter: React.FC = () =>{
  const [counter, setCounter]= React.useState<number>(0)
  return(
    <div>
      <div>
        <Link to= {USER_PAGE}>User Page</Link>
        <Link to= {COUNTER_PAGE}>Counter Page</Link>
      </div>
      <div className ='Counter'>
        <Button size="small" variant="contained" color="primary" onClick={()=>{
          setCounter(0)
        }}>
        Reset
        </Button>
        <span className='counter-span'>{counter}</span>
        <Button size="small" variant="contained" color="primary"  onClick={()=>{
          setCounter(prevCounter => prevCounter +1)
        }}>
        Increment Counter
        </Button>
      </div>
    </div>
  )
}

export default Counter;