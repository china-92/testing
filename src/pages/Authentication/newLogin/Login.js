import React from "react";

import { withRouter, Link } from "react-router-dom";

import Google from "../../../assets/css/common/icons/google.svg";
import Logo from "../../../assets/css/common/icons/logo.svg";
import Car from "../../../assets/css/common/icons/car.png";
import Eye from "../../../assets/css/common/icons/icon.svg";
import EyeSlash from "../../../assets/css/common/icons/eye-slash.svg";
import Vector2 from "../../../assets/css/common/icons/vector2.svg";
import SMS from "../../../assets/css/common/icons/sms.svg";
import Lock from "../../../assets/css/common/icons/lock.svg";

//import classes
import classes from "../../../assets/css/Authentication/Login/Login.module.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      text: false,
      errorEmail: false,
      errorPassword: false,
    };

    // handleValidSubmit
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.toggleEye = this.toggleEye.bind(this);
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
    if (name === "email" && /@/i.test(event.target.value)) {
      this.setState({
        ...this.state,
        ...this.state,
        [name]: event.target.value,
        errorEmail: false,
      });
    } else if (name === "password" && /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(event.target.value)) {
      this.setState({
        ...this.state,
        ...this.state,
        [name]: event.target.value,
        errorPassword: false,
      });
    }
  };

  // handleValidSubmit
  handleValidSubmit(event) {
    event.preventDefault();

     
   
    if (/@/i.test(this.state.email) && /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(this.state.password)) {
      this.props.history.push("/dashboard");
     } else {
       if (!/@/i.test(this.state.email) && this.state.password.length < 8) {
         this.setState({ ...this.state, errorEmail: true, errorPassword: true });
         return;
       } else if (!/@/i.test(this.state.email)) {
         this.setState({ ...this.state, errorEmail: true });
         return;
       } else if (!/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(this.state.password)) {
         this.setState({ ...this.state, errorPassword: true });
       }
     }
  }

  toggleEye() {
    this.setState({ ...this.state, text: !this.state.text });
  }

  componentDidMount() {
    document.body.classList.add("bg-transparent");
  }
  componentWillUnmount() {
    document.body.classList.remove("bg-transparent");
  }

  render() {
    return (
      <div className={classes.login_register}>
        <div className={classes.log_reg_left}>
          <img src={Car} alt="" className={classes.log_reg_img} />
          <div className={classes.login_layer}>
            <img src={Logo} alt="" className={classes.white_logo} />
            <div className={classes.log_reg_slider}>
              <div className={classes.left_slide_item}>
                <h4 className={classes.slide_h4}>
                  Grow Business By Getting In Front of Your Ideal Customers
                </h4>
                <div className={classes.slide_txt}>
                  Explore audience on streets via real-time street-level data
                  and connect with them via smart digital car-top billboards,
                  engage with viewers in real-time, collect data in exchange of
                  rewards and discounts and retarget them via retargeting online
                  Ads dynamically.
                </div>
              </div>
            </div>
            <p
              className={`${classes.footer_copyright} ${classes.mur_flex} ${classes.log_reg_footer}`}
            >
              <img src={Vector2} alt="" />
              <span>2021, MurmurCars</span>
            </p>
          </div>
        </div>
        <div className={classes.log_reg_right}>
          <div className={classes.login_section}>
            <h1 className={classes.login_h1}>Login to Murmur</h1>
            <form onSubmit={this.handleValidSubmit}>
              <div className={classes.login_form}>
                <div className={`${classes.login_relative} ${classes.mb_24}`}>
                  <input
                    type="text"
                    className={`${classes.login_form_item} ${
                      this.state.errorEmail && classes.login_form_item_error
                    }`}
                    name="email"
                    id="login-email"
                    value={this.state.email}
                    placeholder="Enter your E-mail"
                    onChange={this.handleInputChange}
                  />
                  <img src={SMS} alt="" className={classes.login_email_icon} />
                  {this.state.errorEmail && (
                    <span className={classes.pass_error}>
                      Please type a valid email address
                    </span>
                  )}
                </div>
                <div className={classes.login_relative}>
                  <input
                    type={`${this.state.text ? "text" : "password"}`}
                    className={`${classes.login_form_item} ${
                      this.state.errorPassword && classes.login_form_item_error
                    }`}
                    name="password"
                    id="login-password"
                    value={this.state.password}
                    placeholder="Enter your Password"
                    onChange={this.handleInputChange}
                  />
                  {this.state.errorPassword && (
                    <span className={classes.pass_error}>
                      1 lovercase, uppercase English letter, digit and a special
                      character, at least 8 long
                    </span>
                  )}
                  <img src={Lock} alt="" className={classes.login_email_icon} />
                  <button
                    onClick={this.toggleEye}
                    type="button"
                    className={classes.pass_eye}
                  >
                    <img src={`${this.state.text ? EyeSlash : Eye}`} alt="" />
                  </button>
                </div>
                <div className={classes.remember_forgot}>
                  <div className={classes.form_group_log}>
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">
                      <span>Remember me</span>
                    </label>
                  </div>
                  <Link to="/forgot-password" className={classes.forgot_pass}>
                    Forgot password?
                  </Link>
                </div>
                <button type="submit" className={classes.login_form_btn}>
                  Log in
                </button>
                <div className={classes.or_block}>
                  <span>or</span>
                </div>
                <button
                  name="GoogleLogin"
                  type="submit"
                  className={classes.login_google}
                >
                  <img src={Google} alt="" />
                  <span>Log In with Google</span>
                </button>
                <p className={classes.have_account}>
                  {" "}
                  Don’t have an account?{" "}
                  <Link to="/register" className={classes.have_acc_link}>
                    {" "}
                    Signup here{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <ul className={`${classes.footer_links} ${classes.login_footer}`}>
            <li>
              <a href="#" className={classes.footer_link}>
                All rights reserved
              </a>
            </li>
            <li>
              <a href="#" className={classes.footer_link}>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
