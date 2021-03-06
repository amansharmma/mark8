import "./styles.css";
import React, { useState } from "react";
var name = "Emoji's:)";
const emojisdict = {
  "β°οΈ": "Mountain",
  "π": "Pizza",
  "πΊπ½": "Dance",
  "π": "Happy",
  "π΅": "Monkey",
  "π₯": "Fire",
  "β": "question mark",
  "π": "clap",
  "πΆ": "dog",
  "π": "santa"
};
var emojis = Object.keys(emojisdict);

export default function App() {
  var [meaning, setmeaning] = useState(" ");
  function changehandler(event) {
    var meaning = emojisdict[event.target.value];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setmeaning(meaning);
  }

  function listclick(item) {
    var meaning = emojisdict[item];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <input onChange={changehandler}></input>
      <div className="answer">{meaning}</div>
      <h2>Search from here π</h2>
      <div className="center">
        <ul>
          {emojis.map(function (item, index) {
            return (
              <li onClick={() => listclick(item)} className="inline">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
