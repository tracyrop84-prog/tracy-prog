function InfoSection(props) {
    const{people}=props
  return (
    <div style={{ padding: "20px", display: "flex", alignItems: "center" }}>
      <b style={{ fontSize: "28px" }}>{people.length}</b>
      <span style={{ fontSize: "14px", marginLeft: "10px" }}>User results</span>
    </div>
  );
}
export default InfoSection;
