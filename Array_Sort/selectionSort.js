let items = [20, 12, 53, 3];

function selectionSort(data){
    let minId;
    for(let i =0; i<data.length; i++){
        minId = i; //0 
        for(let j=i+1; j<data.length; j++){ //1 2 3
            if(data[j] < data[minId]){ //12 < 20  53 < 20  3<20
                minId = j; //3
            }
        }
        let temp = data[minId]; //3
        data[minId] = data[i]; // 20
        data[i] = temp; //3
    }
}

selectionSort(items);
console.log(items);

//O(n2)