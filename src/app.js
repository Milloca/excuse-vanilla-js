/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(`#the-excuse`).innerHTML = generatorexcuse();
  console.log(`Hello Rigo from the console!`);
};

let generatorexcuse = () => {
  let pronoun = [`the`, `a`, `my`];
  let subjetc = [`dog`, +` cloud`, `friend`];
  let action = [`took my`, `laugh at`, `burn my`];
  let possesion = [`homework`, `toe`, `car`];
  let where = [`in my place`, `at the park`, `at the kitchen`];

  let pronaounIndex = 0;
  let subjectIndex = 0;
  let actionIndex = 0;
  let possesionIndex = 0;
  let whereIndex = 0;

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
