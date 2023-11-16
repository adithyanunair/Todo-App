
import './App.css';
import { useState } from 'react';
import deleteIcon from "./delete-1487-svgrepo-com.svg" 
import editIcon from "./pencil-svgrepo-com.svg"

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [uid, setUid] = useState();
  const [update, setUpdate] = useState(false);


  const handleInput = (e)=>{
    setInput(e.target.value)
  }


  const handleTask =()=>{
  setList( [...list, input])
  setInput("")
  }


  const handleUpdate =()=>{
    list.splice( uid,1, input);
    // setList( [...list, input])
    setInput("")
    setUpdate(false)
    }



  const handleDelete =(i)=>{
    const filterList = list.filter((elm)=> elm !== list[i])
    console.log("filterList", filterList);
    setList(filterList)
    }


    
    const handleEdit =(i)=>{
      const filterList = list.filter((elm)=> elm === list[i])
      setInput(filterList[0])
      setUid(i)
      setUpdate(true)
    
      }
  

  return (
    <div className="App">
     <h2>todo app</h2>
     <div className="container">
      <div className="input-box">
        <input type="text" value={input} onChange={(e)=>handleInput(e)}  placeholder='Enter task' /> {update ? <button onClick={handleUpdate}>update</button>: <button onClick={handleTask}>add task</button> }
      </div>
      <div className="list">
        <ul>
         {list.map((item, i)=> <li key={i} >{item} <img src={deleteIcon} className='dlt-icon' alt="delete"  onClick={()=>handleDelete(i)} /> <img src={editIcon} className='edit-icon' alt="delete"  onClick={()=>handleEdit(i)} /> </li>)}
      
        </ul>
      </div>
     </div>
    
    </div>
  );
}

export default App;
