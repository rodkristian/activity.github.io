var arr = [];
var oddd = [];
var evenn = [];
var x = 0, y = 0;

for(var i = 0;;i++){
    arr[i] = Number(prompt("Enter number (press 0 to end the loop): "));
    if(arr[i]==0){
        break;
    }
}

oddeven(arr);

function oddeven(arrr){
    for(var i = 0; i < arrr.length; i++){
        if(arrr[i]%2==1){
            oddd[x] = arrr[i];
            x++;
        }else{
            evenn[y] = arrr[i];
            y++;
        }
    }
    // console.log("Even numbers: "+evenn);
    // console.log("Odd numbers: "+oddd);
}

console.log("Even numbers: ");
for(var ev = 0; ev = evenn.length; ev++){
    console.log(evenn[ev]);
}

console.log("Odd numbers: ");
for(var ev = 0; ev = oddd.length; ev++){
    console.log(oddd[ev]);
}


