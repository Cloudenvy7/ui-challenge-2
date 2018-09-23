'use strict';

//GOAL: to create a form, the elements within the form
// which include...
// Text input #1 ( with placeholder)
// Text input #2 ( with placeholder & validation)

// dropdown nameed selectbox
// dropdown named selectbox with open dropdown

// checkbox (using the sprites)
// checkbox (using the sprites)

// radio button (using the sprites)
// radion button (using the sprites)

// button (using the sprites)
// button (using the sprites)
// all of this gets appeneded to the form then the dom



const appendingToForm = () => {
  // let mainContainer = document.getElementsByTagName('mainContainer');

//
  document.getElementsByTagName('.formText');
  let textInputOne = $('<input type="text" name="Textone" value = "placeholder"/>');
  let textInputTwo = $('<input type="text" name="Texttwo" value = "placeholder" label = "text validation"/>');
  $('.formText').append(textInputOne);
  // $('#textValidation').append(textInputTwo);
  $('#textValidation').append(textInputTwo);

  

  document.getElementsByTagName('.formSelect');
  let SelectionOne = $('<select name ="dropDownMenu"  value = "select"/>');
  let SelectionTwo = $('<select name ="dropdownMenuTwo"  value = "select"/>'); 
  $('.formSelect').append(SelectionOne);
  $('.formSelect').append(SelectionTwo);


  document.getElementsByTagName('.fromCheckBox');
  let CheckBoxOne = $('<input type ="checkbox"  name = "option1"/>');
  let CheckBoxTwo = $('<input type ="checkbox"  name = "option2"/>'); 
  $('.fromCheckBox').append(CheckBoxOne);
  $('.fromCheckBox').append(CheckBoxTwo);

  document.getElementsByTagName('.formRadio');
  let radioButton1 = $('<label for="male"><input type="radio" name="rbtnCount" label = "male"/>Male</label>');
  let radioButton2 = $('<input type="radio" name="rbtnCount2" <span class="checkmark"></span>');
  $('.formRadio').append(radioButton1);
  $('.formRadio').append(radioButton2);

 
 
  // let ButtonSection = document.getElementsByTagName('.formButton');
  
  // const radioButtonAppend = () => {
  //   for (let i = 0; i < 2; i++) {
  //     let radioButton = $('<input type="radio" name="rbtnCount" />');
  //     $('.formRadio').append(radioButton);
  //     console.log('here is the radioAppendX20');
  //   }
  //   ('fullForm').append();
  // };

 
  // $('p').append('<strong>Hello</strong>');
  //append all the work to the to form "fullForm"
  // radioButtonAppend();
};

appendingToForm();