const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    // 기본 기능 막음
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    // 이벤츠 추가
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName(){
    //로컬스토리지에 아이템 추가
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}
init();
