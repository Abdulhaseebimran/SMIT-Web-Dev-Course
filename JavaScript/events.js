// Events

function clickEvent() {
    console.log(event.target);

    let name = "Abdul Haseeb";
    alert("Hello, " + name);
}

function applyStyle(){
    console.log(event.target);
    event.target.style.color='green';
    event.target.style.backgroundColor='red';
    event.target.style.fontSize='30px';
    if(event.type === "mouseout"){
        event.target.style.color='black';
        event.target.style.backgroundColor='white';
        event.target.style.fontSize='16px';
    }
}

function expandText(){
    console.log(event.target);
    let lessText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, amet?"
    let fullText = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

    // console.log(changeText.textContent);

    let text = document.getElementById('text');
    let changeText = document.getElementById('changeText');

    if(changeText.textContent === "See More"){
        text.innerHTML = fullText;
        changeText.textContent = "See Less";
    }else{
        text.innerHTML = lessText;
        changeText.textContent = "See More";
    }

    // changeText.textContent = "See Less";
    // text.innerHTML = fullText;
    // text.style.color = 'red';
}

// onfocus : input ke andar click karte hi
// onblur : input ke andar se bahar click karte hi


function submitForm(){
    // let name = document.getElementById('name');
    // console.log(name.value);
    // name.value = "";

    let gender = document.getElementsByName("gender");
    console.log(gender);
    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            console.log(gender[i].value);
        }
    }

}

// let name = document.getElementById('heading');
// name.innerHTML = "<span>Abdul Haseeb Imran</span>";

    