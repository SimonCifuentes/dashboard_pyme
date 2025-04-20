import Navbar from './Navbar';

export default function App() {
  const indicadores = [
    { titulo: "Ventas este mes", valor: "$4.500.000" },
    { titulo: "Clientes nuevos", valor: "32" },
    { titulo: "Ticket promedio", valor: "$82.000" },
    { titulo: "Productos más vendidos", valor: "Mermelada de frutilla" }
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mb-4">Dashboard General</h2>

        <div className="row mb-4">
          {indicadores.map((item, i) => (
            <div className="col-md-3 mb-3" key={i}>
              <div className="card text-bg-light shadow">
                <div className="card-body">
                  <h5 className="card-title">{item.titulo}</h5>
                  <p className="card-text">{item.valor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4>Historial reciente</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Producto</th>
              <th>Monto</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>2025-04-18</td><td>Frutilla 500g</td><td>$6.000</td><td>Maria Soto</td></tr>
            <tr><td>2025-04-17</td><td>Durazno 250g</td><td>$3.500</td><td>Juan Torres</td></tr>
            <tr><td>2025-04-17</td><td>Frambuesa 1kg</td><td>$12.000</td><td>Lucía Pérez</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
