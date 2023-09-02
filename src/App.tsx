import "./App.css";

import { getAllTodos } from "./api/todos";
import useSWR from "swr";

import { Header } from "./components/Header";
import { TodoList } from "./components/Todo/TodoList";

function App() {
  const { data, isLoading } = useSWR("/todos", getAllTodos);
  const dataFix = data ? data : [];
  return (
    <>
      <Header lengthTodos={dataFix ? dataFix?.length : 2} />
      <TodoList data={dataFix} isLoading={isLoading} />
    </>
  );
}

export default App;
