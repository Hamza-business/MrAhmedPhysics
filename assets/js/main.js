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
        i?.classList.add("active")
    }
}
currentPage(pageTitle?.textContent)


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



// const valPhInput = document.querySelector("[valPh='input']");
// const valPhbox = document.querySelector("[valPh='box']");
// const valPhBtn = document.querySelector("[valPh='codeAsk']");
// const valPhcodePlc = document.querySelector("[valPh='codePlace']");
// const codeSubmit = document.querySelector('[valPh="codeSubmit"]');

// const resentTimer = function(ele){
//     let countdown = 60;  
//     function updateTimer() {
//         ele.textContent = `أعادة الارسال ${countdown}`;
//         countdown--;
  
//         if (countdown >= 0) {
//             setTimeout(updateTimer, 900);
//         } else {
//             ele.removeAttribute('disabled');
//             ele.style.opacity = 1;
//             ele.textContent = `أعادة الارسال`;
//         }
//     }  
//     setTimeout(updateTimer, 0);
// }
// const showValidationBox = function(){
//     valPhbox.style.display = "flex";
//     setTimeout(() => {
//         valPhbox.classList.add("active")
//     }, 0);
// }
// const varificationButton = function(){
//     valPhBtn?.addEventListener("click", (e)=>{
//         e.preventDefault()
//         valPhBtn.style.opacity = 0.3;
//         if(valPhBtn.getAttribute("disabled") != "true"){
//             valPhBtn.textContent = "اعادة الارسال 60";
//             resentTimer(valPhBtn)
//         }
//         valPhBtn.setAttribute("disabled","true");
//         valPhInput.setAttribute("disabled","true");

//         valPhcodePlc.style.display = "block";
//         setTimeout(() => {
//             valPhcodePlc.style.opacity = 1;
//         }, 0);
//     });
// }
// varificationButton()

// const checkCodeLen = function(){
//     valPhcodePlc?.addEventListener('input', ()=>{
//         if(valPhcodePlc.value.length == 6){
//             codeSubmit.style.display = "block";
//             setTimeout(() => {
//                 codeSubmit.classList.add("active");
//             }, 0);
//         }
//         else{
//             codeSubmit.classList.remove("active");
//             setTimeout(() => {
//                 codeSubmit.style.display = "none";
//             }, 0);
//         }
//     })
// }
// checkCodeLen()






// const phoneInputs = document.querySelectorAll("[type='tel']");
// let chackState = [false, false, false];
// function studentPhoneCheck(phone) {
//     if (phone.value[0] != "0") {
//         phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يبدأ الرقم بصفر"
//         phone.style.borderColor = 'red'
//         chackState[0] = false;
//     } else {
//         if (phone.value.length != 11) {
//             phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يتكون الرقم من 11 رقم"
//             phone.style.borderColor = 'red'
//             chackState[0] = false;
//         } else {
//             phone.closest("[phonNumBox]").querySelector(".help").textContent = ""
//             phone.style.borderColor = ''
//             chackState[0] = true;
//             showValidationBox()
//         }
//     }
// }
// function phoneCheck(phone, second, i) {
//     if (phone.value[0] != "0") {
//         phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يبدأ الرقم بصفر"
//         phone.style.borderColor = 'red'
//         chackState[i] = false;
//     } else {
//         if (phone.value.length != 11) {
//             phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يتكون الرقم من 11 رقم"
//             phone.style.borderColor = 'red'
//             chackState[i] = false;
//         } else {
//             if(phone.value == second.value){
//                 phone.closest("[phonNumBox]").querySelector(".help").textContent = "يجب أن يختلف رقم ولي الامر الاول عن الثاني"
//                 phone.style.borderColor = 'red'
//                 chackState[i] = false;
//             }else{
//                 phone.closest("[phonNumBox]").querySelector(".help").textContent = ""
//                 phone.style.borderColor = ''
//                 chackState[i] = true;
//             }
//         }
//     }
// }

// phoneInputs[0]?.addEventListener('input', ()=>{
//     studentPhoneCheck(phoneInputs[0]);
// })
// phoneInputs[1]?.addEventListener('input', ()=>{
//     phoneCheck(phoneInputs[1], phoneInputs[2], 1);
// })
// phoneInputs[2]?.addEventListener('input', ()=>{
//     phoneCheck(phoneInputs[2], phoneInputs[1], 2);
// })



let passEqualtCheck = false
const passwordInputs = [...document.querySelectorAll('[type="password"]')]
passwordInputs.forEach((passInp, i)=>{
    passInp?.addEventListener('change', ()=>{
        let next = passwordInputs.at(i+1 - 2);
        if(passInp.value != next.value){
            passInp.closest(".field").querySelector(".help").textContent = "يجب توافق كلمة المرور";
            next.closest(".field").querySelector(".help").textContent = "يجب توافق كلمة المرور";
            passEqualtCheck = false;
        }else{
            passInp.closest(".field").querySelector(".help").textContent = "";
            next.closest(".field").querySelector(".help").textContent = "";
            passEqualtCheck = true;
        }
    })
})




// document.getElementById("submit")?.addEventListener("click", function (event) {
//     if (!(chackState[0] && chackState[1] && chackState[2] & passEqualtCheck)) {
//         event.preventDefault()
//         alert("يرجى ادخال البيانات المطلوبة بشكل صحيح")
//     }
// });









function payWayShow(){
    let clicko = document.getElementById("selectedShow");
    clicko.classList.toggle("active");
    let iconro = document.getElementById("iconro");
    iconro.classList.toggle("active");
    let paySection = document.getElementById("section");
    paySection.classList.toggle("active");
}

function payouts(){
    try{
        let clicko = document.getElementById("selectedShow");
        let payo = document.getElementById("payWay");
        let ta = document.getElementById("taxs");
        let elese = document.querySelectorAll(".paywayo");
        elese.forEach((ele)=>{
            ele.addEventListener("click",()=>{
                let pa1 = ele.querySelectorAll(".togeto")[0];
                let ta1 = ele.querySelectorAll(".togeto")[1];
                payo.innerHTML = pa1.textContent
                ta.innerHTML = ta1.textContent
                elese.forEach((el)=>{
                    el.classList.remove("active")
                })
                ele.classList.add("active")
            })
        })
    }catch(e){

    }
}
payouts()

















// $(document).ready(function () {
//     $('.sub-btn')?.click(function () {
//         $(this).next('.sub-menu').slideToggle();
//         $(this).parent().toggleClass('active')
//     });

//     $('.menu-btn')?.click(function () {
//         $('.side-bar').addClass('active');
//         $('.menu-btn').css("visibility", "hidden");
//     });

//     $('.close-btn')?.click(function () {
//         $('.side-bar').removeClass('active');
//         $('.menu-btn').css("visibility", "visible");
//     });
// });










function notificationPopShowHide(){
    setTimeout(() => {
        document.getElementById('pops-conatainer').style.display = 'block';
        document.querySelector('.trans').classList.add("showNot");
    }, 500);
    document.onclick = function(){
        document.querySelector('.trans').classList.remove("showNot");
    }
    setTimeout(() => {
            document.getElementById('pops-conatainer').style.display = 'none';
            document.querySelector('.trans').classList.remove("showNot");
    }, 12000);
}
// notificationPopShowHide()






// const alistParent = document.querySelectorAll(".alistParent");
// alistParent.forEach((ele)=>{
//     ele?.addEventListener('click', ()=>{
//         ele.parentElement.classList.toggle("active");
//     })
// })






// $(document).ready(function () {
//     $('#imageInputCheck').change(function () {
//         if ($(this).is(':checked')) {
//             $('#imageInput').show();
//         } else {
//             $('#imageInput').hide();
//         }
//     });
// });









function viewImage(input, imageId) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const image = input.parentNode.querySelector('img');
        image.src = e.target.result;
    }

    reader.readAsDataURL(file);

    const fileName = input.files[0].name;
    const fileNameSpan = input.parentNode.parentNode.querySelector('.file-name');
    fileNameSpan.textContent = fileName;
}









const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const audioPlayer = document.getElementById('audioPlayer');
let mediaRecorder = null;
let chunks = [];
const getMicrophoneReady = function(fn){
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream =>{
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = (e) => {
                chunks = [e.data];
            }

            mediaRecorder.onstop = ()=>{
                let audioFile = new Blob(chunks, {'type': 'audio/mp3; codecs=opus'});
                audioURL = URL.createObjectURL(audioFile);
                audioPlayer.src = audioURL;
            }
            fn()
        })
        .catch(err =>{
            window.open('/learn','_self')
            // Error msg
        })
    }
}
const record = ()=>{
    mediaRecorder.start();
}
const stop = ()=>{
    mediaRecorder.stop()
}

recordButton?.addEventListener('click', (e)=>{
    e.preventDefault();
    getMicrophoneReady(record);
    recordButton?.classList.add('is-hidden');
    audioPlayer?.classList.add('is-hidden');
    stopButton?.classList.remove('is-hidden');
})
stopButton?.addEventListener('click', (e)=>{
    e.preventDefault()
    stop();
    recordButton?.classList.remove('is-hidden');
    audioPlayer?.classList.remove('is-hidden');
    stopButton?.classList.add('is-hidden');
})













// tinymce?.init({
//     selector: '#markupTextarea',
//     plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
//     toolbar: 'undo redo | formatselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | removeformat | help'
// });












const inputToChange = document.querySelectorAll(".inputToChange");
const saveButton = document.querySelectorAll(".save-button");

inputToChange.forEach((ele)=>{
    ele?.addEventListener('input', ()=>{
        ele.nextElementSibling.classList.add('btnShow')
    })
})



const addRadioBtn = document.getElementById('addRadioBtn');
const additionalRadios = document.getElementById('additionalRadios');

function addRadioInput() {
    const radioWrapper = document.createElement('div');
    radioWrapper.className = 'control is-flex is-align-items-center';

    const radioLabel = document.createElement('label');
    radioLabel.className = 'radio';

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = 'radioGroup';

    const radioText = document.createElement('input');
    radioText.type = 'text';
    radioText.className = 'input';

    radioLabel.appendChild(radioInput);
    radioWrapper.appendChild(radioLabel);
    radioWrapper.appendChild(radioText);

    additionalRadios.appendChild(radioWrapper);
}

addRadioBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    addRadioInput()
});