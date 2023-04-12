import notesStore from "../stores/notesStore";

export default function Note({ note }) {
  const store = notesStore((store) => {
    return { deleteNote: store.deleteNote, toggleUpdate: store.toggleUpdate };
  });

  return (
    <div style={{}}>

   
    <div key={note._id} style={{border:"2px solid #fa7a6c","border-radius":"9px","inline-size": "max-content", "padding-bottom":"12px","margin-top": "20px"}}>

      <h3>Title : {note.title}</h3>
      <h3>Description : {note.body}</h3>
      <button style={{color: "blue", margin:"5px",border:"2px solid black",cursor:"pointer"}} onClick={() => store.deleteNote(note._id)}>Delete note</button>
      <button style={{color: "blue",border:"2px solid black",margin:"5px",cursor:"pointer"}} onClick={() => store.toggleUpdate(note)}>Update note</button>
    </div>
    </div>
  );
}
