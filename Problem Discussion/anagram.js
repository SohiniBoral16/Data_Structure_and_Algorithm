function isAnagram(s1, s2){

    s1 = s1.toLowerCase().replace(/\s/g, '');
    s2 = s2.toLowerCase().replace(/\s/g, '');

    //console.log(s1, s2);

    if(s1.length !== s2.length){
       return false;
    }

    let countMap = {};

    for(let i = 0; i<s1.length; i++){
        let char1 = s1[i];
        let char2 = s2[i];

        countMap[char1] = (countMap[char1] || 0) + 1;
        countMap[char2] = (countMap[char2] || 0) - 1;
    }

    for(let char in countMap){
        if(countMap[char] !== 0){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("cat", "act"));
console.log(isAnagram('Listen', 'Silent'));
console.log(isAnagram('Astronomer', 'Moon starer'));
console.log(isAnagram('Hello', 'Goodbye'));
