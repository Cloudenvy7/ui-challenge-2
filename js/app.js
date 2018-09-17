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

  let textinputSection = document.getElementsByTagName('.formText');
  let dropDownSection = document.getElementsByTagName('.formSelect');
  let checkBoxSection = document.getElementsByTagName('.fromCheckBox');
  
  document.getElementsByTagName('.formRadio');
  let radioButton = $('<input type="radio" name="rbtnCount" <span class="checkmark"><span> />');
  $('.formRadio').append(radioButton)

 
 
  let ButtonSection = document.getElementsByTagName('.formButton');
  
  // const radioButtonAppend = () => {
  //   for (let i = 0; i < 2; i++) {
  //     let radioButton = $('<input type="radio" name="rbtnCount" />');
  //     $('.formRadio').append(radioButton);
  //     console.log('here is the radioAppendX20');
  //   }
  //   ('fullForm').append();
  // };

 
  $('p').append('<strong>Hello</strong>');

  //append all the work to the to form "fullForm"
  radioButtonAppend();
};

appendingToForm();