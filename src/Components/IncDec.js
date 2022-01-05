import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';
import { useSelector, useDispatch} from 'react-redux'
import { IncNum,DecNum } from '../actions/index';

// onclick app start
// preloader

function IncDec (){
  const myState=useSelector(state => state.UpdateNumber )
  const ActionTrigger=useDispatch()
    return (
        <>
            <div className="input-group mb-3 d-flex justify-center text-center">
    <button className="btn btn-outline-secondary btn-dark" type="button" onClick={()=> ActionTrigger(DecNum() )}  >-</button>
  <input type="text" className="text-center form-control" value={myState}  placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary btn-success  " onClick={()=> ActionTrigger(IncNum() )} type="button"  >+</button>
  </div>
</div>

        </>
    )
}
export default IncDec;


// text center
// add subtract function
// use dispatch / use selector
// Centter