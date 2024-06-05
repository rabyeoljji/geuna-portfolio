import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <section className="main flex flex-col justify-center items-center py-10">
        <Router />
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
