import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import Card from "./lib/card";



const App = () => {
  const [cards, setCards] = useState<Card[]>([]);




  return (
    <div className="App">
      <CardView></CardView>
    </div>
  )
};

export default App;
