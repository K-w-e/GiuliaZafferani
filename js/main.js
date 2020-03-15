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
    var content = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed natus aspernatur minus, debitis doloribus enim ducimus aperiam voluptas repellendus quidem culpa molestias laborum, soluta porro quos in. Ex, quibusdam.</p>" 

    +
    "<img src="+"https://cataas.com/cat"+"><p>:3</p>";
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

function show4() {
    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    var content = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed natus aspernatur minus, debitis doloribus enim ducimus aperiam voluptas repellendus quidem culpa molestias laborum, soluta porro quos in. Ex, quibusdam.</p>" 
    +
    "<img src="+"http://placekitten.com/500/500"+">";
    document.getElementById('Box').innerHTML = content;
}
