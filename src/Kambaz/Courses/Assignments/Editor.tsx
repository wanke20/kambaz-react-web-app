import { Modal, Form, Button } from "react-bootstrap";

export default function AssignmentEditor({
  show,
  handleClose,
  dialogTitle,
  title,
  setTitle,
  description,
  setDescription,
  points,
  setPoints,
  dueDate,
  setDueDate,
  availableDate,
  setAvailableDate,
  availableUntil,
  setAvailableUntil,
  addAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  title: string;
  setTitle: (name: string) => void;
  description: string;
  setDescription: (desc: string) => void;
  points: number;
  setPoints: (pts: number) => void;
  dueDate: string;
  setDueDate: (date: string) => void;
  availableDate: string;
  setAvailableDate: (date: string) => void;
  availableUntil: string;
  setAvailableUntil: (date: string) => void;
  addAssignment: () => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available From</Form.Label>
          <Form.Control
            type="datetime-local"
            value={availableDate}
            onChange={(e) => {
              setAvailableDate(e.target.value)
              // console.log("Available Date:", e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available Until</Form.Label>
          <Form.Control
            type="datetime-local"
            value={availableUntil}
            onChange={(e) => {
              setAvailableUntil(e.target.value)
              // console.log("Available Until:", e.target.value);
            }}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            addAssignment();
            handleClose();
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}