import { Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Link, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor({}: // show,
// handleClose,
// editing,
// title,
// setTitle,
// description,
// setDescription,
// points,
// setPoints,
// dueDate,
// setDueDate,
// availableDate,
// setAvailableDate,
// availableUntil,
// setAvailableUntil,
// addAssignment,
{
  // show: boolean;
  // handleClose: () => void;
  // editing: boolean;
  // title: string;
  // setTitle: (name: string) => void;
  // description: string;
  // setDescription: (desc: string) => void;
  // points: number;
  // setPoints: (pts: number) => void;
  // dueDate: string;
  // setDueDate: (date: string) => void;
  // availableDate: string;
  // setAvailableDate: (date: string) => void;
  // availableUntil: string;
  // setAvailableUntil: (date: string) => void;
  // addAssignment: () => void;
}) {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const assignment = assignments.find(
    (a: any) => a._id === aid && a.course === cid
  );
  const editing = aid !== "new";

  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.points || 100);
  const [dueDate, setDueDate] = useState(assignment?.dueDate || "");
  const [availableDate, setAvailableDate] = useState(
    assignment?.availableDate || ""
  );
  const [availableUntil, setAvailableUntil] = useState(
    assignment?.availableUntil || ""
  );

  if (!assignment && editing) {
    return <div className="p-4">Assignment not found.</div>;
  }
  const handleSaveAssignment = () => {
    const newAssignment = {
      title: title,
      description: description,
      points: points,
      dueDate: dueDate,
      availableDate: availableDate,
      availableUntil: availableUntil,
      course: cid,
    };

    if (editing && assignment._id) {
      const existingAssignment = assignments.find(
        (a: any) => a._id === assignment._id
      );
      if (existingAssignment) {
        dispatch(
          updateAssignment({
            ...existingAssignment,
            ...newAssignment,
          })
        );
      }
    } else {
      dispatch(addAssignment(newAssignment));
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div
      id="wd-assignments-editor"
      className="p-4"
      // style={{ marginLeft: "70px" }}
    >
      <Form.Group className="mb-3" controlId="wd-name">
        <Col xs={6}>
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-description">
        <Col xs={6}>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Row className="mb-3">
        <Col xs={6}>
          <Form.Label
            htmlFor="wd-points"
            className="d-flex justify-content-start"
          >
            Points
          </Form.Label>
          <Form.Control
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6}>
          <Form.Label
            htmlFor="wd-due-date"
            className="d-flex justify-content-start"
          >
            Due:
          </Form.Label>
          <Form.Control
            type="datetime-local"
            id="wd-due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6}>
          <Form.Label
            htmlFor="wd-available-from"
            className="d-flex justify-content-start"
          >
            Available from
          </Form.Label>
          <Form.Control
            type="datetime-local"
            id="wd-available-from"
            value={availableDate}
            onChange={(e) => setAvailableDate(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={6}>
          <Form.Label
            htmlFor="wd-available-until"
            className="d-flex justify-content-start"
          >
            Until
          </Form.Label>
          <Form.Control
            type="datetime-local"
            id="wd-available-until"
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </Col>
      </Row>

      <hr />
      <Row>
        <Col xs={{ span: 4}} className="d-flex justify-content-end">
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-danger"
            onClick={() => {
              handleSaveAssignment();
            }}
          >
            Save
          </Link>
        </Col>
      </Row>
    </div>
  );
}
