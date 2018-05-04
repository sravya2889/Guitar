
var xhttp = new XMLHttpRequest();
var i = localStorage.getItem('a');
var myData;
xhttp.onreadystatechange = function() {
    if(xhttp.readyState === 4 && xhttp.status === 200) {
        var response = JSON.parse(xhttp.responseText);
        myData = response.allProducts;
        cal();
    }
};

xhttp.open('GET', 'guitarData.json', true);
xhttp.send();
function cal() {
    document.getElementById('img').src = myData[i].image_path;
    document.getElementById('bd1').innerHTML = myData[i].product_description;
    document.getElementById('bd2').innerHTML = myData[i].shipping_details;
    document.getElementById('bd3').innerHTML = myData[i].customer_reviews;
    document.getElementById('bd4').innerHTML = myData[i].price;
}

function getInfo() {
    var x = document.getElementById('bd1');
    if(x.style.display !== 'block'){
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function getInfo1() {
    var y = document.getElementById('bd2');
    if(y.style.display !== 'block') {
        y.style.display = 'block';
    } else {
        y.style.display = 'none';
    }

}
function getInfo2(){
    var z = document.getElementById('bd3');
    if(z.style.display !== 'block') {
        z.style.display = 'block';
    } else {
        y.style.display = 'none';
    }
}
function getInfo3(){
    var n = document.getElementById('bd4');
    if(n.style.display !== 'block') {
        n.style.display = 'block';
    } else {
        n.style.display = 'none';
    }
}

function validateForm() {
    var f = document.myForm.fName.value;
    var l = document.myForm.lName.value;
    var e = document.getElementById('mail').value;
    document.getElementById('inform').innerHTML = 'First name is ' + f + ', ' + 'Last name is ' + l + ' and E-mail id is ' + e;
}

function myNum() {
    var x = document.getElementById('num').value;
    if(x.length < 13){
        alert('Enter valid number');
    }
}

function buy() {
    location.href='guitar page 3.html';
    localStorage.index = i;
}