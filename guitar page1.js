var i = 0;
// var myData;
var xhttp = new XMLHttpRequest();
var myData;
var a;
xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
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

 function nextImg() {
     if (i<myData.length){
         i++;
     // } else {
     //     i = 0;
         cal();
         localStorage.setItem('a', i);
     }
 }
function previousImg() {
     if (i>0) {
         i--;
     // } else {
     //     i= abc.length - 1;
         cal();
         localStorage.setItem('a', i);
     }
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
function buy() {
     location.href='guitar page2.html';
}