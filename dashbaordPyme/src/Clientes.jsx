import Navbar from './Navbar';

const clientes = [
  { nombre: "Carlos Ruiz", compras: 5, total: "$25.000" },
  { nombre: "Laura Sánchez", compras: 2, total: "$9.500" },
  { nombre: "Pedro Morales", compras: 7, total: "$34.800" },
];

export default function Clientes() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mb-3">Clientes Registrados</h2>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Compras</th>
              <th>Total Gastado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c, i) => (
              <tr key={i}>
                <td>{c.nombre}</td>
                <td>{c.compras}</td>
                <td>{c.total}</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">Ver</button>
                  <button className="btn btn-sm btn-outline-danger ms-2">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
