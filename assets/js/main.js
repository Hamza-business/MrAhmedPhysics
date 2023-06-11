// NavBar & its responsive
const pageTitle = document.querySelector('#pageTitle');
function currentPage(current){
    let elements = [...document.querySelectorAll(`[whtpg="${current}"]`)];
    for(i of elements){
        i.classList.add("active")
    }
}
currentPage(pageTitle.textContent)


const modeChange = document.querySelectorAll("[mode]");
modeChange.forEach((ele)=>{
    ele.addEventListener('click', ()=>{
        document.body.classList.toggle("dark");
        ele.classList.toggle("moon")
    })
})


const searchbtn = document.getElementById("searchbtn")


const showPops = document.querySelectorAll("[showPop]");
showPops.forEach((ele)=>{
    ele.addEventListener('click', ()=>{
        let popup = document.querySelector(`[popup="${ele.getAttribute("showPop")}"]`);
        popup.classList.toggle("active")
    })
})
