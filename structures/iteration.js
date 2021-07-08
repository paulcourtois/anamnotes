// Structures élémentaires

// 1.1 Itération
let counter = 0;

let increment = (N,p,a,b) =>{
  let result = [];

  //TODO: comment faire pour que le compte s'arrête vraiment à N ?

  while (counter < N){
    counter += p;
    if (counter%a == 0 && counter%b == 0){
      result.push("buzz")
    }
    else if (counter%a ==0){
      result.push("foo")
    }
    else if(counter%b == 0){
      result.push("mit")
    }
    else {
      result.push(counter)
    }
  }
  return result
};

console.log(increment(130,3,4,5))


