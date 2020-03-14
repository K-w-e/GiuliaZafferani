function info(){
    document.getElementById('Box').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('Info').style.display = "";
}

function contact(){
    document.getElementById('Box').style.display = "none";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('Contact').style.display = "";
}

function show(param_div_id) {
    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('Box').innerHTML = document.getElementById(param_div_id).innerHTML;
}

function show2() {
    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    var content = "<img src="+"https://cataas.com/cat"+"><p>:3</p>";
    document.getElementById('Box').innerHTML = content;
}

function show3() {
    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    var content = "<img src="+"https://cataas.com/cat/says/hello"+"><p>Miao</p>"
    +
    "<img src="+"https://cataas.com/cat/says/hello"+">";
    document.getElementById('Box').innerHTML = content;
}