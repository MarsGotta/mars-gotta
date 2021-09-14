import Head from "next/head";
import { useThemeContext, setStorageTheme } from "../core/theme-context";

import Layout from "./../layout/Layout";
import MarsGrid from "./../components/mars-grid/MarsGrid";

export default function About() {
  const config = { title: "Sobre mi" };
  const { variableState, setVariableState } = useThemeContext();

  const handleSwitch = (theme) => {
    setVariableState(theme);
    setStorageTheme(theme);
  };
  return (
    <Layout config={config} theme={variableState} onSwitch={handleSwitch}>
      <Head>
        <title>{config.title} | Mars Gotta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        src="about-me.svg"
        width="100%"
        style={{ maxWidth: "350px", float: "left" }}
      ></img>
      <p
        style={{
          lineHeight: "28px",
          fontSize: "18px",
        }}
      >
        ¡Hola! Soy Marcela Gotta, soy una ninja en Javascript, especializada en
        Frontend. Llevo 14 años siendo muy amiga del código.
      </p>
      <p
        style={{
          lineHeight: "28px",
          fontSize: "18px",
        }}
      >
        Desarrollo con todo tipo de framework de Javascript como: ReactJs,
        LitElement, Stencil, VueJs, Angular, Sencha y Vanilla JavaScript.
      </p>
      <p
        style={{
          lineHeight: "28px",
          fontSize: "18px",
        }}
      >
        Soy muy buena en el desarrollo CSS y HTML5, al igual que me desempeño
        muy bien a la hora de desarrollar algoritmos complejos si son requeridos
        en el proyecto (Entre más complejo más me emociona). Tengo más de 10
        años de experiencia trabajando con empresas y cada proyecto lo hago un
        nuevo reto y un nuevo aprendizaje.
      </p>
      <p
        style={{
          lineHeight: "28px",
          fontSize: "18px",
        }}
      >
        Me encanta enseñar a mis compañeros, he dado varias charlas y me
        considero una persona con fuertes rasgos de liderazg. He podido dirigir
        buenos equipos de Front con los que he aprendido mucho a lo largo de
        cada Sprint. Suelo utilizar metodologías ágiles con el framework de
        trabajo Scrum. Me encanta esa filosofía de trabajo e intento cumplirla
        lo mejor posible.
      </p>
    </Layout>
  );
}
