 let count = 1;

 document.getElementById( "me" ).addEventListener( "click", function () {


   function setColor( me, color ) {
     let property = document.getElementById( 'me' );
     if ( count == 0 ) {
       property.style.backgroundColor = "blue"
       count = 1;
     } else {
       property.style.backgroundColor = "#7FFF00"
       count = 0;
     }
   }
   setColor();
   document.getElementById( "me" ).innerHTML = 'click me again';
 } );
