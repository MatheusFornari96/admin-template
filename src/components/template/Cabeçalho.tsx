import useAppData from "../../data/hook/useAppData";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";

interface CabeçalhoProps {
  titulo: string;
  subtitulo: string;
}

export default function Cabeçalho(props: CabeçalhoProps) {
  const { tema, alternarTema } = useAppData();

  return (
    <div className={`flex`}>
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className={`flex flex-grow justify-end`} >
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema} />
      </div>
    </div>
  )
}