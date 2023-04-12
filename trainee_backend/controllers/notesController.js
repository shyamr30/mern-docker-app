const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  
  const notes = await Note.find();

  res.json({ notes });
};

const fetchNote = async (req, res) => {
  // Get id off the url
  const noteId = req.params.id;


  const note = await Note.findById(noteId);

  // Respond with the note
  res.json({ note });
};

const createNote = async (req, res) => {
  
  const { title, body } = req.body;

  // Create a note with it
  const note = await Note.create({
    title,
    body,
  });

 
  res.json({ note });
};

const updateNote = async (req, res) => {

  const noteId = req.params.id;

  // Get the data off the req body
  const { title, body } = req.body;

  // Find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  });

  // Find updated note
  const note = await Note.findById(noteId);

  // Respond with it
  res.json({ note });
};

const deleteNote = async (req, res) => {
  
  const noteId = req.params.id;
  // console.log(noteId)


  await Note.deleteOne({ id: noteId });

 
  res.json({ success: "Record deleted" });
};

module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};
