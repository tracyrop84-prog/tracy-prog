import { useLocation, useNavigate } from "react-router";
function Navigation2() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (btnLocation) => {
    if (location.pathname === btnLocation) {
      return { backgroundColor: "blue", color: "white" };
    }
    return {};
  };

  return (
    <div>
      <button style={isActive("/")} onClick={() => navigate("/")}>
        Home
      </button>
      <button style={isActive("/about")} onClick={() => navigate("/about")}>
        About
      </button>
      <button
        style={isActive("/crazy/route/346654533ggde636g")}
        onClick={() => navigate("/crazy/route/346654533ggde636g")}
      >
        Crazy route
      </button>
    </div>
  );
}
export default Navigation2;
