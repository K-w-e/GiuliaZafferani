function start(){
    document.getElementById('Box').style.display = "";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('Info').style.display = "none";
    var content = "<p>SELECTED WORKS</p>"
    +
    "<img src="+"http://placekitten.com/200/300"+"><br>"
    +
    "<p>Meow</p>"
    +
    "<img src="+"http://placekitten.com/300/300"+"><br>"
    +
    "<p>Mlem</p>"
    +
    "<img src="+"http://placekitten.com/300/200"+"><br>"
    +
    "<p>Prew</p>"
    +
    "<img src="+"http://placekitten.com/500/300"+"><br>"
    +
    "<p>Meow</p>"
    document.getElementById('Box').innerHTML = content;

    closeNav();
}

function info(){
    document.getElementById('Box').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('Info').style.display = "";

    closeNav();
}

function contact(){
    document.getElementById('Box').style.display = "none";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "";

    closeNav();
}

function show1() {
    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    var content = "<p class="+"testoprogetto"+">Knowledge must be shared. That is the philosophy from which Fontamara magazine was born. The magazine collects in a box the main themes of the myth of Plato's Cave, from the language creation to the value of culture and critical thinking. There's also a part about a distorted view of the world with themes like the alien invasion or the global cooling and a retrospective of Mostro Graphic Design Camp, where the magazine was exposed.</p>" 
    +
    "<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_01.jpg"+">"
    +
    "<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_02.jpg"+">"
    +
    "<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_03.jpg"+">"
    +
    "<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_04.jpg"+">"
    +
    "<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_05.jpg"+">"
    +
    "<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_06.jpg"+">"
    +
    "<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_07.jpg"+">"
    +
    "<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_08.jpg"+">"

    ;
    document.getElementById('Box').innerHTML = content;

    closeNav();
}

function show2() {
    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    var content = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed natus aspernatur minus, debitis doloribus enim ducimus aperiam voluptas repellendus quidem culpa molestias laborum, soluta porro quos in. Ex, quibusdam.</p>" 
    +
    "<img src="+"https://cataas.com/cat"+"><p>:3</p>";
    document.getElementById('Box').innerHTML = content;

    closeNav();
}

function show3() {
    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    var content = "<img src="+"https://cataas.com/cat/says/hello"+"><p>Miao</p>"
    +
    "<img src="+"https://cataas.com/cat/says/hello"+">";
    document.getElementById('Box').innerHTML = content;

    closeNav();
}

function show4() {
    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    var content = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed natus aspernatur minus, debitis doloribus enim ducimus aperiam voluptas repellendus quidem culpa molestias laborum, soluta porro quos in. Ex, quibusdam.</p>" 
    +
    "<img src="+"http://placekitten.com/500/500"+">";
    document.getElementById('Box').innerHTML = content;

    closeNav();
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
