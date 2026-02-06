import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if(password === "admin123") { // Simple password for admin
      navigate("/admin/dashboard");
    } else {
      alert("Incorrect password");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pinkGradient via-purpleGradient to-blueGradient flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl w-80">
        <h1 className="text-white text-2xl font-bold mb-4">Admin Login</h1>
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full px-4 py-2 bg-gradient-to-r from-pinkGradient to-blueGradient rounded">Login</button>
      </div>
    </div>
  )
}
