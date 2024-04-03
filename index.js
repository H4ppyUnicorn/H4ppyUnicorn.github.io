// Я ненавижу JavaScript. © HappyUnicorn
let main_div = document.querySelector(".main")
let content_div = document.querySelector(".content")
content_div.style.display = "none"
setTimeout(function(){
    main_div.style.display = "none"
}, "2000")
setTimeout(function(){
    content_div.style.display = "block"
}, "2000")