const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 9000);

let count = 0;

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  for (let i = 0; i < img.length; i++) {
    if (i == count) {
      img[i].style.opacity = `1`;
    } else {
      img[i].style.opacity = `0`;
    }
  }

  console.log(count);
  count++;
  if (count >= 3) {
    count = 0;
  }
}

function resetint() {
  clearInterval(interval);
  interval = setInterval(run, 4000);
}
