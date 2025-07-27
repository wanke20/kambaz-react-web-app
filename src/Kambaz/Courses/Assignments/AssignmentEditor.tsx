// import { Modal, FormControl, Button } from "react-bootstrap";
// export default function AssignmentEditor({
//   show,
//   handleClose,
//   dialogTitle,
//   assignmentName,
//   setAssignmentName,
//   addAssignment,
// }: {
//   show: boolean;
//   handleClose: () => void;
//   dialogTitle: string;
//   assignmentName: string;
//   setAssignmentName: (name: string) => void;
//   addAssignment: () => void;
// }) {
//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>{dialogTitle}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <FormControl
//           value={assignmentName}
//           onChange={(e) => {
//             setAssignmentName(e.target.value);
//           }}
//         />
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Cancel
//         </Button>
//         <Button
//           variant="primary"
//           onClick={() => {
//             addAssignment();
//             handleClose();
//           }}
//         >
//           Add Assignment
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  addAssignment,
  editAssignment,
  updateAssignment,
} from "./reducer";

const toISODate = (value: string | Date) => {
  const date = new Date(value);
  return isNaN(date.getTime()) ? "" : date.toISOString().slice(0, 16);
};

export default function AssignmentEditor({ assignment, onSave }: any) {
  const dispatch = useDispatch();
  const [editedAssignment, setEditedAssignment] = useState({
    ...assignment,
    availableDate: toISODate(assignment.availableDate ?? new Date()),
    dueDate: toISODate(assignment.dueDate ?? new Date()),
    availableUntil: toISODate(assignment.availableUntil ?? new Date()),
  });

  const handleChange = (field: string, value: any) => {
    setEditedAssignment((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const payload = {
      ...editedAssignment,
      availableDate: new Date(editedAssignment.availableDate).toISOString(),
      dueDate: new Date(editedAssignment.dueDate).toISOString(),
      availableUntil: new Date(editedAssignment.availableUntil).toISOString(),
    };

    if (assignment._id) {
      dispatch(editAssignment(payload));
    } else {
      dispatch(addAssignment(payload));
    }

    if (onSave) onSave();
  };

  return (
    <Form className="p-3 bg-dark text-white rounded">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-assignment-title">Title</Form.Label>
        <Form.Control
          id="wd-assignment-title"
          value={editedAssignment.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-assignment-points">Points</Form.Label>
        <Form.Control
          id="wd-assignment-points"
          type="number"
          value={editedAssignment.points}
          onChange={(e) => handleChange("points", parseInt(e.target.value))}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-due-date">Due</Form.Label>
        <Form.Control
          type="datetime-local"
          id="wd-due-date"
          value={editedAssignment.dueDate}
          onChange={(e) => handleChange("dueDate", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
        <Form.Control
          type="datetime-local"
          id="wd-available-from"
          value={editedAssignment.availableDate}
          onChange={(e) => handleChange("availableDate", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="wd-available-until">Until</Form.Label>
        <Form.Control
          type="datetime-local"
          id="wd-available-until"
          value={editedAssignment.availableUntil}
          onChange={(e) => handleChange("availableUntil", e.target.value)}
        />
      </Form.Group>

      <Button onClick={handleSubmit} className="mt-2 bg-primary border-0">
        Save Assignment
      </Button>
    </Form>
  );
}
