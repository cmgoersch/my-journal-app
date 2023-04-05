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
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
}
