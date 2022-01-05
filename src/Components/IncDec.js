import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';



// import {InputGroup ,Button,Input} from  'reactstrap'
// onclick app start
// preloader


function IncDec (){
    return (
        <>
            

            <div className="input-group mb-3 d-flex justify-center text-center">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  <input type="text" className="text-center form-control"  placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
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