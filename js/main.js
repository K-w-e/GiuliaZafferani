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

    footerWhite();
    thirdColumnWhite();
    closeNav();
}

function info(){
    $(".clicked").removeClass("clicked");
    document.getElementById('Box').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('Info').style.display = "";
    document.getElementById('btnInfo').classList.add("clicked");


    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
        blackMobile();
    else
        thirdColumnBlack();
    closeNav();
}

function contact(){
    $(".clicked").removeClass("clicked");
    document.getElementById('Box').style.display = "none";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "";
    document.getElementById('btnContact').classList.add("clicked");

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
        blackMobile();
    else
        thirdColumnBlack();
    closeNav();
}

function show1() {
    $(".clicked").removeClass("clicked");

    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('firstProj').classList.add("clicked");

    var content = "<p class="+"titoloprogetto"+">Fontamara magazine<p>"
    +
    "<p class="+"sottotitoloprogetto"+">Editorial project for MOSTRO Graphic Design Camp <p>"
    +
    "<p class="+"testoprogetto"+">For a long time, in politics, the continuous need to find a perfect face to show has overshadowed the sacred idea of beauty as a solution to our search for satisfaction. This scenario was the basis for creating an imaginary political movement, with its own ideology, a brand, an identity. Knowledge must be shared. That is the philosophy from which the Fontamara movement and magazine were born. The magazine collects in a box the main themes of the myth of Plato's Cave, from the language creation to the value of culture and critical thinking. There's also a part about a distorted view of the world with themes like the alien's invasion or the global cooling and a retrospective of Mostro Graphic Design Camp, where the magazine was exposed.</p>" 
    +
    "<a href="+"./img/fontamara/Fontamara_01.jpg"+" data-lightbox="+"nomeGalleria"+">"
        +"<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_01.jpg"+">"+   
    "</a>"
    +
    "<a href="+"./img/fontamara/Fontamara_02.jpg"+" data-lightbox="+"nomeGalleria"+">"
        +"<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_02.jpg"+">"+   
    "</a>"
    +
    "<a href="+"./img/fontamara/Fontamara_03.jpg"+" data-lightbox="+"nomeGalleria"+">"
        +"<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_03.jpg"+">"+   
    "</a>"
    +
    "<a href="+"./img/fontamara/Fontamara_04.jpg"+" data-lightbox="+"nomeGalleria"+">"
        +"<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_04.jpg"+">"+   
    "</a>"
    +
    "<a href="+"./img/fontamara/Fontamara_05.jpg"+" data-lightbox="+"nomeGalleria"+">"
        +"<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_05.jpg"+">"+   
    "</a>"
    +
    "<a href="+"./img/fontamara/Fontamara_06.jpg"+" data-lightbox="+"nomeGalleria"+">"
        +"<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_06.jpg"+">"+   
    "</a>"
    +
    "<a href="+"./img/fontamara/Fontamara_07.jpg"+" data-lightbox="+"nomeGalleria"+">"
        +"<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_07.jpg"+">"+   
    "</a>"
    +
    "<a href="+"./img/fontamara/Fontamara_08.jpg"+" data-lightbox="+"nomeGalleria"+">"
        +"<img class="+"immagineprogetto"+" src="+"./img/fontamara/Fontamara_08.jpg"+">"+   
    "</a>"
    ;
    document.getElementById('Box').innerHTML = content;

    footerWhite();
    thirdColumnWhite();
    closeNav();
}

function show2() {
    $(".clicked").removeClass("clicked");

    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('secondProj').classList.add("clicked");

    var content = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed natus aspernatur minus, debitis doloribus enim ducimus aperiam voluptas repellendus quidem culpa molestias laborum, soluta porro quos in. Ex, quibusdam.</p>" 
    +
    "<img src="+"https://cataas.com/cat"+"><p>:3</p>";
    document.getElementById('Box').innerHTML = content;

    footerWhite();
    thirdColumnWhite();
    closeNav();
}

function show3() {
    $(".clicked").removeClass("clicked");

    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('thirdProj').classList.add("clicked");

    var content = "<img src="+"https://cataas.com/cat/says/hello"+"><p>Miao</p>"
    +
    "<img src="+"https://cataas.com/cat/says/hello"+">";
    document.getElementById('Box').innerHTML = content;

    footerWhite();
    thirdColumnWhite();
    closeNav();
}

function show4() {
    $(".clicked").removeClass("clicked");

    document.getElementById('Box').style.display = "";
    document.getElementById('Info').style.display = "none";
    document.getElementById('Contact').style.display = "none";
    document.getElementById('fourthProj').classList.add("clicked");

    var content = "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed natus aspernatur minus, debitis doloribus enim ducimus aperiam voluptas repellendus quidem culpa molestias laborum, soluta porro quos in. Ex, quibusdam.</p>" 
    +
    "<img src="+"http://placekitten.com/500/500"+">";
    document.getElementById('Box').innerHTML = content;

    footerWhite();
    thirdColumnWhite();
    closeNav();
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function thirdColumnBlack() {
    var x = document.getElementById("thirdColumn");
    x.style.height = "100vh";
    x.style.color = 'white';
    x.style.backgroundColor = "black";
    
}

function thirdColumnWhite() {
    var x = document.getElementById("thirdColumn");
    var y = document.getElementById("footer");
    x.style.height = "";
    x.style.backgroundColor = "white";
    x.style.color = "black";
}

function blackMobile() {
    var footer = document.getElementById("footer"); 
    var topBox = document.getElementById("firstColumn");
    var margin = topBox.offsetHeight+(footer.offsetHeight*2); 
    var calc = window.innerHeight-margin;
    var x = document.getElementById("thirdColumn");
    x.style.height = "100vh";
    x.style.color = 'white';
    x.style.backgroundColor = "black";
    var y = document.getElementById("footer");
    y.style.color = "white";
    y.style.backgroundColor = "black";
    var l = document.getElementById("aLink");
    l.style.color = "white";
}

function footerWhite(){
    var y = document.getElementById("footer");
    y.style.color = "black";
    y.style.backgroundColor = "white";
    var l = document.getElementById("aLink");
    l.style.color = "black";
  }