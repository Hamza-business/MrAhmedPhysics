function composer(...functions) {
    return function (x) {
      return functions.reduceRight((value, func) => func(value), x);
    };
}





// NavBar & its responsive
const pageTitle = document.querySelector('#pageTitle');
function currentPage(current) {
    let elements = [...document.querySelectorAll(`[whtpg="${current}"]`)];
    for (i of elements) {
        i.classList.add("active")
    }
}
currentPage(pageTitle.textContent)


const modeChange = document.querySelectorAll("[mode]");
modeChange.forEach((ele) => {
    ele.addEventListener('click', () => {
        document.body.classList.toggle("dark");
        ele.classList.toggle("moon")
    })
})


const searchbtn = document.getElementById("searchbtn")


const showPops = document.querySelectorAll("[showPop]");
showPops.forEach((ele) => {
    ele.addEventListener('click', () => {
        let popup = document.querySelector(`[popup="${ele.getAttribute("showPop")}"]`);
        popup.classList.toggle("active")
    })
})



const valPhInput = document.querySelector("[valPh='input']");
const valPhbox = document.querySelector("[valPh='box']");
const valPhBtn = document.querySelector("[valPh='codeAsk']");
const valPhcodePlc = document.querySelector("[valPh='codePlace']");


const resentTimer = function(ele){
    let countdown = 60;  
    function updateTimer() {
        ele.textContent = `أعادة الارسال ${countdown}`;
        countdown--;
  
        if (countdown >= 0) {
            setTimeout(updateTimer, 900);
        } else {
            ele.removeAttribute('disabled');
            ele.style.opacity = 1;
            ele.textContent = `أعادة الارسال`;
        }
    }  
    setTimeout(updateTimer, 0);
}
const showValidationBox = function(){
    valPhbox.style.display = "flex";
    setTimeout(() => {
        valPhbox.classList.add("active")
    }, 0);
}
const varificationButton = function(){
    valPhBtn.addEventListener("click", (e)=>{
        e.preventDefault()
        valPhBtn.style.opacity = 0.3;
        valPhBtn.setAttribute("disabled","true");
        valPhInput.setAttribute("disabled","true");

        valPhcodePlc.style.display = "block";
        setTimeout(() => {
            valPhcodePlc.style.opacity = 1;
        }, 0);
        valPhBtn.textContent = "اعادة الارسال 60"
        resentTimer(valPhBtn)
    });
}
varificationButton()



const phoneInputs = document.querySelectorAll("[type='tel']");
let chackState = [false, false, false];
function studentPhoneCheck(phone) {
    if (phone.value[0] != "0") {
        phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يبدأ الرقم بصفر"
        phone.style.borderColor = 'red'
        chackState[0] = false;
    } else {
        if (phone.value.length != 11) {
            phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يتكون الرقم من 11 رقم"
            phone.style.borderColor = 'red'
            chackState[0] = false;
        } else {
            phone.closest("[phonNumBox]").querySelector(".help").textContent = ""
            phone.style.borderColor = ''
            chackState[0] = true;
            showValidationBox()
        }
    }
}
function phoneCheck(phone, second, i) {
    if (phone.value[0] != "0") {
        phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يبدأ الرقم بصفر"
        phone.style.borderColor = 'red'
        chackState[i] = false;
    } else {
        if (phone.value.length != 11) {
            phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يتكون الرقم من 11 رقم"
            phone.style.borderColor = 'red'
            chackState[i] = false;
        } else {
            if(phone.value == second.value){
                phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يختلف رقم ولي الامر الاول عن الثاني"
                phone.style.borderColor = 'red'
                chackState[i] = false;
            }else{
                phone.closest("[phonNumBox]").querySelector(".help").textContent = ""
                phone.style.borderColor = ''
                chackState[i] = true;
            }
        }
    }
}

phoneInputs[0].addEventListener('change', ()=>{
    studentPhoneCheck(phoneInputs[0]);
})
phoneInputs[1].addEventListener('change', ()=>{
    phoneCheck(phoneInputs[1], phoneInputs[2], 1);
})
phoneInputs[2].addEventListener('change', ()=>{
    phoneCheck(phoneInputs[2], phoneInputs[1], 2);
})


document.getElementById("submit")?.addEventListener("click", function (event) {
    if (!(chackState[0] && chackState[1] && chackState[2])) {
        event.preventDefault()
        alert("يرجى ادخال البيانات المطلوبة بشكل صحيح")
    }
});