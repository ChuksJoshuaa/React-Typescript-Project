import React from 'react'
import { IState } from "../App"


// const List = ({people}: IState) => {
const List: React.FC<IState> = ({ people }) => {

  const renderList = () => {
    return (
      people.map((person, index) => {
          return (
            <li className='List' key={index}>
                <div className="List-header">
                  <img src={person.url} alt={person.name} className="List-img" />
                  <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
          )
      })
    )
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List