import  {inc, dec, rnd, rst} from '../actions'
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return(
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary me-1">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary me-1">INC</button>
            <button onClick={() => dispatch(rnd())} className="btn btn-primary me-1">RND</button>
            <button onClick={() => dispatch(rst())} className="btn btn-primary me-1">RST</button>
      </div>
    )
}

// const mapStateToProps = (state) => {
//     return{
//         counter: state.value
//     }
// }

// export default connect(mapStateToProps, actions)(Counter);
export default Counter;