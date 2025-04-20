import Navbar from './Navbar';

export default function Configuracion() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mb-4">Configuración de Usuario</h2>

        <form>
          <div className="mb-3">
            <label className="form-label">Nombre de Usuario</label>
            <input type="text" className="form-control" defaultValue="usuario123" />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" defaultValue="usuario@ejemplo.com" />
          </div>

          <div className="mb-3">
            <label className="form-label">Idioma</label>
            <select className="form-select">
              <option>Español</option>
              <option>Inglés</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
}
