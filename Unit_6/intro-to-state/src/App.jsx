import { useState } from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Counter from './components/counter/Counter';
import AddUser from './components/adduser/AddUser';

function App() {
  console.log("App running test");
  const [names, setNames] = useState([
    "Frodo", "Sam", "Pippin", "Merry"
  ]);

  const [count, setCount] = useState(0);

  console.log(names);
  const displayWelcome = () => {
    return names.map((name, index) => {
      return (
        <Welcome
          key={index}
          name={name}
          names={names} //pass full array to child node for reference
          setNames={setNames} //pass function to child node
        />
      )
    })
  }

  const createCountChangeHandler = (delta) => {
    return () => {
      setCount(count + delta)
    }
  }

  return (
    <div className="App">
      <h1>Main App: {count}</h1>
      <Counter
        count={count}
        increment={createCountChangeHandler(1)}
        decrement={createCountChangeHandler(-1)}
      />
      <AddUser names={names} setNames={setNames} />
      {
        names.length > 0 ?
          displayWelcome():
          <h1 style = {{textAlign: "Center"}}>Add A User</h1>

      }

    </div>
  );
}

export default App;