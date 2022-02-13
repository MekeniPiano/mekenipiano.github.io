import { useEffect, useState } from "react"
import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart: React.FC = function Chart() {
    const [todos, setTodos] = useState<{id: string, title: string}[]>([])
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => setTodos(json));
    }, [])
    const data = {
      labels: todos.map((_, i) => _.id),
      datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: todos.map((x) => x.id),
        },
      ],
    };

    return (
      <div>
        <div style={{ width: "600px", height: "400px" }}>
          <Line data={data as any} width={600} height={400} />
        </div>
        <ul>
          {todos.map((x) => (
            <li key={x.id}>{x.title}</li>
          ))}
        </ul>
      </div>
    );
}
export default Chart;