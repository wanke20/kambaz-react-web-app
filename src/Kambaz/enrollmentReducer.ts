// src/Kambaz/Account/enrollmentReducer.ts
import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: [],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enroll: (state, action) => {
      const { user, course } = action.payload;
      const alreadyEnrolled = state.enrollments.some(
        (e) => e.user === user && e.course === course
      );
      if (!alreadyEnrolled) {
        state.enrollments.push({ user, course });
      }
    },
    unenroll: (state, action) => {
      const { user, course } = action.payload;
      state.enrollments = state.enrollments.filter(
        (e) => !(e.user === user && e.course === course)
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
