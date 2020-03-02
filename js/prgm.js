// Remove duplicates in given object:-
var a = [{
        id: 1,
        name: "sreevidya"
    },
    {
        id: 2,
        name: "sreelakshmi"
    },
    {
        id: 4,
        name: "sreevidya"
    },
    {
        id: 3,
        name: "sreelakshminarayan"
    }
];
console.log(a.reduce((acc, cur) => Object.assign(acc, {
    [cur.id]: cur
}, {})));

//Remove duplicates in given numbers ES6:-
var b = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3];
console.log([...new Set(b)]);

// custom method:=
var filter = b.filter(
    function(value, index) {
        return b.indexOf(value) === index
    }
);
console.log("custom method for removing duplicate numbers:" + filter);



//Remove duplicates in given Strings ES6:-
var c = ["sree", "pooja", "radha", "krishna", "pooja"];
console.log([...new Set(c)]);

//custom method:
var fil = c.filter(function(value, index) {
    return c.indexOf(value) === index
});
console.log("remove duplicates in given string by custom method is:" + fil);

//Find max and min values in given array:=

var d = [11, 22, 3, 63, 55, 66, 77, 99];
var maxRes = Math.max.apply(null, d);
console.log("highest value in given array is:" + maxRes);

// custom method:
var highest = 0;
for (i = 0; i <= highest; i++) {
    if (d[i] > highest) {
        var highest = d[i];
    }
}
console.log("Highest value Custom:" + highest);

var minRes = Math.min.apply(null, d);
console.log("lowest value in given array:" + minRes);
var smallest = d[0];
for (i = 0; i <= smallest; i++) {
    if (d[i] < smallest) {
        var smallest = d[i]
    }
}
console.log("Lowest value Custom:" + smallest);
var d = [11, 22, 3, 63, 55, 66, 77, 99];
//find second highest value in given array:-
d.sort(function(a, b) {
    return b - a
})
console.log("Second highest CUstom:" + d[2]);

//Second lowest value in given array:
d.sort(function(a, b) {
    return a - b;
});
console.log("Second Lowest CUstom:" + d[1]);

//revere an Array:
var e = ["sreevidya", "vidya", "siddarth"];
var revArr = e.reverse();
console.log("reverse an array:" + revArr);
//reverse a number
function revNum(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(revNum(43));

//reverse a string:
var name = "sreevidya";
var revStr = name.split('').reverse().join('');
console.log("Reverse a String:" + revStr);
//reverse an onbject:
var obj = {
    name: "sreevidya",
    class: 8,
    place: "tpt"
};
Array.prototype.reverse.call(obj);
console.log(obj);

//Sort numbers:-
var f = [1, 2, 5, 7, 9, 3, 6];
var output = f.sort();
console.log(output);
//sort strings:
var f = ["siva", "viswas", "sid", "apple"];
var result = f.sort();
console.log(result);

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