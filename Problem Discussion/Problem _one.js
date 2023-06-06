//Find Even Values from Array, make double of every Element and find Array length manually
let data = [1,3,4,34,76,39,89,70,23];

function evenNumDouble(item){
    for(let i = 0; i<arrayLength(item)-1; i++){
        if(item[i]%2 == 0){
            item[i] = item[i]*2;
        }
    }
    return item;
}

function arrayLength(item){
    let count = 0;
    while(item[count] !== undefined){
        count ++;
    }
    return count;
}

console.log(evenNumDouble(data));
console.log(arrayLength(data));
