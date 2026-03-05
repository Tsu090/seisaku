const curtain = document.querySelector('.curtain');

let angle = 0;        // 現在の揺れ角度
let target = 0;       // 次に向かう揺れ角度（ランダム）
let speed = 0.02;     // 揺れのスピード（小さいほどゆっくり）
if(curtain) {
  let angle = 0;
  let target = 0;
  let speed = 0.02;


function sway() {
  // たまに風の強さを変える（ランダム）
  if (Math.random() < 0.01) {
    // -3〜3度の範囲でランダムな風
    target = (Math.random() * 6 - 3);
  }

  // 現在の角度を target に近づける（自然な動き）
  angle += (target - angle) * speed;

  curtain.style.transform =
    `translate(-50%, -50%) skewX(${angle}deg) scaleX(${1 + Math.abs(angle) * 0.01})`;

  requestAnimationFrame(sway);
}
sway();
}


//メニューバーを表示する
const openBtn = document.querySelector("#menu-open");
const closeBtn = document.querySelector("#menu-close");
const panel = document.querySelector("#menu-panel");
//開ける
if (openBtn && closeBtn && panel) {

openBtn.addEventListener("click", () => {
  panel.animate(
    { opacity: [0, 1] },
    { duration: 300, fill: "forwards" }
  ).finished.then(() => { //終わった後に実行
    panel.style.pointerEvents = "auto";
  });
});
//閉める
closeBtn.addEventListener("click", () => {
  panel.animate(
    { opacity: [1, 0] },
    { duration: 300, fill: "forwards" }
  ).finished.then(() => {
    panel.style.pointerEvents = "none";
  });
});
};

const hit = document.querySelector('.hit');
const doorArea = document.querySelector('.door-area');

if(hit) {
  hit.addEventListener('click', (e) => {
    e.preventDefault(); // ページ遷移を止める
    doorArea.classList.add('open-right'); // ドアを開く
    doorArea.classList.add('open-left');

    setTimeout(() => {
      window.location.href = "information.html"; // 開いた後に遷移
    }, 3000); // CSS の transition と同じ時間
  });
};

window.addEventListener("scroll", () => {
    const icon = document.querySelector(".icon");
    if (icon) {
        icon.style.position = "fixed";
        icon.style.bottom = "0px";
        icon.style.left = "50%";
        icon.style.transform = "translateX(-50%)";
        icon.style.zIndex = "99999";
        console.log(".icon")
    }
});