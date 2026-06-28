export default function SectionHead({ num, title }) {
  return (
    <div className="section__head reveal">
      <span className="section__num">{num}</span>
      <h2 className="section__title">{title}</h2>
    </div>
  );
}
