var taxes = 1.15;
var gasPrice = 4.40;
var gasPerformance = 24;
var gasByMile = gasPrice / gasPerformance; 
var earnings;

var deliveryDistance = document.getElementById("distance"); 
var traveledDistance = document.getElementById("traveled"); 
var deliveryOffer = document.getElementById("offer");


function operation(e)
{
    earnings = (taxes*(gasPerformance*(traveledDistance + deliveryDistance)))-deliveryOffer;
    console.log(earnings);
}