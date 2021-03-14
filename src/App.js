import { useReducer } from "react";
import { CsvParser } from "./pages";
import { ModalContext } from "./context";
import "antd/dist/antd.css";

const initialModalState = {
  selectedItem: {},
  isModalVisible: false,
};
const modalReducer = (state, action) => {
  switch (action.type) {
    case "EDIT":
      return { selectedItem: action.payload, isModalVisible: true };
    case "ADD":
      return { selectedItem: null, isModalVisible: true };
    case "CLOSE":
      return { selectedItem: null, isModalVisible: false };
    default:
      return { selectedItem: null, isModalVisible: false };
  }
};

function App() {
  const [modalState, dispatchModalState] = useReducer(
    modalReducer,
    initialModalState
  );
  return (
    <div className="App">
      <ModalContext.Provider value={{ modalState, dispatchModalState }}>
        <CsvParser />
      </ModalContext.Provider>
    </div>
  );
}

export default App;
