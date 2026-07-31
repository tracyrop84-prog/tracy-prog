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
  const str = "Hello"; //string
  const amount = 2000; //number
  const isOk = true; //boolean
  const notSet = null; //null
  const car = { model: "vitz", manufacture: "toyota",engine:{cc:23} };
  const color = ["pink", "blue", "purple"];
  return (
    <div>
      <h1>Iam the parent component</h1>
      <Child1 greet={str} amount={amount} isOk={isOk} notSet={notSet} />
      <Child2
        greet={str}
        amount={amount}
        isOk={isOk}
        notSet={notSet}
        car={car}
        color={color}
      />
      <Child3 greet={str} amount={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}
function Child1(props) {
  console.log(props);
  return (
    <div>
      <h1>Iam the child1 component</h1>
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

//DESTRUCTURING PROPS
function Child2(props) {
  console.log(props);
  const { greet, amount, isOk, notSet, car, color } = props;

  return (
    <div>
      <h1>Iam the child2 component</h1>
      <ul>
        <li>
          favourite string: <b>{greet}</b>
        </li>
        <li>
          Amount: <b>{amount}</b>
        </li>
        <li>
          isOk: <b>{isOk}</b>
        </li>
        <li>
          isOk: <b>{isOk.toString()}</b>
        </li>
        <li>
          notSet: <b>{notSet}</b>
        </li>
        <li>
          car model: <b>{car.model}</b>
        </li>
        <li>
          car manufacture: <b>{car.manufacture}</b>
        </li>
           <li>
          car engine: <b>{car.engine.cc}</b>
        </li>
        <li>
          color: <b>{color[0]}</b>
        </li>
        <li>
          color: <b>{color[1]}</b>
        </li>
        <li>
          color: <b>{color[2]}</b>
        </li>
      </ul>
    </div>
  );
}

function Child3({ greet, amount, isOk, notSet }) {
  console.log({ greet, amount, isOk, notSet });
  return (
    <div>
      <h1>Iam the child3 component</h1>
      <ul>
        <li>
          favourite string: <b>{greet}</b>
        </li>
        <li>
          Amount: <b>{amount}</b>
        </li>
        <li>
          isOk: <b>{isOk}</b>
        </li>
        <li>
          isOk: <b>{isOk.toString()}</b>
        </li>
        <li>
          notSet: <b>{notSet}</b>
        </li>
      </ul>
    </div>
  );
}
export default Parent;
