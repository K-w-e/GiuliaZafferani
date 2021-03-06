<html>
  <head>
      <title> GIULIA ZAFFERANI </title>

      <link rel="icon" href="favicon.ico"/>

      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/style.css?ts=<?=time()?>&quot">
      <link rel="stylesheet" href="css/menu.css?ts=<?=time()?>&quot">

      <script src="js/main.js"></script>
      <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
  </head>
  
  <body>
    <!--Side menu-->
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&#8592;</a>
      <div class="overlay-content">
          <p>ABOUT</p>
          <hr>
          <ul style="list-style-type:none;">
            <li><a href="#" onclick="info()">Info</a></li>
            <li><a href="#" onclick="contact()">Contact</a></li>
          </ul>
          <br>
          <p>WORKS</p>
          <hr>
          <ul style="list-style-type:none;">
              <li><a href="#" onclick="show1()">Fontamara</a></li>
              <li><a href="#" onclick="show2()">Blablabla</a></li>
              <li><a href="#" onclick="show3()">Blablabla</a></li>
              <li><a href="#" onclick="show4()">Blablabla</a></li>
              <li><a href="#" onclick="show5()">Blablabla</a></li>       
          </ul> 
      </div>
    </div>
    


    <!--Container-->
    <div class="col-12">
      <div class="row">
        <a href="#" id="title" onclick="start()">GIULIA ZAFFERANI</a>
        <span id="btn" onclick="openNav()" style="font-size: 56px;">+</span> 

        <!-- First column -->
        <div class="col-sm-12 col-md-12 col-lg-3 colonna">
          <div class="first">               
            <p>
              Hi everyone! <br>
              I'm a graphic designer and visual communication designer graduated at Unirsm Design.
            </p>
            <div style="line-height: 100%;">
              <a href="mailto:giulia.zafferani177@gmail.com">&#8594; Mail</a><br>
              <a href="https://www.instagram.com/giulia.zafferani" target="_blank">&#8594; Instagram</a><br>
              <a style="margin-bottom: 50px;"href="https://www.behance.net/giuliazafferani" target="_blank">&#8594; Behance</a><br><br>
            </div>
          </div>
        </div>


        <!-- Second column -->
        <div class="col-sm-12 col-md-12 col-lg-3 colonna" id="second">
          <div class="second">
            <div class="about">
              <p class="subtitle">ABOUT</p>
              <hr>
              <ul style="list-style-type:none; float: right">
                <li><a href="#" onclick="info()" id="btnInfo" class="link">Info</a></li>
                <li><a href="#" onclick="contact()" id="btnContact" class="link">Contact</a></li>
              </ul>
            </div>

            <br>

            <div class="works">
              <p class="subtitle">WORKS</p>
              <hr>
              <ul style="list-style-type:none; float: right">
                  <li><a href="#" onclick="show1()" id="firstProj" class="link">Fontamara</a></li>
                  <li><a href="#" onclick="show2()" id="secondProj" class="link">Blablabla</a></li>
                  <li><a href="#" onclick="show3()" id="thirdProj" class="link">Blablabla</a></li>
                  <li><a href="#" onclick="show4()" id="fourthProj" class="link">Blablabla</a></li>
                  <li><a href="#" onclick="show5()" id="fifthProj" class="link">Blablabla</a></li>       
              </ul> 
            </div>
          </div>
        </div>


        <!-- Third column -->
        <div class="col-sm-12 col-md-12 col-lg-6 colonna box" style="padding-right: 0px;">
          <div id="Box" class="box" style="padding-right: 0px;">
            <p>SELECTED WORKS</p>

            <?php
              $files = glob("img/fontamara/*.*");
              $n = count($files);
              for ($i = 0; $i < $n; $i++) {
               // echo "<script>console.log('Test: " . json_encode($files) . "' );</script>";
              //  $rand = rand(0, count($files));
                $image = $files[$i];
                echo '<img src="' . $image . '"/>' . "<br /><br />";
                echo $image;
              //  unset($files[$rand]);
              }
            ?>
            <!--<img src="http://placekitten.com/200/300"><br>
            <p>Meow</p>
            <img src="http://placekitten.com/300/300"><br>
            <p>Mlem</p>
            <img src="http://placekitten.com/300/200"><br>
            <p>Prew</p>
            <img src="http://placekitten.com/500/300"><br>
            <p>Meow</p>
            <img src="http://placekitten.com/300/400"><br>
            <p>Mlem</p>
            <img src="http://placekitten.com/400/300"><br>
            <p>Prew</p> -->
          </div>

          <div id="Info" style="display: none;" class="box" style="padding: 100px;">
            <br><br>
            EDUCATION<br>
            &#8594; 2016-2020 / Graduated in Design at the University of the Republic of San Marino <br>
            &#8594; 2011-2016 / Language High School - Scuola Secondaria Superiore San Marino<br><br>

            WORK ESPERIENCES<br>
            &#8594; 2020 / Collaboration with Studio Taller<br>
            &#8594; 2019 / Exhibition and Talk at MOSTRO - Graphic Design Camp<br>
            &#8594; 2019 / Exhibit Coordinator of SMIAF - San Marino International Arts Festival with Emma Bartolini<br>
            &#8594; 2018 / Graphic and visual communication Intership at LCD Firenze of Gianni Sinni, Franca Gori and Chiara Galli<br>
            &#8594; 2018 / Graphic and visual communication group of DCC - Designing Civic Consciousness<br><br>

            WORKSHOP<br>
            &#8594; 2019 / XYZ2019 Convento Meridiano - Scuola Open Source. Visual Identity group coordinated by Mauro Bubbico<br>
            &#8594; 2019 / Open_Collab, Self-Run Workshop, input by Patrick Thomas<br>
            &#8594; 2018 / Silk-screen printing workshop with Davide di Gennaro<br>
            &#8594; 2017 / Photography workshop with Patrizia Ferreri<br>

          </div>
          <div id="Contact" style="display: none;" class="box"> 
            <br><br>
            E-MAIL<br>
            &#8594; giulia.zafferani177@gmail.com <br>
            &#8594; giulia.zafferani177@gmail.com <br><br>
            SOCIAL<br>
            &#8594; Instagram<br>
            &#8594; Behance<br>
            &#8594; Facebook<br>
            &#8594; LinkedIn<br>
          </div>
  
        </div>

      <!--No-->
      <div id="idPrimoProg" style="display: none;" class="col-md-6">
        <img src="https://cataas.com/cat/cute">
      </div>  
    </div>
        
  </div>
     <!--Footer-->
     <div id="footer">
      Lorem ipsum <br>
      <a href="https://alessandro-guerra.it">Website built by Alessandro Guerra</a>
    </div>
  </body>
</html>
