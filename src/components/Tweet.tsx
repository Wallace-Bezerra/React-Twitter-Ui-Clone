import { ArrowsCounterClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.scss";

interface TweetProps {
  user?: string;
  children?: String;
}

export const Tweet = (props: TweetProps) => {
  return (
    <div className="tweet">
      <img src="http://github.com/wallace-bezerra.png" alt="" />

      <div className="tweet-content">
        <div className="tweet-header">
          <strong>Wallace</strong>
          <span>@Wallace</span>
        </div>

        <p>
          Acabei de migrar um projeto React GIGANTE de create-react-app para
          Vite e os resultados foram: ✅ npm start: De 32s para 400ms (sim,
          demorava 30s) ✅ npm build: De 120s para 22s Além disso, troquei do
          Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥
        </p>
        <div className="tweet-content-footer">
          <button>
            <ChatCircle size={24} />
            {32}
          </button>
          <button>
            <ArrowsCounterClockwise size={24} />
            {32}
          </button>
          <button>
            <Heart size={24} />
            {32}
          </button>
        </div>
      </div>
    </div>
  );
};
