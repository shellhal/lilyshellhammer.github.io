import React, {Component} from 'react';
import { Container } from 'reactstrap';
import Title from './Title';
import my_face from '../img/my_face.png';
import penrose from '../img/penrose1.png';
import onceUpon from '../img/onceUponAnAlgorithm.png';
import marinusSite from '../img/marinus_site.png';
import seqan from '../img/seqan.png';
import beerplace from '../img/beerplace.png';
import dataday from '../img/dataday.png';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: '',
      cmuDotTitle: '',
      osuDotTitle: '',
      marinusDotTitle: '',
      projectDotTitle: '',
    }
  }

  changeContent() {
    this.props.changeContent('artpage');
  }

  toggleLanguagesPanel() {
    this.setState({showPanel: 'languages'});
  }

  toggleArtPanel() {
    this.setState({showPanel: 'art'});
  }

  toggleSkillPanel() {
    this.setState({showPanel: 'lastSkill'});
  }

  togglePanelOff() {
    this.setState({showPanel: ''});
  }

  toggleCMU() {
    this.setState({
      cmuDotTitle: 'Carnie Mellon',
      osuDotTitle: '',
      marinusDotTitle: '',
      projectDotTitle: '',
    });
  }

  toggleOSU() {
    this.setState({
      cmuDotTitle: '',
      osuDotTitle: 'Oregon State',
      marinusDotTitle: '',
      projectDotTitle: '',
    });
  }

  toggleProject() {
    this.setState({
      cmuDotTitle: '',
      osuDotTitle: '',
      marinusDotTitle: '',
      projectDotTitle: 'Personal Projects',
    });
  }

  toggleMarinus() {
    this.setState({
      cmuDotTitle: '',
      osuDotTitle: '',
      marinusDotTitle: 'Marinus Analtyics',
      projectDotTitle: '',
    });
  }

  toggleDotsOff() {
    this.setState({
      cmuDotTitle: '',
      osuDotTitle: '',
      marinusDotTitle: '',
      projectDotTitle: '',
    });
  }

  render() {
    const lastSkillPanelCN = (this.state.showPanel === 'lastSkill') ? "grow last-skill-section inner-accordion": "last-skill-section inner-accordion hidden";
    const artPanelCN = (this.state.showPanel === 'art') ? "grow art-section inner-accordion": "art-section inner-accordion hidden";
    const languagesPanelCN = (this.state.showPanel === 'languages') ? "grow languages-section inner-accordion": "art-section inner-accordion hidden";
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
      const key = part;
      if (skillDict[part]['places'].includes('OSU')) {
        dots.push(<div key={key+'osu'} className="dot osu-dot"></div>);
      }
      if (skillDict[part]['places'].includes('CMU')) {
        dots.push(<div key={key+'cmu'} className="dot cmu-dot"></div>);
      }
      if (skillDict[part]['places'].includes('Marinus')) {
        dots.push(<div key={key+'marinus'} className="dot marinus-dot"></div>);
      }
      if (skillDict[part]['places'].includes('Personal Project')) {
        dots.push(<div key={key+'project'} className="dot project-dot"></div>);
      }
      skills.push(<div key={part+'key'} className="skill-wrapper">
                    <div className="skill-name">{part}</div>
                    <div className="skill-years">{skillDict[part]['years'] + " Years"}</div>
                    <div className="skill-places">{dots}</div>
                  </div>)
    });
    // <p>I am looking for a job in web development or software development where I can use my coding skills, desing knowledge, and ability to work independenlty and collaborate with teammembers to make beautiful, usable software. </p>
    // let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
    <div className="wrapper"> 
  
    <div className="fixed-bg bg-1">
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Hi, I\'m Lily!'} hoverContent={'    '}/>
          <div>
              <div className="my-3-6-wrapper">
                <div  className="my-3-wrapper face-wrapper">
                  <img src={my_face} alt={''} className="my-face"/>
                </div>
                <div className="my-6-wrapper about-text-wrapper">
                  <p> I am a Senior Software Engineer working at the Pittsburgh based company, <a className="my-a" href="https://www.marinusanalytics.com/">Marinus Analytics</a>, focused on helping law enforcement find victims of sex trafficking using AI and Machine Learning tools.</p>
                  <p>I am a graduate of Oregon State University with a B.S. in Computer Science, focusing in Computer Graphics and Visualization</p>
                  <p>I have experience in both academia and industry. I attended Carnegie Mellon's <a className="my-a" href="https://www.cmu.edu/scs/s3d/reuse/Research/index.html">Research Experience for Undergrads</a> where I worked in the <a className="my-a" href="https://penrose.cs.cmu.edu/">Penrose</a> lab researching and implementing optimal mathematics diagram layouts in a 2D space.</p>
                </div>
            </div>
          </div>
        </div>
        </Container>
    </div>
        
    <div className="scroll-bg bg-2">
    </div>

    <div className="scroll-bg bg-scroll-1">
      <div>
          <h3 className="about-section-title right-title">Senior Software Engineer at Marinus Analtyics</h3>
      </div>
      <div className="my-3-6-wrapper">
        <div className="my-6-wrapper">
          <h5 className="marinus-work-subtitle">Engineering and Coding</h5>
          <p>Designed, coded, and launched the Advanced Analytics page for Marinus Analytics flagship tool, TrafficJam, for data trending and insights.</p>
          <h5 className="marinus-work-subtitle">Architecture and Design</h5>
          <p>Responsible for refactoring and m</p>
          <h5 className="marinus-work-subtitle">Leadership and Collaboration</h5>
          <p>Responsible for refactoring and m</p>
        </div>
        <div className="my-3-wrapper">
          <img src={marinusSite} alt={''} className="marinus-site"/>
        </div>
      </div>
    </div>

    
    <div className="scroll-bg bg-scroll-2">
        <h3 className="about-section-title">Technical Skills 
          <div 
            onMouseEnter={this.toggleMarinus.bind(this)}
            onMouseLeave={this.toggleDotsOff.bind(this)} 
            className="dot dot-medium marinus-dot"></div>
          <div className="dot-title">{this.state.marinusDotTitle}</div>
          <div 
            onMouseEnter={this.toggleOSU.bind(this)}
            onMouseLeave={this.toggleDotsOff.bind(this)} 
            className="dot dot-medium osu-dot"></div>
          <div className="dot-title">{this.state.osuDotTitle}</div>
          <div 
            onMouseEnter={this.toggleCMU.bind(this)}
            onMouseLeave={this.toggleDotsOff.bind(this)} 
            className="dot dot-medium cmu-dot"></div>
          <div className="dot-title">{this.state.cmuDotTitle}</div>
          <div 
            onMouseEnter={this.toggleProject.bind(this)}
            onMouseLeave={this.toggleDotsOff.bind(this)} 
            className="dot dot-medium project-dot"></div>
          <div className="dot-title">{this.state.projectDotTitle}</div>
        </h3>
        <div className="skills-container">
          {skills}
        </div>
    </div>
    

    <div className="scroll-bg bg-scroll-3">
          <h3 className="about-section-title">Research Groups and Publications</h3>
          <div className="research-group-section my-3-6-wrapper">
          <div className="my-3-wrapper">
              <a href="https://penrose.cs.cmu.edu/" target="_blank" rel="noopener noreferrer"><img src={penrose} alt={''} className="penrose-graph"/></a>
            </div>
            <div className="my-6-wrapper">
              <div className="research-info-wrapper">
                <a className="hidden-link"href="https://penrose.cs.cmu.edu/" target="_blank" rel="noopener noreferrer"><h5>Penrose Lab - Carnegie Mellon University</h5></a>
                <div className="advisors-section">Advisors: Keenan Crane, Jonathan Aldrich, Joshua Sunshine</div>
                <small className="grey">May 2018 - August 2018</small>
                <p>Researched graphics optimization for ideal shape placement on Penrose diagrams. Documented research findings and designs and experimented with implementation in Haskell.</p>
                
              </div>
            </div>
            
          </div>
          <br />
          <div className="research-group-section my-3-6-wrapper">
           <div className="my-3-wrapper">
              <a href="https://mitpress.mit.edu/9780262545297/" target="_blank" rel="noopener noreferrer"><img src={onceUpon} alt={''} className="once-upon"/></a>
            </div>
            <div className="my-6-wrapper">
              <div className="research-info-wrapper">
                <h5>Story Programming Research Group - Oregon State University</h5>
                <div className="advisors-section grey">Advisors: Martin Erwig, Jennifer Parham Mocello</div>
                <small className="grey">September 2017 - June 2019</small>
                <p>Developed experimental curriculum for the Introduction to Computer Science (160) course for two different pedagogies.
                  Researching the effects effects of functional vs imperative programming and activity-based learning vs code-based learning.</p>
                <p className="publication">Parham-Mocello, J., Ernst, S., Erwig, M., <span className="pub-my-name">Shellhammer, L.</span>, and Dominguez, E. Story Programming: Explaining Computer Science Before Coding. ACM Symp. on Computer Science Education, 379-385, 2019. 
                <a className="my-a" href="https://dl.acm.org/doi/10.1145/3287324.3287397">https://dl.acm.org/doi/10.1145/3287324.3287397</a>  <a className="my-a"href="https://web.engr.oregonstate.edu/~erwig/papers/DoesStoryProgrammingPrepare_SIGCSE20.pdf">Alternative Link</a></p>
                
              </div>
            </div>   
          </div>
          <br />
          <div  className="research-group-section my-3-6-wrapper">
           <div className="my-3-wrapper">
              <a href="https://www.seqan.de/" target="_blank" rel="noopener noreferrer"><img src={seqan} alt={''} className="seqan"/></a>
            </div>
            <div className="my-6-wrapper">
              <div className="research-info-wrapper">
                <a className="hidden-link" href="https://www.seqan.de/" target="_blank" rel="noopener noreferrer"><h5>SeqAn Lab - Freie Universität Berlin</h5></a>
                <div className="advisors-section grey">Advisors: Knut Reinert</div>
                <small className="grey">May 2016 - September 2016</small>
                <p>Coded I/O functionality for RNA files for the SeqAn open source genome sequencing library with a group graduate student and post-graduate workers.</p>
              </div>
            </div>   
          </div>
      </div>

      <div className="fixed-bg bg-3 hidden">
        <h3 className="about-section-title">Teaching Assistant Work</h3>
        <div className="principles-section">
          <p>CS 160 (X terms), CS 161 (X terms), CS 162 (X terms)</p>
          <p>Office hours, in-person grading, teaching recitation sessions, leading study sessions</p>
          <p>Partook in the teaching and research on an experimental way of teaching foundational computer science topics to first year CS students (see "Story Programming" paper above)</p>
        </div>
      </div>

      <div className="scroll-bg bg-4">
      </div>

      <div className="fixed-bg bg-5">
        <h3 className="about-section-title">Other Skills</h3>
          <div className="accordion-wrapper">
            <div 
                onMouseEnter={this.toggleLanguagesPanel.bind(this)}
                onMouseLeave={this.togglePanelOff.bind(this)} 
                className="outer-accordion languages-panel">
                <div className="title-accordion languages">Languages</div>
                <div className={languagesPanelCN}>
                  <div>Spanish - ILR Level 4: Full professional proficiency. Awarded the Oregon Seal of Biliteracy in 2014.</div>
                  <div>German - ILR Level 2: Limited working proficiency</div>
                </div>
            </div>
            <div 
              onMouseEnter={this.toggleArtPanel.bind(this)}
              onMouseLeave={this.togglePanelOff.bind(this)} 
              className="outer-accordion art-panel">
                <div className="title-accordion art">Art and Graphic Design</div>
                <div className={artPanelCN}>
                  <img src={beerplace} alt={''} className="beerplace-art"/>
                  <img src={dataday} alt={''} className="dataday-art"/>
                </div>
            </div>
            <div 
                onMouseEnter={this.toggleSkillPanel.bind(this)}
                onMouseLeave={this.togglePanelOff.bind(this)} 
                className="outer-accordion last-skill-panel hidden">
                <div className="title-accordion last-skill">Other</div>
                <div className={lastSkillPanelCN}>
                  <p>Thing</p>
                </div>
            </div>
          </div>
       </div>
    </div>
  
    );
  }
}

export default AboutPage;

