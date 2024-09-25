function buyMilk(money){
    alert("Buying 1 bottle costs you $1.5");
    var bottles = money/1.5;
    alert("Hence, youb can buy "+ bottles.toFixed() +" number of bottles");
}

var money = prompt("How much do you wanna spend buying milk?")
buyMilk(money);
