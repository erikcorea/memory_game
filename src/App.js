import './App.css';
import { useState } from 'react';

const cardImages = [
  {"src": ""},
  {"src": ""},
  {"src": ""},
  {"src": ""},
  {"src": ""},
  {"src": ""}
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards 
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}
export default App;
