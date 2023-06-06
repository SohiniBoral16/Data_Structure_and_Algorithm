let arr = [];
let currentSize = arr.length;
let maxVal = 5;

function enqueue(newVal){
    if(currentSize <= maxVal){
        arr[currentSize] = newVal;
        currentSize++;
    } else {
        alert("queue is full");
    }
}

function dequeue(){
    if(currentSize>0){
        for(let i = 0; i< currentSize; i++){
            arr[i] = arr[i+1];   
        }
        currentSize--;
        arr.length = currentSize; 
    } else {
        alert("queue is already empty");
    }
}

function display(){
    console.log(arr)
}

enqueue(30);
enqueue(70);
enqueue(90);
display();

dequeue();
display();