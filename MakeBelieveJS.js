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


    //4
    MakeBelieveElement.prototype.parent = function (parentSelector = "") {
    //Return all parent elements
        var element = this.nodes[0];
        var parentElements = [];
        if(parentSelector === "") {
        //If no parentSelector is passed through then return all parent elements
            while (element.parentElement) {
                parentElements.unshift(element.parentElement);
                element = element.parentElement;
                }
            }
        else {
        // If parentSelector is passed through only return parents of that type
            while (element.parentElement) {
                if (element.parentElement.tagName.toLowerCase() === parentSelector.toLowerCase()) {
                    parentElements.unshift(element.parentElement);
                    element = element.parentElement;
                }
            }
        }
        return new MakeBelieveElement(parentElements)
    };

    //5
    MakeBelieveElement.prototype.grandParent = function (selector) {
        var returnList = [];
        for (let i = 0; i < this.nodes.length; i++) {
            if (selector == null) { //empty query (optional)
                returnList.push(this.nodes[i].parentNode.parentNode);
            }
            else if (this.nodes[i].parentNode.parentNode.matches(selector)) { //element matched the query
                returnList.push(this.nodes[i].parentNode.parentNode); //parent.parent = grandParent
            }
        }
    return returnList
    };

    //6
    MakeBelieveElement.prototype.ancestor = function (selector) {
        element = this.nodes[0];
        while (element.parentElement) {
            if (element.parentElement.tagName.toLowerCase() == selector.toLowerCase())
               return element.parentElement
        }
    }

    //7
    MakeBelieveElement.prototype.onClick = function(evt) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("click", function (e) {
                evt(e) //
            });
        }
    };

    //8
    MakeBelieveElement.prototype.insertText = function(text) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].innerHTML = text
        }
    };

    //9
    MakeBelieveElement.prototype.append = function(textToAppend) {
        if (typeof (textToAppend) === 'string') { //textToAppend is a string
            var newDiv = document.createElement('div');
            newDiv.innerHTML = textToAppend;
            this.nodes[0].appendChild(newDiv); //prepend the new div, which contains the new string
        }
        else if (typeof (textToAppend) === typeof (document.createElement('h1'))) { //textToAppend is an actual DOM element
            this.nodes[0].appendChild(textToAppend.parentNode); //Append the element without creating a newDiv
        }
        else { //textToPrepend is not a string or an element, return
            return null
        }
    };

    //10
    MakeBelieveElement.prototype.prepend = function(textToPrepend) {
        if (typeof (textToPrepend) === 'string') { //textToPrepend is a string
            var newDiv = document.createElement('div');
            newDiv.innerHTML = textToPrepend;
            this.nodes[0].insertBefore(newDiv, this.nodes[0].firstChild); //prepend the new div, which contains the new string
        }
        else if (typeof (textToPrepend) === typeof (document.createElement('h1'))) { //textToPrepend is an actual DOM element
            this.nodes[0].insertBefore(textToPrepend.parentNode, this.nodes[0].firstChild); //Prepend the element without creating a new div
        }
        else { //textToPrepend is not a string or an element, return
            return null
        }
    };

    //11
    MakeBelieveElement.prototype.delete = function(text) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].remove()
        }
    };

    //12


    //13
    MakeBelieveElement.prototype.css = function (element, value) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].setAttribute("style", `${element}: ${value}`)
        }
    };

    //14
    MakeBelieveElement.prototype.toggleClass = function (className) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].classList.toggle(className)
        }
    };


    //15
    MakeBelieveElement.prototype.onSubmit = function (evt) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("submit", function (e) {
                evt(e)
            });
        }
    };

    //16
    MakeBelieveElement.prototype.onInput = function (evt) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("input", function (e) {
                evt(e)
            });
        }
    };

})(window);

///////////////////////////////////////test cases below///////////////////////////////////////

/*

console.log(window);

var paragraphs = __('p');
var divs = __('.item');

var parents = __('#password').parent('DIV');

console.log(parents);
console.log(paragraphs);
console.log(divs);

console.log(paragraphs.getLength());
console.log(divs.getLength());

console.log(paragraphs.getTagNames());


//testing 2
var inputs = __('#my-form input');
console.log(inputs); //should return a list of all inputs within a form with the id #my-form


//testing 3 - not ready in code
__('input').parent('form').onInput(function (evt) {
    alert('Something happened!')
});



//testing 5
var grandParent = __('#password').grandParent();
console.log(grandParent); //should return the div with the id #grandfather
var isGrandParent = __('#password').grandParent('#grandfather');
console.log(isGrandParent); //should return the div with the id #grandfather
var emptyGrandParent = __('#password').grandParent('#unknownId');
console.log(emptyGrandParent); //should return an empty object
*/

//testing 6

// var ancestor = __('#password').ancestor('.ancestor');
// console.log(ancestor)

//testing 7
__('#password').onClick(function (evt) {
    console.log(evt.target.value);
});
/*
//testing 8
__('#shakespeare-novel').insertText('To be, or not to be: this is the question');

//testing 9
__('.the-appender').append('<p>I am an appended paragraph!</p>');
__('.the-appender').append(
    document.createElement('p')
        .appendChild(
            document.createTextNode('I am an appended paragraph!')
        )
);

//testing 10
__('.the-prepender').prepend('<p>I am an prepended paragraph!</p>');
__('.the-prepender').prepend(
    document.createElement('p')
        .appendChild(
            document.createTextNode('I am an prepended paragraph!')
        )
);

//testing 11

__('#some-div').delete();

//testing 13
__('#elemToChange').css('background-color', 'lightpink');

//testing 14
__('#elemToChange').toggleClass('someClass');
*/

//testing 15
__('#username').onSubmit(function (evt) {
    console.log(evt.target.value)
});

//testing 16
__('#username').onInput(function (evt) {
    console.log(evt.target.value)
});
