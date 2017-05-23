

/*
TO Do:
make getsentence()
change buttons objects to simple keys
capitalize first word
*/

var win = false;

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

/*
var sentence = {Subj: "we",
                subjNum: ENUM.sing,
                BFV: "stay",
                isIrreg: false,
                isAction: true,
                SPast: "stayed",
                ingForm: "staying",
                theRest: "home today."
              };

var sentence = {Subj: "we",
                subjNum: ENUM.pl,
                BFV: "study",
                isIrreg: false,
                isAction: true,
                SPast: "studied",
                ingForm: "studying",
                theRest: "English."
              };

  */
var sentence = {Subj: "it",
                            subjNum: ENUM.sing,
                            BFV: "rain",
                            isIrreg: false,
                            isAction: true,
                            SPast: "studied",
                            ingForm: "studying",
                            theRest: "cats and dogs."
                          };


// Put words onto screen
document.getElementById("words").innerText = sentence['Subj'] + "/" + sentence['BFV'] + "/" +
                              sentence['theRest'];


// create buttons

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

              //var keypad = document.getElementById('keypad');


              buttons.forEach(function (item){


                if (item['name']) {
                var btn = document.createElement("Button");
                btn.innerHTML = item['name'];
                btn.onclick = function () {
                  var id, name;
                  word = item['name'];
                  id = item['id'];
                  buttonPress(id);
                  console.log(word);
                }
                document.body.appendChild(btn);
              }
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
      break;

    case ENUM.pl:
  }


var simplePresNeg = [ENUM.subj, doForm, ENUM.not, ENUM.BFV];
simplePresNeg.name = "Simple present, negative";
var simplePresQ = [doForm, ENUM.subj, ENUM.BFV];
simplePresQ.name = "Simple present, yes/no question";
var simplePresAffirm;
if (doForm === ENUM.does) {
    simplePresAffirm = [ENUM.subj, ENUM.BFV, ENUM.s];
} else {
    simplePresAffirm = [ENUM.subj, ENUM.BFV ];
}
simplePresAffirm.name = "Simple present, affirmative";
var simplePastAffirm;
if (sentence.isIrreg) {
  simplePastAffirm = [ENUM.subj, ENUM.irreg];
} else {
  simplePastAffirm = [ENUM.subj, ENUM.BFV, ENUM.ed];
}
simplePastAffirm.name = "Simple past, affirmative";
var simplePastNeg = [ENUM.subj, ENUM.did, ENUM.not, ENUM.BFV];
simplePastNeg.name = "Simple past, negative";
var simplePastQ = [ENUM.did, ENUM.subj, ENUM.BFV]
simplePastQ.name = "Simple past, question";

var presProgAffirm = [ENUM.subj, bePresForm, ENUM.BFV, ENUM.ing];
presProgAffirm.name = "Present progressive, affirmative";
var presProgNeg = [ENUM.subj, bePresForm, ENUM.not, ENUM.BFV, ENUM.ing];
presProgNeg.name = "Present progressive, negative";
var presProgQ = [bePresForm, ENUM.subj, ENUM.BFV, ENUM.ing];
presProgQ.name = "Present progressive, question";

var wCounter = 0;
var fCounter = 0;

var currentForm = [
  simplePresAffirm, simplePresNeg, simplePresQ,
  presProgAffirm, presProgNeg, presProgQ,
  simplePastAffirm, simplePastNeg, simplePastQ];


document.getElementById('therest').innerText = sentence.theRest;

function buttonPress(arr){
//var answer = document.getElementById("answer").value;

// create sentence info
//var arr = answer.split(" ");
console.log(arr, currentForm);
if (currentForm[fCounter][wCounter] == arr) {
  console.log("treffer!");
  wCounter++;
  console.log(buttons.find(function(element){return element.id == arr;})['name']);
  document.getElementById('result').innerText += buttons.find(function(element){return element.id == arr;})['name'];
  document.getElementById('result').innerText += "-";
  document.getElementById('instructions').innerText = currentForm[fCounter].name;
    if (wCounter == currentForm[fCounter].length) {
      console.log("you win that form!!");
      gotIt(document.getElementById('result').innerText);
      win = true;
      wCounter = 0;
      fCounter++;
      console.log("fcounter:" + fCounter);
      if (fCounter == currentForm.length) {console.log("You won the whole Internet");}
      document.getElementById('result').innerText = "";

    }
  } else {
  console.log("Falsch!!!");
  document.getElementById('goodjob').style.display = "block";
  document.getElementById('goodjob').style.backgroundColor = "red";
  document.getElementById('goodjob').innerHTML = "<h1> Wrong!!!!</h1>";
  document.getElementById('goodjob').innerHTML += "<p> Try again.</p>";
  setInterval(function (){
    document.getElementById('goodjob').style.display = "none";
    document.getElementById('goodjob').style.backgroundColor = "lightgreen";
  }, 2000);
   }

}







/////////

function gotIt(mesg) {
  document.getElementById('goodjob').style.display = "block";
  document.getElementById('goodjob').innerHTML = "<h1> Good Job!</h1>";
  document.getElementById('goodjob').innerHTML += "<h2>" + mesg + "</h2>";
  setInterval(function (){
    document.getElementById('goodjob').style.display = "none";
  }, 2000);
}
