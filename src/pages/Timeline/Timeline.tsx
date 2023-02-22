import "./Timeline.scss";
import { Tweets } from "../../App";
import { Separator } from "../../components/Separator/Separator";
import { TimelineHeader } from "../../components/TimelineHeader/TimelineHeader";
import { Tweet } from "../../components/Tweet/Tweet";

export const Timeline = () => {
  return (
    <main className="timeline">
      <TimelineHeader title="Home" />

      <form className="new-timeline-form">
        <label htmlFor="tweet">
          <img
            src="https://github.com/wallace-bezerra.png"
            alt="Perfil imagem"
          />
          <textarea
            id="tweet"
            placeholder="O que você está pensando?"
          ></textarea>
        </label>
        <button className="new-tweet" type="submit">
          Tweet
        </button>
      </form>

      <Separator />

      {Tweets.map((tweet) => {
        return <Tweet content={tweet.content} key={tweet.id} />;
      })}
    </main>
  );
};
