var sortArray = function(nums) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2); //4
    let left = sortArray(nums.slice(0, mid)); //[34,89,45,67]
    let right = sortArray(nums.slice(mid)); //[90,123, 56, 76]

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) { //0<4 && 0<4 | 2<4 && 0<4
        if (left[leftIndex] < right[rightIndex]) { //34<90 | 89<90 | 45<90
            result.push(left[leftIndex]); //result =[34] | 89 | 45
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    console.log(result);
    //return result;
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let data = [34,89,45,67,90,123, 56, 76];
console.log(sortArray(data))