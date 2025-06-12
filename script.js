// 예: 커서 따라다니는 원
document.addEventListener('mousemove', (e) => {
  const circle = document.querySelector('.cursor');
  if (circle) {
    circle.style.left = `${e.pageX}px`;
    circle.style.top = `${e.pageY}px`;
  }
});
