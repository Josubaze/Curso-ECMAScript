import hello from "./module.js";

hello();


// desafio
import { getData } from "./api.js";

function solution() {
  return getData().then(); // manejo la promesa cumplida.
}