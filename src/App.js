import equilibrium from "./img/equilibrium.jpg";
import avatar from "./img/avatar.png";
function App() {
  return (
    <div className="bg-main text-white min-h-screen flex justify-center items-center">
      <div className="bg-card mx-6 p-6 rounded-lg w-screen md:w-60 lg:w-[300px] h-1/2 lg:my-20">
        <div className="h-1/2">
          <img className="rounded-lg" src={equilibrium} alt="nft equilibrium" />
        </div>
        <div className="font-Outfit mt-4">
          <p className="font-semibold">Equilibrium #3429</p>
          <p>Our Equilibrium collection promotes balance and calm</p>
        </div>
        <div></div>
        <br />
        <div className="flex flex-row items-center space-x-4">
          <img className="w-1/4" src={avatar} alt="person" />
          <p className="text-sm">
            <span>Creation of</span> Julius Wyvern
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
