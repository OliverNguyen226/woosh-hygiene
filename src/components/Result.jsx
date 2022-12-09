import { A } from "@solidjs/router";
export default function Result({ score, onShowAnswers }) {
  function handleShowAnswers() {
    onShowAnswers();
  }
  let result = {};
  if (score >= 9) {
    result.img = "/ex90.png";
    result.type = "Good";
    result.rate = "excellent!";
  } else if (score >= 8) {
    result.img = "/good80.png";
    result.type = "Good";
    result.rate = "good!";
  } else if (score >= 6) {
    result.img = "/fair60.png";
    result.type = "Good";
    result.rate = "fair.";
  } else if (score >= 4) {
    result.img = "/poor40.png";
    result.type = "Bad";
    result.rate = "poor.";
  } else {
    result.img = "/vpoor0.png";
    result.type = "Bad";
    result.rate = "very poor.";
  }

  return (
    <div class="bg-[#D6EADF] w-screen h-screen flex m-auto items-center flex-col text-center pd-40s">
      <img src="/wooshLogo.png" class="mt-12 mb-6 w-20 h-20" />
      <h1 class="text-[#5F7BB1] headingFont text-3xl font-semibold p-2">
        Result
      </h1>
      <img src={result.img} class="mt-12 mb-6 w-40 h-40" />
      <p class="text-[#000000] text-4xl mb-6">{score}/10</p>
      <p class="text-3xl">{result.type} Answers</p>
      <p class="underline" onClick={handleShowAnswers}>
        Check out your answers!
      </p>
      <div class="text-[#1256D9] mt-12 mb-12 w-1/2 text-xl">
        Based on your answers, you got a score of {(score / 10) * 100}%, which
        is {result.rate}
      </div>
      <p class="">
        Go to the{" "}
        <A href="/resource">
          <span class="underline">Resources page</span>
        </A>{" "}
        to learn more information about hygiene!
      </p>
    </div>
  );
}
