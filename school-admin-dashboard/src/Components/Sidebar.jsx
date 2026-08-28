import {
  LayoutDashboard,
  Users,
  UserRound,
  BookOpen,
  CalendarCheck,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-mark">
          <GraduationCapIcon />
        </div>

        <div className="logo-text">
          <h2>ESRA DIGITAL</h2>
          <span>School Management System</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        <a href="#" className="nav-item active">
          <LayoutDashboard size={21} />
          <span>Dashboard</span>
        </a>

        <a href="#" className="nav-item">
          <Users size={21} />
          <span>Students</span>
        </a>

        <a href="#" className="nav-item">
          <UserRound size={21} />
          <span>Teachers</span>
        </a>

        <a href="#" className="nav-item">
          <BookOpen size={21} />
          <span>Classes</span>
        </a>

        <a href="#" className="nav-item">
          <CalendarCheck size={21} />
          <span>Attendance</span>
        </a>

      </nav>

      {/* Bottom Navigation */}
      <div className="sidebar-bottom">

        <a href="#" className="nav-item">
          <Settings size={21} />
          <span>Settings</span>
        </a>

        {/* Admin */}
        <div className="admin-profile">

          <div className="admin-avatar">
            <span>A</span>
          </div>

          <div className="admin-info">
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>

          <button className="logout-btn">
            <LogOut size={18} />
          </button>

        </div>

      </div>

    </aside>
  );
}

/* Temporary logo icon */
function GraduationCapIcon() {
  return (
    <div className="graduation-icon">
      <BookOpen size={28} />
    </div>
  );
}

export default Sidebar;