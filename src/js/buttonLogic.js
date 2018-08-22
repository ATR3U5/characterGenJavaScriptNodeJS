var focusbutton = false;
var classbutton = false;
var descriptorbutton = false;

$(document).ready(function() {

    $("#descriptorbtn").click(function(){

        if(descriptorbutton){

            $("#descriptorbtn").html("CLICK TO LOCK");
            document.getElementById("descriptorbtn").classList.remove('btnLocked');
            document.getElementById("desccard").classList.remove('card-locked');
            descriptorbutton = false;

        }
        else{
            $("#descriptorbtn").html("LOCKED");
            document.getElementById("descriptorbtn").classList.add('btnLocked');
            document.getElementById("desccard").classList.add('card-locked');
            descriptorbutton = true;
        }
    });

    $("#classbtn").click(function(){

        if(classbutton){

            $("#classbtn").html("CLICK TO LOCK");
            document.getElementById("classbtn").classList.remove('btnLocked');
            document.getElementById("classcard").classList.remove('card-locked');
            classbutton = false;

        }
        else{
            $("#classbtn").html("LOCKED");
            document.getElementById("classbtn").classList.add('btnLocked');
            document.getElementById("classcard").classList.add('card-locked');
            classbutton = true;
        }
    });

    $("#focusbtn").click(function(){

        if(focusbutton){

            $("#focusbtn").html("CLICK TO LOCK");
            document.getElementById("focusbtn").classList.remove('btnLocked');
            document.getElementById("focuscard").classList.remove('card-locked');
            focusbutton = false;

        }
        else{
            $("#focusbtn").html("LOCKED");
            document.getElementById("focusbtn").classList.add('btnLocked');
            document.getElementById("focuscard").classList.add('card-locked');
            focusbutton = true;
        }
    });
});

// storage functionality

$(document).ready(function(){

    if(localStorage.length===0) {
        if (typeof(Storage) !== "undefined") {
            localStorage.setItem("descriptor", "-");
            $("#savedDescriptor").html(localStorage.descriptor);
            localStorage.setItem("class", "-");
            $("#savedClass").html(localStorage.class);
            localStorage.setItem("focus", "-");
            $("#savedFocus").html(localStorage.focus);


        } else {
            alert("Your browser does not support storing of character templates!")
        }
    }
    else{

        $("#savedDescriptor").html(localStorage.descriptor);
        $("#savedClass").html(localStorage.class);
        $("#savedFocus").html(localStorage.focus);

    }


    $("#savebtn").click(function () {
       saveStorage();
    });

    $("#loadbtn").click(function () {
       loadStorage();
    });

});

function saveStorage(){

    localStorage.descriptor = this.currentDescriptor;
    $("#savedDescriptor").html(localStorage.descriptor);
    localStorage.class = this.currentClass;
    $("#savedClass").html(localStorage.class);
    localStorage.focus = this.currentFocus;
    $("#savedFocus").html(localStorage.focus);

}

function loadStorage(){

    this.currentDescriptor = localStorage.descriptor;
    this.currentClass = localStorage.class;
    this.currentFocus = localStorage.focus;

    createCharacter();
}



