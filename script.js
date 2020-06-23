const paragraph = document.getElementById('paragraph')
const more = document.getElementById('more');
const minor = document.getElementById('minor');
const info = document.getElementById('info');



let fSize = 16;



function incrementFSize(paragraph) {
  var paragraph = document.getElementById('paragraph');
  console.log(fSize);
  if (fSize === 40) {
    alert("40px is the biggest size.");
  } else {
    paragraph.style.fontSize = (fSize += 2) + 'px';
  }
}

function decrementFSize() {
  var paragraph = document.getElementById('paragraph');
  console.log(fSize);
  if (fSize === 8) {
    alert("8px is the smallest size.")
  } else {
    paragraph.style.fontSize = (fSize -= 2) + 'px';
  }
}


function toggleText() {
  var textInfo = document.getElementById('textInfo');
  if (textInfo.style.opacity === '0') {
    textInfo.style.opacity = '1';
  } else {
    textInfo.style.opacity = '0';
  }
}

more.addEventListener('click', incrementFSize);
minor.addEventListener('click', decrementFSize);
info.addEventListener('click', toggleText);