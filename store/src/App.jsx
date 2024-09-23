import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido Diego!"} />
    </>
  );
}

export default App;
