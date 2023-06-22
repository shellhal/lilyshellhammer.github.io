import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './Title';
import my_face from '../img/my_face.png';
import penrose from '../img/penrose1.png';
import onceUpon from '../img/onceUponAnAlgorithm.png';
import marinusSite from '../img/marinus_site.png';
class AboutPage extends Component {
  render() {
    const skillDict = {
      'Python': {years: 9, places: ['OSU', 'Marinus', 'Personal Project']},
      'Bash': {years: 8, places: ['OSU', 'Marinus', 'Personal Project']},
      'Javascript': {years: 7, places: ['OSU', 'Marinus', 'CMU', 'Personal Project']},
      'React': {years: 5, places: ['Marinus', 'Personal Project']},
      'HTML': {years: 9, places: ['OSU', 'Marinus', 'CMU']},
      'CSS': {years: 9, places: ['OSU', 'Marinus', 'Personal Project']},
      'JQuery': {years: 5, places: ['Marinus']},
      'Django': {years: 5, places: ['Marinus']},
      'SQL': {years: 7, places: ['OSU', 'Marinus']},
      'Java': {years: 3, places: ['Marinus']},
      'Grunt': {years: 4, places: ['Marinus']},
      'Git': {years: 9, places: ['OSU', 'Marinus', 'CMU']},
      'ElasticSearch': {years: 5, places: ['Marinus']},
      'PostGres': {years: 5, places: ['Marinus']},
      'Airflow': {years: 4, places: ['Marinus']},
      'Docker': {years: 1, places: ['Marinus']},
      'Headless Browsers': {years: 2, places: ['Marinus']},
      'Confluence': {years: 5, places: ['Marinus']},
      'Web Scrapers': {years: 2, places: ['Marinus']},
      'AWS': {years: 2, places: ['Marinus']},
      'Jira': {years: 5, places: ['Marinus']},
      'Bootstrap': {years: 6, places: ['OSU', 'Marinus']},
      'Vue.js': {years: 1, places: ['Personal Project']}
    };
    const skills = [];
    Object.keys(skillDict).forEach((part) => {
      const dots = [];
      const hoverText = skillDict[part]['places'].join(',');
      if (skillDict[part]['places'].includes('OSU')) {
        dots.push(<div className="dot osu-dot"></div>);
      }
      if (skillDict[part]['places'].includes('CMU')) {
        dots.push(<div className="dot cmu-dot"></div>);
      }
      if (skillDict[part]['places'].includes('Marinus')) {
        dots.push(<div className="dot marinus-dot"></div>);
      }
      if (skillDict[part]['places'].includes('Personal Project')) {
        dots.push(<div className="dot project-dot"></div>);
      }
      skills.push(<div className="skill-wrapper">
                    <div className="skill-name">{part}</div>
                    <div className="skill-years">{skillDict[part]['years'] + " Years"}</div>
                    <div className="skill-places">{dots}</div>
                  </div>)
    });
    // <p>I am looking for a job in web development or software development where I can use my coding skills, desing knowledge, and ability to work independenlty and collaborate with teammembers to make beautiful, usable software. </p>
    // let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
    <div class="wrapper"> 
  
    <div class="fixed-bg bg-1">
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Hi, I\'m Lily!'} hoverContent={'    '}/>
          <Col>
              <Row>
                <Col xs="3" s="3">
                  <img src={my_face} alt={''} className="my-face"/>
                </Col>
                <Col xs="9" s="9">
                  <p> I am a Senior Software Engineer working at the Pittsburgh based company, <a href="https://www.marinusanalytics.com/">Marinus Analytics</a>, focused on helping law enforcement find victims of sex trafficking using AI and Machine Learning tools.</p>
                  <p>I am a graduate of <a href="google.com">Oregon State University</a> with a B.S. in Computer Science, focusing in Computer Graphics and Visualization</p>
                  <p>I have experience in both academia and industry. I attended Carnegie Mellon's <a href="https://www.cmu.edu/scs/s3d/reuse/Research/index.html">Research Experience for Undergrads</a> where I worked in the <a href="https://penrose.cs.cmu.edu/">Penrose</a> lab researching and implementing optimal mathematics diagram layouts in a 2D space.</p>
                </Col>
            </Row>
          </Col>
        </div>
        </Container>
    </div>
        
    <div class="fixed-bg bg-2">
    </div>

    <div class="scroll-bg bg-scroll-1">
      <Row>
          <h3 className="about-section-title right-title">My Work at Marinus Analtyics</h3>
      </Row>
      <Row>
        <Col xs="6" sm="9">
          <h5 className="marinus-work-subtitle">Engineering and Coding</h5>
          <p>Designed, coded, and launched the Advanced Analytics page for Marinus Analytics flagship tool, TrafficJam, for data trending and insights.</p>
          <h5 className="marinus-work-subtitle">Architecture and Design</h5>
          <p>Responsible for refactoring and m</p>
          <h5 className="marinus-work-subtitle">Leadership and Collaboration</h5>
          <p>Responsible for refactoring and m</p>
        </Col>
        <Col xs="6" sm="3">
          <img src={marinusSite} alt={''} className="marinus-site"/>
        </Col>
      </Row>
    </div>

    
    <div class="scroll-bg bg-scroll-2">
        <h3 className="about-section-title">Technical Skills</h3>
          <div className="skills-container">
          {skills}
        </div>
    </div>
    

    <div class="scroll-bg bg-scroll-3">
        <Row>
            <h3 className="about-section-title">Research Groups and Publications</h3>
          </Row>
          <Row>
          <Col xs="6" sm="3">
              <img src={penrose} alt={''} className="penrose-graph"/>
            </Col>
            <Col xs="6" sm="9">
              <h5>Penrose Lab</h5>
              <h6>Advisors: Keenan Crane, Jonathan Aldrich, Joshua Sunshine</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </Col>
            
          </Row>
          <br/>
          <Row>
           <Col xs="6" sm="3">
              <img src={onceUpon} href="https://mitpress.mit.edu/9780262545297/" alt={''} className="once-upon"/>
            </Col>
            <Col xs="6" sm="9">
              <h5>Story Programming Lab</h5>
              <h6>Advisors: Martin Erwig, Jennifer Parham Mocello</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Parham-Mocello, J., Ernst, S., Erwig, M., <span className="pub-my-name">Shellhammer, L.</span>, and Dominguez, E. Story Programming: Explaining Computer Science Before Coding. ACM Symp. on Computer Science Education, 379-385, 2019. <a href="https://dl.acm.org/doi/10.1145/3287324.3287397">https://dl.acm.org/doi/10.1145/3287324.3287397</a> <a href="https://web.engr.oregonstate.edu/~erwig/papers/DoesStoryProgrammingPrepare_SIGCSE20.pdf">Alternative Link</a></p>
              </Col>
           
            
          </Row>
      </div>

      <div class="fixed-bg bg-3">
        <h3 className="about-section-title">Teaching Assistant Work</h3>
        <div className="principles-section">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

        </div>
      </div>
  
</div> 
    );
  }
}

export default AboutPage;

