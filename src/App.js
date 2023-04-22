import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Formulario";
import { Time } from "./components/Time";

function App() {
  const times = [
    { nome: "Programação", corPrimaria: "#E33D39", corSecundária: "#FBB23F" },
    { nome: "Front-End", corPrimaria: "#EBE717", corSecundária: "#F5B318" },
    { nome: "Data Science", corPrimaria: "#F51842", corSecundária: "#A819EA" },
    { nome: "Devops", corPrimaria: "#17A0EB", corSecundária: "#BCF550" },
    { nome: "UX e Design", corPrimaria: "#6818F5", corSecundária: "#65EBAE" },
    { nome: "Mobile", corPrimaria: "#F7EDB2", corSecundária: "#E16F5F" },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#775CF7",
      corSecundária: "#A6EDD1",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario Adicionar={aoAdicionado} />
      {times.map((time) => (
        <Time
          nome={time.nome}
          key={time.nome}
          membrosTime={colaboradores.filter(
            (colab) => colab.time === time.nome
          )}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundária}
        ></Time>
      ))}
    </div>
  );
}

export default App;
