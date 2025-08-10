import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as courseClient from "../client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const { cid } = useParams();

  const fetchUsers = async () => {
    if (!cid) {
      setUsers([]);
      return;
    }
    const users = await courseClient.findUsersForCourse(cid);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);
  return (
    <div>
      <h3>Users</h3>
      <div id="wd-people-table">
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Login ID</th>
              <th>Section</th>
              <th>Role</th>
              <th>Last Activity</th>
              <th>Total Activity</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id"> {user.loginId}</td>
                <td className="wd-section"> {user.section}</td>
                <td className="wd-role"> {user.role}</td>
                <td className="wd-last-activity"> {user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
