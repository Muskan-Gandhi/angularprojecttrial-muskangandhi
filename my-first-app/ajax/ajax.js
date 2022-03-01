// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function() {
//       document.getElementById("demo").innerHTML =
//       this.responseText;
//     }
//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/users",true);
    
//     xhttp.send();
//   }

fetch('https://jsonplaceholder.typicode.com/users')
.then((apidate) =>{
    return apidate.json();
})
.then((actualdata)=>{
    console.log(actualdata);
})
.catch(error => {
    console.log(error);
} )