import React, {useState, useEffect} from 'react';
import {List, AddToList} from "./components"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

const initialState = [
  {
    name: "Chuks Joshua",
    age: 24,
    url: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1654742567/media/DSC_1586_nud6uj.jpg",
    note: "I am the best developer in the world"
  },
  {
    name: "Jane Oma",
    age: 27,
    url: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1647635381/media/pic6_wzlbhc.jpg",
    note: "She is my lest favorite person"
  },

  {
    name: "Nkiru Nelly",
    age: 30,
    url: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1647635366/media/pic5_lbarig.jpg",
    note: "Single babe in town"
  },
  
  
]

const getLocalStorage = () => {
    let initialState = localStorage.getItem('initialState');
    
  if (typeof initialState === "string") {
    return (initialState = JSON.parse(initialState))
  } else {
    return [];
  }
};

console.log(getLocalStorage())



function App() {

  const [people, setPeople] = useState<IState["people"]>(getLocalStorage())

  useEffect(() => {
      localStorage.setItem('initialState', JSON.stringify(initialState));
}, [])



  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontSize: "1.5em", color: "crimson"}}>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}  />
    </div>
  );
}

export default App;
