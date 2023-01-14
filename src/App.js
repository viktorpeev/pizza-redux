import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addTopping } from './pizzaSlice';

function App() {

  const pizza = useSelector(state => state.pizza);
  const dispatch = useDispatch();


  return (
    <>
      <h1>Pizza</h1>
      {pizza.toppings.map(topping =>
        <div key={topping}>{topping}</div>
      )}
      <button onClick={()=>dispatch(addTopping('pepperoni'))}>Add Pepperoni</button>
    </>
  );
}

export default App;
