import notesStore from "../stores/notesStore";
import React, { useState } from 'react';

export default function CreateForm() {

  const store = notesStore();
  const styles ={
    area:{
      border : '2px solid blue',
      'margin-top' : '15px',
      'margin-bottom' : '15px',
    },
    input :{
      border : '2px solid blue',
      'margin-bottom' : '15px',
    },
   
  }
  
  const buttonStyle = {
    "text-align":"center",
    margin:"auto",
    transitionDuration: '0.4s',
    backgroundColor: '#f00',
    color: '#fff',
  };

  const handleMouseEnter = () => {
    buttonStyle.backgroundColor = '#4CAF50';
  };

  const handleMouseLeave = () => {
    buttonStyle.backgroundColor = '#f00';
  };

  if (store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Create note :</h2>
      <form onSubmit={store.createNote}>
        <input  style={styles.input}
           placeholder="Note title"
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
        />
        <br>
        </br>
        <textarea  style={styles.area}
          placeholder="Note Discription"
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
        />
        <br>
        </br>
        <button
       style={buttonStyle}
     
        type="submit">Create note</button>
      </form>
    </div>
  );
}
