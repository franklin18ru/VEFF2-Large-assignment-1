
//testing 2
var inputs = __('#my-form input');
console.log(inputs); //should return a list of all inputs within a form with the id #my-form

//testing 3 - not ready in code
__('input').parent('form').onInput(function (evt) {
    alert('Something happened!')
});

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
__('#some-div').delete();

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
