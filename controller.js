
let originalColor = "";
let counter=0;
  
function changepage(theclicked) {
    var pagename = theclicked.getAttribute("class");
    model.page = pagename;
    updateView();
};

function changemode(theelement) {
    var dayornight = theelement.getAttribute("class");
    model.mode = dayornight;
    console.log("The element clicked: " + dayornight + " button!");
    console.log("model.page: "+ model.page);
    updateView();
}

function daytime() {
    let icon = document.getElementById('icon');
    let daymodeB = document.getElementById('daymodebutton');
    let nightmodeB = document.getElementById('nightmodebutton');    
    console.log("Daytime function initiated")
    document.getElementById('daymode').setAttribute('href','daymode.css');
    let originalColor = 'black';
    icon.style.color = originalColor;
    nightmodeB.style.display = "block"; 
    daymodeB.style.display = "none";
}

function nighttime() {
    let icon = document.getElementById('icon');
    let daymodeB = document.getElementById('daymodebutton');
    let nightmodeB = document.getElementById('nightmodebutton');    
    console.log("Nighttime function initiated")
    document.getElementById('daymode').setAttribute('href','/nightmode.css');
    let originalColor = 'white';
    icon.style.color = originalColor;
    nightmodeB.style.display = "none";
    daymodeB.style.display = "block";
}

function backToColor(theIcon) {theIcon.style.color = originalColor;}

function generateColorOnHover(onIcon) {
  var classes = new Array("rgb(247, 254, 255)", "rgb(247, 255, 252)", "rgb(247, 252, 255)", "rgb(249, 247, 255)", "rgb(253, 247, 255)");
  if (counter<=3) counter++; else counter=0;
  onIcon.style.color = classes[counter];
}

// function getaRandomColor()
      // {
      //   //Store available css classes
      //   var classes = new Array("green", "white", "blue", "yellowgreen", "pink");
       
      //   //Get a random number from 0 to 4
      //   // var randomNumber = Math.floor(Math.random()*5);

      //     return classes[randomNumber];
      // }

      