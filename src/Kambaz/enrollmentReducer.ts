import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments, courses as allCourses } from "./Database";

export type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

export type User = {
  _id: string;
  username: string;
  isFaculty?: boolean; // if you use this field anywhere
};

type State = {
  enrollments: Enrollment[];
  courses: typeof allCourses;
  showAllCourses: boolean;
};

const initialState: State = {
  enrollments: initialEnrollments,
  courses: allCourses,
  showAllCourses: false,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      const alreadyEnrolled = state.enrollments.some(
        (e) => e.user === userId && e.course === courseId
      );

      if (!alreadyEnrolled) {
        const newId = (Math.max(0, ...state.enrollments.map(e => parseInt(e._id))) + 1).toString();
        state.enrollments.push({ _id: newId, user: userId, course: courseId });
      }
    },

    unenrollCourse: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId)
      );
    },

    toggleViewAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
  },
});

export const { enrollCourse, unenrollCourse, toggleViewAllCourses } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
