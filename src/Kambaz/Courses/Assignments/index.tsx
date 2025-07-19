import { ListGroup, Form, Row, Col } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentsControlButtons";
import { Link, useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments(): JSX.Element {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <Row className="mb-4 w-100">
        <Col>
          <Form.Control
            id="wd-password"
            placeholder="🔍 Search..."
            type="text"
            className="col mb-2"
          />
        </Col>
        <Col className="text-end">
          <button
            id="wd-add-assignment-group"
            className="btn btn-secondary mb-2 ms-2"
          >
            + Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger mb-2 ms-2">
            + Assignment
          </button>
        </Col>
      </Row>
      <ListGroup id="wd-assignment-lists" className="rounded-0">
        <ListGroup.Item className="wd-assignment-list p-0 mb-5 fs-5 border-gray">
          <div className="wd-title d-flex py-2 bg-secondary justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="fs-3" />
              <FaCaretDown className="fs-6 me-1" />
              <h5 className="mt-2">ASSIGNMENTS</h5>
            </div>
            <div className="d-flex align-items-center">
              <h5 className="border border-dark rounded-5 p-1 px-2 mt-1 fs-6">
                40% of Total
              </h5>
              <button className="btn btn-lg">+</button>
              <IoEllipsisVertical className="fs-3" />
            </div>
          </div>
          <ListGroup className="">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroup.Item className="wd-assignment d-flex p-3 ps-1 align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="fs-3" />
                    <GiNotebook className="fs-4 text-success me-2" />
                    <div className="wd-assignment-details">
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-black fs-5 text-decoration-none"
                      >
                        {assignment.title}
                      </Link>
                      <div>
                        <span className="mb-1 fs-6 text-danger">
                          Multiple Modules
                        </span>{" "}
                        <span className="mb-1 fs-6">
                          | <b>Not available until</b>{" "}
                          {assignment.availableDate} |
                        </span>
                      </div>
                      <p className="mb-0 fs-6">
                        <b>Due</b> {assignment.dueDate} | {assignment.points}{" "}
                        points
                      </p>
                    </div>
                  </div>
                  <AssignmentControlButtons />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
