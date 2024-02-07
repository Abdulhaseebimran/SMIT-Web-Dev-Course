// Events in JavaScript

function updateImage (){
    console.log(event.target);
    let image = document.getElementById("image");
    image.className = "big";
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0YB_jgHsL7kzjy-UC671cOfQq4RcZAZJqA&usqp=CAU";
}

function removeImage() {
    console.log(event.target);
    let image = document.getElementById("image");
    image.className = "small";
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRim43FOsSU9F-TXSSABOeBOKxC2UPRthwJRA&usqp=CAU";
}


function getLink(){
    console.log(event.target);
    let link = document.getElementById("link1");
    let address = link.href;
    let linkID = link.id;
    console.log(address);
    console.log(linkID);
    link.style.color = "red";
    link.style.textDecoration = "none";
    link.style.fontSize = "30px";
    link.style.fontWeight = "bold";
}


let tagName = document.getElementsByTagName("a");
console.log(tagName);
console.log(tagName[0]);

function submit(){
    let gender = document.getElementsByName("gender");
    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked === true){
            console.log(gender[i].value);
        }
        // console.log(gender[i].checked);
    }
}