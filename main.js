let inptuBox = document.getElementById("input");
let listAll = document.getElementById("list");

function addTask(){

    if (inptuBox.value === '') {
        alert("You Must Write Something? "); 

    }else{

        let li = document.createElement("li");
        li.innerHTML = inptuBox.value;
        listAll.appendChild(li);
        let rem = document.createElement("span");
        rem.innerHTML = "\u00d7";
        li.appendChild(rem);
    }
    
    inptuBox.value = "";
    saveData();
}

listAll.addEventListener("click", function(e){

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("cheched");
        saveData();

    }else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showData(){
    listAll.innerHTML = localStorage.getItem("data");
}

showData();