function* iterate(arr){
  for(let value of arr){
    yield value;
  }
}

const it = iterate(['Oscar','Luis','Jose','Maria']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

