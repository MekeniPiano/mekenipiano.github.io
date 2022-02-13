import { useEffect, useState } from "react"

export const Chart: React.FC = function Chart() {
    const [todos, setTodos] = useState<any[]>([])
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => response.json())
          .then((json) => setTodos(json));
    }, [])
    return (
      <div>
        <ul>{todos.map(x => <li key={x.id}>{x.title}</li>)}</ul>
      </div>
    );
}
export default Chart;