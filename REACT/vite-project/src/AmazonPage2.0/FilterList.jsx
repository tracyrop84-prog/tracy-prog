function FilterList(props){
const{title,options }=props
    return <div>
        <b>{title}</b>
      {options.map((option,index)=>(
          <div key={index}>
            <input type="checkbox"/>
            <span>{option}</span>
        </div>
      ))}
    
    </div>
}
export default FilterList