import { useState } from "react";

import css from "./App.module.css";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Balance from "./components/Balance/Balance";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import { useSelector } from "react-redux";

function App() {
  const lang = useSelector((state) => state.locale.lang);
  return (
    <>
      <div className={css.wrapper}>
        <h1 style={{ textDecoration: "underline" }}>
          State management with Redux
        </h1>
        <hr />
        <p style={{ fontSize: "30px" }}>
          configureStore(&#123; reducer: rootReducer, &#125;)/ <br />
          &lt;Provider store=&#123;store&#125;&gt;/ <br />
          createAction/useSelector/useDispatch
        </p>
        <hr />

        <NoteForm />
        <NoteList />

        <hr />
        <Balance />

        <hr />
        <LangSwitcher />
        <p>Current lang: {lang}</p>
      </div>
    </>
  );
}

export default App;
