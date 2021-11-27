import equilibrium from "./img/equilibrium.jpg";
import avatar from "./img/avatar.png";
import ethereum from "./img/ethereum.svg";
import view from "./img/view.svg";
import clock from "./img/clock.svg";

function App() {
  return (
    <div className="bg-main text-lg text-soft font-Outfit min-h-screen flex justify-center items-center">
      <div className="bg-card font-Output cursor-pointer mx-6 p-5 rounded-lg w-screen md:w-60 lg:w-[360px] h-1/2 lg:my-20">
        <div className="h-1/2">
          <img
            className="rounded-lg hover:bg-cyan"
            src={equilibrium}
            alt="nft equilibrium"
          />
        </div>
        <div className=" tracking-wide mt-4">
          <p className="font-semibold text-white hover:text-cyan mb-2">
            Equilibrium #3429
          </p>
          <p className="font-light">
            Our Equilibrium collection promotes balance and calm
          </p>
        </div>
        <div className="my-4 text-sm flex flex-row justify-between">
          <div className="flex flex-row space-x-2">
            <img src={ethereum} alt="etherium svg" />
            <p className="text-cyan">0.041 ETH</p>
          </div>
          <div className="flex flex-row space-x-2">
            <img src={clock} alt="etherium svg" />
            <p> 3 days left</p>
          </div>
        </div>
        <hr className="text-line" />
        <div className="mt-4 flex flex-row items-center text-sm space-x-4">
          <img className="w-1/4" src={avatar} alt="person" />
          <p className="text-soft">
            Creation of
            <span className="text-white hover:text-cyan"> Julius Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
