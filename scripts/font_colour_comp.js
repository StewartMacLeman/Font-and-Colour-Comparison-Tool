"use scripts";

// Paragraph selections --------------------------------------------------------
let para_1 = document.querySelector("#para_1");
let para_2 = document.querySelector("#para_2");

let para_selected = "";
let fontSize_p1 = "20px";
let fontSize_p2 = "20px";
let font_p1 = "sans-serif";
let font_p2 = "sans-serif";

para_1.addEventListener( "click", updatePara_1);
function updatePara_1(){
  para_selected = "para_1";
  updateFontFamily();
  updateFontColour();
  box_selected = "";
}

para_2.addEventListener( "click", updatePara_2);
function updatePara_2(){
  para_selected = "para_2";
  updateFontFamily();
  updateFontColour();
  box_selected = "";
}

// Paragraph Font Size Change Function----------------------------------------
function changeFontSize(para, font_plus_ID, font_minus_ID, fontSize){

  let font_inc = document.querySelector(`#${font_plus_ID}`);
  font_inc.addEventListener( "click", increaseFont );

  function increaseFont(){
    let styles = window.getComputedStyle(para);
    let currentSize = styles.getPropertyValue("font-size");
    let int = parseInt(currentSize);

    para.style.fontSize = (int + 1) + "px";
    styles = window.getComputedStyle(para);
    fontSize = styles.getPropertyValue("font-size");

    if (para == para_1){
      fontSize_p1 = fontSize;
      refresh();
    } else if (para == para_2){
      fontSize_p2 = fontSize;
      refresh();
    }
  }

  let font_decr = document.querySelector(`#${font_minus_ID}`);
  font_decr.addEventListener( "click", decreaseFont );

  function decreaseFont(){
    let styles = window.getComputedStyle(para);
    let currentSize = styles.getPropertyValue("font-size");
    let int = parseInt(currentSize);

    para.style.fontSize = (int - 1) + "px";
    styles = window.getComputedStyle(para);
    fontSize = styles.getPropertyValue("font-size");

    if (para == para_1){
      fontSize_p1 = fontSize;
      refresh();
    } else if (para == para_2){
      fontSize_p2 = fontSize;
      refresh();
    }
  }
}
changeFontSize(para_1, "font_plus_1", "font_minus_1", fontSize_p1);
changeFontSize(para_2, "font_plus_2", "font_minus_2", fontSize_p2);

// Paragraph Style Change Function---------------------------------------------
function changeFontStyle(para, italics_ID){

  let italics = document.querySelector(`#${italics_ID}`);
  italics.addEventListener( "click", toggle_italics);

  function toggle_italics(){
    let styles = window.getComputedStyle(para);
    let currentStyle = styles.getPropertyValue("font-style");

    if (currentStyle == "normal"){
      italics_on();
    } else if (currentStyle == "italic"){
      italics_off();
    }
    function italics_on(){
      para.style.fontStyle = "italic";
      italics.textContent = "Italics Off";
    }
    function italics_off(){
      para.style.fontStyle = "normal";
      italics.textContent = "Italics On";
    }
  }
}
changeFontStyle(para_1, "italics_1");
changeFontStyle(para_2, "italics_2");

// Paragraph Weight Change Function--------------------------------------------
function changeFontWeight(para, weight_ID){

  let weight = document.querySelector(`#${weight_ID}`);
  weight.addEventListener( "click", toggle_weight);

  function toggle_weight(){
    let styles = window.getComputedStyle(para);
    let currentStyle = styles.getPropertyValue("font-weight");

    if (currentStyle == "400"){
      bold_on();
    } else if (currentStyle == "700"){
      bold_off();
    }
    function bold_on(){
      para.style.fontWeight = "700";
      weight.textContent = "Bold Off";
    }
    function bold_off(){
      para.style.fontWeight = "400";
      weight.textContent = "Bold On";
    }
  }
}
changeFontWeight(para_1, "weight_1");
changeFontWeight(para_2, "weight_2");

// Paragraph Reset Functions----------------------------------------------------
function resetParaAll(para, italics_ID, weight_ID, reset_ID){

  let reset = document.querySelector(`#${reset_ID}`);
  reset.addEventListener( "click", resetFonts );

  function resetFonts(){
    let italics = document.querySelector(`#${italics_ID}`);
    let weight = document.querySelector(`#${weight_ID}`);
    let font = "sans-serif";
    let fontSize = "20px";
    let topOfFontList = document.querySelectorAll(".fontList");
    let topOfColourList = document.querySelectorAll(".colourList");
    let topOfColourList_2 = document.querySelectorAll(".colourList_2");

    para.style.fontFamily = "sans-serif";
    para.style.fontSize = "20px";
    para.style.fontStyle = "normal";
    para.style.color = "black";
    italics.textContent = "Italics On";
    para.style.fontWeight = "400";
    weight.textContent = "Bold On";

    if (para == para_1){
      fontSize_p1 = fontSize;
      font_p1 = font;
      refresh();
    } else if (para == para_2){
      fontSize_p2 = fontSize;
      font_p2 = font;
      refresh();
    }

    topOfFontList[0].scrollTop = 0;
    topOfColourList[0].scrollTop = 0;
    topOfColourList_2[0].scrollTop = 0;
  }
}
resetParaAll(para_1, "italics_1", "weight_1", "reset_1");
resetParaAll(para_2, "italics_2", "weight_2", "reset_2");

// Updating the Font Families --------------------------------------------------
function updateFontFamily(){
  if ( para_selected == "para_1" ){
    getFont();
  } else if ( para_selected == "para_2" ){
    getFont();
  }

  function getFont(){

    let fontName = "";

    let fontClasses = document.querySelectorAll(".fontClass");
    for ( let i = 0; i < fontClasses.length; i++ ){
      fontClasses[i].addEventListener( "click" , addClass );
      function addClass(){
        fontName = fontClasses[i];
        addFont()
      }
    }

    function addFont(){
      if (para_selected == "para_1"){
        let styles = window.getComputedStyle(fontName);
        let fontFamily = styles.getPropertyValue("font-family");
        para_1.style.fontFamily = fontFamily;
        font_p1 = fontName.textContent;
        para_1.textContent = "Font Family: " + font_p1 + " | " + "Font Size: " + fontSize_p1;

      } else if (para_selected == "para_2"){
        let styles = window.getComputedStyle(fontName);
        let fontFamily = styles.getPropertyValue("font-family");
        para_2.style.fontFamily = fontFamily;
        font_p2 = fontName.textContent;
        para_2.textContent = "Font Family: " + font_p2 + " | " + "Font Size: " + fontSize_p2;
      }
    }
  }
}

function refresh(){
  para_1.textContent = "Font Family: " + font_p1 + " | " + "Font Size: " + fontSize_p1;
  para_2.textContent = "Font Family: " + font_p2 + " | " + "Font Size: " + fontSize_p2;
}
// Updating the Font Colours --------------------------------------------------
function updateFontColour(){

  if (para_selected == "para_1"){
    getColour();
  } else if (para_selected == "para_2"){
    getColour()
  }

  function getColour(){
    let colourName = "";

    let colourClasses = document.querySelectorAll(".colourClass");
    for (let i = 0; i < colourClasses.length; i++){
      colourClasses[i].addEventListener( "click", addClass );
      function addClass(){
        colourName = colourClasses[i];
        addColour();
      }
    }

    function addColour(){
      if (para_selected == "para_1"){
        let styles = window.getComputedStyle(colourName);
        let fontColour = styles.getPropertyValue("background-color");
        para_1.style.color = fontColour;

      } else if (para_selected == "para_2"){
        let styles = window.getComputedStyle(colourName);
        let fontColour = styles.getPropertyValue("background-color");
        para_2.style.color = fontColour;
      }
    }
  }
}
// Cloning the colour drop-down list. -----------------------------------------

function attach_colour_div(){
  let empty_div = document.querySelector(".colourList_2");
  let colourDivCol = document.querySelectorAll(".colourList h2, .colourList p");
  let copy_colourDiv;
  for (let i = 0; i < colourDivCol.length; i++){
    copy_colourDiv = colourDivCol[i].cloneNode(true);
    empty_div.appendChild(copy_colourDiv);
  }
}
attach_colour_div();


// Updating the Box Background Colours -----------------------------------------

let outer_box = document.querySelector("#outer_box");
let middle_box = document.querySelector("#middle_box");
let inner_box = document.querySelector("#inner_box");
let box_selected = "";

outer_box.addEventListener( "click", update_outer);
function update_outer(event){
  box_selected = "outer_box";
  updateBoxColour();
  updateBoxParagraph()
  para_selected = "";
  event.stopPropagation();
}
middle_box.addEventListener( "click", update_middle);
function update_middle(event){
  box_selected = "middle_box";
  updateBoxColour();
  updateBoxParagraph()
  para_selected = "";
  event.stopPropagation();
}
inner_box.addEventListener( "click", update_inner);
function update_inner(event){
  box_selected = "inner_box";
  updateBoxColour();
  updateBoxParagraph()
  para_selected = "";
  event.stopPropagation();
}

function updateBoxColour(){
  if (box_selected == "outer_box"){
    getColour();
  } else if (box_selected == "middle_box"){
    getColour();
  } else if ( box_selected == "inner_box"){
    getColour();
  }

  function getColour(){
    let colourName = "";

    let colourClasses = document.querySelectorAll(".colourClass");
    for (let i = 0; i < colourClasses.length; i++){
      colourClasses[i].addEventListener( "click", addClass );
      function addClass(){
        colourName = colourClasses[i];
        addColour();
      }
    }

    function addColour(){
      if (box_selected == "outer_box"){
        let styles = window.getComputedStyle(colourName);
        let bgColour = styles.getPropertyValue("background-color");
        outer_box.style.backgroundColor = bgColour;

      } else if (box_selected == "middle_box"){
        let styles = window.getComputedStyle(colourName);
        let bgColour = styles.getPropertyValue("background-color");
        middle_box.style.backgroundColor = bgColour;

      } else if (box_selected == "inner_box"){
        let styles = window.getComputedStyle(colourName);
        let bgColour = styles.getPropertyValue("background-color");
        inner_box.style.backgroundColor = bgColour;
      }
    }
  }
}
// Updating the Box Paragraphs with the current Background Colours -------------
let outer_box_para = document.querySelector("#outer_box_para");
let middle_box_para = document.querySelector("#middle_box_para");
let inner_box_para = document.querySelector("#inner_box_para");

function updateBoxParagraph(){
  if (box_selected == "outer_box"){
    getColour();
  } else if (box_selected == "middle_box"){
    getColour();
  } else if ( box_selected == "inner_box"){
    getColour();
  }

  function getColour(){
    let colourName = "";

    let colourClasses = document.querySelectorAll(".colourClass");
    for (let i = 0; i < colourClasses.length; i++){
      colourClasses[i].addEventListener( "click", addClass );
      function addClass(){
        colourName = colourClasses[i];
        addColourName();
      }
    }

    function addColourName(){
      if (box_selected == "outer_box"){
        let colour_outer = colourName.textContent;
        outer_box_para.textContent = "Outer Box Background Colour: " + colour_outer;

      } else if (box_selected == "middle_box"){
        let colour_middle = colourName.textContent;
        middle_box_para.textContent = "Middle Box Background Colour: " + colour_middle;

      } else if (box_selected == "inner_box"){
        let colour_inner = colourName.textContent;
        inner_box_para.textContent = "Inner Box Background Colour: " + colour_inner;
      }
    }
  }
}
// Reset Boxes Function -------------------------------------------------------
let reset_boxes = document.querySelector("#reset_boxes");
reset_boxes.addEventListener( "click", reset_boxes_func );
function reset_boxes_func(){
  box_selected = "";
  outer_box.style.backgroundColor = "white";
  middle_box.style.backgroundColor = "white";
  inner_box.style.backgroundColor = "white";
  outer_box_para.textContent = "Outer Box Background Colour: White";
  middle_box_para.textContent = "Middle Box Background Colour: White";
  inner_box_para.textContent = "Inner Box Background Colour: White";
  let topOfColourList_2 = document.querySelectorAll(".colourList_2");
  topOfColourList_2[0].scrollTop = 0;
}
