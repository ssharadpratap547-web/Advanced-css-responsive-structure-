const themeBtn=document.getElementById('themeToggle');

themeBtn.addEventListener('click',()=>{
const currentTheme=document.documentElement.getAttribute('data-theme');

if(currentTheme==='dark'){
document.documentElement.removeAttribute('data-theme');
}else{
document.documentElement.setAttribute('data-theme','dark');
}
});
