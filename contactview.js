function contactview() {
    document.getElementById('content').innerHTML = `
    <div id="banner">
    <div id="panel">
      <div onclick="changepage(this)" id="icon" class="art" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">Art</div>
      <div onclick="changepage(this)" id="icon" class="threed" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">3D</div>
      <div onclick="changepage(this)" id="icon" class="animation" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">Animation</div>
      <div onclick="changepage(this)" id="icon" class="code" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">Code</div>
      <div onclick="changepage(this)" id="icon" class="contact" onmouseover="generateColorOnHover(this)" onmouseout="backToColor(this)">Contact</div>
    </div>
  </div>
  
  <div id="contentbox">
  <div id="stuffing">CONTACT </div>
  </div>
  <div id="nightmodebutton" onclick="switchmode('/nightmode.css')">Nightmode</div>
  <div id="daymodebutton" onclick="switchmode('daymode.css')">Daymode</div>

    `;
}