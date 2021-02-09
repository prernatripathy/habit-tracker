// alert("hello");

//code to create the checkboxes using a loop
const NEWVAR = document.querySelector(".table-data tbody");

console.log(NEWVAR);
console.log("hiii");



for(a=0;a<4;a++){
  var tablerow = document.createElement("tr");

    for(b=0;b<30;b++){
        var tabledata = document.createElement("td");
        tablerow.appendChild(tabledata);
        var checkboxinput = document.createElement("input");
        checkboxinput.setAttribute("type","checkbox");
        checkboxinput.setAttribute("name","checkbox" + a + b);
        checkboxinput.setAttribute("style","appearance:none;");
        tabledata.appendChild(checkboxinput);
    }
    NEWVAR.appendChild(tablerow);
}



//code to Assign respective classnames to the checkboxes

  for(y=1;y<31;y++){
    const VARCLASS = document.querySelector(".table-data tbody tr:nth-child(2) td:nth-child(" + y +") input");
    VARCLASS.setAttribute("class","meditation");
  }
  for(y=1;y<31;y++){
    const VARCLASS = document.querySelector(".table-data tbody tr:nth-child(3) td:nth-child(" + y +") input");
    VARCLASS.setAttribute("class","jump-rope");
  }
  for(y=1;y<31;y++){
    const VARCLASS = document.querySelector(".table-data tbody tr:nth-child(4) td:nth-child(" + y +") input");
    VARCLASS.setAttribute("class","exercise");
  }
  for(y=1;y<31;y++){
    const VARCLASS = document.querySelector(".table-data tbody tr:nth-child(5) td:nth-child(" + y +") input");
    VARCLASS.setAttribute("class","supplements");
  }


  // const test = document.querySelectorAll(".meditation");
  // console.log(test);





//code to calculate scores of each Habit ( this logic needs to be better)
var meditate = 0;
var jumprope = 0;
var exercise = 0;
var supplements = 0;

//class meditation
const CALCVALUEMED = document.querySelectorAll(".meditation");

CALCVALUEMED.forEach((item) => {
  item.addEventListener('change',function() {
        if(this.checked){
          //alert("Checkbox is checked..");
          meditate++;
          //console.log(meditate);
        }
        else {
          //console.log("Checkbox is not checked..");
          meditate--;
        }
      });

});

// for(let ii=0; ii < CALCVALUEMED.length;ii++){
//   //console.log(CALCVALUEMED[ii]);
//
//   CALCVALUEMED[ii].addEventListener('change',function() {
//       if(this.checked){
//         //alert("Checkbox is checked..");
//         meditate++;
//         //console.log(meditate);
//       }
//       else {
//         //console.log("Checkbox is not checked..");
//         meditate--;
//       }
//     });
// }

//class jumprope
const CALCVALUEJUMP = document.querySelectorAll(".jump-rope");
CALCVALUEJUMP.forEach((item) => {
  //console.log(CALCVALUEJUMP[ii]);

  item.addEventListener('change',function() {
      if(this.checked){
        //alert("Checkbox is checked..");
        jumprope++;
        //console.log(meditate);
      }
      else {
        //console.log("Checkbox is not checked..");
        jumprope--;
      }
    });
});

//class Excercise
const CALCVALUEEXER = document.querySelectorAll(".exercise");
CALCVALUEEXER.forEach((item) =>{
  //console.log(CALCVALUEJUMP[ii]);

  item.addEventListener('change',function() {
      if(this.checked){
        //alert("Checkbox is checked..");
        exercise++;
        //console.log(meditate);
      }
      else {
        //console.log("Checkbox is not checked..");
        exercise--;
      }
    });
});


//class Supplements
const CALCVALUESUP = document.querySelectorAll(".supplements");
CALCVALUESUP.forEach((item) => {
  //console.log(CALCVALUEJUMP[ii]);

  item.addEventListener('change',function() {
      if(this.checked){
        //alert("Checkbox is checked..");
        supplements++;
        //console.log(meditate);
      }
      else {
        //console.log("Checkbox is not checked..");
        supplements--;
      }
    });
});



//button click event
const BTN = document.querySelector(".graph-button");
BTN.addEventListener('click', function(){
  let totalVal = meditate+jumprope+exercise+supplements;
  console.log(totalVal);

  if(totalVal == 0){
    // const errorDiv = document.querySelector(".calc-values");
    // errorDiv.innerHTML = `Please Enter some values`;
    alert("please enter some values");
  }

  else{
      drawGraphForMe();
  }



});
