import { A } from "solid-start";

import BigButton from "~/components/BigButton";
import Nav from "~/components/Nav";

function Home() {
  return (
    // <div className="flex justify-center items-center flex-col ">
    <div class="flex flex-col items-center justify-center bg-[#D6EADF] h-screen w-screen font-comfortaa px-8">
      <img src="../SmallLogo.png" alt="small logo" class="-mt-16" />

      <h1 class="flex text-[#5F7BB1] text-4xl text-center my-8 headingFont">
        Personal Woosh
      </h1>
      <p class="flex justify-center text-[#5F7BB1] text-lg text-center">
        Woosh is an app designed to teach people about basic personal hygiene.
      </p>
      <p class="flex justfy-center text-[#5F7BB1] text-lg text-center mb-16">
        You may take the quiz and see where your knowledge is on this topic.
      </p>
      <A href="/quizcategory">
        <BigButton />
      </A>
      <A href="/instruction">
        <p class="text-[#5F7BB1] mt-6 underline text-lg">
          or watch the instruction
        </p>
      </A>
      <Nav />
    </div>
    // </div>
  );
}

export default Home;
