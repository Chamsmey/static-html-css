let butonLeftDom = document.querySelector("#btn_dropdown");
let isShow = false;
const hideAndShow = (body,icon)=>{
    console.log(body);
    console.log(icon);
    isShow = !isShow;
    let iconBtnDom = document.getElementById(icon);
    let contentBodyDom= document.getElementById(body);
    isShow ? iconBtnDom.style.transform ="rotate(90deg)" : iconBtnDom.style.transform ="rotate(0deg)";
    isShow ? contentBodyDom.style.display="block" :contentBodyDom.style.display='none';
}
