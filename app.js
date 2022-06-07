const marker = document.querySelector('#marker');
const menu = document.querySelector('.navbar');

function indicator(event){
    marker.style.left = `${event.offsetLeft}px`;
    marker.style.width = `${event.offsetWidth}px`;
}

function openPage(pageName, elmnt, color) {
    
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    
    document.getElementById(pageName).style.display = "block";
  
    
    elmnt.style.backgroundColor = color;
}
  
// function show() {
//     document.getElementById('image')
//             .style.display = "block";

//     document.getElementById('btnID')
//             .style.display = "none";
// }
document.getElementById("defaultOpen").click();

