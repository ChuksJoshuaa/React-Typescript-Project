import React, {useState} from 'react'
import { IState as Props } from '../App'



interface IProps {
    people: Props["people"],
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const initialValue = {
    name: "",
    age: "",
    note: "",
    url: ""
}


const AddToList: React.FC<IProps> = ({setPeople, people}) => {
  
    const [input, setInput] = useState(initialValue)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!input.name || !input.age || !input.url) {
            return
        }
        
        setPeople([...people, {
            name: input.name,
            age: +input.age,
            url: input.url,
            note: input.note,   
        }])
        
        clear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )
    }
    
    const clear = () => {
        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

  return (
      <form onSubmit={handleSubmit}>
           <div className='AddToList'>
          <input
              type="text"
              placeholder='Name'
              className='AddToList-input'
              value={input.name}
              name="name"
              onChange={handleChange}
          />
          <input
              type="number"
              placeholder='Age'
              className='AddToList-input'
              value={input.age}
              name="age"
              onChange={handleChange}
          />
           <input
              type="text"
              placeholder='Image Url'
              className='AddToList-input'
              value={input.url}
              name="url"
              onChange={handleChange}
          />
           <textarea
              placeholder='Notes'
              className='AddToList-input'
              value={input.note}
              onChange={handleChange}
              name="note"
              />
              <button type='submit' className='AddToList-btn'>
                  Add to list
              </button>
    </div>
     </form>
  )
}

export default AddToList