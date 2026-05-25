import Navbar from "./components/layout/Navbar";
import Hero from "./components/section/Hero";

const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
