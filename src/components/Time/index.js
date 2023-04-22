import { UserCard } from "../UserCard";
import "./time.css";

export const Time = (props) => {

  const sectionStyle = { backgroundColor: props.corPrimaria };
  const h3Style = { borderColor: props.corSecundaria };
  const membros = props.membrosTime;
    
  return (
    <section className="time" style={sectionStyle}>
      <h3 style={h3Style}>{props.nome}</h3><br/>
      <div>
      {membros.map(colab => (<UserCard nome={colab.nome} cargo={colab.cargo} imgUrl={colab.imagem} key={colab.nome}/>))}
      </div>
    </section>


  );
};
