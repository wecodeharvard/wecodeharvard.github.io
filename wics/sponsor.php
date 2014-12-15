<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Harvard Women in Computer Science</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <style>

    /* GLOBAL STYLES
    -------------------------------------------------- */
    /* Padding below the footer and lighter body text */

    body {
      padding-top: 110px;
      padding-bottom: 40px;
      color: #5a5a5a;
    }



    /* CUSTOMIZE THE NAVBAR
    -------------------------------------------------- */

    /* Special class on .container surrounding .navbar, used for positioning it into place. */
    .navbar-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      margin-top: 20px;
      margin-bottom: -90px; /* Negative margin to pull up carousel. 90px is roughly margins and height of navbar. */
    }
    .navbar-wrapper .navbar {

    }

    /* Remove border and change up box shadow for more contrast */
    .navbar .navbar-inner {
      border: 0;
      -webkit-box-shadow: 0 2px 10px rgba(0,0,0,.25);
         -moz-box-shadow: 0 2px 10px rgba(0,0,0,.25);
              box-shadow: 0 2px 10px rgba(0,0,0,.25);
    }

    /* Downsize the brand/project name a bit */
    .navbar .brand {
      padding: 14px 20px 16px; /* Increase vertical padding to match navbar links */
      font-size: 16px;
      font-weight: bold;
      text-shadow: 0 -1px 0 rgba(0,0,0,.5);
    }

    /* Navbar links: increase padding for taller navbar */
    .navbar .nav > li > a {
      padding: 15px 20px;
    }

    /* Offset the responsive button for proper vertical alignment */
    .navbar .btn-navbar {
      margin-top: 10px;
    }

    /* MARKETING CONTENT
    -------------------------------------------------- */

    /* Center align the text within the three columns below the carousel */
    .marketing .span4 {
      text-align: center;
    }
    .marketing h2 {
      font-weight: normal;
    }
    .marketing .span4 p {
      margin-left: 10px;
      margin-right: 10px;
    }


    /* Featurettes
    ------------------------- */

    .featurette-divider {
      margin: 80px 0; /* Space out the Bootstrap <hr> more */
    }
    .featurette {
      /*padding-top: 120px; /* Vertically center images part 1: add padding above and below text. */
      overflow: hidden; /* Vertically center images part 2: clear their floats. */
    }
    .featurette-image {
      margin-top: -120px; /* Vertically center images part 3: negative margin up the image the same amount of the padding to center it. */
    }

    /* Give some space on the sides of the floated elements so text doesn't run right into it. */
    .featurette-image.pull-left {
      margin-right: 40px;
    }
    .featurette-image.pull-right {
      margin-left: 40px;
    }

    /* Thin out the marketing headings */
    .featurette-heading {
      font-size: 50px;
      font-weight: 300;
      line-height: 1;
      letter-spacing: -1px;
    }



    /* RESPONSIVE CSS
    -------------------------------------------------- */

    @media (max-width: 979px) {

      .container.navbar-wrapper {
        margin-bottom: 0;
        width: auto;
      }
      .navbar-inner {
        border-radius: 0;
        margin: -20px 0;
      }


      .featurette {
        height: auto;
        padding: 0;
      }
      .featurette-image.pull-left,
      .featurette-image.pull-right {
        display: block;
        float: none;
        max-width: 40%;
        margin: 0 auto 20px;
      }
    }

    .logo {
      position: absolute;
      top: 0px;
      left: 50px;
    }

    @media (max-width: 767px) {

      .navbar-inner {
        margin: -20px;
      }

      .carousel {
        margin-left: -20px;
        margin-right: -20px;
      }
      .carousel .container {

      }
      .carousel .item {
        height: 300px;
      }
      .carousel img {
        height: 300px;
      }
      .carousel-caption {
        width: 65%;
        padding: 0 70px;
        margin-top: 100px;
      }
      .carousel-caption h1 {
        font-size: 30px;
      }
      .carousel-caption .lead,
      .carousel-caption .btn {
        font-size: 18px;
      }

      .marketing .span4 + .span4 {
        margin-top: 40px;
      }

      .featurette-heading {
        font-size: 30px;
      }
      .featurette .lead {
        font-size: 18px;
        line-height: 1.5;
      }

    }
    </style>

   
  </head>

  <body>


    <!-- NAVBAR
    ================================================== -->
    <div class="navbar-wrapper">
      <!-- Wrap the .navbar in .container to center it within the absolutely positioned parent. -->
      <div class="container">

<div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
          <div class="container">
            
            
              <a href="index.php" class="logo"><img id="topbar_logo" src="img/logo.jpg" width="100" height="90" overflow="visible"/></a>
            <ul class="nav">
            </ul>
            
            <ul class="nav pull-right">
               <li ><a href="index.php">Home</a></li>
                <li ><a href="about.php">About Us</a></li>
                <li ><a href="sponsors.php">Our Sponsors</a></li>
                <li ><a href="calendar.php">Events</a></li>
                <li ><a href="wecode.php">WECode</a></li>
                <li ><a href="sponsor.php">Sponsor Us</a></li>
                 <li ><a href="form.php">Expense Submission</a></li>
                <li><a href="contact.php">Contact Us</a></li>

            </ul>
          </div>
        </div>
      </div>
      </div> <!-- /.container -->
    </div><!-- /.navbar-wrapper -->
     

      <div class="container">
  <div class="featurette">


        <h2 class="featurette-heading">Sponsor Us. <span class="muted"></h2>

        <p class="lead">We offer three levels of sponsorship: Silver, Gold, and Platinum. Any other sponsorship amounts will give your company “Bronze Sponsor” status.</p>




          <!-- Example row of columns -->
      <div class="row-fluid">

        <div class = "span12">


        <div class="span4">
        <img id="sponsor" src="img/sponsors/sponsor.jpg" width="300" height="500"/>
        </div>


        <div class="span4">  
          <h2>Platinum</h2>
          <p>At our highest level, as a Platinum sponsor ($7,000+/year) </p>
           <ul>
            <li>we offer all the benefits of Silver sponsorship, plus
            <li>a potential organized visit to the company’s offices (within 500 mile radius)
            <li>free catering at your info sessions
            <li>total event management
          </ul>


          <h2>Gold</h2>
          <p>At the Gold sponsorship level ($5000/year), you will receive: </p>
           <ul>
            <li>all the benefits of Silver sponsorship, plus
            <li>a resume book with the work history and contact information of our most accomplished club members
          </ul>



          <h2>Silver</h2>
          <p> At the Silver sponsorship level ($2000/year), you will receive: </p>
          <ul class="list-unstyled">
            <li>logo and company placement on our website
            <li>recognition on marketing materials and at our events
            <li>an exclusive info session on campus (we will book the room, help you order food and drink, create a good atmosphere, generate positive PR on campus and make sure people are aware that you are coming)
          </ul>
        </div>
</div>


      </div>

   </div>
   


      <hr class="featurette-divider">



      <!-- FOOTER -->
      <footer>
        <p class="pull-right"><a href="#">Back to top</a></p>
        <p>&copy; 2013 Harvard Women in Computer Science</a></p>
      </footer>

    </div><!-- /.container -->


  </body>
</html>