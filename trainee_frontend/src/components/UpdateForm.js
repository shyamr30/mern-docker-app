import notesStore from "../stores/notesStore";

export default function UpdateForm() {
  const store = notesStore();

  if (!store.updateForm._id) return <></>;

  return (
    <div>
      <h2>Update note</h2>
      <form onSubmit={store.updateNote}>
        <input
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.title}
          name="title"
        />
        <br>
        </br>
        <br>
        </br>
        <textarea
          onChange={store.handleUpdateFieldChange}
          value={store.updateForm.body}
          name="body"
        />
        <br>
        </br>
        <br>
        </br>
        <button type="submit">Update note</button>
      </form>
    </div>
  );
}
