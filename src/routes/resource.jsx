import Nav from "~/components/Nav";
import { A } from "solid-start";

const Resource = () => {
  return (
    <div class="bg-[#D6EADF] w-screen h-screen flex items-center flex-col overflow-scroll pb-24">
      <div class="flex items-center h-28">
        <img src="/wooshLogo.png" class="mt-10 mb-6 w-20 h-20 mr-10" />
        <h1 class="text-[#5F7BB1] text-3xl headingFont">Resources</h1>
      </div>

      <div className="md:w-6/12">
        <div class="bg-[#9FC0FF] text-2xl h-24 w-full flex pl-10 items-center bodyFont">
          News about hygiene
        </div>

        <div class="bg-[#F1F7FF]  bodyFont w-full">
          <ul class="">
            <A href="https://news.un.org/en/story/2020/11/1077812#:~:text=UN%2Dbacked%20fund%20to%20address%20crisis%20in%20global%20sanitation%20and%20hygiene,-17%20November%202020&text=A%20UN%2Dbacked%20fund%2C%20launched,billion%20people%20across%20the%20world">
              <li class=" flex">
                <img
                  src="/hygiene-products.png"
                  class="border-2 border-black w-24 h-20 ml-8 my-4 "
                />
                <p class="px-8 items-center flex text-xl left-0 ">
                  UN-backed fund to address crisis in global sanitation and
                  hygiene
                </p>
              </li>
            </A>

            <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700 flex justify-center m-auto w-11/12"></hr>

            <A href="https://news.un.org/en/audio/2016/11/619722">
              <li class=" flex">
                <img
                  src="/poorHygiene.png"
                  class="border-2 border-black w-24 h-20 ml-8 my-4 "
                />
                <p class="px-8 items-center flex text-xl left-0">
                  Poor sanitation, hygiene at work kills 400,000 workers
                  globally
                </p>
              </li>
            </A>

            <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700 flex justify-center m-auto w-11/12"></hr>

            <A href="https://news.un.org/en/story/2012/10/423562">
              <li class=" flex">
                <img
                  src="/workHygiene.png"
                  class="border-2 border-black w-24 h-20 ml-8 my-4 "
                />
                <p class="px-8 items-center flex text-xl text-left">
                  Simple handwashing crucial to halting diarrhoeal and
                  water-borne diseases
                </p>
              </li>
            </A>
          </ul>
        </div>

        <div class="bg-[#9FC0FF] text-2xl h-24 w-full flex pl-10 items-center bodyFont">
          Useful resources
        </div>

        <div class="bg-[#F1F7FF] w-full bodyFont">
          <ul class="items-center grid">
            <A href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html">
              <li class="flex">
                <img
                  src="/vaccination.png"
                  class="border-2 border-black w-24 h-20 ml-8 my-4"
                />
                <p class="px-8 items-center flex text-xl text-left">
                  CDC - How to Protect Yourself and Others
                </p>
              </li>
            </A>

            <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700 flex justify-center m-auto w-11/12"></hr>

            <A href="https://www.cdc.gov/hygiene/childcare/breast-pump.html">
              <li class="flex">
                <img
                  src="/pump.png"
                  class="border-2 border-black w-24 h-20 ml-8 my-4"
                />
                <p class="px-8 items-center flex text-xl text-left">
                  How to Keep Your Breast Pump Kit Clean
                </p>
              </li>
            </A>

            <hr class=" h-px bg-gray-200 border-0 dark:bg-gray-700 flex justify-center m-auto w-11/12"></hr>

            <A href="https://www.cdc.gov/cronobacter/infection-and-infants.html">
              <li class="flex">
                <img
                  src="/premature-baby.png"
                  class="border-2 border-black w-24 h-20 ml-8 my-4"
                />
                <p class="px-8 items-center flex text-xl ">
                  Protect Your Baby from Cronobacter
                </p>
              </li>
            </A>
          </ul>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Resource;
