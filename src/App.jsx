import "./App.css";
import NoteApp from "./components/NoteApp";

function App() {
  return (
    <div className="App container sm:container-sm mx-auto mb-12">
      <h1 className="text-3xl my-4 text-center">NoteApp</h1>
      <NoteApp />
    </div>
  );
}

export default App;
