function _0x58a8() {
  const _0x4e0059 = [
    '78160zJfKFN',
    'Dhuhur',
    '12nvlyyj',
    '10BGUgZs',
    '10sJdfqr',
    '3594825BMkKQu',
    'MWL',
    '60664CugPtF',
    'imsak',
    'Subuh',
    '11022385mOnhaW',
    'length',
    'Muhammad\x20Nur\x20Alfayet\x20|\x20Tristan\x20Mahardika\x20P.D\x20|\x20Adam\x20Azhar',
    '21415mSkKhQ',
    'Isya',
    'sunrise',
    'Ashar',
    '45FGyFuL',
    '511YDVPLK',
    '8501909UazReh',
    'toLowerCase',
    'getTime',
    '85803AOwFCz',
    'innerHTML',
    '1122CSbLiO',
  ];
  _0x58a8 = function () {
    return _0x4e0059;
  };
  return _0x58a8();
}
(function (_0x57ec41, _0x2f648a) {
  const _0x29f7bb = _0xcd93,
    _0x26171a = _0x57ec41();
  while (!![]) {
    try {
      const _0x4b18eb =
        (parseInt(_0x29f7bb(0x193)) / 0x1) * (parseInt(_0x29f7bb(0x180)) / 0x2) +
        (parseInt(_0x29f7bb(0x18e)) / 0x3) * (parseInt(_0x29f7bb(0x17d)) / 0x4) +
        (-parseInt(_0x29f7bb(0x18a)) / 0x5) * (parseInt(_0x29f7bb(0x17c)) / 0x6) +
        (parseInt(_0x29f7bb(0x18f)) / 0x7) * (parseInt(_0x29f7bb(0x184)) / 0x8) +
        (parseInt(_0x29f7bb(0x182)) / 0x9) * (parseInt(_0x29f7bb(0x181)) / 0xa) +
        (-parseInt(_0x29f7bb(0x187)) / 0xb) * (parseInt(_0x29f7bb(0x17f)) / 0xc) +
        parseInt(_0x29f7bb(0x190)) / 0xd;
      if (_0x4b18eb === _0x2f648a) break;
      else _0x26171a['push'](_0x26171a['shift']());
    } catch (_0x1328a1) {
      _0x26171a['push'](_0x26171a['shift']());
    }
  }
})(_0x58a8, 0x80738);
function _0xcd93(_0x2d7d46, _0x501e9b) {
  const _0x58a8c1 = _0x58a8();
  return (
    (_0xcd93 = function (_0xcd9367, _0x20610b) {
      _0xcd9367 = _0xcd9367 - 0x17c;
      let _0x3ed05d = _0x58a8c1[_0xcd9367];
      return _0x3ed05d;
    }),
    _0xcd93(_0x2d7d46, _0x501e9b)
  );
}
function otoma() {
  const _0x4174bf = _0xcd93,
    _0x5d79bc = new PrayTimes({ method: _0x4174bf(0x183), calculationMethod: 'MWL', latitude: -6.59444, longitude: 106.78917, timezone: +0x7, midnightMode: 'Standard', adjustedPrayTimes: !![], karya: _0x4174bf(0x189) });
  let _0x508a3a = [_0x4174bf(0x186), _0x4174bf(0x17e), _0x4174bf(0x18d), 'Maghrib', _0x4174bf(0x18b), _0x4174bf(0x185), _0x4174bf(0x18c)];
  const _0x525f2b = _0x5d79bc['getTimes'](new Date(), [-6.59444, 106.78917], +0x7);
  for (let _0x593ac6 = 0x0; _0x593ac6 < _0x508a3a[_0x4174bf(0x188)]; _0x593ac6++) {
    const _0x2da057 = document['getElementById'](_0x508a3a[_0x593ac6]['toLowerCase']());
    _0x2da057 && (_0x2da057[_0x4174bf(0x194)] = _0x525f2b[_0x508a3a[_0x593ac6][_0x4174bf(0x191)]()]);
  }
  _0x508a3a['find']((_0x5c57d9) => new Date()[_0x4174bf(0x192)]() < new Date(_0x525f2b[_0x5c57d9[_0x4174bf(0x191)]()])[_0x4174bf(0x192)]());
}
setTimeout(otoma, 0x3e8);
