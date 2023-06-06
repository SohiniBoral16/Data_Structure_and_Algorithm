function fibonacci(num){
    if(num<0){
        console.log("not an valid no for fibonacci");
    }
    let fiboSeries = [0,1];
    for(let i=2; i<=num; i++){
        fiboSeries[i] = fiboSeries[i-1]+fiboSeries[i-2];
    }
    return fiboSeries;
 }

 const fib = function (n) {
    if (n <= 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  };
 console.log(fibonacci(5));
 console.log(fib(5))