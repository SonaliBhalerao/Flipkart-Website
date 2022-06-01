let userData = JSON.parse(localStorage.getItem("userData")) || [];

let loggedIN = localStorage.getItem("loggedIN") || false;
let curUser = localStorage.getItem("curUser") || "";

//##################   Modal Module   ###########################
let mainLogo = document.getElementById("main-logo");
mainLogo.addEventListener("click", () => {
  let windowLoc = window.location.pathname.split("/").includes("pages");
  if (windowLoc) {
    window.location.href = `../index.html`;
  } else {
    window.location.href = `index.html`;
  }
});

let search = document.querySelector("#searchbar input[type='text']");
search.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.keyCode === 13) {
    let windowLoc = window.location.pathname.split("/").includes("pages");

    if (windowLoc) {
      window.location.href = `${search.value.trim()}.html`;
    } else {
      window.location.href = `pages/${search.value.trim()}.html`;
    }
  }
});

let Modal = (op) => {
  if (op == "open") {
    window.location.href = "#";
    backdrop.style.display = "block";
    modal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  } else if (op == "close") {
    backdrop.style.display = "none";
    modal.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  }
};

function loginEvent() {
  loginBtn.addEventListener("click", () => {
    loginData();
    Modal("open");
  });
}

let loginBtnDiv = document.querySelector("#main-login");
let loginBtn = document.querySelector("#main-login_btn");
if (loggedIN == false) {
  loginEvent();
} else {
  checkLogin(curUser);
}

function checkLogin(curUser) {
  loginBtn.removeAttribute("id", "main-login_btn");
  loginBtn.setAttribute("id", "main-login_user");
  let userLoginBtn = document.querySelector("#main-login_user");
  userLoginBtn.innerText = `${curUser}`;
  function onMouseEnter() {
    userLoginBtn.removeAttribute("id", "main-login_user");
    userLoginBtn.setAttribute("id", "main-logout_btn");
    userLoginBtn.innerText = `Logout`;
  }
  function onMouseLeave() {
    userLoginBtn.removeAttribute("id", "main-logout_btn");
    userLoginBtn.setAttribute("id", "main-login_user");
    userLoginBtn.innerText = `${curUser}`;
  }
  function onMouseDown() {
    localStorage.removeItem("curUser");
    localStorage.removeItem("loggedIN");
    userLoginBtn.removeAttribute("id", "main-login_user");
    userLoginBtn.setAttribute("id", "main-login_btn");
    userLoginBtn.innerText = `Login`;
    userLoginBtn.removeEventListener("mouseenter", onMouseEnter);
    userLoginBtn.removeEventListener("mouseleave", onMouseLeave);
    loginData();
    Modal("open");
    userLoginBtn.removeEventListener("mousedown", onMouseDown);
  }
  userLoginBtn.addEventListener("mouseenter", onMouseEnter);
  userLoginBtn.addEventListener("mouseleave", onMouseLeave);
  userLoginBtn.addEventListener("mousedown", onMouseDown);
}

let closeModal = document.querySelector("#close-modal");
let backdrop = document.querySelector("#backdrop");
let modal = document.querySelector("#modal");
closeModal.addEventListener("click", () => {
  Modal("close");
});

//##################   Login Module   ###########################

let loginData = function () {
  let infoDesc = document.querySelector("#info-desc");
  infoDesc.innerText =
    " Get access to your Orders, Wishlist and Recommendations";
  let infoHead = document.querySelector("#info-head");
  infoHead.innerText = "Login";
  let login = document.querySelector("#login");
  login.innerHTML = ` <div class="input-field">
            <input type="text" id="uid" required autocomplete="off"/>
            <label for="uid">Enter Email/Mobile Number</label>
          </div>

          <div class="input-field" id="input-pass">
            <input type="password" id="upass" required autocomplete="off"/>
            <label for="upass">Enter Password</label>
            <span class="forgot-pass">Forgot?</span>
          </div>

          <p id="privacy-terms">
            By continuing, you agree to Flipkart's
            <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>.
          </p>
          <button class="login-btn" id="login-btn">Login</button>
          <p id="separator">OR</p>
          <button class="otp-btn" id="otp-btn">Request OTP</button>
          <p id="signup">New to Flipkart? Create an account</p>`;

  let signUp = document.querySelector("#signup");
  signUp.addEventListener("click", () => {
    signupData();
  });

  let callOTPData = function () {
    if (Uid.value == "" || Uid.value == null) alert("Enter your Email");
    else {
      let flag = false;
      for (let el of userData) {
        if (el.email == Uid.value || el.mobile == Uid.value) {
          flag = true;
          curUser = el.name;
          break;
        }
      }
      flag ? otpData("login", curUser) : alert("User doesn't Exists");
    }
  };

  let Uid = document.querySelector("#uid");
  let Upass = document.querySelector("#upass");
  let forgotPass = document.querySelector(".forgot-pass");
  forgotPass.addEventListener("click", () => callOTPData());

  let otpBtn = document.querySelector("#otp-btn");
  otpBtn.addEventListener("click", () => callOTPData());

  let loginBtn = document.querySelector("#login-btn");
  loginBtn.addEventListener("click", () => {
    if (Uid.value == "" && Upass.value == "")
      alert("Enter your Email and Password");
    //**********************************************
    else {
      let flag = false;
      for (let el of userData) {
        if (
          (el.email == Uid.value || el.mobile == Uid.value) &&
          el.password == Upass.value
        ) {
          flag = true;
          curUser = el.name;
          break;
        }
      }
      if (flag) {
        Modal("close");
        localStorage.setItem("loggedIN", true);
        localStorage.setItem("curUser", curUser);
        checkLogin(curUser);
        // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      } else alert("Invalid Credentials");
      //**********************************************
    }
  });
};

//##################   OTP Module   ###########################

function generate() {
  var digits = "0123456789";
  let OTP = [];
  for (let i = 0; i < 6; i++) {
    OTP.push(digits[Math.floor(Math.random() * 10)]);
  }
  return OTP;
}

let pop, popOTP, removePop;

let otpData = function (module, user) {
  let genString = generate().join("");
  let login = document.querySelector("#login");
  login.innerHTML = ` <p id="enter-otp">Please enter the OTP. <span class='mod-links' id="callLogin">Change</span></p>
          <form id='otpForm'>
            <div id="otp">
              <input type='text' maxlength="1" size='1' id="d1" onkeyup="document.getElementById('d2').focus()" autocomplete="off">
              <input type='text' maxlength="1" size='1' id="d2" onkeyup="document.getElementById('d3').focus()" autocomplete="off">
              <input type='text' maxlength="1" size='1' id="d3" onkeyup="document.getElementById('d4').focus()" autocomplete="off">
              <input type='text' maxlength="1" size='1' id="d4" onkeyup="document.getElementById('d5').focus()" autocomplete="off">
              <input type='text' maxlength="1" size='1' id="d5" onkeyup="document.getElementById('d6').focus()" autocomplete="off">
              <input type='text' maxlength="1" size='1' id="d6" onkeyup="document.getElementById('verify-btn').focus()" autocomplete="off">
              </div>
              <input class="login-btn" id="verify-btn" type="submit" value="Verify"/>
          </form>
          <p id="resend">Not Recieved your code? <span class='mod-links' id='mod-links'>Resend code</span></p>
          <div id="otpMsg">
          <p>Wait for your OTP</p>
          </div>`;

  let callLogin = document.querySelector("#callLogin");
  callLogin.addEventListener("click", () => loginData());

  let modLinks = document.querySelector("#mod-links");
  modLinks.addEventListener("click", () => otpData());

  if (pop || popOTP || removePop) {
    clearTimeout(pop);
    clearTimeout(removePop);
    clearTimeout(popOTP);
  }

  let otpMsg = document.getElementById("otpMsg");
  pop = setTimeout(() => {
    otpMsg.style.display = "block";
  }, 1000);
  popOTP = setTimeout(() => {
    otpMsg.innerHTML = `<p>Your OTP is ${genString}</p>`;
  }, 2000);
  removePop = setTimeout(() => {
    otpMsg.style.display = "none";
  }, 7000);

  let otpForm = document.querySelector("#otpForm");
  otpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let enteredOTP =
      otpForm.d1.value +
      otpForm.d2.value +
      otpForm.d3.value +
      otpForm.d4.value +
      otpForm.d5.value +
      otpForm.d6.value;
    if (enteredOTP === genString && module == "login") {
      Modal("close");
      localStorage.setItem("loggedIN", true);
      localStorage.setItem("curUser", user);
      checkLogin(curUser);
      // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    }
  });
};

//##################   Signup Module   ###########################

let signupData = function () {
  let infoDesc = document.querySelector("#info-desc");
  infoDesc.innerText = "Sign up with your mobile number to get started";
  let infoHead = document.querySelector("#info-head");
  infoHead.innerText = "Looks like you're new here!";
  let login = document.querySelector("#login");
  login.innerHTML = `<div class="input-field">
            <input type="text" id="uid" required autocomplete="off"/>
            <label for="uid">Enter Mobile Number</label>
          </div>

          <p id="privacy-terms">
            By continuing, you agree to Flipkart's
            <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>.
          </p>
          <button class="login-btn" id='cont-btn'>CONTINUE</button>
          <button class="otp-btn" id='exist-btn'>Existing User? Login</button>
        </div>`;

  let Uid = document.querySelector("#uid");
  let loginBtn = document.querySelector("#cont-btn");
  loginBtn.addEventListener("click", () => {
    if (Uid.value == "") alert("Enter your Mobile Number");
    else {
      let flag = false;
      for (let el of userData) {
        if (el.mobile == Uid.value) {
          flag = true;
          break;
        }
      }
      !flag ? finalSignup(Uid.value) : alert("User already Exists!"); //**********************************************
    }
  });

  let existBtn = document.querySelector("#exist-btn");
  existBtn.addEventListener("click", () => {
    loginData();
  });
};

let timer1;
let timer2;
let timer3;

let otpString = function (string) {
  if (timer1 || timer2 || timer3) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
  }
  let newOTP = generate().join("");
  let signOTP = document.querySelector("#sign-otp");
  timer1 = setTimeout(() => {
    signOTP.style.display = "block";
    signOTP.innerHTML = `Wait for your OTP`;
  }, 500);
  timer2 = setTimeout(() => {
    signOTP.innerHTML = `Your OTP: ${newOTP}`;
  }, 2000);
  timer3 = setTimeout(() => {
    signOTP.style.display = "none";
  }, 7000);
  return newOTP;
};

let curOTP;
let finalSignup = function (mobileNum) {
  let login = document.querySelector("#login");
  login.style.paddingTop = "2rem";
  login.innerHTML = ` <div class="input-field">
            <input type="text" id="umob" size="10" maxlength="10" required autocomplete="off"/>
            <label for="umob">Mobile Number</label>
            <span class="forgot-pass" id='changeMob'>Change?</span>
          </div>

          <p id="sign-otp"></p>

          <div class="input-field" id="input-otp">
            <input type="text" id="uotp" size="6" maxlength="6" required autocomplete="off"/>
            <label for="uotp">Enter OTP</label>
            <span class="forgot-pass" id='resendOTP'>Resend?</span>
          </div>

          <div class="input-field" id="input-uname">
            <input type="text" id="uname" required autocomplete="off"/>
            <label for="uname">Set a Username</label>
          </div>

          <div class="input-field" id="input-email">
            <input type="email" id="umail" required autocomplete="off"/>
            <label for="umail">Set Email</label>
          </div>

          <div class="input-field" id="input-pass">
            <input type="password" id="upass" required autocomplete="off"/>
            <label for="upass">Set Password</label>
          </div>

          <button class="login-btn" id="signup-btn">Signup</button>
          <p id="loginExist">Existing user? Login</p>
         `;
  curOTP = otpString();

  let changeMob = document.querySelector("#changeMob");
  changeMob.addEventListener("click", () => signupData());

  let loginExist = document.querySelector("#loginExist");
  loginExist.addEventListener("click", () => loginData());

  let forgotPass = document.querySelector("#resendOTP");
  forgotPass.addEventListener("click", () => {
    curOTP = otpString();
  });

  let Umob = document.querySelector("#umob");
  Umob.value = mobileNum;

  let signupBtn = document.querySelector("#signup-btn");
  signupBtn.addEventListener("click", () => {
    let Uotp = document.querySelector("#uotp").value;
    let userObj = {
      name: document.querySelector("#uname").value,
      email: document.querySelector("#umail").value,
      mobile: document.querySelector("#umob").value,
      password: document.querySelector("#upass").value,
    };

    if (curOTP == Uotp) {
      userData.push(userObj);
      localStorage.setItem("userData", JSON.stringify(userData));
      loginData();
    } else alert("Invalid OTP"); //**********************************************
  });
};
