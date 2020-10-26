let counter=0;
  
function changepage(theclicked) {
    var pagename = theclicked.getAttribute("class");
    model.page = pagename;
    updateView();
};

function changemode(theelement) {
    var dayornight = theelement.getAttribute("class");
    model.mode = dayornight;
    updateView();
}

function daytime() {
    let icon = document.getElementById('icon');
    document.getElementById('daymode').setAttribute('href','daymode.css');
    model.textmode = 'white'; //If you want to have different colors for different moods.
    icon.style.color = model.textmode; //--=--
}

function nighttime() {
    let icon = document.getElementById('icon');
    document.getElementById('daymode').setAttribute('href','/nightmode.css');
    model.textmode = 'white'; //If you want to have different colors for different moods.
    icon.style.color = model.textmode; //--=--
}

function backToColor(theIcon) {theIcon.style.color = model.textmode;}

function generateColorOnHover(onIcon) {
  var classes = new Array("rgb(247, 254, 255)", "rgb(247, 255, 252)", "rgb(247, 252, 255)", "rgb(249, 247, 255)", "rgb(253, 247, 255)"); //This is for making the color shift when hover. Strong colors would make more sense here. But nice to have * + .
  if (counter<=3) counter++; else counter=0;
  onIcon.style.color = classes[counter];
}

function preview(theimg) {
    let previewbox = document.getElementById('previewbox');
    let x = document.getElementById('x');
    previewbox.innerHTML = theimg;
    
}

// function getaRandomColor()
      // {
      //   //Store available css classes
      //   var classes = new Array("green", "white", "blue", "yellowgreen", "pink");
       
      //   //Get a random number from 0 to 4
      //   // var randomNumber = Math.floor(Math.random()*5);

      //     return classes[randomNumber];
      // }

      