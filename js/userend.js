document.getElementsByClassName("toppings").value=150;
document.getElementById("delivery").value=250;
document.getElementById("delivery1").value=0;
document.getElementById("size-s").value=250;
document.getElementById("size-m").value=500;
document.getElementById("size-l").value=750;
document.getElementById("delivery1").value=1000;

var add=function(pizzaSize,pizzaCrust,pizzaToppings,pizzaDelivery) {
    return pizzaSize + pizzaCrust + pizzaDelivery + parseInt(pizzaToppings);
};
