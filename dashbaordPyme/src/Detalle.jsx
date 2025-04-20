import Navbar from './Navbar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const data = {
  labels,
  datasets: [
    {
      label: 'Ventas Mensuales ($)',
      data: labels.map(() => Math.floor(Math.random() * 4000 + 2000)),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.3)',
    },
  ],
};

export default function Detalle() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mb-3">Detalle de Ventas</h2>
        <p>Este gráfico muestra el comportamiento mensual de las ventas simuladas.</p>
        <Line data={data} className="mb-4" />

        <div className="d-flex gap-2">
          <button className="btn btn-success">Descargar PDF</button>
          <button className="btn btn-warning">Ver Detalles</button>
          <button className="btn btn-outline-secondary">Actualizar</button>
        </div>
      </div>
    </div>
  );
}
