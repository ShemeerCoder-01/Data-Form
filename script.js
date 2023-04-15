document.getElementById('btn').addEventListener('click',fetchData);
let id = 1;
let arr = [];
function fetchData(){
    let name = document.getElementById("name").value;
    let profession = document.getElementById("profession").value;
    let age = document.getElementById("age").value;

    if(name == '' || profession == '' || age ==''){
        document.getElementById('message').innerText = "Error : Please Make sure All the fields are filled before adding in an employee !";
        document.getElementById('message').style.color = "red";
        return;
    }
    if(arr.length == 0){
        id = 1;
    }
    else{
        id = arr.length+1;
    }

    arr.push({id:id++,Name:name,Profession:profession,Age:age});

    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";

    document.getElementById('message').innerText = "Success : Employee Added!";
    document.getElementById('message').style.color = "Green";



    
    renderElement(arr);

   
}

function removeItem(id){
    console.log(id);
    let itemToBeRemoved = document.getElementById(id);
    document.getElementById("div-list").removeChild(itemToBeRemoved);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].id);
       if(id.includes(arr[i].id)){
            console.log(arr[i].id);
            arr.splice(i,1);
            console.log(arr);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i].id = i + 1;
    }
    if(arr.length == 0){
        document.getElementById('message').innerText = "You have 0 Employees.";
        document.getElementById('message').style.color = "Gray";

    }


    renderElement(arr);
}

function renderElement(arr){
    let divlist = document.getElementById('div-list');
    divlist.innerHTML = '';
    for(let i = 0; i < arr.length; i++){
        let div = document.createElement('div');
        let deleteButton = document.createElement('button');
        div.setAttribute('id',`list-item-${arr[i].id}`);
        div.classList.add("list");
        deleteButton.classList.add("delBtn");
        deleteButton.setAttribute("onclick", `removeItem("list-item-${arr[i].id}")`);
        deleteButton.textContent = "Delete User";
        div.innerHTML = `<div id = "inner"><span class ="row-item">${arr[i].id}.</span><span class ="row-item">Name:${arr[i].Name}</span><span class ="row-item">Profession:${arr[i].Profession}</span><span class ="row-item">Age:${arr[i].Age}</span></div>`;

        div.appendChild(deleteButton);
        divlist.appendChild(div);
    }

   
}