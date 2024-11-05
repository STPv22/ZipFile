var f = document.getElementById('fil');

f.onchange = function() {
  JSZip.loadAsync(this.files[0])
    .then(async function(zip) {
      
      var metaJSONStr = await zip.files["mod.json"].async("string");
      var mod = JSON.parse(metaJSONStr);

      var iconStr = await zip.files["icon.png"].async("base64");
      var image = document.createElement('img');
      image.src = "data:image/png;base64," + iconStr;

      var title = document.createElement('h1');
      title.innerHTML = mod.meta.title;

      var creds = document.createElement('h2');
      creds.innerHTML = mod.meta.credits;

      var desc = document.createElement('p');
      desc.innerHTML = mod.meta.description;

      document.body.appendChild(image);
      document.body.appendChild(title);
      document.body.appendChild(creds);
      document.body.appendChild(desc);
    }, 
    function() {alert("Not a valid zip file")});
};