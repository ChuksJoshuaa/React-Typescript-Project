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
    name: "Jane Oma",
    age: 27,
    url: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1647635381/media/pic6_wzlbhc.jpg",
    note: "She is my favorite person"
  },
]

const getLocalStorage = () => {
    let people = localStorage.getItem('people');
    
  if (typeof people === "string") {
    return (people = JSON.parse(people))
  } else {
    return [];
  }
};

console.log(getLocalStorage())



function App() {

  const [people, setPeople] = useState<IState["people"]>(getLocalStorage())

  useEffect(() => {
      localStorage.setItem('people', JSON.stringify(people));
}, [people])



  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontSize: "1.5em", color: "crimson"}}>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}  />
    </div>
  );
}

export default App;
