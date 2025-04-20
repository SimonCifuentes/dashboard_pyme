import { Link } from 'react-router-dom';

const datos = [
  { indicador: 'Ventas Mensuales', valor: '$3.200.000' },
  { indicador: 'Clientes Nuevos', valor: '45' },
  { indicador: 'Tasa de Retención', valor: '82%' },
  { indicador: 'Ticket Promedio', valor: '$71.000' },
];

export default function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Dashboard PYME</h1>
      <p>Panel resumen de indicadores de negocio.</p>

      <table className="table table-bordered mt-4">
        <thead className="table-dark">
          <tr>
            <th>Indicador</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index}>
              <td>{item.indicador}</td>
              <td>{item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/detalle" className="btn btn-primary mt-4">Ver detalle</Link>
    </div>
  );
}
