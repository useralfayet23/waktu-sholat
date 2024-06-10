setInterval(auto, 1000);
function auto() {
  let subuh = document.getElementById('subuh').innerText;
  let syuruq = document.getElementById('sunrise').innerText;
  let zuhur = document.getElementById('dhuhur').innerText;
  let ashar = document.getElementById('ashar').innerText;
  let maghrib = document.getElementById('maghrib').innerText;
  let isya = document.getElementById('isya').innerText;
  const date = new Date();
  let hours = date.getHours(); // untuk mendapatkan jam sekarang
  let mins = date.getMinutes(); // untuk mendapatkan menit sekarang
  let hourss = update(hours);
  let minss = update(mins);
  let a = hourss + ':' + minss;

  let hari = date.getDay();
  let cocok = document.getElementById('nama-orang');
  let cocoknyacocok = document.getElementById('sebagaimuad');
  let cucuk = document.getElementById('ustad-container');
  let cucuknyacucuk = document.getElementById('sebagaikhot');

  document.getElementById('subuh').style.backgroundColor = 'white';
  document.getElementById('sunrise').style.backgroundColor = 'white';
  document.getElementById('dhuhur').style.backgroundColor = 'white';
  document.getElementById('ashar').style.backgroundColor = 'white';
  document.getElementById('maghrib').style.backgroundColor = 'white';
  document.getElementById('isya').style.backgroundColor = 'white';

  let subh = document.getElementById('subh');
  let syurq = document.getElementById('syurq');
  let zuhr = document.getElementById('zuhr');
  let ashr = document.getElementById('ashr');
  let maghrb = document.getElementById('maghrb');
  let isy = document.getElementById('isy');

  cocok.classList.remove('hidden');
  cocoknyacocok.classList.remove('hidden');

  if (a < subuh) {
    if (hari % 2 == 0) {
      cocok.innerText = 'Gazian';
    } else {
      cocok.innerText = 'Malik';
    }
    isy.classList.remove('cons');
  } else if (a > subuh && a < syuruq) {
    document.getElementById('textsalat').innerText = 'Selamat Menunaikan Ibadah Shalat Subuh';
    document.getElementById('subuh').style.backgroundColor = '#e59e41';
    document.getElementById('subuh').style.border = '1px white solid';
    // cocok.classList.add('hidden');
    // cocoknyacocok.classList.add('hidden');
    subh.classList.add('cons');
  } else if (a > syuruq && a < zuhur) {
    document.getElementById('textsalat').innerText = 'Selamat Menunaikan Ibadah Shalat Syuruq';
    document.getElementById('sunrise').style.backgroundColor = '#e59e41';
    document.getElementById('sunrise').style.border = '1px white solid';
    if (hari % 2 == 0) {
      cocok.innerText = 'Jovaldo';
    } else {
      cocok.innerText = 'Irfan Sidqi';
    }
    syurq.classList.add('cons');
    subh.classList.remove('cons');
  } else if (a > zuhur && a < ashar) {
    document.getElementById('textsalat').innerText = 'Selamat Menunaikan Ibadah Shalat Dzuhur';
    document.getElementById('dhuhur').style.backgroundColor = '#e59e41';
    document.getElementById('dhuhur').style.border = '1px white solid';
    if (hari % 2 == 0) {
      cocok.innerText = 'Danang Surya';
    } else {
      cocok.innerText = 'Danang Surya';
    }
    zuhr.classList.add('cons');
    syurq.classList.remove('cons');
  } else if (a > ashar && a < maghrib) {
    document.getElementById('textsalat').innerText = 'Selamat Menunaikan Ibadah Shalat Ashar';
    document.getElementById('ashar').style.backgroundColor = '#e59e41';
    document.getElementById('ashar').style.border = '1px white solid';
    if (hari % 2 == 0) {
      cocok.innerText = 'Chesta Azka';
    } else {
      cocok.innerText = 'Isa Arifin';
    }
    ashr.classList.add('cons');
    zuhr.classList.remove('cons');
  } else if (a > maghrib && a < isya) {
    document.getElementById('textsalat').innerText = 'Selamat Menunaikan Ibadah Shalat Maghrib';
    document.getElementById('maghrib').style.backgroundColor = '#e59e41';
    document.getElementById('maghrib').style.border = '1px white solid';
    if (hari % 2 == 0) {
      cocok.innerText = 'Ranu Raditya';
    } else {
      cocok.innerText = 'Nafis Dzu';
    }
    maghrb.classList.add('cons');
    ashr.classList.remove('cons');
  } else if (a > isya) {
    document.getElementById('textsalat').innerText = 'Selamat Menunaikan Ibadah Shalat Isya';
    document.getElementById('isya').style.backgroundColor = '#e59e41';
    document.getElementById('isya').style.border = '1px white solid';
    isy.classList.add('cons');
    maghrb.classList.remove('cons');
  }
}

const daftarNama = [
  'Ust. Fatih',
  'Ust. Muhammad Andrik Muzaqi',
  'Ust. Rendy Seno Aji',
  'Ust. Faidh',
  'Ust. Saiful Anwar',
  'Ust. Ahmad Ade Triyono',
  'Ust. Ahmad Aulia',
  'Ust. Muh Izzul Hadi Mz',
  'Ust. Mujahid Fatih Rizki',
  'Ust. Rayhan Athala',
  'Ust. Ahmad Ibnul Farid',
  'Ust. Bani Adam',
];

function getNamaJumat() {
  const hariIni = new Date();
  const hari = hariIni.getDay(); // 0 untuk Minggu, 1 untuk Senin, dst.

  if (hari === 5) {
    const indeksNama = (hariIni.getDate() - 1) % daftarNama.length;
    return daftarNama[indeksNama];
  } else {
    return '-';
  }
}
// Menampilkan nama pada elemen dengan id "namaOrang"
function tampilkanNama() {
  const namaOrangElement = document.getElementById('namaOrang');
  const nama = getNamaJumat();
  namaOrangElement.textContent = nama;
}

// Memanggil fungsi tampilkanNama setiap kali halaman dimuat
window.onload = tampilkanNama;

function update(a) {
  if (a < 10) {
    return '0' + a;
  } else {
    return a;
  }
}
