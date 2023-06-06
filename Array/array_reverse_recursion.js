let data = [10, 20, 30, 50, 90, 40, 80];
let temp;
function arrayReverse(array, startingIndex, endingIndex) {
  //console.log(array);
  if (startingIndex <= endingIndex) {
    temp = array[startingIndex];
    array[startingIndex] = array[endingIndex];
    array[endingIndex] = temp;

    arrayReverse(data, startingIndex + 1, endingIndex - 1);
  }
  //console.log(array);
  return array;
}

console.log(arrayReverse(data, 0, data.length - 1)); //(array, startingIndex, endingIndex)

//data.reverse()
