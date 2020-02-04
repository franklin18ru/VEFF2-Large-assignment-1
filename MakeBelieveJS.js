(function (globalObj) {

    //Constructor function:
    function MakeBelieveElement(nodes) { //nodes that come from query selectors
        this.nodes = nodes; //this instance of MakeBelieveElement
    }

    MakeBelieveElement.prototype.getLength = function() {
        return this.nodes.length;
    };

    MakeBelieveElement.prototype.getTagNames = function() {
        var tagNames = [];
        for (var i = 0; i < this.nodes.length; i++) {
            var currentElement = this.nodes[i];
            tagNames.push(currentElement.tagName.toLowerCase());
        }
        return tagNames;
    };


    //1
    globalObj.__ = query;

    //2
    function query(cssSelector) {
        var items = document.querySelectorAll(cssSelector); //items will be a nodeList from what cssSelector is selecting
        return new MakeBelieveElement(items);
    }

    //3


    //4
    MakeBelieveElement.prototype.parent = function (parentSelector = "") {
        //Return all parent elements
        element = this.nodes[0];
        var parentElements = [];
        if(parentSelector === "") {
            //If no parentSelector is passed through then return all parent elements
        while (element.parentElement) {
            parentElements.unshift(element.parentElement);
            element = element.parentElement;
        }
        }
        else{
            // If parentSelector is passed through only return parents of that type
            while (element.parentElement) {
                if (element.parentElement.tagName.toLowerCase() == parentSelector.toLowerCase())
                parentElements.unshift(element.parentElement);
                element = element.parentElement;
            }
    }
    return new MakeBelieveElement(parentElements)
    };

    //5
    MakeBelieveElement.prototype.grandParent = function (selector) {
        var nodeList = [];
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].parentNode.parentNode.matches(selector)) {
                nodeList.push(this.nodes[i].parentNode.parentNode);
            }
        }
        return nodeList
    };

    //6


    //7
    MakeBelieveElement.prototype.onClick = function(evt) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("click", evt);
        }
    };

    //8
    MakeBelieveElement.prototype.insertText = function(text) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].innerHTML = text
        }
    };

    //9


    //10


    //11


    //12


    //13
    MakeBelieveElement.prototype.css = function (element, value) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].setAttribute("style", `${element}: ${value}`)
        }
    };

    //14


    //15


    //16
    MakeBelieveElement.prototype.onInput = function (evt) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("input", evt);
        }
    };


})(window);
///////////////////////////////////////test cases below///////////////////////////////////////



//console.log(window);

var paragraphs = __('p');
var divs = __('.item');

var parents = __('#password').parent('DIV');

//console.log(parents);
// console.log(paragraphs);
// console.log(divs);

//console.log(paragraphs.getLength());
//console.log(divs.getLength());

//console.log(paragraphs.getTagNames());





//testing 2
//var inputs = __('#my-form input');
//console.log(inputs); //should return a list of all inputs within a form with the id #my-form


//testing 3 - not ready in code
//__('input').parent('form').onInput(function (evt) {
//    alert('Something happened!')
//});

//testing 5
var grandParent = __('#password').grandParent();
console.log(grandParent); //should return the div with the id #grandfather
var isGrandParent = __('#password').grandParent('#grandfather');
console.log(isGrandParent); //should return the div with the id #grandfather
var emptyGrandParent = __('#password').grandParent('#unknownId');
console.log(emptyGrandParent); //should return an empty object

//testing 7
//__('password').onClick(function (evt) {
  //  console.log(evt.target.value);
//});

//testing 8
__('#shakespeare-novel').insertText('To be, or not to be: this is the question');




//testing 13
__('#elemToChange').css('background-color', 'lightpink');

//testing 16
__('#username').onInput(function (evt) {
    //process the input
    console.log(evt.target.value)
});