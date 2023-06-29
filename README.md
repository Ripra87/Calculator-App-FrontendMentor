# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

It was a hard challenge for me. 

The HTML was the easiest part, nothing strange.

[CSS]
About the CSS i used the GRID TEMPLATE AREA to order the buttons in the calculator board.
I found really diffcult to style the input radio button, thanks for who helped me on Stack Overflow (here the link to my question if you have the same problems: https://stackoverflow.com/questions/76578352/styling-radio-button-background-color) 

[Javascript]
The hardest part was obviously the Javascript code. Following a short explanation on how i structured the code.

First part, easiest one, managing the color theme of the calculator.

I defined a constant called "themes", an array of objects, each object contain the same properties that are the different parts of the calculator that are needed to change, and the relative values for each of the 3 themes.

a Function, called themeChange(), who pass in input the objects. This function change the style of every element of the calculator, using element.style.color, or element.style.backgroundColor, passing as value the values contained in the object passed in input in the function.

All this managed by a simple event on the click, filtered with an if else using the #id of each radio button in the html. Clicking on a button you call the function "themeChange()" passing in input, for each radio button, a different object of the array with different style values that change the theme of the caluclator.

Second part, the hardest for me, the operations management.
Iterating the buttons, filtering them by their classes, i added two events, one working with the numpad of the keyboard and one by the click of the buttons on the screen, anyway the process is the same.
Shortly, it works in this way: typing, the buttons are added in an empty array called "typedNumbers". When you click or type an operator like +, -, *, or /, the number in the string is added in an empty array called "operationArray", together with the operator just typed, and the string contained in typedNumbers is deleted, ready to contain a new number. After typing the operation, clicking on the result button = (or pressing Enter) you call the "resultFunction()": the last number typed into the string is added to the array, then all the element into the array are merged together using the .join() method, and finally converted from string to math using eval() that return the result of the operation typed.








