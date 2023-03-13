//Components
import { MainLayout } from "./layouts/MainLayout";
import { ItemListContainerComponent } from "./components";

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

function App() {
  return (

    <MainLayout>
      <div >
        <ItemListContainerComponent greeting="Bienvenido a Mi página Web!!!"/>
        {/* <ButtonComponent label="Botón Principal" clickEvent={() => console.log("Botón Principal")} />
        <ButtonComponent label="Botón Secundario" clickEvent={() => console.log("Botón Secundario")} />
        <ButtonComponent label="Botón Ternario" clickEvent={() => console.log("Botón Ternario")} />
        <ButtonComponent label="Botón Cuaternario" clickEvent={() => console.log("Botón Cuaternario")} /> */}

      </div>
    </MainLayout>

  );
}

export default App;
