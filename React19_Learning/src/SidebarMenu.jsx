import { useState } from "react";

function SidebarMenu() {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-2 min-vh-100 bg-dark text-white">
          <a className="text-decoration-none d-flex align-items-center text-nowrap p-2">
            <i className="fs-6 bi bi-speedometer"></i>
            <span className="ms-1 fs-6">React 19 Learning</span>
          </a>
          <ul className="nav nav-pills flex-column mt-2">
            <li className="nav-item">
              <a href="#" className="nav-link text-white text-nowrap">
                <i className="bi bi-house"></i>
                <span className="ms-1">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-white text-nowrap d-flex justify-content-between align-items-center"
                onClick={(e) => {
                  e.preventDefault();
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
                    <a
                      href="#"
                      className="nav-link text-white small text-nowrap"
                    >
                      <i className="bi bi-circle-fill fs-6"></i>
                      <span className="ms-2">Overview</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white small text-nowrap"
                    >
                      <i className="bi bi-circle-fill fs-6"></i>
                      <span className="ms-2">Analytics</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white small text-nowrap"
                    >
                      <i className="bi bi-circle-fill fs-6"></i>
                      <span className="ms-2">Reports</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-white text-nowrap d-flex justify-content-between align-items-center"
                onClick={(e) => {
                  e.preventDefault();
                  setOrdersOpen((o) => !o);
                }}
                aria-expanded={ordersOpen}
              >
                <span>
                  <i className="bi bi-table"></i>
                  <span className="ms-1">Orders</span>
                </span>
                <i
                  className={`bi ${ordersOpen ? "bi-caret-down-fill" : "bi-caret-right-fill"}`}
                ></i>
              </a>

              {ordersOpen && (
                <ul className="nav flex-column ms-3 mt-2">
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white small text-nowrap"
                    >
                      <i className="bi bi-circle-fill fs-6"></i>
                      <span className="ms-2">All Orders</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white small text-nowrap"
                    >
                      <i className="bi bi-circle-fill fs-6"></i>
                      <span className="ms-2">Pending</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      className="nav-link text-white small text-nowrap"
                    >
                      <i className="bi bi-circle-fill fs-6"></i>
                      <span className="ms-2">Completed</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white text-nowrap">
                <i className="bi bi-people"></i>
                <span className="ms-1">Customers</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white text-nowrap">
                <i className="bi bi-graph-up"></i>
                <span className="ms-1">Reports</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white text-nowrap">
                <i className="bi bi-gear"></i>
                <span className="ms-1">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
