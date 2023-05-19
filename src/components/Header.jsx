export default function Header({ img }) {
  return (
    <header>
      <div className="greet-container">
        <h1 className="greet">
          Hello my Name is <span className="greet-name">Caleb</span>
        </h1>
        <h2 className="greet-paragraph">Full Stack Web Developer</h2>
      </div>
      <img className="greet-img" src={img} alt="tech background image" width="450" height="450" />
    </header>
  );
}
