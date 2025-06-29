import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </>
    );
}

export default App;
