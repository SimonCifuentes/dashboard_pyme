import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
const data = {
  labels,
  datasets: [
    {
      label: 'Ventas ($)',
      data: labels.map(() => Math.floor(Math.random() * 5000 + 1000)),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.3)',
    },
  ],
};

export default function Detalle() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Detalle de Ventas</h1>
      <p>Gráfico de ventas en los últimos meses:</p>

      <div className="mb-5">
        <Line data={data} />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-success">Exportar PDF</button>
        <button className="btn btn-outline-warning">Filtrar Datos</button>
        <button className="btn btn-outline-info">Actualizar</button>
      </div>

      <Link to="/" className="btn btn-secondary mt-4 d-block">Volver al Dashboard</Link>
    </div>
  );
}
