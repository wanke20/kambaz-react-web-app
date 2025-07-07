import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1235/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1235 Node.js </h5>
              <p className="wd-dashboard-course-title">
                Backend development with Node.js
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1236/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1236 Angular </h5>
              <p className="wd-dashboard-course-title">
                Frontend development with Angular
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1237/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1237 Python </h5>
              <p className="wd-dashboard-course-title">
                Programming with Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1238/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1238 Java </h5>
              <p className="wd-dashboard-course-title">
                Object-oriented programming with Java
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1239/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1239 C++ </h5>
              <p className="wd-dashboard-course-title">
                Advanced programming with C++
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1240/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1240 SQL </h5>
              <p className="wd-dashboard-course-title">
                Database management with SQL
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
