function add(){
    let n=document.getElementById("name").value;
    let b=document.getElementById("branch").value;
    let c=document.getElementById("company").value;
    let s=document.getElementById("status").value;
    let arr=JSON.parse(localStorage.getItem("students")||"[]");
    arr.push({n,b,c,s});
    localStorage.setItem("students",JSON.stringify(arr));
    alert("Added!");
}
function goBack(){
    window.location.href="index.html";
}
function goDash(){
    window.location.href="dashboard.html";
}
window.onload=function(){
    let table=this.document.getElementById("table");
    if(!table) return;
    let arr=JSON.parse(localStorage.getItem("students")||"[]");
    arr.forEach(obj=>{
        let row=table.insertRow();
        row.insertCell(0).innerText=obj.n;
        row.insertCell(1).innerText=obj.b;
        row.insertCell(2).innerText=obj.c;
        row.insertCell(3).innerText=obj.s;
    });
};