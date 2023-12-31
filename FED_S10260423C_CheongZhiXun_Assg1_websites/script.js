// For shop
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("item-container");
  if (c == "all") c = "";
  // Add the "dont-show" class (display:none) to the elements that do not fit criteria, and remove the "dont-show" class from the elements that are selected
  for (i = 0; i < x.length; i++) {
    AddClass(x[i], "dont-show");
    if (x[i].className.indexOf(c) > -1) RemoveClass(x[i], "dont-show");
  }
}

// Hide elements that are not selected
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


// Show filtered elements
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("sidebar-filter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("menu-btn").style.display = "none";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("menu-btn").style.display = "block";
}

