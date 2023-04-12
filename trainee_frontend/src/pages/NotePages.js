import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import notesStore from "../stores/notesStore";


export default function NotePages() {
    const store = notesStore();

  // Use effect
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div>
     <Notes />
    <UpdateForm />
    <CreateForm />
    </div>
  )
}
