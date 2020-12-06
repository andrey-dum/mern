import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes(false)
  return (
    <div className="app container">
      { routes }
    </div>
  );
}

export default App;
