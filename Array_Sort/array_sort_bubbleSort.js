function arraySortN2(){
    let data = [57,89,23,65,34,56,100,5,78];
            // 40 30
    for(let i =0; i<data.length; i++){
        for(let j=0; j<data.length; j++){
            if(data[j]>data[j+1]){
                let temp = data[j+1];
                data[j+1] = data[j];
                data[j] = temp;
            }
        }
    }
    console.log(data);
}

arraySortN2();