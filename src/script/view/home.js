import Utils from "../utils.js";
import Notes from "../data/local/notes.js";

const home = () => {
  Notes.initCheck();
  const notesContainerElement = document.querySelector("#notes-container");
  const noteListElement = notesContainerElement.querySelector("note-list");
  const formElement = document.querySelector("#form-note");

  const showAllNotes = () => {
    const res = Notes.getAllNotes();
    displayNotes(res);
  };

  const displayNotes = (notes) => {
    const noteItemElement = notes.map((note) => {
      const noteItemElement = document.createElement("note-item");
      noteItemElement.noteItem = note;
      return noteItemElement;
    });
    Utils.emptyElement(noteListElement);
    noteListElement.append(...noteItemElement);
  };

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#judul").value;
    const body = document.querySelector("#catatan").value;
    Notes.addNotes(title, body);
    showAllNotes();
  });
  showAllNotes();
};
export default home;
