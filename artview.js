function artview() {
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
  
  <div id="stuffing2">
    <img id="artwork" onclick="preview(this)" src="/works/IdreamtIdweltinmarbleHalls.jpg"/
    <img id="artwork" onclick="preview(this)" src="/works/5.png"/>
    <img id="artwork" onclick="preview(this)" src="/works/yingyang.png"/>
    <img id="artwork" onclick="preview(this)" src="/works/inthecontrolpanel.jpg"/>
    <img id="artwork" onclick="preview(this)" src="/works/Ilder.png"/>
    <img id="artwork" onclick="preview(this)" src="/works/Woodspirit.png"/>
    <img id="artwork" onclick="preview(this)" src="/works/Spirit.png"/>
    <img id="artwork" onclick="preview(this)" src="/works/Ondagrindstone.jpg"/>
    <img id="artwork" onclick="preview(this)" src="/works/drage2.png"/>
    <img id="artwork" onclick="preview(this)" src="/works/Robogurl.jpg"/>
    <img id="artwork" onclick="preview(this)" src="/works/sensei.jpg"/>
    <img id="artwork" onclick="preview(this)" src="/works/frekvensian.jpg"/>
  </div>
  <div id="previewbox"></div>
  <div id="x" onclick="closepreview()">⨉</div>
  <div class="night" id="nightmodebutton" onclick="changemode(this)">Nightmode</div>
  <div class="day" id="daymodebutton" onclick="changemode(this)">Daymode</div>

    `;
}