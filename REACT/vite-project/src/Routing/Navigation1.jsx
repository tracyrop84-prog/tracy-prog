import { NavLink } from "react-router";
function Navigation1() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >Home</NavLink>
       <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >About</NavLink>
       <NavLink
        to="/crazy/route/346654533ggde636g"
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >Crazy Route</NavLink>
    </div>
  );
}
export default Navigation1;
