import "./App.css";
import Cards from "./Components/Cards";
import cardContent from "./Components/CardContent";
import first from "./Components/Domain/First";
import FirstCard from "./Components/Domain/FirstCard";
function App() {
  // MAKE THE FIRST PART OF TASK 1



  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container ">
          <div className="task1a align-items-center mt-5 mb-5">
            <div className="firstCards d-flex flex-wrap gap-5">

          {first.map((el)=>(
            <FirstCard icon={el.icon} title={el.title} description={el.description}/>
          ))}
            </div>
          </div>
          <div className="task1b align-items-center mt-5 mb-5">
            <div className="allCards d-flex gap-5">
              {cardContent.map((content) => (
                <Cards
                  versionDate={content.versionDate}
                  buttonName={content.buttonName}
                  buttonColor={content.buttonColor}
                  paragraphContent={content.paragraphContent}
                />
              ))}
            </div>
            <div className="allCards d-flex gap-5 mt-3">
              {cardContent.map((content) => (
                <Cards
                  versionDate={content.versionDate}
                  buttonName={content.buttonName}
                  buttonColor={content.buttonColor}
                  paragraphContent={content.paragraphContent}
                />
              ))}
            </div>
            <div className="allCards d-flex gap-5 mt-3">
              {cardContent.map((content) => (
                <Cards
                  versionDate={content.versionDate}
                  buttonName={content.buttonName}
                  buttonColor={content.buttonColor}
                  paragraphContent={content.paragraphContent}
                />
              ))}
            </div>
            {/* <Cards/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
