// var mainDiv = document.getElementsByClassName("yaqoob");
// var para = document.getElementsByClassName("yaqoob");
// console.log(para);
// var score = 0;
// for (var i = 0; i < para.length; i++) {
//   para[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";

//     // this.disabled = true;
//     // console.log(this);
//     btnDisable();
//     resultCalculatio = result(score);

//     console.log(resultCalculatio);
//     // console.log(++score);
//   });
// }
// ==============================================================================================
// para[0].addEventListener("click", function () {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   current.checked;

//   console.log(this.className);
//   console.log(this);
//   // console.log(para[i].className);
// });
// function btnDisable() {
//   for (var j = 0; j < para.length; j++) {
//     para[j].disabled = true;
//     // console.log(para[j].disabled);
//   }
//   console.log("disabled");
//   return;
// }
// function result(count) {
//   count += 10;
//   return count;
// }
// ===========================================================================================

// document.getElementsByTagName("input")[0].disabled = true;
// document.getElementsByTagName("input")[1].value = " l l l l";
// document.getElementsByTagName("input")[0].disabled = true;
// document.getElementsByTagName("input")[0].innerHTML = "hello";

// console.log(document.getElementsByTagName("input")[0].disabled);
// console.log(document.getElementsByTagName("input")[1].disabled);
// console.log((document.querySelector("input").disabled = true));

// console.log(document.getElementsByClassName("yaqoob")[0].children[0]);
// console.log(
//   document.getElementsByTagName("input")[0].parentNode.parentElement
//     .parentElement.parentElement
// );

// ========================================================================================
// function toDisableAllCheckBox() {
// for (var i = 0; i < 10; i++) {
// console.log((document.getElementsByTagName("input")[i].disabled = true));
// console.log(document.activeElement);
// console.log((document.getElementsByTagName("input")[4].disabled = true));
// console.log((document.getElementsByTagName("input")[6].disabled = true));
// }
// document.getElementsByTagName("input")[9].value = "navyaan";
// }

// para[i].addEventListener("click", function () {
// var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";

//   // this.disabled = true;
//   // console.log(this);
//   btnDisable();
//   resultCalculatio = result(score);

//   console.log(resultCalculatio);
//   // console.log(++score);
// });
// ==========================================================================================

var questionsArr = [
  {
    question: "1- what is your name ?",
    answer: "Yaqoob",
    options: ["Yaqoob", "Navyaan", "Hamza", "Ibraheem"],
  },
  {
    question: "2- what is your fathers name ?",
    answer: "Ibraheem",
    options: ["Ibraheem", "Navyaan", "Hamza", "Yaqoob"],
  },
  {
    question: "3- what is your grand father name ?",
    answer: "Dawood",
    options: ["Ibraheem", "Dawood", "Hamza", "Yaqoob"],
  },
  {
    question: "4- what is your country's name ?",
    answer: "Pakistan",
    options: ["Pakistan", "Afghanistan", "Denmark", "Libya"],
  },
];
// =================================================Next btn=============================================
var questionPlace = document.getElementsByClassName("btn-submit")[0];
var count = 0;

function nextBtn1(e) {
  document.getElementsByClassName("active")[0].checked = false;
  console.log(questionsArr.length);

  if (e === questionsArr.length) {
    document.getElementById("male").disabled = true;
    document.getElementById("male").innerHTML = "";
    document.getElementById("female").innerHTML = "END";
    resultPage();
  } else {
    questionPlace.innerHTML = questionsArr[e].question;

    for (let i = 0; i < questionsArr[e].options.length; i++) {
      var targetOptions = document.getElementsByTagName("label")[i];

      targetOptions.innerHTML = questionsArr[e].options[i];
      // nextBtn(e);
    }
  }
}
function nextBtn2() {
  if (
    document.getElementsByClassName("btnSubmit")[0].checked ||
    document.getElementsByClassName("btnSubmit")[1].checked ||
    document.getElementsByClassName("btnSubmit")[2].checked ||
    document.getElementsByClassName("btnSubmit")[3].checked
  ) {
    console.log("yes");
    for (var i = 0; i <= 3; i++) {
      var testing = document.getElementsByClassName("btnSubmit")[i].checked;

      if (testing === true) {
        console.log(i);
        console.log(document.getElementsByClassName("btnSubmit")[i].className);
        document.getElementsByClassName(
          "active"
        )[0].className = document
          .getElementsByClassName("active")[0]
          .className.replace(" active", "");
        document.getElementsByClassName("btnSubmit")[i].className += " active";
        console.log(document.getElementsByClassName("btnSubmit")[i].className);
        // console.log(document.getElementsByClassName("active")[0].nextSibling);
        var test1 = document.getElementsByClassName("active")[0];

        console.log(test1.nextSibling.innerHTML);
        // console.log(questionsArr[0].answer);

        if (test1.nextElementSibling.innerHTML === questionsArr[count].answer) {
          console.log("correct");
          // test1.nextElementSibling.style.backgroundColor = "green";
          // test1.nextElementSibling.style.color = "white";

          checkingAns();
          // console.log(count);
          nextBtn1(count);
        } else {
          // test1.nextElementSibling.style.backgroundColor = "red";
          // test1.nextElementSibling.style.color = "white";
          nextBtn1(++count);
        }
        // toResetAll1();
      }
    }
  } else {
    alert("Please Check Box or Press Skip");
  }
}
// console.log(
//   document.getElementsByClassName("active")[0].nextSibling.textContent

//   // checkingAns();
// );
// document.getElementsByClassName(
//   "active"
// )[0].className = document
//   .getElementsByClassName("active")[0]
//   .className.replace(" active", "");
// console.log(document.getElementsByClassName("btnSubmit")[0]);

// if () {

// }
// nextBtn(++count);
// console.log(count++);

var number = 0;
function checkingAns() {
  number = number + 10;
  console.log(number);
  count++;
  // console.log(count);
  return number;
}

function nextBtn3() {
  count++;
  nextBtn1(count);
}

function resultPage() {
  var resultBtn = document.createElement("button");
  var resultBtnAtt = document.createAttribute("onclick");
  resultBtnAtt.value = "window.location.href='result.html'";
  resultBtn.setAttributeNode(resultBtnAtt);
  resultBtn.innerHTML = "RESULT";
  resultBtn.style.width = "200px";
  resultBtn.style.fontSize = "large";
  resultBtn.style.marginLeft = "10px";
  document.getElementsByClassName("result")[0].appendChild(resultBtn);

  // document.getElementById("resultPage").lastElementChild.innerHTML =
  //   "result is" + number;
  // console.log(document.getElementById("resultPage").lastElementChild.innerHTML);
}

// function toUncheck() {
//   console.log(document.getElementsByClassName("active")[0].checked);
//   document.getElementsByClassName("active")[0].checked = false;

//   console.log(document.getElementsByClassName("active")[0].checked);
//   console.log(
//     (document.getElementsByClassName(
//       "active"
//      )[0].nextElementSibling.style.backgroundColor = "white")
//   );
//   console.log(
//     (document.getElementsByClassName(
//       "active"
//     )[0].nextElementSibling.style.color = "black")
//   );
//   return;
// }

// var toResetAll = document.getElementsByName("btn");
// function toResetAll1() {
//   for (let i = 0; i < toResetAll.length; i++) {
//     if (toResetAll[i].checked == true) {
//       console.log(toResetAll[i].checked);
//       toResetAll[i].checked = false;
//       // console.log(
//       //   (toResetAll[i++].nextElementSibling.style.backgroundColor = "white")
//       // );
//       toResetAll[i].nextElementSibling.style.backgroundColor = "white";
//       toResetAll[i].nextElementSibling.style.color = "black";

//       console.log("please reset");
//     }
//   }
// }
