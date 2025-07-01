import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Erro ao buscar usuários:", err));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Lista de Usuários</h1>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          margin: "0 auto 20px",
          display: "block",
          padding: "8px",
          width: "80%",
          maxWidth: "400px",
          borderRadius: "4px",
          border: "1px solid #ccc"
        }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredUsers.map(user => (
          <li key={user.id} style={{
            marginBottom: "15px",
            padding: "15px",
            border: "1px solid #eee",
            borderRadius: "6px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            <strong>{user.name}</strong><br />
            📧 {user.email}<br />
            🏙️ {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;