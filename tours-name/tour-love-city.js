// set up text to print, each item in array is new line
var aText = new Array(
    "The city of Love – Sighnaghi overlooking most fertile Alazani Valley with the background of snowy Caucasian Mountains; Explore “Great Wall of Georgia” – XVIII century Sighnaghi fortress; Visit Bodbe convent – religious center that attracts thousands of pilgrims from around the world, as it is the burial site of IV century Saint Nino who preached Christianity in Georgia and convinced Georgian king and queen to declare Christianity as the state religious; Enjoy Georgian cuisine from cozy restaurants with the view of Caucasian mountains and Alazani Valley." 
    
    );
    var iSpeed = 10; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();