import "./App.css";
import Background from "./components/Background";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center justify-start w-full h-full ">
        <Background />
        <Search />
      </div>
    </div>
  );
}

export default App;
