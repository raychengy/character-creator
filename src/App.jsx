import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          background: " hsl(195deg, 20%, 86%)",
          width: "100%",
          height: "40%",
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
