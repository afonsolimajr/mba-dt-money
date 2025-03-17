import "./App.css";
import Background from "./components/Background";

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-start w-full h-full ">
        <Background />
        <p>DT Money</p>
      </div>
    </div>
  );
}

export default App;
