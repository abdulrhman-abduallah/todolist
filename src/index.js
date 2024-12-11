import "./styles.css"

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var detail = document.createElement("SPAN");
  detail.className = "details";
  var txt_det = document.createTextNode("Details")
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  detail.appendChild(txt_det);
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(detail);
}




// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Click on



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  //document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  
  var detail = document.createElement("SPAN");
  detail.className = "details";
  var txt_det = document.createTextNode("Details")
  detail.appendChild(txt_det);
  myNodelist[i].appendChild(detail);


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};

document.getElementById("addbtn").addEventListener("click",newElement);

const form = document.querySelector("#form_data");

form.addEventListener("submit",(e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const entries = Object.fromEntries(data.entries());
 // console.log(entries)
  localStorage.setItem("data",entries);
  localStorage.getItem("data");
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  document.getElementById("form_data").reset();
});
