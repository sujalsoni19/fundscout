import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="flex bg-slate-50 flex-col min-h-screen">
        <Header />
        <main className="flex-1"> 
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
