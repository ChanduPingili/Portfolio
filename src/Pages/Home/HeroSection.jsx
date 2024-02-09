export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Chandu</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Currently pursuing B.Tech in IT at CVR Engineering College, I excel
            in Data Structures, Algorithms, and Web Development. My appetite for
            evolving technologies drives me, and I embrace mistakes as
            opportunities for growth. Eager to intern and contribute to
            innovative projects.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/chandra-shekar-reddy-pingili-004275257/"
          style={{ textDecoration: "none" }}>
          <button className="btn btn-primary">Get In Touch</button>
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/Portfoliio_Chandu.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
