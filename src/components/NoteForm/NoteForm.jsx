import { useDispatch, useSelector } from "react-redux";
import { changeNotes } from "../../redux/notesSlice";

export default function NoteForm() {
  const value = useSelector((state) => state.notes.item);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(changeNotes(event.target.elements.text.value));
    event.target.reset();
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <input name="text" type="text" />
      <button>submit</button>
    </form>
  );
}
