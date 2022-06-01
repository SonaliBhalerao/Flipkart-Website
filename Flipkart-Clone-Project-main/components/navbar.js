let Navbar = () => {
  return `<div id="header">
      <div id="nav">
        <div id="main-logo">
          <img
            width="75"
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="Flipkart Logo"
          />
        </div>
        <div id="searchbar">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            autocomplete="off"
          />
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 17 18"
              class=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#2874F1" fill-rule="evenodd">
                <path
                  d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                ></path>
                <path
                  d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div id="main-login">
          <button id="main-login_btn">Login</button>
        </div>
        <div id="more">More</div>
        <div id="cart">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
              fill="#fff"
            ></path>
          </svg>
          <p id="cart-text">Cart</p>
        </div>
      </div>
    </div>
    <div id="backdrop"></div>
    <div id="modal">
      <button id="close-modal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fill-rule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </button>
      <div id="modal-div">
        <div id="info">
          <div id="info-text">
            <p id="info-head">Login</p>
            <p id="info-desc">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          <div id="info-img">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Login Svg"
            />
          </div>
        </div>
        <div id="login">
          <div class="input-field">
            <input type="text" id="uid" required autocomplete="off" />
            <label for="uid">Enter Email/Mobile Number</label>
          </div>

          <div class="input-field" id="input-pass">
            <input type="password" id="upass" required autocomplete="off" />
            <label for="upass">Enter Password</label>
            <span class="forgot-pass">Forgot?</span>
          </div>

          <p id="privacy-terms">
            By continuing, you agree to Flipkart's
            <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>.
          </p>
          <button class="login-btn" id="login-btn">Login</button>
          <p id="separator">OR</p>
          <button class="otp-btn" id="otp-btn" onclick="otpData('login')">
            Request OTP
          </button>
          <p id="signup" onclick="signupData()">
            New to Flipkart? Create an account
          </p>
        </div>
      </div>
    </div>`;
};

export { Navbar };
