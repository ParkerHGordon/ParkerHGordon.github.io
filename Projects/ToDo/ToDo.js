var buttonAdd = document.getElementById("buttonAdd");
var numOfThings = 0;
var checkboxes = [];
var buttonComplete = document.getElementById("buttonComplete");
var buttonClear = document.getElementById("buttonClear");
var newList = [];
var checkboxNum;
var list = document.getElementById("list");
buttonAdd.onclick = function () {
    numOfThings++;
    var text = document.getElementById("addText").value;
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input"); // the idea of using checkboxes was given to me by le
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkboxes[numOfThings - 1] = checkbox;
    listItem.id = "li"; //might need more
    listItem.className = "todo";
    listItem.innerHTML = text;
    list.appendChild(listItem);
    listItem.appendChild(checkbox);
    var things = document.getElementById("things");
    things.innerHTML = numOfThings + " more things left to do";
};

buttonComplete.onclick = function () {
    var y = numOfThings;
    for (var x = 0; x < y; x++) {
            if ((checkboxes[x]).checked) {
                checkboxes[x].parentElement.className = "done";
            }
            else {
                checkboxes[x].parentElement.className = "todo";
            }
        }
    };
    
buttonClear.onclick = function () {
    var y = numOfThings;
    var w = 0;
    var list = document.getElementById("list");
    for (var x = 0; x < y; x++) {
        var parent = checkboxes[x].parentElement;
        //if completed, remove and reduce numOfThings
        if (parent.className == "done") {
            parent.parentElement.removeChild(parent);
            numOfThings--;
            var things = document.getElementById("things");
            things.innerHTML = numOfThings + " more things left to do";
            checkboxes[x] = null;
        }
        //else put it in the temporary newlist and remove it.
        else {
            newList[w] = parent.innerHTML;
            list.removeChild(parent);
            w++;
        }
    }
    
    //after everything is gone, write in the new list
    for (var z = 0; z < w; z++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = newList[z];
        list.appendChild(listItem);
        var oldCheckbox = listItem.lastChild;
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkboxes[z] = checkbox;
        oldCheckbox = listItem.replaceChild(checkbox, oldCheckbox);
    }
};