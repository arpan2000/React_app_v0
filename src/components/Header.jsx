import reactImg from "../assets/react-core-concepts.png"
const reactDescription = ["Fundamental", "Core", "Basics"];

function getIndexNum() {
  return Math.floor(Math.random() * reactDescription.length);
}

export function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescription[getIndexNum()]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }