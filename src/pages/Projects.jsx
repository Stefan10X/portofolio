import Card2 from "../components/Card2";
import currency from "../images/currencyConvert.png";
import dogs from "../images/dogsWorld.png";
import nutritiousFoods from "../images/nutritiousFoods.png";
import Reveal from "../components/Reveal";

function Projects() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="max-w-screen-xl mb-16">
        <div className="flex flex-col mt-20 gap-10 items-center md:gap-16 ">
          <h1 className="text-3xl md:text-4xl text-gray-900 text-center font-bold">
            These are my personal projects:{" "}
          </h1>
          <Reveal>
            <Card2
              hosted={true}
              teaser={nutritiousFoods}
              width={"600px"}
              name="Nutritious Foods"
              description="This is an e-commerce restaurant online offering personalized meal selections tailored to your fitness needs. The application is built using React for frontend, and .NET for backend."
              link="https://github.com/Stefan10X/nutritious-foods"
            />
          </Reveal>
          <Reveal>
            <Card2
              teaser={currency}
              width={"500px"}
              name="Currency Exchange"
              description="This is a currency exchange website with real time update for over 150 currencies. For this website I have used React JS with an online API"
              link="https://github.com/Stefan10X/currency-exchange"
              link2="https://currency-exchange-stefan.vercel.app/"
            />
          </Reveal>
          <Reveal>
            <Card2
              teaser={dogs}
              width={"500px"}
              name="Dogs World"
              description="This is a website containing info about a lot of dog breeds. For this website I have used vanilla JavaScript with an online API"
              link="https://github.com/Stefan10X/Dogs-World"
              link2="https://stefan10x.github.io/Dogs-World/"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Projects;
