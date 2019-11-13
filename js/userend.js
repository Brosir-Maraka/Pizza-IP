document.getElementsByClassName("toppings").value = 150;
document.getElementById("delivery").value = 250;
document.getElementById("delivery1").value = 0;
document.getElementById("size-s").value = 500;
document.getElementById("size-m").value = 750;
document.getElementById("size-l").value = 100;
document.getElementById("size-l").value = 100;
document.getElementById("crispy").value = 100;
document.getElementById("stuffed").value = 150;
document.getElementById("Gluten-free").value = 150;

var add = function(pizzaSize, pizzaCrust, pizzaToppings, pizzaDelivery) {
  return pizzaSize + pizzaCrust + pizzaDelivery + parseInt(pizzaToppings);
};
