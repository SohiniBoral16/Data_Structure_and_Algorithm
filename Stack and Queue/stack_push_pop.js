let arr =[];
let currentSize = arr.length;
let maxVal = 5;

function push(val){
    if(currentSize<maxVal){
        arr[currentSize]= val;
        currentSize++;
    } else {
        console.log(`exceeds max length of the stack so cannot add ${val}`);
    }
}

function pop(){
    currentSize = currentSize-1;
    arr.length=currentSize;
}

push(56);
push(67);
push(5);
push(23);
push(12);
push(6);

console.log(arr);

pop();
pop();
push(98);
push(2);
pop();

console.log(arr);