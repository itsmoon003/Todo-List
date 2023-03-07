document.querySelector("form").addEventListener("submit", todo);

function todo(event){
    event.preventDefault();
    let task_name = document.querySelector("#task").value

    let tRow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText=task_name;

    let td2 = document.createElement("td");
    td2.innerText= "Not Completed";
    td2.addEventListener("click", updateStatus)

    let td3 = document.createElement("td");
    td3.innerText="Delete";
    td3.addEventListener("click", deletetodo)

    tRow.append(td1, td2, td3);
    document.querySelector("tbody").append(tRow);

    function deletetodo(event){
      event.target.parentNode.remove();
    }

    function updateStatus(){
        if(td2.innerText="Not Completed"){
            td2.innerText="Completed";
        }
              
    }
}