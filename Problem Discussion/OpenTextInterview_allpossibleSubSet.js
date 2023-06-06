let arr = ['abcdefgh', 'bca', 'def', 'ghg', 'abcde', 'cdb', 'cba'];

function maxString(array){
    let maxString = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > maxString.length){
            maxString = arr[i]; 
        }
    }
 return maxString;
}

function findSubsets(string) {
    const subsets = [];
    // Recursive helper function
    function generateSubsets(currentString, index) { //"", 0
      console.log(string.length); // p 2 p 2 p 2
      if (index === string.length) { // 0 === 2 1 ===  2 2 ====2
        subsets.push(currentString); 
        console.log(subsets); //""
        return;
      }
      console.log("cu:",subsets); //p []  p[]
      // Exclude current character
      generateSubsets(currentString, index + 1); //"", 1; "", 2
      console.log("In",subsets);
      // Include current character
      generateSubsets(currentString + string[index], index + 1);
    }
    generateSubsets("", 0); // Start with an empty string and index 0
    return subsets;
  }
  
console.log(findSubsets("ab"));