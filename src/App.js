/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { Card } from "./components/Card";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

function Main() {
  return (
    <>
      <main className="main">
        <h3 className="main_title">New Entry</h3>
        <Form />
        <div className="entries_favorites">
          <h3 className="entries">All Entries</h3>
          <h3 className="entries_Number">3</h3>
          <h3 className="favorites">Favorites</h3>
          <h3 className="favorites_Number">1</h3>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
}
