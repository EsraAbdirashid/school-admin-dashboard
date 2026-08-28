import Sidebar from "../components/Sidebar";
import "../App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <h1>Welcome back, Admin 👋</h1>
        <p>Here's what's happening in your school today.</p>
      </main>
    </div>
  );
}

export default App;