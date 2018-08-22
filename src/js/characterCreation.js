var descRandom;
var classRandom;
var focusRandom;
var currentCharacter;
var currentDescriptor;
var currentClass;
var currentFocus;

var possibleRandomFoci = ["Bears a Halo of Fire", "Carries a Quiver", "Commands Mental Powers", "Controls Beasts", "Controls Gravity", "Crafts Illusions", "Crafts Unique Objects", "Employs Magnetism", "Entertains", "Exists Partially Out of Phase", "Explores Dark Places", "Fights with Panache", "Focuses Mind over Matter", "Fuses Flesh and Steel", "Howls at the Moon", "Hunts with Great Skill", "Leads", "Lives in the Wilderness", "Masters Defense", "Masters Weaponry", "Murders", "Rages", "Rides the Lightning", "Talks to Machines", "Wears a Sheen of Ice", "Wields Power with Precision", "Wields Two Weapons at Once", "Works Miracles", "Works the Back Alleys"];
var possibleRandomClass = ["Glaive", "Nano", "Jack", "Seeker", "Glint"];
var possibleRandomDescriptor = ["Charming", "Clever", "Graceful", "Intelligent", "Learned", "Mystical/Mechanical", "Rugged", "Stealthy", "Strong", "Strong-Willed", "Swift", "Tough"];

var possibleAssassinFoci = ["Carries a Quiver", "Controls Gravity", "Crafts Illusions", "Entertains", "Exists Partially Out of Phase", "Explores Dark Places", "Hunts with Great Skill", "Masters Weaponry", "Murders", "Rides the Lightning", "Talks to Machines", "Wields Power with Precision", "Wields Two Weapons at Once", "Works the Back Alleys"];
var possibleAssassinClass = ["Glaive", "Jack", "Glint"];
var possibleAssassinDescriptor = ["Charming", "Clever", "Graceful", "Stealthy", "Swift"];

var possibleMageFoci = ["Bears a Halo of Fire", "Commands Mental Powers", "Controls Gravity", "Crafts Illusions", "Crafts Unique Objects", "Employs Magnetism", "Focuses Mind over Matter", "Masters Weaponry", "Rides the Lightning", "Talks to Machines", "Wears a Sheen of Ice", "Wields Power with Precision", "Works Miracles"];
var possibleMageClass = ["Nano", "Jack", "Glint"];
var possibleMageDescriptor = ["Charming", "Clever", "Intelligent", "Learned", "Mystical/Mechanical", "Strong-Willed"];

var possibleTankFoci = ["Bears a Halo of Fire", "Controls Beasts", "Crafts Unique Objects", "Explores Dark Places", "Fights with Panache", "Fuses Flesh and Steel", "Howls at the Moon", "Hunts with Great Skill", "Leads", "Lives in the Wilderness", "Masters Defense", "Masters Weaponry", "Rages", "Wields Two Weapons at Once"];
var possibleTankClass = ["Glaive", "Seeker"];
var possibleTankDescriptor = ["Charming", "Clever", "Graceful", "Rugged", "Strong", "Strong-Willed", "Swift", "Tough"];

function newCharacter(descriptor, characterClass, focus){
    this.currentDescriptor = descriptor;
    this.currentClass = characterClass;
    this.currentFocus = focus;
}

function randomNumber(inputArray){
    this.randomInt = Math.floor((Math.random() * inputArray.length));
}

function createCharacter(){

    currentCharacter = new newCharacter(currentDescriptor, currentClass, currentFocus);

    $("#title").html('You are a ' + currentCharacter.currentDescriptor + ' ' + currentCharacter.currentClass + ' who ' + currentCharacter.currentFocus + '!');

    $("#class").html(currentCharacter.currentClass);
    $("#descriptor").html(currentCharacter.currentDescriptor);
    $("#focus").html(currentCharacter.currentFocus);

}

$(document).ready(function() {

    descRandom = new randomNumber(possibleRandomDescriptor);
    classRandom = new randomNumber(possibleRandomClass);
    focusRandom = new randomNumber(possibleRandomFoci);

    currentDescriptor = possibleRandomDescriptor[descRandom.randomInt];
    currentClass = possibleRandomClass[classRandom.randomInt];
    currentFocus = possibleRandomFoci[focusRandom.randomInt];

    createCharacter();

    $("#characterButton").click(function () {

        if (!descriptorbutton) {
            descRandom = new randomNumber(possibleRandomDescriptor);
            currentDescriptor = possibleRandomDescriptor[descRandom.randomInt];
        }
        if (!classbutton) {
            classRandom = new randomNumber(possibleRandomClass);
            currentClass = possibleRandomClass[classRandom.randomInt];
        }
        if (!focusbutton) {
            focusRandom = new randomNumber(possibleRandomFoci);
            currentFocus = possibleRandomFoci[focusRandom.randomInt];
        }

        createCharacter();

    });

    //characterTemplates - players can opt for a certain "type" of character and the creator will adjust accordingly

    $("#assassin").click(function(){

        if(!descriptorbutton){
            descRandom = new randomNumber(possibleAssassinDescriptor);
            currentDescriptor = possibleAssassinDescriptor[descRandom.randomInt];
        }
        if(!classbutton){
            classRandom = new randomNumber(possibleAssassinClass);
            currentClass = possibleAssassinClass[classRandom.randomInt];
        }
        if(!focusbutton){
            focusRandom = new randomNumber(possibleAssassinFoci);
            currentFocus = possibleAssassinFoci[focusRandom.randomInt];
        }

        createCharacter();

    });

    $("#mage").click(function(){

        if(!descriptorbutton){
            descRandom = new randomNumber(possibleMageDescriptor);
            currentDescriptor = possibleMageDescriptor[descRandom.randomInt];
        }
        if(!classbutton){
            classRandom = new randomNumber(possibleMageClass);
            currentClass = possibleMageClass[classRandom.randomInt];
        }
        if(!focusbutton){
            focusRandom = new randomNumber(possibleMageFoci);
            currentFocus = possibleMageFoci[focusRandom.randomInt];
        }

        createCharacter();

    });

    $("#tank").click(function(){

        if(!descriptorbutton){
            descRandom = new randomNumber(possibleTankDescriptor);
            currentDescriptor = possibleTankDescriptor[descRandom.randomInt];
        }
        if(!classbutton){
            classRandom = new randomNumber(possibleTankClass);
            currentClass = possibleTankClass[classRandom.randomInt];
        }
        if(!focusbutton){
            focusRandom = new randomNumber(possibleTankFoci);
            currentFocus = possibleTankFoci[focusRandom.randomInt];
        }

        createCharacter();

    });
});



