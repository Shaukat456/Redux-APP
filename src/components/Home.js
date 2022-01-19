import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  AddAction,
  RemoveAction,
  deleteAction,
} from "../redux/action/TodoAction";


const Home = () => {
  const dispatch = useDispatch();

  const [ItemInput, setItemInput] = useState("");

  return (
    <>
      <div className="mainC">
        <h1>Add Your List</h1>

        {/* Styling later */}
        <div className="addItems">
          <input
            type="text"
            placeholder="Add Items"
            value={ItemInput}
            onChange={(event) => {
              setItemInput(event.target.value);
            }}
          />

          <button
            onClick={() => {

              // we need call Add_Action
              dispatch(AddAction(ItemInput));
            }}
          >
            
            Add
          </button>

          <button
            onClick={() => {
              // we need call Add_Action

              dispatch(deleteAction(ItemInput));
            }}
          >
            
            Delete
          </button>
       

        <button
          onClick={() => {
            // we need call Add_Action

            dispatch(RemoveAction(ItemInput));
          }}
        >
          
          Remove All
        </button>

        </div>
        </div>
      
    </>
  );
};

export default Home;
