/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(`btn`).addEventlistener("click", () => {
      document.querySelector(`#the-excuse`).innerHTML = generatorexcuse();
    });
  console.log(`Hello Rigo from the console!`);
};

let generatorexcuse = () => {
  let pronoum = [`the`, `a`, `my`];
  let subjetc = [`dog`, +` cloud`, `friend`];
  let action = [`took my`, `laugh at`, `burn my`];
  let possesion = [`homework`, `toe`, `car`];
  let where = [`in my place`, `at the park`, `at the kitchen`];

  let pronoumIndex = Math.floor(Math.random() * pronoum.length);
  let subjectIndex = Math.floor(Math.random() * subjetc.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronaounIndex] +
    ` ` +
    subjetc[subjectIndex] +
    ` ` +
    action[actionIndex] +
    ` ` +
    possesion[possesionIndex] +
    ` ` +
    where[whereIndex]
  );
};
