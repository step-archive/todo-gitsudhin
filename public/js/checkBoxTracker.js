const check=function(){
  let list=document.querySelectorAll('input');
  list.forEach((cb)=>{
    let title=cb.id.slice(3);
    if(document.getElementById(cb.id).checked){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        document.getElementById(cb.id).checked=true;
      };
      xhttp.open("GET", `/markDone${title}`, true);
      xhttp.send();
    }else{
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        document.getElementById(cb.id).checked=false;
      };
      xhttp.open("GET", `/markNotDone${title}`, true);
      xhttp.send();
    }
  })
};

// const previewTodo=function(){
//   let list=document.querySelectorAll('button');
//   list.forEach((button)=>{
//     console.log(button.id);
//   })
//
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     // document.getElementById(cb.id);
//   };
//   xhttp.open("GET", `/view.html`, true);
//   xhttp.send();
// }
