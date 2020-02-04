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

//console.log(paragraphs);
//console.log(divs);

console.log(paragraphs.getLength());
console.log(divs.getLength());

console.log(paragraphs.getTagNames());

__('#shakespeare-novel').insertText('To be, or not to be: this is the question');
