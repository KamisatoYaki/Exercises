//import logo from "./logo.svg";
import "./App.css";
import MyButton from "./component/Button";
import Card from "./component/Card";
import Counter from "./component/Counter";
import Form from "./component/Form";
import List from "./component/List";
import Post from "./component/Post";
 
function App() {
  return (
    <div className="App">
      <MyButton />
      <Card name="Cly" description="Airheaded" />
      <Form />
      <Counter />
      <List />
      <Post />
    </div>
  );
}
 
export default App;