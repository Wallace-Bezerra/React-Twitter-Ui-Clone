import { Tweet } from "./components/Tweet";
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User,
} from "phosphor-react";
export const App = () => {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img src="/Twitter-Icon.svg" alt="logo" />
        <nav className="menu-navigation">
          <a className="item-list active">
            <House size={32} weight="fill" color="#1da1f2" />
            Home
          </a>
          <a className="item-list">
            <Hash size={32} />
            Explorar
          </a>
          <a className="item-list">
            <Bell size={32} />
            Notificação
          </a>
          <a className="item-list">
            <Envelope size={32} />
            Mensagens
          </a>
          <a className="item-list">
            <BookmarkSimple size={32} />
            Itens salvos
          </a>
          <a className="item-list">
            <FileText size={32} />
            Listas
          </a>
          <a className="item-list">
            <User size={32} />
            Perfil
          </a>
          <a className="item-list">
            <DotsThreeCircle size={32} />
            Mais
          </a>
        </nav>
        <button className="new-tweet">Tweet</button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle size={24} />
          </div>
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
          <hr></hr>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  );
};
