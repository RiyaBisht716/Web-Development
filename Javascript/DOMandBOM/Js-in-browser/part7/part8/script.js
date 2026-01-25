//document.alert("connected");

//Example 1 : Accessing DOM Elements

//function ()is used then this will point to current element which is button
//when arrow function is used()=> this will point to global document-window object
document.getElementById("changeTextButton").addEventListener("click",function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
});

//Example 2: Traversing the DOM

document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let citiesList= document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add('highlight');
});

//Example 3: Manipulating DOM Elements

document.getElementById("changeOrder").addEventListener("click",function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent ="Expresso";
    coffeeType.style.backgroundColor ="Pink";
    coffeeType.style.padding ="4px";
    coffeeType.style.textDecoration ="underline";
    coffeeType.style.color ="brown";
});

//Example 4: Creating and Inserting Elements
document.getElementById("addNewItem").addEventListener("click", function(){
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);


});

// Example 5: Removing DOM Elements
document.getElementById("removeLastTask").addEventListener('click', function(){
    let taskList = document.getElementById("taskList");
    taskList.firstElementChild.remove();
})

//Example 6: Event Handling in the DOM
document.getElementById("clickMeButton").addEventListener("dbclick", function(){
    alert("chaicode");

});

//Example 7: Event Delegation
document.getElementById("teaList").addEventListener('click',function(event){
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected: " + event.target.textContent);

    }

});

//Example 8 : Form Handling
document.getElementById("feedbackForm").addEventListener('submit',function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`;
});

//Example 9:  DOM Content Loaded
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domStatus").textContent ="Dom fully loaded";

});

//Example 10: DOM Content Loaded

document
.getElementById("toggleHighlight")
.addEventListener("click", function(){
    let descriptionText = getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");

})

//getElementByTagName
let tags = document.getElementById("tag");
tags.getElementsByTagName("h3");
tags.getElementsByTagName("a");




