import React, { useState } from "react";
import form from "../ToDoList/form.css";

const FormFullProject = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  const [users, setUsers] = useState([]);
  const [editclick,setEditClick]=useState(false)
  const [editindex,setEditIndex]=useState("");
  const inputss = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    if(editclick){

      const temptabdata=users;
      Object.assign(temptabdata[editindex],input)
      setInput(...temptabdata)
      setEditClick(false)
      setInput({name: "",email: "",});

    }else{
      setUsers([...users, input]);
      setInput({name: "",email: "",});
    }
  };


  const deleteList = (a) => {
    const element = users.filter((eleItem, index) => {
      return index !== a;
    });
    setUsers(element);
  };
  const editData = (index) => {
    const data = users[index];
    setInput({
      name: data.name,
      email: data.email,
    });
    setEditClick(true)
    setEditIndex(index)
    
  };

  return (
    <>
      <div className="main">
        <div className="form_div">
          <form onSubmit={formsubmit}>
            <div className="login">
              <lable>Name</lable>
              <br></br>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={inputss}
                placeholder="name"
              />
            </div>
            <div className="login">
              <lable>Email</lable>
              <br></br>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={inputss}
                placeholder="email"
              />
            </div>
            <button type="submit" className="btn btn-danger">
            {  editclick ? "Update":"Add" }
            </button>
          </form>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((val, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{index}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteList(index)}
                        >
                          Delete
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={() => editData(index)}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default FormFullProject;
