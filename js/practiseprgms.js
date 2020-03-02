(function() {
    var a = b = 6;
})();
console.log("a desired output is:" + 'typeOf a' !== 'undefined');
console.log("b desired output is:" + 'typeOf b' !== 'undefined');
//compare let var const :
var c = 8;
let d = 8;
const e = 8;
console.log("var variable is:" + c);
console.log("let variable is:" + d);
console.log("const variable is:" + e);
// ====================Strings=================
//Remove duplicates in string:
var name = "sreevidyareddy";

var leng = name.length;
console.log("length of a string:" + leng);

console.log("remove string :" + [...new Set(name)]); //ES6
// =======================Numbers=========================
//Remove duplicates in numbers:
var dupNum = [11, 22, 33, 44, 55, 66, 77, 88, 99, 11, 44, 77, 99];
console.log([...new Set(dupNum)]);

//length:
var len = dupNum.length;
console.log("length os a number:" + len);

//custom method removing duplictaes:
var filter1 = dupNum.filter(function(value, index) { return dupNum.indexOf(value) === index });
console.log("cutom method for removing duplicate numbers are:" + filter1);
// =======================Arrays=========================
//Remove duplicates in an array:
var arr = ["apple", "apple", "banana", "cipher", "dragon", "cipher"];
console.log([...new Set(arr)]); //ES6

// CUSTOM METHOD:
var filter = arr.filter(function(value, index) {
    return arr.indexOf(value) === index;
});
console.log(filter);
// ===================objects===========================
//Remove duplicates in an object:

var obj = [{
        id: 1,
        name: "sreevidya"
    },
    {
        id: 4,
        name: "chamug"
    },
    {
        id: 3,
        name: "sree"
    },
    {
        id: 2,
        name: "sreevidya"
    }
]
console.log(obj.reduce((acc, cur) => Object.assign(acc, {
    [cur.id]: cur
}, {})));

// ===============Reverese================
// 1.String:We are use split reverse and join methods in strings
var str = "sreevidyareddy";
var revStr = str.split('').reverse(',').join('');
console.log("reverse a string:" + revStr);

// 2.Numbers:
function revNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(revNum(543));

// 3.Arrays:
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var revArr = numb.reverse();
console.log("reverse an array of numbers:" + revArr);
// 4.Object:
var ob = {
    id: 3,
    name: "sree",
    class: 8
}
var revObj = Array.prototype.reverse.call(ob);
console.log(revObj);

//Highest and Lowest numbers:
var highNumb = [23, 43, 56, 65, 76, 67, 87, 78, 98, 89, 01, 10];
var resHigh = Math.max.apply(null, highNumb);
console.log("builtin method for find max value:" + resHigh);
var resLow = Math.min.apply(null, highNumb);
console.log("builtin method for find min value:" + resLow);
//cutoms:
var highest = 0;
for (i = 0; i <= highest; i++) {
    if (highNumb[i] > highest) {
        var highest = highNumb[i];
    }
}
console.log("custom method for find highest number in given array:" + highest);

var smallest = highNumb[0];
for (i = 0; i <= smallest; i++) {
    if (highNumb[i] < smallest) {
        var smallest = highNumb[i]
    }
}
console.log("custom method for find lowest number in given array:" + smallest);
//find second largest number in given aaray:
highNumb.sort(function(a, b) {
    return b - a;
});
console.log("second highest number in given array:" + highNumb[2]);
highNumb.sort(function(a, b) {
    return a - b;
});
console.log("second lowest number in given array:" + highNumb[1]);

//Sorting:
var asen = highNumb.sort();
console.log(asen);

var names = ["sree", "vidya", "amrutha", "bhagyamma"];
var asend = names.sort();
console.log(asend);
var desend = names.reverse();
console.log(desend);
//dates reverse();
var dates = ["29/09/1991", "29/01/1994", "24/02/1996", "14/11/1989"];
dates.sort((date1, date2) => {
    date1 = date1.split('/').reverse().join('/');
    date2 = date2.split('/').reverse().join('/');
    if (date1 < date2) {
        return -1;
    } else if (date1 > date2) {
        return 1;
    } else {
        return 0;
    }
});
console.log(dates);
var j = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var t = j.flat();
console.log(t);
setTimeout(function() {
    for (i = 0; i < 9; i++) {
        // console.log(i + 1); //prints 1 to 10
        console.log(i); //prints 0 to 9

    }
}, 1000);
setInterval(function() {
    // alert(0);
}, 5000);

// jsforms:
function validateForm() {
    var x = document.forms[myForm][fname].value;
    if (x == "") {
        alert("name must be filled");
        return false;
    }
}

function getValue() {
    var x, text;
    x = document.getElementById("numb").value;
    if (isNaN(x) || x < 0 || x > 10) {
        text = "invalid number";
    } else {
        text = "valid number"
    }
    document.getElementById("demo").innerHTML = text;
}

//date:
var date = new Date();
console.log(date);
//Map():
var func = [1, 2, 34, 5, 67, 89];
var mapFun = func.map(myFunction);

function myFunction(value, array, index) {
    return value + 2;
}
console.log(mapFun);
var fil = func.filter(myFunction);

function myFunction(value, array, index) {
    return value < 55;
}
console.log(fil);

//geolocation:
x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "location doesnot supported by the browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "latitude" + position.coords.latitude + "longnitude" + position.coords.longnitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "user location permission is denied";
            break;
        case error.POSITION_AVAILABLE:
            x.innerHTML = "user current position not available."
            break;
        case error.TIMED_OUT:
            x.innerHTML = "user availabale time period is outed."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "shows some unknown error"
            break;
    }
}
//Array Methods:-
// 1.CONCAT():marge together
var veges = ["beetroot", "carrot", "beans"];
var fruits = ["apple", "banana", "citrus"];
var con = veges.concat(fruits);
console.log("array concat():" + con);
// 2.toString():separated by comma
var fruits = ["apple", "banana", "citrus"];
var tostr = fruits.toString();
console.log("array tostring method:" + tostr);
//3.join():-separeted by each element using *
var fruits = ["apple", "banana", "citrus"];
var joy = fruits.join('*');
console.log("array join method:" + joy);
//4.pop():remove last element in the given array:
var fruits = ["apple", "banana", "citrus"];
var pop = fruits.pop();
console.log("array pop():" + pop);
console.log(fruits);
//5.push():adds element in the end of the aaray
var fruits = ["apple", "banana", "citrus"];
var push = fruits.push("chikku");
console.log("array push():" + push);
console.log(fruits);
//6.Shift():removes first element in the given array
var fruits = ["apple", "banana", "citrus"];
var shift = fruits.shift();
console.log("array shift():" + shift);
console.log(fruits);
//6.Unshift():adds first element in the given array
var fruits = ["apple", "banana", "citrus"];
var unshift = fruits.unshift("pineapple");
console.log("array Unshift():" + unshift);
console.log(fruits);
//7.splice():adds/removes elements in between given array==returns new array
var names = ["ramesh", "suresh", "radha", "ravikiran", "siddarth"];
var splice = names.splice(5, 5, "pooja", "nandhini");
console.log("array Splice():" + names);
//8.slice():doesnot change original source code it takes arguments and removes corresponding elements in given array.
var names = ["ramesh", "suresh", "radha", "ravikiran", "siddarth"];
var slice = names.slice(2);
console.log(slice);
//9.delete():
var fruits = ["apple", "banaba ", "mango ", "orange ", "lemon "];
// fruits.delete(1);
console.log(fruits);

//sort objects:
var cars = [{
    id: 1,
    model: 2009
}, { id: 2, model: 2016 }, { id: 3, model: 2020 }];
var rep = cars.sort(function(a, b) {
    return a.model - b.model
});
console.log(rep);
//asending numbers: and lowest value in given array
var points = [1, 2000, 43, 56, 76, 89, 90, 100, 599];
points.sort(function(a, b) {
    return a - b;
});
console.log("asending order of sort():" + points);
console.log("lowest value in given array is:" + points[0]);
//desending numbers: and highest value in given array
var points = [1, 2000, 43, 56, 76, 89, 90, 100, 599];
points.sort(function(a, b) {
    return b - a;
});
console.log("decsending order of sort():" + points);
console.log("Highest value in given array is:" + points[0]);

// Map():
var num1 = [2, 4, 6, 8, 10, 12];
var num2 = num1.map(myFunction);

function myFunction(value, array, index) {
    return value * 2;
}
console.log(num2);

var over18 = num1.filter(myFunction);

function myFunction(value, index, array) {
    return value > 9;
}
console.log(over18);

var t = new Date(10 - 02 - 2020);
console.log(t);

// js classes:class is used instead of function and uses in inside the constructor
class Car {
    constructor(brand) {
        this.carname = brand;
    }
}
myCar = new Car("furtuner");
console.log(myCar.carname);



function check() {
    var x, text;
    x = document.getElementById("numb").value;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "input is not valid"
    } else {
        text = "input is valid"
    }
    document.getElementById("demo").innerHTML = text;
}
(function() {
    var a = b = 3;
})();
console.log("a defined as:" + 'typeOf a' !== 'undefined');
console.log("b defined as:" + 'typeOf b' !== 'undefined');