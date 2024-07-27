import "./App.css";
function App() {
  return (
    <>
      <div className="h-full w-full mx-auto flex flex-col gap-10 ">
        <section>
          <div className="home-background w-screen min-h-[600px] bg-no-repeat m-h-[899px] mx-auto px-3 lg:px-14 pt-10 ">
            <div className="flex flex-col align-middle gap-24 lg:flex-row lg:justify-between  items-center text-slate-100">
              <div className="flex flex-col text-center lg:text-left gap-2.5">
                <h2 className=" text-balance tracking-tight font-bold sm:text-lg">
                  &quot; BE THE CHANGE — PLANT A TREE AND GROW A GREENER WORLD
                  &quot;
                </h2>
                <h1 className="font-extrabold max-w-4xl text-green-600 text-balance text-3xl md:text-5xl lg:text-6xl">
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
        <section className="mt-8 px-7">
          <div className="flex flex-col items-center   w-full gap-5">
            <h2 className="font-bold text-emerald-800 text-2xl">
              MAKE AN IMPACT WITH
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-flow-col items-center lg:gap-20 pointer-events-none select-none">
              <img src="/Companies/Cotton Country.png" alt="Cotton Country" />
              <img src="/Companies/Salesforce.png" alt="Salesforce" />
              <img src="/Companies/Hsbc.png" alt="Hsbc" />
              <img src="/Companies/Hundai.png" alt="Hundai" />
              <img src="/Companies/Atlassian.png" alt="Atlassian" />
            </div>
          </div>
        </section>

        {/* Plant Tress */}
        <section className="mt-8 px-7">
          <div className="flex flex-col items-center pointer-events-none select-none  w-full gap-5">
            <h2 className="font-bold text-emerald-800 text-2xl">PLANT TREES</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 items-center lg:gap-20 gap-y-3">
              <div className="text-center">
                <img src="/States/Uttrakhand.png" alt="Uttrakhand" />
                <span className="font-semibold lg:text-xl">Uttrakhand</span>
              </div>
              <div className="text-center">
                <img src="/States/Uttar Pradesh.png" alt="Uttar Pradesh" />
                <span className="font-semibold lg:text-xl">Uttar Pradesh</span>
              </div>
              <div className="text-center">
                <img src="/States/Rajasthan.png" alt="Rajasthan" />
                <span className="font-semibold lg:text-xl">Rajasthan</span>
              </div>
              <div className="text-center">
                <img src="/States/Punjab.png" alt="Punjab" />
                <span className="font-semibold lg:text-xl">Punjab</span>
              </div>
              <div className="text-center">
                <img src="/States/Bihar.png" alt="Bihar" />
                <span className="font-semibold lg:text-xl">Bihar</span>
              </div>
              <div className="text-center">
                <img src="/States/Gujarat.png" alt="Gujarat" />
                <span className="font-semibold lg:text-xl">Gujarat</span>
              </div>
            </div>
          </div>
        </section>
        {/* Sustainanility For Business */}
        <section>
          <div className="relative ">
            <img src="Backgrounds/Sustainability.png" alt="Sustainability" />
            <div className="absolute inset-0 ">
              <div className="flex flex-col text-center pt-4  md:gap-9 lg:gap-16 md:pt-20 px-10 text-balance tracking-tight">
                <h1 className=" text-balance  font-extrabold text-black text-xl leading-5 sm:text-3xl md:text-5xl lg:text-7xl ">
                  SUSTAINABILITY FOR BUSINESS
                </h1>
                <p className="text-sm md:text-2xl lg:text-3xl font-bold">
                  MAKE A REAL IMPACT AND IMPROVE YOUR COMPANY&apos;S
                  SUSTAINABILITY INITIATIVES FOR 2024
                </p>
                <div>
                  <a
                    className="mt-2 inline-flex text- items-center justify-center rounded-xl bg-green-600 py-2 px-4 text-base font-medium text-white shadow-xl shadow-green-100/60 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                    href="#"
                  >
                    Become a Business Partner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TOGETHER PLANTING A FOREST */}
        <section>
          <div className="relative">
            <img
              className="opacity-90"
              src="Backgrounds/Together.png"
              alt="Sustainability"
            />

            <div className="absolute inset-0  text-white">
              <div className="pt-2 flex flex-col text-center gap-2 md:gap-9 lg:gap-16 md:pt-20 px-10 text-balance tracking-tight">
                <h1 className=" text-balance  font-extrabold  leading-6 text-xl sm:text-3xl md:text-5xl lg:text-7xl ">
                  TOGETHER PLANTING A FOREST
                </h1>
                <p className="text-sm md:text-2xl lg:text-3xl font-semibold">
                  WE MAKE IT SIMPLE FOR EVERYONE TO PLANT TREES
                </p>
                <div>
                  <a
                    className="mt-1 inline-flex text- items-center justify-center rounded-xl bg-green-600 py-2 px-4 text-base font-medium text-white shadow-xl shadow-green-100/60 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                    href="#"
                  >
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section>
          <div className="grid grid-cols-1 mx-auto align-middle items-center lg:grid-cols-3 gap-2">
            <div className="relative mx-auto">
              <img
                className=""
                src="Activities/act1.png"
                width={600}
                height={700}
                alt=""
              />
              <div className="absolute inset-0 pt-[340px] ">
                <h1 className="text-center text-white my-auto font-extrabold text-5xl">
                  Individual
                </h1>
              </div>
            </div>
            <div className="relative mx-auto">
              <img
                className="hover:opacity-50"
                src="Activities/act2.png"
                width={600}
                height={700}
                alt=""
              />
              <div className="absolute inset-0 pt-[340px] ">
                <h1 className="text-center text-white my-auto font-extrabold text-5xl">
                  BUSINESSES
                </h1>
              </div>
            </div>
            <div className="relative mx-auto">
              <img
                className="hover:opacity-50"
                src="Activities/act3.png"
                width={600}
                height={700}
                alt=""
              />
              <div className="absolute inset-0 pt-[340px] ">
                <h1 className="text-center text-white my-auto font-extrabold text-5xl">
                  SCHOOLS
                </h1>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <img src="moe.png" alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
