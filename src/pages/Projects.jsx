import Card2 from "../components/Card2";
import currency from "../images/currencyConvert.png";
import dogs from "../images/dogsWorld.png";
import nutritious from "../images/nutritiousFoods.jpg";
import nutrition from "../images/nutritionApp.png";
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
              finished={true}
              hosted={false}
              teaser={nutritious}
              width={"450px"}
              name="Nutritious Foods"
              description="This is an e-commerce restaurant with healthy foods for fitness enthusiasts. I have used .NET and Entity Framework for BackEnd and ReactJS with TailwindCSS Framework for FrontEnd"
              link="https://github.com/Stefan10X/nutritious-foods"
              link2="https://github.com/Stefan10X/nutritious-foods"
            />
          </Reveal>
          <Reveal>
            <Card2
              finished={true}
              hosted={true}
              teaser={currency}
              width={"500px"}
              name="Currency Exchange"
              description="This is a currency exchange website with real time update for over 150 currencies. I have used and online API and ReactJS with TailwindCSS for FrontEnd"
              link="https://github.com/Stefan10X/currency-exchange"
              link2="https://currency-exchange-stefan.vercel.app/"
            />
          </Reveal>
          <Reveal>
            <Card2
              finished={false}
              hosted={true}
              teaser={nutrition}
              width={"330px"}
              name="Nutrition App"
              description="In this website app you can add foods that you eat during the day and it will calculate the calories and protein based on your goal."
              link="https://github.com/Stefan10X/nutrition-app"
              link2="https://nutrition-app-stefan.vercel.app/"
            />
          </Reveal>
          <Reveal>
            <Card2
              finished={true}
              hosted={true}
              teaser={dogs}
              width={"500px"}
              name="Dogs World"
              description="This is a website containing info about a lot of dog breeds. I have used an online API and JavaScript Vanilla for FrontEnd"
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
