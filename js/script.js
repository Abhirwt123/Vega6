
let navbar = document.querySelector(".wrap-2 .navbar_menu");
document.querySelector('.menu-bar i').addEventListener("click", function (e) {
    e.preventDefault()
    navbar.style.left = "0";
});
document.querySelector('.close-bar i').addEventListener("click", function () {
    console.log(this)
    navbar.style.left = "-370px";
});



function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -1) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});


const showGalleryImages = () => {
    const popupWrap = document.querySelectorAll('#gallery img');
    const popupBody = document.querySelector(".popup-body img")
    const popupDialog = document.querySelector(".popup-dialog");
    const popup = document.getElementById("popup");
    const popupImgWrap = document.querySelector('.popup-body');
    popupWrap.forEach((img) => {
        img.addEventListener("click", () => {
            popupBody.setAttribute('src', `${img.src}`)
            popupDialog.classList.toggle('activeImg')
        })
    })
    popup.addEventListener('click', () => {
        popupDialog.classList.remove('activeImg')
    })

    popupImgWrap.addEventListener('click', (e) => {
        e.stopPropagation()
    })


}
showGalleryImages()