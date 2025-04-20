import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 border p-4 shadow rounded">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>
          <input type="text" className="form-control mb-3" placeholder="Usuario" />
          <input type="password" className="form-control mb-3" placeholder="Contraseña" />
          <button className="btn btn-primary w-100" onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </div>
  );
}
