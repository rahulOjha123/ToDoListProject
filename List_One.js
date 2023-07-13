import { Filter } from "@mui/icons-material";
import React, { useState } from "react";

const List_Two = () => {
  const [item, setItem] = useState();
  const [items, setItems] = useState([]);

  const input = (event) => {
    setItem(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
   setItems([...items, item])
    
    
    setItem("");
    
  };
  
   
  const removeItems=(a)=>{
    let finalitems=items.filter((curEle,index)=>{
      return index !==a;
    })
    setItems(finalitems)
  }
  return (
    <div className="container">
      <div className="row justify-contant-center align-item-center main-row">
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col p-2">
              <h4 className="text-center ">Todo App Using React Js</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={item}
                  placeholder="Type here"
                  onChange={input}
                />
              </div>
              <button
                type="submit"
                className="btn btn-danger mb-2 ml-2  col-2 "
              >
                Add Item
              </button>
            </div>
          </form>
          <div className="container">
            <div className="row">
              {items.map((value,index) => {
                return (
                  <>
                    <div className="col-6 my-2"style={{backgroundColor:"ButtonShadow"}}>{value}</div>
                    <div className="col-6 my-2">
                      <button onClick={()=>removeItems(index)}>*</button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List_Two;
