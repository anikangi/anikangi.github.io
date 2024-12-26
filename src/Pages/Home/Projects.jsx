import data from "../../data/index.json";
export default function Projects() {
  return (
    <section className="projects--section" id="projects">
      <div className="portfolio--container">
        <h2 className="projects--section--heading">Projects</h2>
      </div>
      <div className="projects--section--container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="projects--section--card">
            <div className="projects--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="projects--section--card--content">
              <h3 className="projects--section--title">{item.title}</h3>
              <p className="projects--section--description">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
