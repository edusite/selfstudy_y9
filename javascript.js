const menu_icon = document.querySelector("#menu-icon");
const close_icon = document.querySelector("#close-icon");
const header_icon = document.querySelector(".header-right");
const navs = document.querySelector(".navs");

menu_icon.onclick = () => {
    header_icon.classList.toggle('close-mode');
    navs.classList.toggle('open');
    header_icon.classList.remove('menu-mode');
    navs.classList.remove('close');
}
close_icon.onclick = () => {
    header_icon.classList.remove('close-mode');
    navs.classList.remove('open');
    header_icon.classList.toggle('menu-mode');
    navs.classList.toggle('close');
}

// FOOTER
const msg_input = document.querySelector(".form-control");
const btn = document.querySelector("#button-addon2");
btn.addEventListener('click', ()=> {
    if (msg_input.value != ''){
        alert('You message has been successfully sent. Thank You!');
    }
    else{
        alert('Please enter your message first.')
    }
});


