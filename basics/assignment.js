var min = 2;
var max = Number(prompt("Enter limit: "));

evenfunc(min, max);

function evenfunc(mini,maxi){
    if(mini>maxi){
        return;
    }
    console.log(mini);
    return evenfunc(mini + 2, maxi);
}