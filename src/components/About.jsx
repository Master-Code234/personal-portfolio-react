export default function About({ title, paragraph }) {
  return (
    <div className="about">
      <h2 className="aboutme-title">{title}</h2>

      <div className="paragraph-container">
        <div className="paragraph-1">
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
