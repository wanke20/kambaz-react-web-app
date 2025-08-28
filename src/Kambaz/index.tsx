import KambazNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import "./styles.css";
import ProtectedRoute from "./Account/ProtectedRoute";
import Account from "./Account";
import { addCourse, updateCourse, deleteCourse } from "./Courses/reducer";
import { useSelector, useDispatch } from "react-redux";
import PrivateCourseRoute from "./PrivateCourseRoute";

export default function Kambaz() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.courseReducer);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    department: "CS",
    credits: 4,
  });

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account/*" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addCourse={() => {
                    dispatch(addCourse(course));
                    setCourse(course);
                  }}
                  deleteCourse={(courseId) => {
                    dispatch(deleteCourse(courseId));
                  }}
                  updateCourse={() => {
                    dispatch(updateCourse(course));
                  }}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="Courses/:cid/*"
            element={
              <ProtectedRoute>
                <PrivateCourseRoute>
                  <Courses courses={courses} />
                </PrivateCourseRoute>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
