import { useState } from "react";
import "./SidebarMenu.css";

function SidebarMenu() {
  const [open, setOpen] = useState(false);

  const menu = (
    <div className={`sidebar bg-dark text-white ${open ? "open" : ""}`}>
      <a className="text-decoration-none d-flex align-itemcenter p-3">
        <i className="fs-4 bi bi-speedometer"></i>
        <span className="ms-1 fs-4">Sidebar Menu</span>
      </a>
      <ul className="nav nav-pills flex-column mt-4 px-2">
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-house"></i>
            <span className="ms-1">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link text-white d-flex justify-content-between align-items-center"
            onClick={(e) => {
              e.preventDefault();
              setOpen((s) => s); // keep sidebar open state intact
              // toggle dashboard submenu
              setDashboardOpen((d) => !d);
            }}
            aria-expanded={dashboardOpen}
          >
            <span>
              <i className="bi bi-speedometer"></i>
              <span className="ms-1">Dashboard</span>
            </span>
            <i
              className={`bi ${dashboardOpen ? "bi-caret-down-fill" : "bi-caret-right-fill"}`}
            ></i>
          </a>

          {dashboardOpen && (
            <ul className="nav flex-column ms-3 mt-2">
              <li className="nav-item">
                <a href="#" className="nav-link text-white small">
                  <i className="bi bi-circle-fill fs-6"></i>
                  <span className="ms-2">Overview</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white small">
                  <i className="bi bi-circle-fill fs-6"></i>
                  <span className="ms-2">Analytics</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white small">
                  <i className="bi bi-circle-fill fs-6"></i>
                  <span className="ms-2">Reports</span>
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-table"></i>
            <span className="ms-1">Orders</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-people"></i>
            <span className="ms-1">Customers</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-graph-up"></i>
            <span className="ms-1">Reports</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-gear"></i>
            <span className="ms-1">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className="d-md-none p-2">
        <button
          className="btn btn-dark"
          aria-expanded={open}
          aria-label="Toggle sidebar"
          onClick={() => setOpen((s) => !s)}
        >
          <i className="bi bi-list"></i>
        </button>
      </div>

      <div className="d-none d-md-block col-md-3">{menu}</div>

      {/* Mobile overlay + sidebar */}
      {open && (
        <div
          className="sidebar-backdrop d-md-none"
          onClick={() => setOpen(false)}
        ></div>
      )}

      <div className="d-md-none">{menu}</div>
    </>
  );
}

export default SidebarMenu;
