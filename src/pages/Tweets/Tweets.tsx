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
  return (
    <main className="tweets">
      <TimelineHeader title="Tweet" />
      <Tweet
        content={
          "Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: "
        }
      />
      <Separator />
      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/wallace-bezerra.png"
            alt="Perfil imagem"
          />
          <textarea id="tweet" placeholder="Tweet sua resposta"></textarea>
        </label>
        <button className="answer-tweet" type="submit">
          Tweet
        </button>
      </form>

      {Answers.map((tweet) => {
        return <Tweet content={tweet} key={tweet} />;
      })}
    </main>
  );
};
