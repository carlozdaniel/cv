/*===== show menu=====*/
const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show-menu')
    })
  }
}
showMenu('nav-toggle','nav-menu')
/*===== revome menu mobile =====*/
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
  const navMenu = docuemnt.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink,forEach(n = n.addEventListener('click',linkAction))

/*===== scroll sections active links =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      docuemnt.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      docuemnt.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll',scrollActive)
/*===== change backgraund header =====*/
function scrollHeader(){
  const header = docuemnt.getElementById('header')
  if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}
window.addEventListener('scroll',scrollActive)

/*===== change background header =====*/
function scrollTop(){
  const scrollTop = docuemnt.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollActiveTop)



