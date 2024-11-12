import Card2 from "../components/Card2";
import currency from "../images/currencyConvert.png";
import dogs from "../images/dogsWorld.png";
import nutritiousFoods from "../images/nutritiousFoods.png";
import Reveal from "../components/Reveal";

function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <div className="mb-16 max-w-screen-xl">
        <div className="mt-12 flex flex-col items-center gap-10 md:gap-16 xl:mt-20">
          <h1 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            These are my personal projects:{" "}
          </h1>
          <Reveal>
            <Card2
              teaser={nutritiousFoods}
              width={"400px"}
              name="Nutritious Foods"
              description="This online store specializes in personalized meal selections customized to individual fitness
needs. The application is meticulously crafted using React for the frontend to ensure a seamless user experience,
while leveraging .NET for the backend to manage complex data and facilitate secure transactions. It includes features
such as personalized meal planning, real-time nutritional information, and efficient order management, making it an
ideal choice for health-conscious consumers seeking tailored dietary solutions."
              link="https://github.com/Stefan10X/nutritious-foods"
              link2="https://nutritious-foods.fly.dev/"
            />
          </Reveal>
          <Reveal>
            <Card2
              teaser={currency}
              width={"400px"}
              name="Currency Converter"
              description="This currency exchange website offers real-time updates for over 150 currencies worldwide.
Developed using React JS, the interface provides intuitive navigation and responsive design, ensuring a seamless

user experience across devices. The integration of an online API allows the application to fetch and display up-to-
date exchange rates, enabling users to perform accurate currency conversions instantly."
              link="https://github.com/Stefan10X/currency-exchange"
              link2="https://currency-exchange-stefan.vercel.app/"
            />
          </Reveal>
          <Reveal>
            <Card2
              teaser={dogs}
              width={"400px"}
              name="Dogs World"
              description="This is a website containing detailed information about a wide variety of dog breeds. For this website, I used Vanilla JavaScript to create an interactive user experience, and integrated an online API to fetch real-time data about each breed. Users can explore characteristics, temperament, and other key details for each breed."
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
