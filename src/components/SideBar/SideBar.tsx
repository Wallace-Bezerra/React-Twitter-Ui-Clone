import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from "phosphor-react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

export const SideBar = () => {
  return (
    <aside className="sidebar">
      <img src="/Twitter-Icon.svg" alt="logo" />
      <nav className="menu-navigation">
        <NavLink className="item-list" to={"/"}>
          <House size={32} weight="fill" />
          Home
        </NavLink>
        <NavLink className="item-list" to={"/tweet"}>
          <Hash size={32} />
          Explorar
        </NavLink>
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
  );
};
