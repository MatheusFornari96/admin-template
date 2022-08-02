import { AdjustIcon, BellIcon, HomeIcon, LogoutIcon } from "../icons/index";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col">
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
    `}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/ajustes" text="Ajustes" icon={AdjustIcon} />
        <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon} />
      </ul>
      <ul className="">
        <MenuItem 
          text="Sair" icon={LogoutIcon}
          onClick={() => console.log('Logout')}
          className={`
          text-red-600
          hover:bg-red-400 hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}