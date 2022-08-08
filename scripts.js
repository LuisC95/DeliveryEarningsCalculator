var taxes = 1.15;
var gasPrice = 4.40;
var gasPerformance = 24;
var gasByMile = gasPrice / gasPerformance; 
var earnings;

var deliveryDistance = document.getElementById("distance"); 
var traveledDistance = document.getElementById("traveled"); 
var deliveryOffer = document.getElementById("offer");
var earnings = document.getElementById("update");

earnings.addEventListener("click", updateValue);


function operation(e)
{
    deliveryDistance = Number(deliveryDistance.value);
    traveledDistance = Number(traveledDistance.value);
    deliveryOffer = Number(deliveryOffer.value);
    earnings = (deliveryOffer - (taxes * (gasByMile * (traveledDistance + deliveryDistance))));
    earnings = earnings.toFixed(2);
    alert(earnings);
}

function updateValue(e)
{
    operation();
}