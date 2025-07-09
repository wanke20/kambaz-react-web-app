import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input placeholder="username" type="text" className="wd-username" defaultValue="user" /> <br />
      <input placeholder="password" type="password" className="wd-password" />
      <br />
      <Link id="wd-signin-btn" to="/Kambaz/Dashboard">
        Sign in
      </Link>
      <br />
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
