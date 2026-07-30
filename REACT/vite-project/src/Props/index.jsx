/*
1. components are functions
        input->output
        input<data>-->output is UI
 2. To create a reusable components you need
 an understanding of props(properties)
 3. Each component you create in react will always have props
 4. Props are passed from parent to child
    ->all data types can be passed inro props including other components       
*/

function Parent() {
  const str = "Hello";//string
  const amount = 2000;//number
  const isOk = true;//boolean
  const notSet = null;//null
  return (
    <div>
      <h1>Iam the parent component</h1>
      <Child greet={str} amount={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}
function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>Iam the child component</h1>
      <ul>
        <li>
          favourite string: <b>{props.greet}</b>
        </li>
        <li>
          Amount: <b>{props.amount}</b>
        </li>
        <li>
          isOk: <b>{props.isOk}</b>
        </li>
        <li>
          isOk: <b>{props.isOk.toString()}</b>
        </li>
        <li>
          notSet: <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}
export default Parent;
