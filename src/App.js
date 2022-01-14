import "./styles/App.scss";
import Navbar from "./components/element/navbar/Navbar.";
import Contacts from "./components/element/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddContact from "./components/element/contacts/AddContact";
import EditContact from "./components/element/contacts/EditContact";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container py-3">
            <Routes>
              <Route exact path="/list" element={<Contacts />} />
              <Route exact path="/add" element={<AddContact />} />
              <Route exact path="/edit/:id" element={<EditContact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
