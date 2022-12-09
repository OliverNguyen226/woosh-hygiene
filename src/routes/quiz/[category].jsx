import { createSignal } from "solid-js";
import { useParams } from "solid-start";
import Nav from "~/components/Nav";
import Result from "~/components/Result";
import db from "~/db.json";

export default function Quiz() {
  const [tab, setTab] = createSignal("questions");
  const [currentQuestion, setCurrentQuestion] = createSignal(0);
  const [score, setScore] = createSignal(0);
  const params = useParams();
  const questions = db[params.category].sort(() => 0.5 - Math.random());
  const nextQuestion = () => {
    if (currentQuestion() + 1 < questions.length) {
      setCurrentQuestion(currentQuestion() + 1);
    } else {
      setScore(
        questions.reduce(
          (accumulator, question) =>
            question.result?.isCorrect ? accumulator + 1 : accumulator,
          0
        )
      );
      setTab("result");
    }
  };

  const previousQuestion = () => {
    if (currentQuestion() > 0) {
      setCurrentQuestion(currentQuestion() - 1);
    }
  };

  function handleShowAnswers() {
    setTab("answers");
  }

  function renderTab(tab, score) {
    if (tab === "questions") {
      return (
        <div class="bg-[#D6EADF] w-screen flex m-auto items-center flex-col text-center pb-40">
          <div class="flex items-center justify-center text-3xl">
            <img src="/SmallLogo.png" />
            <h1 class="text-[#5F7BB1] headingFont">
              Quiz -{" "}
              {params.category[0].toUpperCase() + params.category.substring(1)}{" "}
              Hygiene{" "}
            </h1>
          </div>
          <div class="w-screen max-w-xl">
            <p class="my-4 text-xl">{questions[currentQuestion()].text}</p>
            <ul class="bg-[#F1F7FF] p-4">
              {questions[currentQuestion()].answers.map((answer) => (
                <li class="flex items-center justify-between border-b border-black last:border-0 p-8">
                  <p class="text-[#1256D9]">{answer.text}</p>
                  {questions[currentQuestion()].result?.id == answer.id ? (
                    <input
                      class="w-100 h-100"
                      type="radio"
                      name="answer"
                      onClick={() =>
                        (questions[currentQuestion()].result = answer)
                      }
                      checked
                    />
                  ) : (
                    <input
                      class="w-100 h-100"
                      type="radio"
                      name="answer"
                      onClick={() =>
                        (questions[currentQuestion()].result = answer)
                      }
                    />
                  )}
                </li>
              ))}
            </ul>
            <div class="w-screen flex items-center justify-around mt-6">
              <button
                class="bg-[#F1F7FF] py-4 px-8 text-[#5383DF] text-xl rounded-xl shadow-lg"
                onClick={previousQuestion}
              >
                Back
              </button>
              <button
                class="bg-[#F1F7FF] py-4 px-8 text-[#5383DF] text-xl rounded-xl shadow-lg"
                onClick={nextQuestion}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      );
    } else if (tab === "result") {
      return <Result score={score} onShowAnswers={handleShowAnswers} />;
    } else if (tab === "answers") {
      return (
        <div class="bg-[#D6EADF] w-screen flex m-auto items-center flex-col text-center pb-40">
          <div class="flex items-center justify-center text-3xl">
            <img src="/SmallLogo.png" />
            <div class="text-left pl-4">
              <h1 class="text-[#5F7BB1] headingFont">Your Answers</h1>
              <p class="text-2xl">Total Score: {score}/10</p>
            </div>
          </div>

          {questions.map((question) => (
            <div class="w-screen max-w-xl flex flex-col items-center">
              <p class="my-4 text-xl">{question.text}</p>
              {question.result?.isCorrect ? (
                <img src="/correct.png" class="w-8"></img>
              ) : (
                <img src="/incorrect.png" class="w-8"></img>
              )}
              <ul class="bg-[#F1F7FF] mt-4">
                {question.answers.map((answer) => (
                  <li
                    class={`flex items-center justify-between border-b border-black first:pt-4 last:border-0 last:pb-4 px-4 p-2 ${
                      answer.isCorrect ? "bg-[#AFFF71]" : ""
                    }`}
                  >
                    <p class="text-[#1256D9]">{answer.text}</p>
                    {question.result?.id == answer.id ? (
                      <input
                        class="w-100 h-100"
                        type="radio"
                        name="answer"
                        disabled
                        checked
                      />
                    ) : (
                      <input
                        class="w-100 h-100"
                        type="radio"
                        name="answer"
                        disabled
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <>
      {renderTab(tab(), score())}
      <Nav></Nav>
    </>
  );
}
