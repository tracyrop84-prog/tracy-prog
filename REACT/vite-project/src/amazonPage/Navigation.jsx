import logo from "./assets/amazonlogo.png"

function Navigation(){
    return <div className="nav">
        <img src={logo} width="60px"></img>
        <input placeholder="search"/>
    </div>
}
export default Navigation