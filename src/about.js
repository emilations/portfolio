import Hero from './hero.js'

function About() {
  return (
    <div className="about">
      <Hero/>
      <img src={require('./profilepic.png')} />
    </div>
  );
}

export default About;
