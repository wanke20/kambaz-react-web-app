import AssignmentEditor from "./Assignments/Editor";
import Assignments from "./Assignments";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
// import PeopleTable from "./People/Table";
import Users from "./People/Users";
import { FaAlignJustify } from "react-icons/fa6";
import { Route, Routes, useParams } from "react-router";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}
      </h2>

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid/*" element={<AssignmentEditor />} />
            <Route path="People" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
