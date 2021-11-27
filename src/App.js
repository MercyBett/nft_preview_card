import equilibrium from "./img/equilibrium.jpg";
import avatar from "./img/avatar.png";
import ethereum from "./img/ethereum.svg";
import view from "./img/view.svg";
import clock from "./img/clock.svg";

function App() {
  return (
    <div className="bg-main text-sm text-white min-h-screen flex justify-center items-center">
      <div className="bg-card mx-6 p-6 rounded-lg w-screen md:w-60 lg:w-[300px] h-1/2 lg:my-20">
        <div className="h-1/2">
          <img className="rounded-lg" src={equilibrium} alt="nft equilibrium" />
        </div>
        <div className="font-Outfit mt-4">
          <p className="font-semibold">Equilibrium #3429</p>
          <p>Our Equilibrium collection promotes balance and calm</p>
        </div>
        <div className="my-4 flex flex-row justify-between">
          <div className="flex flex-row space-x-2">
            <img src={ethereum} alt="etherium svg" />
            <p className="text-cyan">0.041 ETH</p>
          </div>
          <div className="flex flex-row space-x-2">
            <img src={clock} alt="etherium svg" />
            <p> 3 days left</p>
          </div>
        </div>
        <hr />
        <div className="mt-4 flex flex-row items-center space-x-4">
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
