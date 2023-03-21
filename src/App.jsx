//Components
import { MainLayout } from "./layouts/MainLayout";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (

    <MainLayout>
      <MainRoutes />
    </MainLayout>

  );
}

export default App;
