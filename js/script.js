// クリスマスツリーの点滅と音楽
const tree = document.getElementById('tree');
const btn = document.getElementById('partyBtn');
const audio = document.getElementById('xmasSound');

let isParty = false;

btn.addEventListener('click', async () => {
  isParty = !isParty;

  if (isParty) {
    tree.classList.add('party');
    btn.textContent = '演奏停止';

    try {
      audio.currentTime = 0;
      await audio.play();
    } catch (e) {
      console.warn('Audio play was blocked:', e);
    }
  } else {
    tree.classList.remove('party');
    btn.textContent = 'クリック演出';
    audio.pause();
    audio.currentTime = 0;
  }
});

// 雪のON/OFF
const snowBtn = document.getElementById('snowBtn');
let snowing = false; // 初期は止まっている

snowBtn.addEventListener('click', () => {
  snowing = !snowing;

  if (snowing) {
    document.body.classList.add('snowing'); // CSSでopacityとアニメをON
    snowBtn.textContent = '❄ 雪を止める';
  } else {
    document.body.classList.remove('snowing');
    snowBtn.textContent = '❄ 雪を降らす';
  }

  console.log('雪の状態:', snowing, document.body.classList.contains('snowing'));
});