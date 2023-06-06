function quickSort(nums, low = 0, high = nums.length - 1) {
    if (low < high) {
        let pi = partition(nums, low, high);
        quickSort(nums, low, pi - 1);
        quickSort(nums, pi + 1, high);
    }
    return nums;
}

function partition(nums, low, high) {
    let pivot = nums[high];
    let i = (low - 1);
    
    for(let j = low; j <= high - 1; j++) {
        if(nums[j] < pivot) {
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i+1, high);
    return (i+1);
}

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

// Testing the function
let nums = [5,2,3,1];
console.log(quickSort(nums));  // Output: [1,2,3,5]

nums = [5,1,1,2,0,0];
console.log(quickSort(nums));  // Output: [0,0,1,1,2,5]
