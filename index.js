
document.querySelector("form").addEventListener("submit",todo);
function todo(event){
    event.preventDefault();
   var task_name=document.querySelector("#task").value;
    var task_prio=document.querySelector("#priority").value;
    // console.log(task_name,task_prio);
    var trow=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td")
    trow.append(td1,td2,td3);
    document.querySelector("tbody").append(trow);

td1.innerText=task_name;

td2.innerText=task_prio;
if(task_prio=="High")
{
td2.style.backgroundColor="red";
}
else{
    td2.style.backgroundColor="green";
}



td3.innerText="Delete";
td3.style.backgroundColor="red";
td3.addEventListener("click",myFun)
document.querySelector("#task").value="";
document.querySelector("#priority").value="";


}
function myFun(event){
    event.target.parentNode.remove()
}

