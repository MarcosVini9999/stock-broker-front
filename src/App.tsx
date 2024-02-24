import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("Usuário");

  return (
    <main className="bg-red-400 h-screen">
      <h1 className="text-3xl font-bold underline">hello world {user}</h1>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
    </main>
  );
}

export default App;
