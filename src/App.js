// ** components
import ButtonGroups from "./components/ButtonGroups";
import CurrencyConverter from "./components/CurrencyConverter";
import Rates from "./components/Rates";

function App() {
  return (
    <div className="max-w-7xl mx-auto xl:py-20 lg:py-14 py-8 px-[15px]">
      <h1 className="title">Piyasalar</h1>

      <div className="content-area">
        <Rates />
        <CurrencyConverter />
        <ButtonGroups responsive />
      </div>
    </div>
  );
}

export default App;
