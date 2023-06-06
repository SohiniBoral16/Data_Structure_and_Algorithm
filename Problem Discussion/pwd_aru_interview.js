let data = [1,2,4,5,7,8,10,12];

function missingNo(items){
    let missingArr =[]
    for(let i = 0,j =0; i<items.length; i++,j++){
        if(items[i] !== j+1){
            missingArr.push(j+1);
            j++;
        } 
    }
    return missingArr;
}

console.log(missingNo(data));