import React, { useState} from "react"
import Pollapi from "./api/Pollapi"

const Input = () => {
  const [title, setTitle] = useState("")
   const [option, setOption] = useState("{}")

const handleSubmit =  async (e) => {
   e.preventDefault()
   try {
     const response = await  Pollapi.post("/",{ 
        title,
        option
     })   
     console.log(response)
   } catch (err) {

   }
}

return ( 
  <div className="column">
      <div classname="blue-column">

      <form className="form-style-6">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={option}
          onChange={e => setOption(e.target.value)}
          placeholder="Option"
        />
        <button onClick={handleSubmit} type="submit" >
         Mf
        </button>
      </form>
    </div>
  </div>
  )
}

export default Input
