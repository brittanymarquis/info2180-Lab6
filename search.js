"use strict";

function Search(){
    var xhttp = new XMLHttpRequest();
    var searchBar = document.getElementById('searchBar').value;
    var url = "https://info2180lab6-markey.c9users.io/request.php?q=" + searchBar;
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById('result').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET",url);
    xhttp.send();
}
