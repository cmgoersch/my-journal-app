import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
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
      <main>
        <h3>New Entry</h3>;
        <Form />
      </main>
    </>
  );
}
