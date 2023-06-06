function quickSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    let pivot = nums[nums.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) { //5 < 1 
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Testing the function
let nums = [5,2,3,1];
console.log(quickSort(nums));  // Output: [1,2,3,5]

nums = [5,1,1,2,0,0];
//console.log(quickSort(nums));  // Output: [0,0,1,1,2,5]
