let items = [20, 12, 53, 3];

// function selectionSortReverse(data){
//     let maxId;
//     for(let i = data.length-1; i >= 0; i--){ //3
//         maxId = i; //3 2
//         for(let j = i-1; j >= 0; j--){ //2 
//             if(data[j] < data[maxId]){ //data[2] > data[3] 53>3
//                 maxId = j; //maxId = 2
//             }
//         }
//         let temp = data[maxId]; //temp = data[2] = 53
//         data[maxId]=data[i]; //data[2] = data[3] = 3
//         data[i] = temp; //data[3] = 53
//     }

// }

//with single selection sort algo only we can do both assending and dcending sorting
function selectionSortReverse(data){
    let minId;
    for(let i =0; i<data.length; i++){
        minId = i; 
        for(let j=i+1; j<data.length; j++){ 
            if(data[j] > data[minId]){ //in case of assending data[j] > data[minId]
                minId = j; 
            }
        }
        let temp = data[minId]; 
        data[minId] = data[i]; 
        data[i] = temp; 
    }
}

selectionSortReverse(items);
console.log(items);