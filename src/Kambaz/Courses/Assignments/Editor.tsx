import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control type="text" defaultValue="A1" />
      </Form.Group>
      <Form.Group className="mb-4" controlId="wd-description">
        <Form.Control
          as="textarea"
          rows={12}
          defaultValue="The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page."
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
          <Form.Control type="number" id="wd-points" defaultValue={100} />
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
        <Col xs={4} className="border border-2 border-gray rounded p-3">
          <Row>
            <Form.Label htmlFor="wd-assign-to">Assign to:</Form.Label>
            <Form.Control
              type="text"
              id="wd-assign-to"
              defaultValue="Everyone"
            />
          </Row>
          <Row className="mt-2">
            <Form.Label htmlFor="wd-due-date">Due:</Form.Label>
            <br />
            <Form.Control
              type="date"
              id="wd-due-date"
            />
          </Row>
          <Row className="mt-2">
            <div className="w-50">
              <Form.Label htmlFor="wd-available-from">
                Available from
              </Form.Label>
              <br />
              <Form.Control
                type="date"
                id="wd-available-from"
                className="position-relative me-10"
                // style={{ width: "fit-content" }}
              />
            </div>
            <div className="w-50">
              <Form.Label htmlFor="wd-available-until">Until</Form.Label>
              <br />
              <Form.Control
                type="date"
                id="wd-available-until"
              />
            </div>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={{ span: 4, offset: 2 }} className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </Col>
      </Row>
    </div>
  );
}
