// function anagram(s,t){

//     let sArr = s.split("").sort().join("");
//     let tArr = t.split("").sort().join("");
//     if(sArr.length == tArr.length && sArr == tArr){
//         return true;
//     }
//     return false;  
// }

// console.log(anagram("anagram", "nagaram")); //true
// console.log(anagram("car", "rat")); //false

function anagram(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const charCount = {};
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
      
      charCount[charS] = (charCount[charS] || 0) + 1;
      charCount[charT] = (charCount[charT] || 0) - 1;
    }
  
    for (const count of Object.values(charCount)) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(anagram("anagram", "nagaram")); // true
  console.log(anagram("car", "rat")); // false
  