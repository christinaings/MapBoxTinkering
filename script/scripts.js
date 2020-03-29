function openNav() {
    document.getElementById("sidenav").style.width = "200px";
    document.getElementById("map").style.left = "200px";
    document.getElementById("openclose").text = String('<');
    document.getElementById("openclose").setAttribute('onclick','closeNav()'); 
    setTimeout(function(){ document.getElementById('addHouse').style.visibility = 'visible';}, 250);
}

function closeNav() {
    document.getElementById('addHouse').style.visibility = 'hidden';
    setTimeout(function(){
        document.getElementById("sidenav").style.width = "50";
        document.getElementById("map").style.left = "50px";
        document.getElementById("openclose").text = String('>');
        document.getElementById("openclose").setAttribute('onclick','openNav()');
    }, 200);
}