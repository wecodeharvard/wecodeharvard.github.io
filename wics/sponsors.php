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



    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->
  <div class="container">
  
    

<div class="featurette">
<h2 class="featurette-heading"> Thanks for the support to all of our sponsors: </h2>



 <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Thank you for the support to our platinum sponsor:</th>
          
          </tr>
        </thead>
        <tbody>
         
          <tr>
          
            <td colspan="4">

                <a href="http://www.goldmansachs.com/careers/students-and-graduates/our-programs/index.html"><img id="goldman" align="left" hspace="15" src="img/sponsors/platinum_gs.jpg" width="200" height="200"/></a>

                 The Goldman Sachs Group, Inc. is an Americanmultinational investment banking firm that engages in global investment banking, securities, investment management, and other financial services primarily with institutional clients.Goldman Sachs was founded in 1869 and is headquartered at 200 West Street in the Lower Manhattan area of New York City, with additional offices in international financial centers.


            </td>
          </tr>
          
        </tbody>
      </table>

 <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Thank you for the support to all of our gold sponsors:</th>
          
          </tr>
        </thead>
        <tbody>
         

          <tr>
            <td colspan="4">
                <a href="http://www.akamai.com/html/careers/students_jobs_internships.html"><img id="akamai" align="left" hspace="15" src="img/sponsors/gold_akamai.jpg" width="250" height="200"/></a>
           Akamai® is the leading provider of cloud services for helping enterprises provide secure, high-performing user experiences on any device, anywhere. If you've ever shopped online, downloaded music, watched a web video or connected to work remotely, you've probably used Akamai's cloud platform.
            Akamai helps enterprises accelerate innovation in the hyperconnected world by removing the complexities of technology so you can focus on driving your business faster forward. We enable enterprises to capitalize on market opportunities presented by trends like mobile and cloud while overcoming the challenges presented by security threats and the need to reach users globally.
            The Akamai Intelligent Platform™ reaches globally and delivers locally, providing unmatched reliability, security and visibility into online businesses.
            </td>
          </tr>



          <tr>
          
            <td colspan="4">
                <a href="https://www.facebook.com/careers/teams/people"><img id="facebook" align="left" hspace="15" src="img/sponsors/gold_fb.jpg" width="250" height="200"/></a>
                Facebook, Inc. operates as a social networking company worldwide. It builds various tools that enable users to connect, share, discover, and communicate with each other on mobile devices and computers. The company’s Facebook Platform is a set of development tools and application programming interfaces that enables developers to integrate with Facebook for creating social apps and Websites. As of December 31, 2012, it had 1.06 billion monthly active users and 618 million daily active users. The company has a strategic partnership with Trend Micro Inc. for educating and protecting users' digital lives against malicious sites and malware. Facebook, Inc. was incorporated in 2004 and is headquartered in Menlo Park, California.
            </td>
          </tr>
          <tr>
        
            <td colspan="4">
              <a href="http://careers.intuit.com/university"><img id="intuit" align="left" hspace="15" src="img/sponsors/gold_intuit.jpg" width="250" height="200"/></a>
              Intuit Inc. is an American software company that develops financial and tax preparation software and related services for small businesses, accountants and individuals. It is incorporated in Delaware and headquartered in Mountain View, California.
            </td>
          </tr>

          <tr>
        
            <td colspan="4">
              <a href="http://jobs.rackspace.com/key/rackspace-university-recruiting-jobs.html"><img id="rackspace" align="left" hspace="15" src="img/sponsors/gold_rackspace.jpg" width="250" height="200"/></a>
              
              Rackspace® is the open cloud company and founder of OpenStack, the standard open-source operating system for cloud computing. Headquartered in San Antonio, Rackspace delivers its renowned Fanatical Support® to more than 200,000 business customers, from data centers on four continents. Rackspace is a leading provider of hybrid clouds, which enable businesses to run their workloads where they run most effectively — whether on the public cloud, a private cloud, dedicated servers, or a combination of these platforms. Rackspace has been recognized by Bloomberg BusinessWeek as a Top 100 Performing Technology Company, and is featured on Fortune’s list of 100 Best Companies to Work For. 
            </td>
          </tr>

        </tbody>
      </table>


 <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Thank you for the support to all of our silver sponsors:</th>
          
          </tr>
        </thead>
        <tbody>
         
          <tr>
          
            <td colspan="4">
                <a href="http://jobs.constantcontact.com/"><img id="constant_contact" align="left" hspace="15" src="img/sponsors/silver_cc.jpg" width="250" height="250"/></a>
           Constant Contact, Inc. is an online marketing company offering email marketing, social media marketing, online survey, event marketing, digital storefronts, and local deals tools, primarily to small businesses, nonprofit organizations, and membership associations. It claims over 500,000 customers after January 25, 2012.
            </td>
          </tr>




          <tr>
          
            <td colspan="4">
                <a href="https://www.dropbox.com/jobs"><img id="dropbox" align="left" hspace="15" src="img/sponsors/silver_dropbox.jpg" width="250" height="250"/></a>
            Dropbox was founded in 2007 by Drew Houston and Arash Ferdowsi. Frustrated by working from multiple computers, Drew was inspired to create a service that would let people bring all their files anywhere, with no need to email around attachments. Drew created a demo of Dropbox and showed it to fellow MIT student Arash Ferdowsi, who dropped out with only one semester left to help make Dropbox a reality. Guiding their decisions was a relentless focus on crafting a simple and reliable experience across every computer and phone.
            </td>
          </tr>
          <tr>
        
            <td colspan="4">
                   <a href="https://careers.deshawresearch.com/joining.html"><img id="deshaw" align="left" hspace="15" src="img/sponsors/silver_deshaw.jpg" width="250" height="200"/> </a>

             D. E. Shaw Research ("DESRES") is engaged in scientific research in the field of computational biochemistry, including: (1) the design of novel algorithms and machine architectures for high-speed molecular dynamics (MD) simulations of proteins and other biological macromolecules. In particular, we have designed and constructed a specialized supercomputer called Anton, which executes such simulations orders of magnitude faster than was previously possible, along with a number of software tools and techniques that facilitate their execution and analysis; (2) the use of long MD simulations to study the structural changes underlying biological phenomena that occur on time scales far in excess of those previously accessible to computational study, with the ultimate aim of significantly advancing the process of drug development. We have been investigating, for example, the mechanisms of certain cellular receptors, transport proteins, and enzymes relevant to the understanding and potential treatment of cancer, diabetes, and other diseases.Members of the lab include computational chemists and biologists, computer scientists and applied mathematicians, and computer architects and engineers, all working collaboratively under the direct scientific leadership of its Chief Scientist, David Shaw.
            </td>
          </tr>

          <tr>
        
            <td colspan="4">
               <a href="http://www.google.com/about/jobs/students/"><img id="google" align="left" hspace="15" src="img/sponsors/silver_google.jpg" width="250" height="200"/> </a>

           Google is an American multinational corporation specializing in Internet-related services and products. These include search, cloud computing, software, and online advertising technologies.  Its mission statement from the outset was "to organize the world's information and make it universally accessible and useful", and its unofficial slogan was "Don't be evil". In 2006 Google moved to headquarters in Mountain View, California, nicknamed the Googleplex.
            </td>
          </tr>

           <tr>
        
            <td colspan="4">
              <a href="http://janestreet.com/join-jane-street/process/"><img id="jane_street" align="left" hspace="15" src="img/sponsors/silver_js.jpg" width="250" height="200"/> </a> 
        
               Jane Street is a quantitative proprietary trading firm with offices in New York, Hong Kong, and London. Trading is an intensely technological business, so writing good software is a critical part of Jane Street's operation. We are one of the world's biggest industrial users of functional programming, and we use it in every area of the firm: trading, research, risk management, system administration, accounting, and beyond. We bring a deep understanding of markets, a scientific approach, and innovative technology to bear on the problem of trading on the world's highly competitive financial markets.
            </td>
          </tr>

           <tr>
            <td colspan="4">
               <a href="http://liveramp.com/careers/"><img id="liveramp" align="left" hspace="15" src="img/sponsors/silver_liveramp.jpg" width="250" height="200"/> </a>

           LiveRamp data onboarding enables companies to use their offline customer data in online advertising.With LiveRamp, marketers can use CRM data about their customers to optimize all of the online initiatives, including targeted advertising, content optimization, offline attribution, and analytics.LiveRamp is focused solely on data onboarding and is integrated seamlessly with all the leading online ad tech platforms.
            </td>
          </tr>

           <tr>
            <td colspan="4">
        <a href="http://careers.microsoft.com/careers/en/us/collegehome.aspx"><img id="microsoft" align="left" hspace="15" src="img/sponsors/silver_ms.jpg" width="250" height="200"/> </a>

           Microsoft Corporation is an American multinational corporation headquartered in Redmond, Washington, that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services. Its best known software products are the Microsoft Windows line of operating systems, Microsoft Office office suite and Internet Explorer web browser. Its flagship hardware products are Xbox game console and the Microsoft Surface series of tablets. It is the world's largest software maker measured by revenues. It is also one of the world's most valuable companies.
            </td>
          </tr>

           <tr>
            <td colspan="4">
                <a href="https://www.palantir.com/college/"><img id="palantir" align="left" hspace="15" src="img/sponsors/silver_palantir.jpg" width="250" height="200"/> </a>

               Palantir is a software company that builds and sells data fusion platforms and applications for solving large, complex data problems.  Our work involves  building the infrastructure to fuse together disparate data sources into a single, coherent, interactive, human-understandable picture of a real world problem.  We solve big data's 'last mile' problem with engineering that is equal parts large-scale data processing and high-quality user interface.  Our systems are broadly deployed in government, financial, and commercial markets.  Additionally, our philanthropy team donates our software and expertise to help non-profits work through their challenging data analysis about pressing problems facing our world today.
            </td>
          </tr>


           <tr>
            <td colspan="4">
                <a href="http://www.qualcomm.com/careers/students/hiring-events"><img id="qualcomm" align="left" hspace="15" src="img/sponsors/silver_qual.jpg" width="250" height="200"/> </a>

                Qualcomm Incorporated is an American global fabless semiconductor company that designs, manufactures and markets digital wireless telecommunications products and services. Headquartered in San Diego, California, USA, the company has 157 worldwide locations. 
            </td>
          </tr>

           <tr>
            <td colspan="4">
                <a href="http://www.thoughtworks.com/join"><img id="thoughtworks" align="left" hspace="15" src="img/sponsors/silver_thoughtworks.jpg" width="250" height="200"/> </a>
ThoughtWorks is a privately owned global software delivery and products company. The company is closely associated with the movement for agile software development, and has contributed to a range of open source products.
            </td>
          </tr>

            <tr>
            <td colspan="4">
                <a href="http://predictivetechnologies.com/careers/campus-recruiting.aspx"><img id="apt" align="left" hspace="15" src="img/sponsors/bronze_apt.jpg" width="250" height="200"/> </a>
At APT, we create software that influences the decisions of the world’s largest companies. Our mission is to revolutionize business analytics by creating algorithms to solve the toughest business problems. Turning terabytes of data into concrete answers is no easy task, and we rely on innovative engineers to help us do it.            </td>
          </tr>



        </tbody>
      </table>

 <hr class="featurette-divider">



      <!-- FOOTER -->
      <footer>
        <p class="pull-right"><a href="#">Back to top</a></p>
        <p>&copy; 2013 Harvard Women in Computer Science</a></p>
      </footer>

    </div><!-- /.container -->


  </body>
</html>