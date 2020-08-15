import React from "react";
function Entry(emojie) {
  return (
    <div className="term" key={emojie.id}>
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {emojie.emoji}
        </span>
        <span>{emojie.name}</span>
      </dt>
      <dd>{emojie.meaning}</dd>
    </div>
  );
}

export default Entry;
