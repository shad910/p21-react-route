import { Suspense } from "react";
import "./App.css";
import NavBar from "./component/header/navbar/NavBar";
import PricingOptions from "./component/main/pricingOptions/pricingOption";
import Charts from "./component/main/charts/Charts";

function App() {
  const pricingPromise = fetch("pricingInformation.json")
    .then((response) => response.json())
    .then((data) => data);

  return (
    <>
      {/* Header Section */}
      <header>
        <NavBar></NavBar>
      </header>

      {/* Main Section */}
      <main>
        <section>
          <Suspense
            fallback={
              <div className="flex justify-center">
                <span className="loading loading-infinity loading-xl"></span>
              </div>
            }
          >
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
          </Suspense>
        </section>

        <section className="mt-16 hidden md:block">
          <h3 className="hidden md:block md:text-4xl md:text-center md:font-semibold mb-2.5">
            Students Marks
          </h3>
          <Charts></Charts>
        </section>
      </main>

      {/* footer Section */}
      <footer></footer>
    </>
  );
}

export default App;
