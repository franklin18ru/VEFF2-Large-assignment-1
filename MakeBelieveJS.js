(function (globalObj) {
    //Constructor function:
    function MakeBelieveElement(nodes) { //nodes that come from query selectors
        this.nodes = nodes; //this instance of MakeBelieveElement
    }

    //1
    globalObj.__ = query;
    query.ajax = ajax;

    //2
    function query(cssSelector) {
        let items = document.querySelectorAll(cssSelector); //items will be a nodeList from what cssSelector is selecting
        return new MakeBelieveElement(items);
    }

    //4
    MakeBelieveElement.prototype.parent = function (parentSelector = "") {
        //Return all parent elements
        var element = this.nodes[0]
        var parentElements = [];
        if (parentSelector === ""){
            //If no parentSelector is passed through then return all parent elements
        while (element.parentElement) {
            parentElements.unshift(element.parentElement);
            element = element.parentElement;
        }
        }
        else{
            // If parentSelector is passed through only return parents of that type
            while (element.parentElement) {
                if (element.parentElement.tagName.toLowerCase() === parentSelector.toLowerCase()) {
                    parentElements.unshift(element.parentElement);
                }
                element = element.parentElement;
            }
    }
    return new MakeBelieveElement(parentElements)
    };


    //5
    MakeBelieveElement.prototype.grandParent = function (selector) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (selector == null) { //empty query (optional)
                return new MakeBelieveElement(this.nodes[i].parentNode.parentNode);
            }
            else if (this.nodes[i].parentNode.parentNode.matches(selector)) { //element matched the query
                return new MakeBelieveElement(this.nodes[i].parentNode.parentNode);//parent.parent = grandParent
            }
            else {
                return {} //empty object
            }
        }
    };

    //6
    MakeBelieveElement.prototype.ancestor = function (selector) {
        let element = this.nodes[0].parentElement.parentElement;
        while (element.parentElement) {
            if (element.parentElement.matches(selector)){
                return new MakeBelieveElement(element.parentElement);

            }
            else {
                element = element.parentElement;
            }
        }
        return {}
    };

    //7
    MakeBelieveElement.prototype.onClick = function(event) {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("click", function (e) {
                event(e)
            });
        }
    };

    //8
    MakeBelieveElement.prototype.insertText = function(text) {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].innerHTML = text //replace the innerHTML to the new text
        }
    };

    //9
    MakeBelieveElement.prototype.append = function(textToAppend) {
        if (typeof (textToAppend) === 'string') { //textToAppend is a string
            let newDiv = document.createElement('div');
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
            let newDiv = document.createElement('div');
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
    MakeBelieveElement.prototype.delete = function() {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].remove()
        }
    };

    //12
        function ajax(obj){
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
            xhttp.setRequestHeader
            xhttp.open(obj['method'], obj['url'])
            xhttp.send()
        
        }
        }


    //13
    MakeBelieveElement.prototype.css = function (element, value) {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].setAttribute("style", `${element}: ${value}`)
        }
    };

    //14
    MakeBelieveElement.prototype.toggleClass = function (className) {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].classList.toggle(className)
        }
    };

    //15
    MakeBelieveElement.prototype.onSubmit = function (evt) {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("submit", function (e) {
                evt(e)
            });
        }
    };

    //16
    MakeBelieveElement.prototype.onInput = function (evt) {
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("input", function (e) {
                evt(e)
            });
        }
    }

})(window);


///////////////////////////////////////test cases below///////////////////////////////////////


//testing 2
var inputs = __('#my-form input');
console.log(inputs); //should return a list of all inputs within a form with the id #my-form

//testing 3 - not ready in code
//__('input').parent('form').onInput(function (evt) {
//    alert('Something happened!')
//});

//testing 4
var parent = __('#password').parent();
console.log(parent);
var formParent = __('#password').parent('form');
console.log(formParent);

//testing 5
var grandParent = __('#password').grandParent();
console.log(grandParent); //should return the div with the id #grandfather
var isGrandParent = __('#password').grandParent('#grandfather');
console.log(isGrandParent); //should return the div with the id #grandfather
var emptyGrandParent = __('#password').grandParent('#unknownId');
console.log(emptyGrandParent); //should return an empty object

//testing 6
var ancestor = __('#password').ancestor('.ancestor');
console.log(ancestor);
var rootElem = __('#password').ancestor('.root');
console.log(rootElem);
var ancestorSib = __('#password').ancestor('.ancestor-sib');
console.log(ancestorSib); //should return an empty object

//testing 7
__('#password').onClick(function (evt) {
    console.log(evt.target.value);
});

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
__('.some-div2').delete();
__('.elem-doesnt-exist').delete(); //this should have no effect



//testing 13
__('#elemToChange').css('background-color', 'lightpink');

//testing 14
__('#elemToChange').toggleClass('someClass');

//testing 15
__('#username').onSubmit(function (evt) {
    console.log('submitted!');
    console.log(evt.target.value)
});

//testing 16
__('#username').onInput(function (evt) {
    console.log(evt.target.value)
});

//testing 12
//__.ajax({
//    url: 'https://serene-island-81305.herokuapp.com/200',
//    method: 'GET',
//    timeout: 10,
//    data: {},
//    headers: [
//        {'Authorisation': 'my-secret-key' }
//    ],

//    success: function(resp){

//    },
//    fail: function(error){

//    },
//    beforeSend: function(xhr){

//    }

//});

