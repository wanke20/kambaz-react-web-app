import { ReactNode } from "react";
export default function Highlight({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Child Components</h2>
      <span
        id="wd-highlight"
        style={{ backgroundColor: "yellow", color: "red" }}
      >
        {children}
      </span>
    </div>
  );
}
