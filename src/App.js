import equilibrium from "./img/equilibrium.jpg";

function App() {
  return (
    <div className="bg-main text-white min-h-screen flex justify-center items-center">
      <div className="bg-card mx-6 p-6 rounded-lg w-100">
        <div className="rounded-lg ">
          <img src={equilibrium} alt="nft equilibrium" />
        </div>
        <div className="font-Outfit mt-4">
          <p className="font-semibold">Equilibrium #3429</p>
          <p>Our Equilibrium collection promotes balance and calm</p>
        </div>
        <div></div>
        <br />
        <div>Content 3</div>
      </div>
    </div>
  );
}

export default App;
