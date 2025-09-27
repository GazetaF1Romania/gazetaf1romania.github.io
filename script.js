const preview = document.getElementById("preview");
const links = document.querySelectorAll('.tooltip-link');
const imageList = [
    "coperti/12.webp",
    "coperti/11.webp",
    "coperti/10.webp",
    "coperti/9.webp",  // Nr 9
"coperti/8.webp",  // Nr 8
"coperti/7.webp",  // Nr 7
"coperti/6.png",   // Nr 6
"coperti/5.png",   // Nr 5
"coperti/4.webp",  // Nr 4
"coperti/3.png",   // Nr 3
"coperti/2.png",   // Nr 2
"coperti/1.png"    // Nr 1
];
links.forEach((link, index) => {
    link.dataset.preview = imageList[index];
    link.addEventListener('mousemove', e => {
        preview.src = link.dataset.preview;
        preview.style.display = "block";
        preview.style.top = (e.clientY + 20) + "px";
        preview.style.left = (e.clientX + 20) + "px";
    });
    link.addEventListener('mouseleave', () => {
        preview.style.display = "none";
    });
});
