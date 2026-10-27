//import logo from "./logo.svg";
import "./App.css";
import MyButton from "./component/Button";
import Card from "./component/Card";
import Counter from "./component/Counter";
import Form from "./component/Form";
import List from "./component/List";
 
function App() {
  return (
    <div className="App">
      <MyButton />
      <Card name="Cly" description="Airhead" />
      <Form />
      <Counter />
      <List />
    </div>
  );
}
 
export default App;