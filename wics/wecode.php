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
                <li ><a href="wecode.php">WeCode</a></li>
                <li ><a href="sponsor.php">Sponsor Us</a></li>
                <li><a href="contact.php">Contact Us</a></li>

            </ul>
          </div>
        </div>
      </div>
      </div> <!-- /.container -->
    </div><!-- /.navbar-wrapper -->



<div class="container">
  
      <div class="featurette" id ="wecode">    

         <img src="img/icons/wecode2.jpg"><br><br>
         <div class="hero-unit">
        
         <h2> Women Engineers Code </h2><p> WECode is a conference for collegiate women interested in Computer Science. Saturday, February 8th is a general session consisting of speakers, hands-on workshops and other smaller break-out activities. Sunday, February 9th is a hackathon. Conference participants can register for either or both days, and breakfast and lunch will be served on the 8th and the 9th. Workshops and break-out activities will be led by our sponsors-- including Facebook, Intuit, Google, Microsoft, and Qualcomm-- and smaller companies from the Boston area. We look forward to seeing you in February! </p>


        <a href=" http://wecode.eventbrite.com" class="btn btn-primary btn-large">Click here to register!</a> 
        <p><font size="2">Please that registration requires a $5 deposit but this deposit will be paid back if you attend</font>  </p>
        </div>
      
      <div class="featurette">
        <h2 class="featurette-heading">Meet our keynote speakers: </h2>
      </div><br><br>

        <div class="row-fluid">
          <div class="span3">
            <h2>Rebecca Parsons</h2>
            <p><img src="img/speakers/Parsons.jpg" width="200" height="300" align="left" Hspace="5" Vspace="1"> Rebecca has more than 30 years' application development experience in industries ranging from 
telecommunications to emergent internet services. She has extensive experience leading in the creation 
of large-scale distributed object applications, services based applications and the integration of disparate 
systems. She spent time at Los Alamos National Laboratory researching programming languages for 
parallel and distributed systems as well as the application of evolutionary computation to problems in 
computational biology. She continues to have a strong interest in programming language design and 
implementation, particularly as it relates to scientific and distributed computation. </p>
          </div>

  <div class="span3">
            <h2>Ann Wollrath </h2>
            <p> <img src="img/speakers/Wollrath.jpg" width="180" height="200" align="left" Hspace="5" Vspace="1"> Ann Wollrath is a Senior Software Developer with Ab Initio where she specializes in all things Java and Hadoop,
             as well as dabbles in language runtime systems. Previously, at Sun Microsystems, she was the architect and project lead 
             of the Java Remote Method Invocation system (the Java core library java.rmi) and was one of the architects of the 
             Jini technology. Also while at Sun Microsystems Laboratories and at the MITRE Corporation, she researched reliable, large-scale distributed systems and parallel computation.
              Ann received an M.S. in computer science from the University of Massachusetts, Lowell, and a B.S. in computer science from Merrimack College. </p>
          </div>

        <div class="span3">
          <h2>Min Wang </h2>
          <p><img src="img/speakers/Wang.jpg" width="150" height="200" align="left" Hspace="5" Vspace="1"> Dr. Min Wang is a Senior Staff Research Scientist at Google Research and she leads the Knowledge 
Integration and Inferencing team. Her previous appointments include HP Distinguished Technologist 
and Director of HP Labs China and Research Staff Member and manager of the Unified Data Analytics 
Department at IBM's Thomas J. Watson Research Center. Her research interests are in database 
systems and information management. In 2009, she received the ACM SIGMOD 2009 Test of Time 
Award for her 1999 SIGMOD paper, "Approximate Computation of Multidimensional Aggregates of 
Sparse Data Using Wavelets". She received her Ph.D. degree in Computer Science from Duke University 
and the B.S. and M.S. degrees, both in Computer Science, from Tsinghua University, Beijing, China. </p>
          </div>
          <div class="span3">
            <h2>Kimber Lockhart </h2>
            <p> <img src="img/speakers/Lockhart.jpg" width="150" height="180" align="left" Hspace="5" Vspace="1"> Kimber Lockhart is the Senior Director of Web Application Engineering at Box, leading the web and core 
engineering teams. Previously, she co-founded Increo, a web-based service that allows users to share and review 
documents in a secure space. Increo was acquired by Box in 2009. In her free time, Kimber enjoys training on the 
aerial rope and flying trapeze. She holds a B.S. in Computer Science from Stanford University.</p>
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