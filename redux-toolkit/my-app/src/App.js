import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increament, testAsyncThunk } from './store/testSlice';

function App() {
  const dispatch = useDispatch();
  const {count, items} = useSelector((store) => store.test);
  console.log("Items", items)
  const clickButton = () => {
    dispatch(increament());
    dispatch(testAsyncThunk("Test"))
  }

  return (
    <div className="App">
      {count}

      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;
