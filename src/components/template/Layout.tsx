import Cabeçalho from "./Cabeçalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <MenuLateral />
      <Cabeçalho titulo={props.titulo} subtitulo={props.subtitulo} />
      <Conteudo>
        {props.children}
      </Conteudo>
    </div>
  )
}