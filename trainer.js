

/*
TO Do:
make getsentence()


*/
var ENUM = {};
Object.defineProperties(ENUM, {
  'subj': {
    value: 10,
    writable:false
  },
  'BFV': {
    value: 20,
    writable: false
  },
  'irreg': {
    value: 21,
    writable: false
  },
  'ing': {
    value: 30,
    writable: false
  },
  'ed': {
    value: 40,
    writable: false
  },
  'do': {
    value: 201,
    writable: false
  },
  'does': {
    value: 202,
    writable: false
  },
  'did': {
    value: 205,
    writable: false
  },
  's': {
    value: 207,
    writable: false
  },
  'am': {
    value: 301,
    writable: false
  },
  'is': {
    value: 302,
    writable: false
  },
  'are': {
    value: 303,
    writable: false
  },
  'was': {
    value: 305,
    writable: false
  },
  'were': {
    value: 306,
    writable: false
  },
  'not': {
    value: 666,
    writable: false
  },
  'has': {
    value: 701,
    writable: false
  },
  'have': {
    value: 702,
    writable: false
  },
  'I': {
    value: 0,
    writable: false
  },
  'sing': {
    value: 1,
    writable: false
  },
  'pl': {
    value: 2,
    writable: false
  }


});


var sentence = {Subj: "Doogie and Froogie",
                subjNum: ENUM.pl,
                BFV: "eat",
                isIrreg: true,
                isAction: true,
                SPast: "ate",
                ingForm: "eating",
                theRest: "hasenpfeffer"
              };

// Put words onto screen
document.getElementById("words").innerText = sentence['Subj'] + "/" + sentence['BFV'] + "/" +
                              sentence['theRest'];
var counter = 0;
// create keys
var buttons = [{id:ENUM.subj, name:"undefined Subj"}, // subj
              {id:ENUM.BFV,name:"undefined BFV"},   // BFV
              {id:ENUM.irreg,name: false},
              {id:ENUM.ing,name:"-ing"},
              {id:ENUM.ed,name:"-(e)d"},
              {id:ENUM.do,name:"do"},
              {id:ENUM.does,name:"does"},
              {id:ENUM.did,name:"did"},
              {id:ENUM.s,name:"-(e)s"},
              {id:ENUM.am,name:"am"},
              {id:ENUM.is,name:"is"},
              {id:ENUM.are,name:"are"},
              {id:ENUM.was,name:"was"},
              {id:ENUM.were,name:"were"},
              {id:ENUM.not,name:"not"},
              {id:ENUM.has,name:"has"},
              {id:ENUM.have,name:"have"}];


              // set custom buttons
              buttons[0]['name'] = sentence['Subj'];
              buttons[1]['name'] = sentence['BFV'];

                // create simple past structures
              if (sentence['isIrreg']) { buttons[2]['name'] = sentence['SPast'];}

              // note: have can be have + s or just has button
              // also does can be do + es or does button

              // create actual buttons

              var keypad = document.getElementById('keypad');


              buttons.forEach(function (item){

                keypad.innerText += item['id'] + "#";
                keypad.innerText += item['name'];
                keypad.innerText += "\n";
              });


// choose forms by comparing the subject's number
  var doForm = ENUM.do;    // choose correct do form
  var bePresForm = ENUM.are;   // choose correct present be form
  var bePastForm = ENUM.were;   // choose correct past be form
  var haveForm = ENUM.have;    // choose correct have form



  switch (sentence.subjNum) {
    case ENUM.I:
      bePresForm = ENUM.am;
      break;

    case ENUM.sing:
      doForm = ENUM.does;
      bePresForm = ENUM.is;
      bePastForm = ENUM.was;
      haveForm = ENUM.has;
      console.log("Is singular!!!!!" + sentence.subjNum);
      break;

    case ENUM.pl:
      console.log("Is plural!");
  }

  console.log(doForm);





var simplePresNeg = [ENUM.subj, doForm, ENUM.not, ENUM.BFV];
var simplePresQ = [doForm, ENUM.subj, ENUM.BFV];



var simplePresAffirm;

if (doForm === ENUM.does) {
    simplePresAffirm = [ENUM.subj, ENUM.BFV, ENUM.s];
} else {
    simplePresAffirm = [ENUM.subj, ENUM.BFV ];
}







// runs when button is pressed
var main = function (event){
var answer = document.getElementById("answer").value;

//var toFind = 202;
//console.log(buttons.find(function(element){return element.id == toFind;}));

// create sentence info







var arr = answer.split(" ");
if (simplePresNeg[counter] == arr) {
  console.log("treffer!");
  counter++;
  console.log("Dispalying:");
  console.log(buttons.find(function(element){return element.id == arr;})['name']);
  document.getElementById('result').innerText += buttons.find(function(element){return element.id == arr;})['name'];
  document.getElementById('result').innerText += "-";
    if (counter == simplePresNeg.length) {
      console.log("you win!!");
    }
  } else {
  console.log("Falsch!!!");
   }

}

console.log(document.getElementById('butt').addEventListener("click", main));
