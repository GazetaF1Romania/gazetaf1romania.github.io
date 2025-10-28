const preview = document.getElementById("preview");
const links = document.querySelectorAll('.tooltip-link');
const imageList = [   //aici punem copertile, de la cea mai noua la cea mai veche editie
"coperti/Screenshot_20251028_184556_Brave.png", 
  "coperti/Screenshot_20251021_185027_ReadEra.png", 
"coperti/14.png",
    "coperti/13.webp",
    "coperti/12.webp",
    "coperti/11.webp",
    "coperti/10.webp",
    "coperti/9.webp",  
"coperti/8.webp",  
"coperti/7.webp",  
"coperti/6.png",   
"coperti/5.png",   
"coperti/4.webp",  
"coperti/3.png",   
"coperti/2.png",   
"coperti/1.png"    
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
