import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import IncDec from './IncDec';


// import {InputGroup ,Button,Input} from  'reactstrap'
// onclick app start
// preloader
//

// const [show,setShow]=useState(false)


function Counter (){
    return (
        <>
     <div className=" d-flex w- card   bg-dark text-light ">
  <div className="card-header">
  </div>
  <div className="card-body">
    <h2 className="card-title">
        Counter Application With Redux</h2>
    <p className="card-text">
        INCREMENT AND DECREMENT</p>
    <a href="#" className="btn btn-primary"> <h3>START APP</h3></a>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>
<IncDec/>
        </>
    )
}
export default Counter;