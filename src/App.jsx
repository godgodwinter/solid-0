import {
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  useLocation,
  useMatch,
} from "@solidjs/router";
import { createResource, createMemo } from "solid-js";
import { lazy } from "solid-js";
const Home = lazy(() => import("@/views/landing/Home"));
const About = lazy(() => import("@/views/landing/About"));
const Profile = lazy(() => import("@/views/landing/Profile"));
// import Profile from "@/views/landing/Profile";
// import Profile from "@/views/landing/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin" component={Admin}>
          <Route path="/" component={AdminDashboard} />
          <Route path="/:id" component={AdminChild} />
        </Route>
        {/* <Route
          path="/profile"
          element={<div>This site was made with Solid</div>}
        /> */}
      </Routes>
    </>
  );
}

const Admin = () => {
  return (
    <>
      <div class="px-4 py-4 w-full border-b-2 space-x-2">
        <Link href="/admin/">
          <button class="btn">Dashbaord</button>
        </Link>
        <Link href="/admin/2">
          <button class="btn">Child</button>
        </Link>
      </div>
      <div class="px-4 py-4">
        {" "}
        <Outlet />
      </div>
    </>
  );
};
const AdminDashboard = () => {
  return (
    <>
      <div>AdminDashboard</div>
    </>
  );
};
const AdminChild = () => {
  const params = useParams();
  const [user] = createResource(() => params.id);
  const location = useLocation();
  return (
    <>
      <div>
        AdminChild : {user} -- {location.pathname} --{" "}
      </div>
    </>
  );
};

export default App;
