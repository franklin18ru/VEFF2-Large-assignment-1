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


    //2
    function query(cssSelector) {
        var items = document.querySelectorAll(cssSelector); //items will be a nodeList from what cssSelector is selecting
        return new MakeBelieveElement(items);
    }

    //3


    //4

    MakeBelieveElement.prototype.parent = function (parentSelector = "") {
        //Return all parent elements
        element = this.nodes[0]
        var parentElements = [];
        if(parentSelector === ""){
            //If no parentSelector is passed through then return all parent elements
        while (element.parentElement) {
            parentElements.unshift(element.parentElement);
            element = element.parentElement;
        }
        }
        else{
            // If parentSelector is passed through only return parents of that type
            while (element.parentElement) {
                if(element.parentElement.tagName.toLowerCase() == parentSelector.toLowerCase())
                parentElements.unshift(element.parentElement);
                element = element.parentElement;
            }
        
        
    
    }
    return new MakeBelieveElement(parentElements)
    }


    //5
    

    //6


    //7
    MakeBelieveElement.prototype.onClick = function(evt) {
        for (var i = 0; i < this.nodes.length; i++) {
            this.nodes[i].addEventListener("click", evt);
            console.log(evt.target.value);
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


    //14


    //15


    //16


    globalObj.__ = query;
})(window);





//console.log(window);

var paragraphs = __('p');
var divs = __('.item');

var parents = __('#password').parent('DIV')

console.log(parents)
// console.log(paragraphs);
// console.log(divs);

console.log(paragraphs.getLength());
console.log(divs.getLength());

console.log(paragraphs.getTagNames());

__('#shakespeare-novel').insertText('To be, or not to be: this is the question');
