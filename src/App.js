import { useSelector,useDispatch} from 'react-redux';
import { IncNum,DecNum } from './action/whattodo'

const App = () => {
    const myState=useSelector(state=>{
        console.log(state.UpdateNum)
    })
    return (

        <>
            <div className="container">
                Increment & decrement with Redux
            <div className="box">
            <input type="text"  value={myState} />
                <button> INCREMENT</button>
                <button> DECREMENT</button>
            </div>

            </div>
        </>
    )
}

export default App;