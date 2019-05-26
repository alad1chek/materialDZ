import Dashboard from "./views/Dashboard.jsx";
import MaterialsContainer from "./containers/MaterialsContainer";
import CategoriesContainer from "./containers/CategoriesContainer";
import CurrentMaterialContainer from "./containers/CurrentMaterialContainer";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/base",
    target: "sidebar"
  },
  {
    path: "/materials",
    name: "Materials",
    icon: "pe-7s-safe",
    component: MaterialsContainer,
    layout: "/base",
    target: "sidebar"
  },
  {
    path: "/edit/:id",
    name: "Edit_material",
    icon: "pe-7s-edit",
    component: CurrentMaterialContainer,
    layout: "/base",
    target: "inside"
  },

];

export default dashboardRoutes;
