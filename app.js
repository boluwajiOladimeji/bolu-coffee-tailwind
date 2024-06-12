const openSidebarBtn = document.querySelector('.open-btn');
const closeSidebarBtn = document.querySelector('.close-btn');
const sidebarEl = document.querySelector('.sidebar');
const navBtns = document.querySelector('.nav-btns');

openSidebarBtn.addEventListener('click', () => {
  sidebarEl.classList.add('show-sidebar');
  navBtns.classList.add('sidebar-open');
});
closeSidebarBtn.addEventListener('click', () => {
  sidebarEl.classList.remove('show-sidebar');
  navBtns.classList.remove('sidebar-open');
});
