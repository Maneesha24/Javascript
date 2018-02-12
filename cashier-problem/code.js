var Due = prompt('Due');
console.log('Due :'+Due);
var Paid = prompt('Amount Paid by customer');
console.log('Paid :' +Paid);

var change = Paid-Due;
console.log('Change :' +change);

console.log("Amount to be paid in notes :")

//2000 notes to be returned
var return_change = Math.floor(change/2000);
change=change%2000;
return_change>0 ? console.log('2000 notes: ' +return_change):0;

//500 notes to be returned
var return_change = Math.floor(change/500);
change=change%500;
return_change>0 ? console.log('500 notes: ' +return_change):0;

//100 notes to be returned
var return_change = Math.floor(change/100);
change=change%100;
return_change>0 ? console.log('100 notes: ' +return_change):0;

//50 notes to be returned
var return_change = Math.floor(change/50);
change=change%50;
return_change>0 ? console.log('50 notes: ' +return_change):0;

//20 notes to be returned
var return_change = Math.floor(change/20);
change=change%20;
return_change>0 ? console.log('20 notes: ' +return_change):0;

//10 notes to be returned
var return_change = Math.floor(change/100);
change=change%10;
return_change>0 ? console.log('10 notes: ' +return_change):0;

//5 coin to be returned
var return_change = Math.floor(change/5);
change=change%5;
return_change>0 ? console.log('5 coins: ' +return_change):0;

//1 coin to be returned
var return_change = Math.floor(change/2);
change=change%2;
return_change>0 ? console.log('2 coins: ' +return_change):0;

//1 coin to be returned
var return_change = Math.floor(change/1);
change=change%1;
return_change>0 ? console.log('1 coins: ' +return_change):0;