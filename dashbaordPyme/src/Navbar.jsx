import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">Dashboard PYME</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/dashboard">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/detalle">Ventas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/clientes">Clientes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/configuracion">Configuración</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
