let money = 100;
let apple = 0;

function buyApple(x){
   if(x > 0){
      console.log(`I can buy with ${x} more apple ${apple}`)
      buyMore(x);
   } else{
    console.log(`I don't have money to buy apple ${apple}`)
   } 
}

function buyMore(x){
    apple++;
    buyApple(x-10);
}

buyApple(money);