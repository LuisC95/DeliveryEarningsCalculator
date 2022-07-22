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
    deliveryDistance = parseInt(e.target.value);
    traveledDistance = parseInt(e.target.value);
    deliveryOffer = parseInt(e.target.value);
    earnings = (taxes*(gasPerformance*(traveledDistance + deliveryDistance)))-deliveryOffer;
    console.log(e);
}

function updateValue(e)
{
    operation; 
    alert(earnings);
    console.log(e)
}