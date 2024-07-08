import Utils from '../utils.js';
import Notes from '../data/local/notes.js';
import NotesApi from '../data/remote/notes-api.js';

const home = () => {
  Notes.initCheck();
  const notesContainerElement = document.querySelector('#notes-container');
  const noteListElement = notesContainerElement.querySelector('note-list');
  const formElement = document.querySelector('#form-note');
  const shadowroot = noteListElement.shadowRoot;
  const loadingElement = document.querySelector('#loadingScreen');

  const showAllNotes = async () => {
    try {
      loadingElement.classList.remove('hidden');
      const res = await NotesApi.getAllnotes();
      displayNotes(res);
    } catch (error) {
      console.log(error);
    } finally {
      loadingElement.classList.add('hidden');
    }
  };

  const displayNotes = (notes) => {
    const noteItemElement = notes.map((note) => {
      const noteItemElement = document.createElement('note-item');
      noteItemElement.noteItem = note;
      return noteItemElement;
    });
    Utils.emptyElement(noteListElement);
    noteListElement.append(...noteItemElement);
  };

  // saya ingin membuat event listener submit untuk form deleteForm yang berada dalam shadowRoot dari note-item

  shadowroot.addEventListener('submit', async (event) => {
    loadingElement.classList.remove('hidden');
    event.preventDefault();
    const noteId = shadowroot.querySelector("input[name='noteId']").value;
    await NotesApi.deleteNotes(noteId);
    showAllNotes();
    loadingElement.classList.add('hidden');
  });

  formElement.addEventListener('submit', (event) => {
    loadingElement.classList.remove('hidden');
    event.preventDefault();
    const title = document.querySelector('#judul').value;
    const body = document.querySelector('#catatan').value;
    NotesApi.addNotes(title, body);
    showAllNotes();
    loadingElement.classList.add('hidden');
  });
  showAllNotes();
};
export default home;
