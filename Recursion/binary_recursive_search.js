let data = [10,15,18,34,67];
let find = 34;

let start = 0;
let end = data.length-1;

let position = undefined;

function recursiveBinary(item,s,e){

    let mid = Math.floor((s+e)/2); //s=0, e=4
    //console.log(mid); //2
    //console.log(item[mid]); //18
    if(item[mid] === find){
        position = mid;
        return true;
    } else if(item[mid] < find){ 
        recursiveBinary(item,mid+1,e);
    } else{
        recursiveBinary(item,s,mid-1);
    }

}

recursiveBinary(data, start, end);
console.log(position);