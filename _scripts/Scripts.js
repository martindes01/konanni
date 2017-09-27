// JavaScript source code
//Everything is case sensitive here...
//function Slider() {
    //$("*class* *ID*)
  //  $(".slideScroll #1").show("fade", 500);
  //  $(".slideScroll #1").delay(5500).hide("slide", { direction: 'left' }, 500);

    //sc stands for slide count the img, selcects all images in the slide scroll.
    // This funtion turns this var into an int. of how many slider images in side the div tag.
 //   var sc = $(".slideScroll img").size();

 //   //since slide 1 already slided in, the next one is going to start at 2. It's going to act as a count.
 //   var n = 2;

    //the set interval allows us to use the same function again and again for interval number of times.
 //   setInterval(function () {
 //       $(".slideScroll #" + n).show("slide", { direction: 'right' }, 500);
 //       $(".slideScroll #" + n).delay(5500).hide("slide", { direction: 'left' }, 500);

 //       if (n == sc) {
 //           n = 1;
 //       } else {
 //           n = n + 1;
 //       }
        // run ever 6500 mili seconds.
 //   }, 6500);

//}

function Slider() {
    //$("*class* *ID*)

    //$(".slideScroll #1").show("fade",1000);
    //sc stands for slide count the img, selcects all images in the slide scroll.
    // This funtion turns this var into an int. of how many slider images in side the div tag.
    var sc = $(".slideScroll img").size();

    //since slide 1 already slided in, the next one is going to start at 2. It's going to act as a count.
    var n = 2;

    //the set interval allows us to use the same function again and again for interval number of times.
    setInterval(function () {
        
        $(".slideScroll #" + n).show("fade", 1500);
        $(".slideScroll #" + n).delay(5000).hide("slide", { direction: 'left' }, 1000);
        if (n == sc) {
            n = 1;
        } else {
            n = n + 1;
        }
        // run ever 6500 mili seconds.
    }, 8000);

}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}