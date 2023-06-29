"use strict"

const buttons = document.querySelectorAll("button");
const radioButtons = document.querySelectorAll("input");
var screenArea = document.querySelector("#result");
var upperArea =document.querySelector("#operationArea");
var mainPage = document.body.firstElementChild;
var header = document.querySelector(".head");
var radioDiv = document.querySelector(".radioButton");
var radioChecked =document.querySelector("input:checked");
var resultArea = document.querySelector(".resultArea");
var gridArea = document.querySelector(".gridArea");


// COLOR CHANGING SECTION

document.addEventListener("DOMContentLoaded", () => { 
    themeChange(themes[0]);
    document.querySelector("#color1").setAttribute("checked", "true");
});

radioButtons.forEach((radio) => {
    radio.addEventListener("click", (theme) => {
        let radioButton = theme.target.id;
        if (radioButton == "color1") {
           themeChange(themes[0]);
        } 
        else if (radioButton == "color2") {
            themeChange(themes[1]);
        }
        else if (radioButton == "color3") {
            themeChange(themes[2]);
        }
    })
})

function themeChange (input) {
    mainPage.style.backgroundColor = input.mainPage;
    header.style.color = input.headerText;
    radioDiv.style.backgroundColor = input.radioDiv;
    resultArea.style.backgroundColor = input.resultAreaBack;
    resultArea.style.color = input. resultAreaText;
    gridArea.style.backgroundColor = input.gridArea;
    buttons.forEach((btn) => {
        let buttonType = btn.classList.value;
        if (buttonType == "reset" || buttonType == "delete") {
            btn.style.backgroundColor = input.btnBckStyle1;
            btn.style.color = input.btnTextStyle1;
            btn.style.boxShadow = "0px 3px 3px " + input.btnShadow1;
        } else if (buttonType == "total") {
            btn.style.backgroundColor = input.btnBckStyle2;
            btn.style.color = input.btnTextStyle2;
            btn.style.boxShadow = "0px 3px 3px " + input.btnShadow2;
        } else {
            btn.style.backgroundColor = input.btnBckStyle3;
            btn.style.color = input.btnTextStyle3; 
            btn.style.boxShadow = "0px 3px 3px " + input.btnShadow3;   
        };
    });
};

const themes = [
    {
        mainPage: "rgb(59, 70, 100)",
        headerText: "rgb(243,239,235)",
        radioDiv: "rgb(37, 45, 68)",
        resultAreaBack: "rgb(24, 31, 50)",
        resultAreaText: "white",
        gridArea: "rgb(37, 45, 68)",
        btnBckStyle1: "rgb(100, 114, 153)",
        btnBckStyle2: "rgb(209, 63, 48)",
        btnBckStyle3: "rgb(243,239,235)",
        btnTextStyle1: "white",
        btnTextStyle2: "white",
        btnTextStyle3: "rgb(71,78,94)",
        btnShadow1: "rgb(69, 79, 105)",
        btnShadow2: "rgb(143, 44, 33)",
        btnShadow3: "rgb(174, 163, 159)"
    },

    {
        mainPage: "rgb(230, 230, 230)",
        headerText: "rgb(52, 52, 44)",
        radioDiv: "rgb(211, 205, 205)",
        resultAreaBack: "rgb(238, 238, 238)",
        resultAreaText: "rgb(57, 57, 45)",
        gridArea: "rgb(211, 205, 205)",
        btnBckStyle1: "rgb(56, 129, 135)",
        btnBckStyle2: "rgb(209, 63, 48)",
        btnBckStyle3: "rgb(243,239,235)",
        btnTextStyle1: "white",
        btnTextStyle2: "white",
        btnTextStyle3: "black",
        btnShadow1: "rgb(69, 79, 105)",
        btnShadow2: "rgb(143, 44, 33)",
        btnShadow3: "rgb(174, 163, 159)"
    },
    
    {
        mainPage: "rgb(23, 6, 42)",
        headerText: "rgb(255, 228, 63)",
        radioDiv: "rgb(30, 8, 55)",
        resultAreaBack: "rgb(30, 8, 55)",
        resultAreaText: "rgb(255, 228, 63)",
        gridArea: "rgb(30, 8, 55)",
        btnBckStyle1: "rgb(86, 7, 124)",
        btnBckStyle2: "rgb(0, 222, 207)",
        btnBckStyle3: "rgb(51, 27, 77)",
        btnTextStyle1: "white",
        btnTextStyle2: "black",
        btnTextStyle3: "rgb(255, 228, 63)",
        btnShadow1: "rgb(188, 22, 244)",
        btnShadow2: "rgb(110, 247, 239)",
        btnShadow3: "rgb(119, 36, 142)"
    }
];


// CALCULATOR MATH CALC

document.addEventListener("DOMContentLoaded", () => { screenArea.innerText = "" });

let typedNumber = "";
let operationArray = [];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let pressedButton = btn.innerText;

        if (btn.classList.value.includes("number") || btn.classList.value.includes("operation") ){
            screenArea.innerText += pressedButton;
        }

        if (btn.classList.value.includes("number")) {
            typedNumber += pressedButton;
        } 
        else if (btn.classList.value.includes("operation")) {
            operationArray.push(typedNumber);
            operationArray.push(pressedButton);
            typedNumber = "";
        } 
        else if(btn.classList.value.includes("total")) {
            resultFunction();
        }
        else if (btn.classList.value.includes("delete")) {
            cancel();
        } 
        else if (btn.classList.value.includes("reset")) {
            clear();
        }

    })
});

document.addEventListener("keyup", (keyBtn) => {
       
    let keyPressedButton = keyBtn.key; 
    
    buttons.forEach((btn) => {
        if ( keyPressedButton == btn.innerText ){
            screenArea.innerText += keyPressedButton;
            typedNumber += keyPressedButton;
        }
    });

    if (keyPressedButton == "Enter") {
        resultFunction();
    } 
    else if (keyPressedButton == "Backspace") {
        cancel();
    }
    else if(keyPressedButton === "Delete") {
        clear();
    }
    
});

function resultFunction () {
    operationArray.push(typedNumber);
    let operationString = operationArray.join("");
    let result = eval(operationString);
    if ((result % 1) !== 0) {
        screenArea.innerText = result.toFixed(2);
    } else {
        screenArea.innerText = result;
    }
    typedNumber = "";
    operationArray = [result];
};

function cancel () {
    let newTypedNumber = typedNumber.slice(0, -1);
    typedNumber = newTypedNumber;
    let newScreenArea = screenArea.innerText.slice(0, -1);
    screenArea.innerText = newScreenArea;
};

function clear () {
    screenArea.innerText = "";
    typedNumber = "";
    operationArray = [];
};


