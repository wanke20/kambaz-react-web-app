import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control
        defaultValue="alice"
        placeholder="username"
        type="text"
        className="mb-2 wd-username"
      />
      <Form.Control
        defaultValue="123"
        placeholder="password"
        type="password"
        className="mb-2 wd-password"
      />
      <Form.Control
        defaultValue="Alice"
        placeholder="First Name"
        type="text"
        id="wd-firstname"
        className="mb-2"
      />
      <Form.Control
        defaultValue="Wonderland"
        placeholder="Last Name"
        type="text"
        id="wd-lastname"
        className="mb-2"
      />
      <Form.Control
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
        className="mb-2"
      />
      <Form.Control
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
        className="mb-2"
      />
      <Form.Select defaultValue="FACULTY" id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100">
        Sign out
      </Link>
    </div>
  );
}
