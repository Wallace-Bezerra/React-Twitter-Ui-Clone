import { FormEvent, useState } from "react";
import { Separator } from "../../components/Separator/Separator";
import { TimelineHeader } from "../../components/TimelineHeader/TimelineHeader";
import { Tweet } from "../../components/Tweet/Tweet";
import "./Tweets.scss";

const Answers = [
  "Concordo...",
  "Olha, faz sentido!",
  "Parabéns pelo progresso!",
];
export const Tweets = () => {
  const [answers, setAnswers] = useState(Answers);
  const [answersForm, setAnswersForm] = useState("");

  const handleSubimit = (event: FormEvent) => {
    event.preventDefault();
    const newAnswers = [answersForm, ...answers];
    setAnswers(newAnswers);
    setAnswersForm("");
  };

  console.log(answersForm);
  return (
    <main className="tweets">
      <TimelineHeader title="Tweet" />
      <Tweet
        content={
          "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: "
        }
      />
      <Separator />
      <form onSubmit={handleSubimit} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/wallace-bezerra.png"
            alt="Perfil imagem"
          />
          <textarea
            onChange={(e) => setAnswersForm(e.target.value)}
            value={answersForm}
            id="tweet"
            required
            placeholder="Tweet sua resposta"
          ></textarea>
        </label>
        <button className="answer-tweet" type="submit">
          Tweet
        </button>
      </form>

      {answers.map((tweet) => {
        return <Tweet content={tweet} key={tweet} />;
      })}
    </main>
  );
};
