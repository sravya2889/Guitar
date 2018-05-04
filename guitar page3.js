var xhttp = new XMLHttpRequest();

var n = localStorage.index;
var myData;

xhttp.onreadystatechange = function() {
    if(xhttp.readyState === 4 && xhttp.status === 200) {
        var response = JSON.parse(xhttp.responseText);
        myData = response.allProducts;
        cal();
    }
};
xhttp.open('GET','guitarData.json',true);
xhttp.send();

function cal() {
    document.getElementById('img').src= myData[n].image_path;
    document.getElementById('numb').innerHTML = Math.floor(Math.random()*1050);
}

