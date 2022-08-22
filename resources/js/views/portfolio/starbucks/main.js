// header search animation
const searchEl = document.querySelector(".search");
const serchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  serchInputEl.focus();
});
// 서치에 포커스 되었을때
serchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  serchInputEl.setAttribute("placeholder", "통합검색");
});
// 서치에 포커스가 끝날때
serchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  serchInputEl.setAttribute("placeholder", "");
});

// scroll event
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(function () {
  if(window.scrollY > 500){
    // 배치 숨기기
    // badgeEl.style.display = "none";
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity : 0 ,
      display : "none"
    });
    // 버튼 보이기
    gsap.to("#to-top", 0.2, {
      x: 0
    });
  } else {
    // 배치 보이기
    // badgeEl.style.display = "block";
    gsap.to(badgeEl, 0.6, {
      opacity : 1 ,
      display : "block"
    });
    // 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});

// visual fade-in
const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * 0.7 ,
    opacity : 1
  });
});

//new Swiper(요소, 옵션);
// 공지사항 스와이퍼
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
// 프로모션 스와이퍼
new Swiper(".promotion .swiper-container" , {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay : {
    delay: 5000 // 5s
  },
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});
// 푸터 스와이퍼
new Swiper('.awards .swiper-container', {
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30,
  slidesPerView: 5, // 한화면에 몇개 보여줄건지
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
});

// promotion toggle
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion // 반대값으로 변경
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add("hide");
  }else{
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// youtube__area animation
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 애니메이션 동작 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // y축
    repeat: -1, // 무한
    yoyo: true,
    ease: Power1.easeInOut, // 움직임 부드러워짐
    delay: random(0, delay) // 지연시간
  });
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

// ScrollMagic
const spyEls = document.querySelectorAll("section.scroll-spy");

spyEls.forEach(function (spyEl, index) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
