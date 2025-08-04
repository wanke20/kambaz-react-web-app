import { Form, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  // const fetchAssignments = async () => {
  //   const assignments = await assignmentsClient.findAssignmentById(
  //     aid as string
  //   );
  //   dispatch(setAssignments(assignments));
  // };
  const handleUpdateAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment._id, assignment);
    dispatch(updateAssignment(assignment));
  };
  const addNewAssignment = async (assignment: any) => {
    const newAssignment = await assignmentsClient.createAssignment(assignment);
    dispatch(addAssignment(newAssignment));
  };
  const editing = aid !== "new";

  const [assignment, setAssignment] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [availableDate, setAvailableDate] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");

  useEffect(() => {
    const fetchAssignment = async () => {
      if (editing) {
        const data = await assignmentsClient.findAssignmentById(aid as string);
        setAssignment(data);
        setTitle(data?.title || "");
        setDescription(data?.description || "");
        setPoints(data?.points || 100);
        setDueDate(data?.dueDate || "");
        setAvailableDate(data?.availableDate || "");
        setAvailableUntil(data?.availableUntil || "");
      }
    };
    fetchAssignment();
  }, [aid, editing]);

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
        handleUpdateAssignment({
          ...existingAssignment,
          ...newAssignment,
        });
      }
    } else {
      addNewAssignment(newAssignment);
    }

    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
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
        <Col xs={{ span: 4 }} className="d-flex justify-content-end">
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
