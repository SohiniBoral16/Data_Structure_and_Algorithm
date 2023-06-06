let arr =[];
let currentSize= arr.length;
function push(newVal) {
  arr[currentSize] = newVal;
  currentSize++;
  return arr;
}

function pop() {
    let lastRemovedItem = arr[currentSize-1];
    currentSize = currentSize - 1;
    arr.length = currentSize;
    return lastRemovedItem;
}

function reverseString(s){
    for(let i=0; i<s.length; i++){
       push(s[i]);
    }
    for(let i=0; i<s.length; i++){
        s[i] = pop();
    }
}

let str = "sohini";
str = str.split("");
reverseString(str);
console.log(str.join(""));
