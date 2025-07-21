import { Form, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(
    (a: any) => a._id === aid && a.course === cid
  );
  if (!assignment) {
    return <div className="p-4">Assignment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" value={assignment.title} />
      </Form.Group>
      <Form.Group className="mb-4" controlId="wd-description">
        <Form.Control
          as="textarea"
          rows={6}
          value={assignment.description}
        />
      </Form.Group>
      <Row className="mb-3 align-items-center">
        <Col xs={2}>
          <Form.Label
            htmlFor="wd-points"
            className="d-flex justify-content-end"
          >
            Points
          </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Control
            type="number"
            id="wd-points"
            value={assignment.points}
          />
        </Col>
      </Row>
      <Row className="mb-3 align-items-center">
        <Col xs={2}>
          <Form.Label htmlFor="wd-group" className="d-flex justify-content-end">
            Assignment Group
          </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-3 align-items-center">
        <Col xs={2}>
          <Form.Label
            htmlFor="wd-display-grade-as"
            className="d-flex justify-content-end"
          >
            Display Grade as
          </Form.Label>
        </Col>
        <Col xs={4}>
          <Form.Select id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            <option value="POINTS">Points</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={2}>
          <Form.Label
            htmlFor="wd-submission-type"
            className="d-flex justify-content-end"
          >
            Submission Type
          </Form.Label>
        </Col>
        <Col xs={4} className="border border-2 border-gray rounded p-3">
          <Row className="mb-2 align-items-center">
            <Col>
              <Form.Select id="wd-submission-type">
                <option value="ONLINE">Online</option>
                <option value="OTHER">Other</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Online Entry Options</Form.Label>
              <div className="ms-2">
                <Form.Check id="wd-text-entry" label="Text Entry" />
                <Form.Check id="wd-website-url" label="Website URL" />
                <Form.Check id="wd-media-recordings" label="Media Recordings" />
                <Form.Check
                  id="wd-student-annotation"
                  label="Student Annotation"
                />
                <Form.Check id="wd-file-upload" label="File Uploads" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={2}>
          <Form.Label className="d-flex justify-content-end">Assign</Form.Label>
        </Col>
        <Col xs={4} className="border border-2 border-gray rounded px-4 py-3">
          <Row>
            <Form.Label htmlFor="wd-assign-to" className="g-0">
              Assign to:
            </Form.Label>
            <Form.Control
              type="text"
              id="wd-assign-to"
              value="Everyone"
            />
          </Row>
          <Row className="mt-2">
            <Form.Label htmlFor="wd-due-date" className="g-0">
              Due:
            </Form.Label>
            <br />
            <Form.Control
              type="datetime"
              id="wd-due-date"
              value={new Date(assignment.dueDate).toLocaleString(
                "en-US",
                {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                }
              )}
            />
          </Row>
          <Row className="mt-2">
            <div className="w-50 g-0">
              <Form.Label htmlFor="wd-available-from">
                Available from
              </Form.Label>
              <br />
              <Form.Control
                type="datetime"
                id="wd-available-from"
                value={new Date(assignment.availableDate).toLocaleString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  }
                )}
                className="position-relative"
              />
            </div>
            <div className="w-50 g-0">
              <Form.Label htmlFor="wd-available-until">Until</Form.Label>
              <br />
              <Form.Control
                type="datetime"
                id="wd-available-from"
                className="position-relative"
              />
            </div>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={{ span: 4, offset: 2 }} className="d-flex justify-content-end">
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <Link
            to={`/Kambaz/Courses/${cid}/Assignments`}
            className="btn btn-danger"
          >
            Save
          </Link>
        </Col>
      </Row>
    </div>
  );
}
