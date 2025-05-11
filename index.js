let loginLink = document.querySelector("#loginLink");
let overlay = document.querySelector("#overlay");
let loginPage = document.querySelector("#loginPage");

loginLink.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.style.display = "block";
  setTimeout(() => {
    // loginPage.classList.add("loginVisible");
    loginPage.style.display = "block";
  }, 200);
});

// login-form varibles
let UserName = document.querySelector(".username");
let UserPassword = document.querySelector(".userpass");
let loginBtn = document.querySelector("#loginBtn");
let spanOne = document.querySelector(".one");
let spanTwo = document.querySelector(".two");
let loginData = [{}];
let counter = 0;

loginBtn.addEventListener("click", function () {
  //afterclick login button.
  UserPassword.addEventListener("input", (e) => Us(e));
  counter = 1;

  if (counter == 1) {
    function Us(e) {
      if (e.target.value.length >= 6) {
        spanTwo.textContent = "strong password";
        spanTwo.style.color = "green";
        spanTwo.style.fontWeight = "bold";
      } else {
        spanTwo.textContent = "weak password ..";
        spanTwo.style.color = "black";
        spanTwo.style.fontWeight = "lighter";
      }
    }
  }
  //start opration from here.
  if (UserName.value !== "") {
    console.log("name collect");
  } else {
    console.log("please enter name");
    spanOne.textContent = "please enter name";
    spanTwo.style.color = "black";
  }
  if (UserPassword.value !== "") {
    console.log("password collect");
  } else {
    console.log("please enter password");
    spanTwo.textContent = "please enter password";
    spanTwo.style.fontWeight = "lighter";
  }
  if (UserPassword.value.length >= 1 && UserPassword.value.length <= 6) {
    console.log("password length is weak");
    document.querySelector(".two").textContent = "weak length";
  }
  //! if complation username and password
  let getSignUpData = JSON.parse(localStorage.getItem("data"));
  // console.log(getSignUpData); //* signUp_data
  // let [{ username, password }] = [...getSignUpData];
  let [{ userName, password }] = getSignUpData;
  // let { password } = getSignUpData;
  console.log(userName, password);
  console.log("check kro ");
  if (
    UserName.value !== "" &&
    UserPassword.value !== "" &&
    UserPassword.value.length >= 6 &&
    UserName.value == userName &&
    UserPassword.value == password
  ) {
    console.log("now function exucuting ... ");
    let a = document.querySelector("#demo");
    setTimeout(() => {
      a.textContent = "SuccessFully SignUp!";
      a.style.color = "green";
    }, 1000);

    UserName.value = "";
    UserPassword.value = "";
    spanOne.textContent = "";
    spanTwo.textContent = "";
    loginPage.style.display = "none";
    overlay.style.display = "none";
  } else {
    alert("wrong username or password");
  }
});
let closeBtn = document.querySelector("#closeBtn button");
let closeBtnInner = document.querySelector("#closeBtnInner");
closeBtn.addEventListener("click", function () {
  alert("Login form not complited !");
  overlay.style.display = "none";
  loginPage.style.display = "none";
  UserName.value = "";
  UserPassword.value = "";
  spanOne.textContent = "";
  spanTwo.textContent = "";
});
// signUp link press
// let signUpdata = [{ fullname: "", username: "", phoneNum: "", password: "" }];

let signUp = document.querySelector("#SignUplink");
// signUp complition work
let signUpContainer = document.querySelector("#signUpContainer");
let signUpComplition = document.querySelector("#SingUpBtn");

signUp.addEventListener("click", function (i) {
  i.preventDefault();
  i.stopPropagation(); //* very good

  // overlay.style.backgroundColor = "blue";  //* commented
  loginPage.style.display = "none";
  signUpContainer.style.display = "block";

  //*now submiting work
});
let empty = [];

signUpComplition.addEventListener("click", function (e) {
  let allSubmiting_value = document.querySelectorAll("#signInputBox input");

  //! changed few code here
  // let signUpData_getCheck = JSON.parse(localStorage.getItem("data"));
  // console.log(signUpData_getCheck);
  // console.log(names);

  //?check this work is pending
  if (
    allSubmiting_value[0].value !== "" &&
    allSubmiting_value[1].value !== "" &&
    allSubmiting_value[2].value !== "" &&
    allSubmiting_value[3].value !== ""
  ) {
    let newsibmitedData = {
      name: allSubmiting_value[0].value,
      userName: allSubmiting_value[1].value,
      phone: allSubmiting_value[2].value,
      password: allSubmiting_value[3].value,
    };
    empty.push(newsibmitedData);

    localStorage.setItem("data", JSON.stringify(empty));

    let signUpData_getCheck = JSON.parse(localStorage.getItem("data")) || [];
    let data = signUpData_getCheck.find((user) => user.UserName == "preet");
    console.log(data);
    console.log(signUpData_getCheck);

    allSubmiting_value.forEach((e) => {
      e.value = "";
    });
    //over
    setTimeout(() => {
      signUpContainer.style.display = "none";
      overlay.style.display = "none";
    }, 1000);

    //over

    //c
  }
});

closeBtnInner.addEventListener("click", backupToHome);
function backupToHome() {
  overlay.style.display = "none";
  signUpContainer.style.display = "none";
}

// let a = [...signUpdata2];
// console.log(a[0].fname);

// console.log(newsibmitedData);
let allSubmiting_value = document.querySelectorAll("#signInputBox input");
// window.addEventListener("dOMContentLoaded", addingArray);
//*do work exersice
// let obj = [
//   { name: "raj", roll: 121 },
//   { name: "man", roll: 122 },
//   { name: "dipak", roll: 123 },
// ];

// let check = obj.map((item, index) => {
//   if (item.name == "man") {
//     console.log("yes");
//   }
//   return item;
// });
// console.log(check);
// todo hoteldeshbord js code
let bookNowBtn = document.querySelector("#bookNow");
bookNowBtn.addEventListener("click", bookNow);
function bookNow() {
  alert("No imformation");
}

//* cards
let allcards = document.querySelectorAll(".cards");
allcards.forEach((e) => {
  e.addEventListener("mouseenter", function () {
    // alert("not functionality added yet");
  });
});

// todo hoteldeshbord js code
