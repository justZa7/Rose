const expandBtn = document.querySelector('.expand-btn');
const link = document.querySelector('.main-link-expand');
var main_links = document.querySelector('.main-link');

expandBtn.addEventListener('click', () => {
  link.classList.toggle('expand')
})

const scrollRevealOption = {
  distance: "30px",
  origin: "bottom",
  duration: 1000,
}

const linksReveal = {
  distance: "30px",
  origin: "right",
  duration: 1000,
}

ScrollReveal().reveal(' .text-content', {
  ...scrollRevealOption,
})

ScrollReveal().reveal(' .support-link h2', {
  ...scrollRevealOption,
  interval: 200,
  delay: 500,
})


ScrollReveal().reveal('.support-link .btn-large', {
  ...scrollRevealOption,
  interval: 200,
  delay: 1000,
})

ScrollReveal().reveal(main_links, {
  ...linksReveal,
  interval: 200,
  delay: 1500,
})

ScrollReveal().reveal('.show-btn-container', {
  ...scrollRevealOption,
  interval: 200,
  delay: 500,
})

ScrollReveal().reveal(' .horizontal-image-scroll', {
  ...scrollRevealOption,
  interval: 200,
  delay: 500,
})

// bg-1 scroll
document.addEventListener('scroll', (e) => {
  document.getElementById('bg-1').style.transform = `translateX(${window.scrollY / 5}px)`
})

// bg-2 scroll
document.addEventListener('scroll', (e) => {
  document.getElementById('bg-2').style.transform = `translateX(${window.scrollY / -5}px)`
})

// bg-3 scroll
// document.addEventListener('scroll', (e) => {
//   document.getElementById('bg-3').style.transform = `translateY(${window.scrollY / -1}px)`
// })

// function copy
const copy = document.querySelectorAll('#link-action');

copy.forEach((action) => {
    action.addEventListener('click', (e) => {
        e.preventDefault();
        const url = action.parentElement.getAttribute("href");
        navigator.clipboard.writeText(url);
        document.getElementById('toast').innerHTML = `
                                                     <div class="toast-container">
                                                        <p>✅Link berhasil disalin !!</p>
                                                     </div>
    `;
    setTimeout(() => {
        document.querySelector('#toast .toast-container').classList.add('toast-done')
    }, 200);

    setTimeout(() => {
        document.querySelector('#toast .toast-container').remove()
    }, 3000)
    })
})

// to open dev social
const btnShow = document.querySelector('.btn-show');
const cardLink = document.querySelector('.main-card-link-wrapper');

btnShow.addEventListener('click', () => {
  cardLink.classList.toggle('open')
  btnShow.classList.toggle('rotate')
})

// user online / offline alert
if (navigator.onLine) {
  alert("User is online")
} else {
  alert("User is offline")
}