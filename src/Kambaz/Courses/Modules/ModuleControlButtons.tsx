import { FaCheckCircle } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function ModuleControlButtons() {
  return (
    <div className="d-flex align-items-center">
      <FaCheckCircle className="text-success" />
      <div className="mx-2">+</div>
      <IoEllipsisVertical />
    </div>
  );
}
