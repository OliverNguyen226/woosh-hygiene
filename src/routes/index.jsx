import { A } from 'solid-start';
import Button from "~/components/Button";

export default function Landing() {
  return (
    // <div className="flex justify-center items-center flex-col bg-blue-300">
      <div
        class="flex flex-col items-center justify-center bg-blue-300 h-screen w-screen"
      >
        <img
          src="../wooshLogo.png"
          alt="logo"
          class="mt-12"
        />

        <h1 class="flex text-slate-500 text-4xl text-center my-8">
          Welcome to Woosh
        </h1>
        <p class="flex justify-center text-slate-500 text-2xl text-center">
          We are very happy to help you learn about personal hygiene.
        </p>
        <p class="flex justfy-center text-slate-500 text-2xl text-center mb-16">
          Enjoy Woosh!
        </p>
        <A href="/home">
          <Button />
        </A>
        <img
          src="../horizontal_Logo.png"
          alt="logo"
          class="mt-16"
        />
      </div>
    // </div>
  );
}
