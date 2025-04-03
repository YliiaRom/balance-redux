import { useSelector } from "react-redux";

export default function NoteList() {
  const items = useSelector((state) => state.notes.item);
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}> {item}</li>;
      })}
    </ul>
  );
}
