function strictPalindrome(n){
    //let n = 9;
    if(n<0){
        return false;
    }
    for(let base =2; base<=n-2; base++){
        let num = n;
        let digitArr = [];

        while(num > 0){
            digitArr.push(num%base);
            num = Math.floor(num/base);
        }
        let len = digitArr.length;
        for(let i =0; i<len/2; i++){
            if(digitArr[i] !== digitArr[len - i - 1]){
                return false;
            }
        }
    }
    return true;
}

for(let j =0; j<10000; j++){
    if(strictPalindrome(j) == true){
        console.log(j)
    }
}

//   console.log(strictPalindrome(9));
//   console.log(strictPalindrome(3));
//   console.log(strictPalindrome(585)); 
//   console.log(strictPalindrome(12321));
  