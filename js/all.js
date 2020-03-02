//Revrese dates:
var dates = ["29/09/1991", "19/05/1990", "24/02/1996"];
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
document.write(dates);

var name = "sreevidya";
var q = name.split('').reverse().join('');
console.log(q);


//Remove duplicates in given object:
var x = [{
        id: 1,
        name: "sr",
    },
    {
        id: 3,
        name: "sv",
    },
    {
        id: 4,
        name: "sr",
    },
    {
        id: 2,
        name: "rs",
    }
]
console.log(x.reduce((acc, cur) => Object.assign(acc, {
    [cur.name]: cur
}), {}));
document.write(x.reduce((acc, cur) => Object.assign(acc, {
    [cur.name]: cur
}), {}));

// sorting an array,number,string and an object:
var y = [1, 2, 3, 4, 5, 3, 21, 4];
var res = y.sort();
console.log(y);
res.sort(function(a, b) {
    return a - b;
});
console.log(res);
var w = ["ram", "karthick", "sid"];
w.sort();
console.log(w);

var list = { "you": 100, "me": 75, "foo": 116, "bar": 15 };
keysSorted = Object.keys(list).sort(function(a, b) { return list[a] - list[b] })
console.log(keysSorted);
var items = {
    "name": 44,
    "age": 27,
    "place": 189
}
keysSorted = Object.keys(items).sort(function(a, b) {
    return items[a] - items[b]
});
console.log(keysSorted);

// HTML GEOLOCATION:
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "geolocation doesnot support by this browsers"
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://www.google.com/maps/search/Hotels/@12.9157598,77.5869023,15z/data=!3m1!4b1 ";

    document.getElementById("demo").innerHTML = "<img src='" + img_url + "'>";
}
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
    } else {
        document.getElementById("result").innerHTML = "broweser doesnot support ";
    }
}

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
        text = "input is not valid";
    } else {
        text = "input is ok"
    }
}
// document.getElementById("txt").innerHTML = text;

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
    txt = txt + value + "<br>";
}


//Calculate largest value in given array:=
var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}
console.log("highest value in given array:" + largest);

// calculate smallest number in given array:=
var arrays = [32, 45, 67, 89, 100];
var small = arrays[0];
for (i = 0; i <= small; i++) {
    if (arrays[i] < small) {
        var small = arrays[i];
    }
}
console.log("smallest value in given array:" + small);

var d = [
    [1, 2, 3],
    [4, 5, 6]
];
var t = d.flat();
console.log(t);