import foodkoala from './foodkoala.svg';
import './App.css';
import Food from './Food.js';

import axios from 'axios';
import React from "react";

const baseUrl = "http://localhost:4010";

function App() {
  const [food, setFood] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseUrl}/food/xJa90Gha`).then((response) => {
      setFood(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={foodkoala} class="App-logo" alt="logo" />
        <p>
          foodkoala
        </p>
      </header>
      <main>
        {food.map((f) =>
          <Food key={f.name} name={f.name} imageUrl={f.imageUrl} price={f.price}></Food>
        )}
      </main>
    </div>
  );
}

export default App;
