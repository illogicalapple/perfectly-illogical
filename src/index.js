const $ = (...args) => document.querySelector(...args);

async function start() {
  var thingy = await fetch("/id.json").then(r => r.json());
  var names = thingy.filenames;
  $("img.comic").src = `/${names[names.length - 1]}`;
}

window.addEventListener("load", function() {
  start();
});
