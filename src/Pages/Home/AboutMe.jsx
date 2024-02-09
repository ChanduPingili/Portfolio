export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img
          src="./img/portfolio_chandu2.jpeg"
          alt="About Me"
        />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            👋 I'm <strong> Chandra Shekar Reddy Pingili </strong>, a dedicated
            front-end developer passionate about crafting intuitive and visually
            appealing web experiences. With expertise in React, I specialize in
            building dynamic and responsive applications that exceed user
            expectations. I thrive in collaborative environments, where I can
            leverage my design sensibilities and technical skills to create
            impactful solutions.
          </p>
          <p className="hero--section-description">
            {" "}
            What drives me is the opportunity to make a meaningful impact
            through technology, whether it's simplifying processes, enhancing
            accessibility, or sparking joy through delightful interactions.
            Let's connect and collaborate to build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}
