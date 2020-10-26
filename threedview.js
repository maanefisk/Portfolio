function threedview() {
    document.getElementById('content').innerHTML = `
    <div onclick="changepage(this)" id="icon" class="home">⌂</div>
    <div id="banner">
    <div id="panel">
      <div onclick="changepage(this)" id="icon" class="art" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">Art</div>
      <div onclick="changepage(this)" id="icon" class="threed" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">3D</div>
      <div onclick="changepage(this)" id="icon" class="animation" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">Animation</div>
      <div onclick="changepage(this)" id="icon" class="code" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">Code</div>
      <div onclick="changepage(this)" id="icon" class="contact" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">Contact</div>
    </div>
  </div>
  
  <div id="contentbox"></div>

  <div id="stuffing">
    <img id="artwork" src="/works/ForeverDolphinLove.png"/>
    <img id="artwork" src="/works/Diorama_Poster2.png"/>
    <img id="artwork" src="/works/Equinox_Talisman.png"/>
    
    <img id="artwork" src="/works/Prikkperikum.png"/>
    <img id="artwork" src="/works/Skull.png"/>
  </div>

  <div class="night" id="nightmodebutton" onclick="changemode(this)">Nightmode</div>
  <div class="day" id="daymodebutton" onclick="changemode(this)">Daymode</div>

    `;
}