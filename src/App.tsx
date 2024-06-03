import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <section className="main flex flex-col justify-center items-center py-20">
        <Router />
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
