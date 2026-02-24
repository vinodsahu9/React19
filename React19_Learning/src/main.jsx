import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NavbarComponent from "./NavbarComponent";
import SidebarMenu from "./SidebarMenu";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavbarComponent></NavbarComponent>
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto col-md-3 min-vh-100 bg-dark text-white">
          <SidebarMenu></SidebarMenu>
        </div>
        <div className="col p-4">
          <App />
        </div>
      </div>
    </div>
  </StrictMode>,
);
