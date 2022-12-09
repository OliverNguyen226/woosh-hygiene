import Nav from "../components/Nav";
import { A } from "solid-start";

export default function Instruction() {
  return (
    <nav class="bg-[#D6EADF]">
      <div class="flex flex-row  my-auto items-center justify-center mb-3 py-6">
        <img class="logo" src="SmallLogo.png" alt="" />
        <h1 class="text-[#5F7BB1] ml-4 headingFont">Instructions </h1>
      </div>
      <nav class="flex flex-col my-auto items-center justify-around">
        <div class="py-6 border-b border-black flex flex-col items-center justify-center">
          <iframe
            class="rounded-2xl"
            width="350"
            height="188"
            src="https://www.youtube.com/embed/62D_qlms-mI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h3 class="text-[#1256D9] text-xl text-center mt-4">
            Learn how to wash your hands properly
          </h3>
        </div>
        <div class="py-6 border-b border-black flex flex-col items-center justify-center">
          <iframe
            class="rounded-2xl"
            width="350"
            height="188"
            src="https://www.youtube.com/embed/iqEWFmLuLTg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h3 class="text-[#1256D9] text-xl mt-4">
            Learn how to wash your hair properly
          </h3>
        </div>
        <div class="py-6 border-b border-black flex flex-col items-center justify-center">
          <iframe
            class="rounded-2xl"
            width="350"
            height="188"
            src="https://www.youtube.com/embed/rh80Lff9P4c"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h3 class="text-[#1256D9] text-xl mt-4">
            Learn how to wash your feet properly
          </h3>
        </div>
        <div class="py-6 border-b border-black flex flex-col items-center justify-center">
          <iframe
            class="rounded-2xl"
            width="350"
            height="188"
            src="https://www.youtube.com/embed/Ge9WGTp5y3o"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h3 class="text-[#1256D9] text-xl mt-4">Learn proper oral hygiene</h3>
        </div>
      </nav>
      <br />
      <A href="/quizcategory">
        <p class="flex flex-row  my-auto items-center justify-center underline text-xl">
          Take a quiz
        </p>
      </A>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Nav></Nav>
    </nav>
  );
}
