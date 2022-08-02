import Titulo from "./Titulo";

interface CabeçalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabeçalho(props: CabeçalhoProps) {
  return (
    <div>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
    </div>
  )
}