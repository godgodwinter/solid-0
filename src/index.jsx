/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import NavBar from "@/components/templates/landing/NavBar";

import "./index.css";
import App from "./App";

render(
  () => (
    <Router>
      <div data-theme="cupcake" class="min-h-screen">
        <NavBar />
        <App />
      </div>
    </Router>
  ),
  document.getElementById("root")
);
