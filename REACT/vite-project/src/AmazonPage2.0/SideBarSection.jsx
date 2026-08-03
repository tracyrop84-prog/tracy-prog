import FilterList from "./FilterList";
function SideBar() {
  return (
    <div style={{ display: "flex", width: "400px", flexDirection: "column" }}>
      <FilterList title={"conditions"} options={["New", "Used", "Renewed"]} />
      <FilterList title={"Uses"} options={["plastic","rubber","PVC","Aluminium"]}/>
         <FilterList title={"brand"} options={["cross rope","venum","sport bit","Adidas"]}/>

   
   
   
    </div>
  );
}
export default SideBar;
