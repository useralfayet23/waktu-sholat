const _0x319011 = _0x3f24;
(function (_0x1d4eaf, _0x8f36e2) {
  const _0x90af77 = _0x3f24,
    _0x576e22 = _0x1d4eaf();
  while (!![]) {
    try {
      const _0x416af1 =
        (parseInt(_0x90af77(0x15a)) / 0x1) * (parseInt(_0x90af77(0x15d)) / 0x2) +
        (-parseInt(_0x90af77(0x155)) / 0x3) * (parseInt(_0x90af77(0x153)) / 0x4) +
        -parseInt(_0x90af77(0x14d)) / 0x5 +
        parseInt(_0x90af77(0x150)) / 0x6 +
        (-parseInt(_0x90af77(0x156)) / 0x7) * (-parseInt(_0x90af77(0x157)) / 0x8) +
        parseInt(_0x90af77(0x14c)) / 0x9 +
        (parseInt(_0x90af77(0x14b)) / 0xa) * (parseInt(_0x90af77(0x14e)) / 0xb);
      if (_0x416af1 === _0x8f36e2) break;
      else _0x576e22['push'](_0x576e22['shift']());
    } catch (_0x5d65ef) {
      _0x576e22['push'](_0x576e22['shift']());
    }
  }
})(_0x27b9, 0x514e0);
const imgs = document[_0x319011(0x152)](_0x319011(0x14f)),
  img = document[_0x319011(0x158)](_0x319011(0x151));
let idx = 0x0,
  interval = setInterval(run, 0xfa0),
  count = 0x0;
function _0x3f24(_0x3f6dd4, _0xd94142) {
  const _0x27b96c = _0x27b9();
  return (
    (_0x3f24 = function (_0x3f2449, _0x4aa41c) {
      _0x3f2449 = _0x3f2449 - 0x14b;
      let _0x4875bc = _0x27b96c[_0x3f2449];
      return _0x4875bc;
    }),
    _0x3f24(_0x3f6dd4, _0xd94142)
  );
}
function run() {
  idx++, changeImage();
}
function changeImage() {
  const _0x49742a = _0x319011;
  if (idx > img[_0x49742a(0x159)] - 0x1) idx = 0x0;
  else idx < 0x0 && (idx = img[_0x49742a(0x159)] - 0x1);
  for (let _0x38b368 = 0x0; _0x38b368 < img['length']; _0x38b368++) {
    _0x38b368 == count ? (img[_0x38b368][_0x49742a(0x15c)][_0x49742a(0x154)] = '1') : (img[_0x38b368][_0x49742a(0x15c)][_0x49742a(0x154)] = '0');
  }
  console[_0x49742a(0x15b)](count), count++, count >= 0x3 && (count = 0x0);
}
function _0x27b9() {
  const _0x25219b = [
    '2436993vFPAsI',
    '3177140liqMBl',
    '77QnzmTi',
    'imgs',
    '1044936TxtCrc',
    '#imgs\x20img',
    'getElementById',
    '60kXLmnq',
    'opacity',
    '107478BpmrRY',
    '582666kTGPiE',
    '40eLJFbi',
    'querySelectorAll',
    'length',
    '213526GbUnRZ',
    'log',
    'style',
    '2utVwaP',
    '615990pVCFzy',
  ];
  _0x27b9 = function () {
    return _0x25219b;
  };
  return _0x27b9();
}
function resetint() {
  clearInterval(interval), (interval = setInterval(run, 0xfa0));
}
