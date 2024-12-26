import data from "../../data/index.json";

export default function Work() {
  return (
    <section className="work--section" id="work">
      <div className="work--section--heading--container">
        <h2 className="work--section--heading">Work</h2>
        <p className="work--section--heading--resume">
          View my full resume{" "}
          <a
            href="https://drive.google.com/file/d/16yFsUQvs4Y1cB9JLFMRFAt6TGadpXbbn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="work--section--content--container">
        {data?.experiences?.map((item, index) => (
          <div key={index} className="work--section--card">
            <div className="work--section--logo">
              <img src={item.logo} alt="Company Logo" />
            </div>
            <div className="work--section--card--content">
              <h3 className="work--section--timeline">{item.timeline}</h3>
              <h3 className="work--section--company">{item.company}</h3>
              <h3 className="work--section--role">{item.role}</h3>
              <p className="work--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
