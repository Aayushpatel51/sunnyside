const toggle = document.getElementById('toggle');
const rightcontainer = document.getElementById('right-container')
toggle.onclick = function(){
    rightcontainer.classList.toggle('active');
}