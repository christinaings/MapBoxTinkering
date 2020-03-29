function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("map").style.left = "250px";
    document.getElementById('addHouse').style.visibility = 'visible';
    document.getElementById("openclose").text = String.fromCharCode('&lt;');
    document.getElementById("openclose").setAttribute('onclick','closeNav()'); 
  }

function closeNav() {
    document.getElementById("sidenav").style.width = "50";
    document.getElementById("map").style.left = "50px";
    document.getElementById('addHouse').style.visibility = 'hidden';
    document.getElementById("openclose").text = String.fromCharCode('&gt;');
    document.getElementById("openclose").setAttribute('onclick','openNav()');
  }