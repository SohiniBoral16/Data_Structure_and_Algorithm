//Write a function called findAnagrams(string) that takes a string as input and 
//returns an array of all possible anagrams of that string.

function findAnagrams(string) {
    const anagrams = [];
  
    function generateAnagrams(currentString, remainingChars) {//"", cat
      if (remainingChars.length === 0) { 
        //console.log(`inside`)
        anagrams.push(currentString);
        return;
      }
  
      for (let i = 0; i < remainingChars.length; i++) { // 3
        const char = remainingChars[i]; // c a
        const updatedString = currentString + char; //""+c ca
        //console.log(`remaining char: ${remainingChars.slice(0, i)}`); //ca
        //console.log(`remaining 2nd: ${remainingChars.slice(i + 1)}`); // t
        const updatedChars = remainingChars.slice(0, i) + remainingChars.slice(i + 1); //"" + "at"
        //console.log("updatedString: ", updatedString)
        //console.log("updatedChar: ", updatedChars);
        generateAnagrams(updatedString, updatedChars); //c, at
      }
      //console.log(anagrams);
    }
    generateAnagrams("", string); //"", cat
    return anagrams;
  }
  
  // Example usage:
  const string = "cat";
  const anagrams = findAnagrams(string);
  console.log(anagrams);
  

