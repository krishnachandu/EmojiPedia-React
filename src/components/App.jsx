import React from "react";
import Entry from "./Entry";
import emojies from "../emojipedia";
function createEntry(props) {
  return (
    <Entry
      key={props.id}
      id={props.id}
      name={props.name}
      emoji={props.emoji}
      meaning={props.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojies.map(createEntry)}</dl>
    </div>
  );
}

export default App;
