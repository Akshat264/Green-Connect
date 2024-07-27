import "./App.css";
function App() {
  return (
    <>
      <div className="h-full w-full mx-auto">
        <section>
          <div className="home-background w-screen min-h-[600px]   m-h-[899px] mx-auto px-3 lg:px-14 pt-10 ">
            <div className="flex flex-col align-middle gap-24 lg:flex-row lg:justify-between  items-center text-slate-100">
              <div className="flex flex-col text-center lg:text-left gap-2.5">
                <h2 className=" text-balance tracking-tight font-bold sm:text-lg">
                  &quot; BE THE CHANGE — PLANT A TREE AND GROW A GREENER WORLD
                  &quot;
                </h2>
                <h1 className="font-extrabold max-w-4xl font-sans  text-green-600 text-balance text-3xl md:text-5xl lg:text-6xl">
                  PLANT TREES FOR A SUSTAINABLE FUTURE
                </h1>
                <h2 className=" text-balance tracking-tight font-bold sm:text-lg ">
                  PLANT TREES FOR IMPACT
                </h2>
                <div>
                  <a
                    className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                    href="#"
                  >
                    PLANT TREES
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h3>CONTACT US</h3>
                <p>XXXXXXXXXX</p>
                <h3>NEWSLETTER</h3>
                <div>
                  <a
                    className="mt-8 inline-flex items-center justify-center rounded-xl bg-slate-600 py-3 px-6 text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                    href="#"
                  >
                    DONATE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Attract */}
        <section className="mt-8">
          <div className="flex flex-col items-center   w-full gap-5">
            <h2 className="font-bold text-emerald-800 text-2xl">
              MAKE AN IMPACT WITH
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-flow-col items-center lg:gap-20">
              <img src="/Companies/Cotton Country.png" alt="Cotton Country" />
              <img src="/Companies/Salesforce.png" alt="Salesforce" />
              <img src="/Companies/Hsbc.png" alt="Hsbc" />
              <img src="/Companies/Hundai.png" alt="Hundai" />
              <img src="/Companies/Atlassian.png" alt="Atlassian" />
            </div>
          </div>
        </section>

        {/* Plant Tress */}
        <section className="mt-8">
          <div className="flex flex-col items-center   w-full gap-5">
            <h2 className="font-bold text-emerald-800 text-2xl">PLANT TREES</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-flow-col items-center lg:gap-20">
              <img src="/States/Uttrakhand.png" alt="Uttrakhand" />
              <img src="/Companies/Salesforce.png" alt="Salesforce" />
              <img src="/Companies/Hsbc.png" alt="Hsbc" />
              <img src="/Companies/Hundai.png" alt="Hundai" />
              <img src="/Companies/Atlassian.png" alt="Atlassian" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
