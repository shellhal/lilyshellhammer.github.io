import React, { Component } from 'react';


import { Container, Col } from 'reactstrap';
// import Title from './Title';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreWork: false,
    }
  }

  toggleViewMoreWork() {
    this.setState({ moreWork: !this.state.moreWork });
  }

  render() {
    //<a href="./src/docs/LilyShellhammerResume.pdf" download><button className="my-btn">Download Resume as PDF</button></a>
          
    const viewText = this.state.moreWork ? 'View Less Work' : 'View More Work';
    return (
      <Container>
        <div className="portfolio-wrapper">
          <div className="resume-header-wrapper">
            <h2>Resume</h2>
            </div>
          <Col>
          <h3>Lily Shellhammer</h3>
          <p>Phone: (541)-740-8581 Email: lily.shellhammer@gmail.com</p>

          <h4>Technical Skills</h4>
          <ul>
            <li>Javascript, JQuery, Django, Python, React, SQL, Java, Grunt, Git, ElasticSearch, PostGres, SQLAlchemy, Python, Airflow, Bash, Docker, Headless Browsers, Confluence, Web Scrapers, AWS, Jira, HTML, CSS, Bootstrap
</li>
          </ul>
          <h4>Experience</h4>
          <h5 className="title-role">Senior Software Engineer</h5>
          <h6>January 2023 - current</h6>
          <p>Marinus Analytics, Pittsburgh, Pennsylvania</p>
          <ul>
            <li>Designed, coded, and launched the Advanced Analytics page for Marinus Analytics flagship tool, TrafficJam, for data trending and insights.</li>
            <li>Designed and programmed the following pages: Finding Potential Missing Juveniles, Monitoring Site Analytics, Map Area Search Page.</li>
            <li>Responsible for refactoring and modernizing TrafficJam’s front end from JQuery to ReactJS resulting in improved page functionality and responsiveness.</li>
          </ul>
          <h5 className="title-role">Software Engineer</h5>
          <h6>July 2019 - January 2023</h6>
          <p>Marinus Analytics, Pittsburgh, Pennsylvania</p>
          <ul>
            <li>Independently refactored and maintained TrafficJam’s image similarity tool SimSearch.
</li>
            <li>Designed and programmed the following pages: Finding Potential Missing Juveniles, Monitoring Site Analytics, Map Area Search Page.</li>
            <li>Created and deployed web scrapers to collect online escort advertisement data.</li>
            <li>Full stack engineer responsible for developing, debugging, testing, and documenting.</li>
            <li>Javascript, React, Django, Python, SQL, Bash, AWS, ElasticSearch, Airflow, Docker, Web Scrapers</li>
          </ul>

          <h5 className="title-role">Penrose Graphics Research Intern</h5>
          <h6>May 2018 - August 2018</h6>
            <p>Carnegie Mellon University, Pittsburgh, Pennsylvania</p>
            <ul>
              <li>Researched graphics optimization methods for ideal shape placement within a 2D diagram.</li>
              <li>Engineered solutions to the optimization problem and documented the proposed algorithms in design documents.</li>
              <li>Implemented the foundations of the Penrose graphics API in Haskell and Javascript</li>
              <li> Haskell, Javascript</li>
            </ul>
          
          <button className="my-btn" onClick={this.toggleViewMoreWork.bind(this)}>{viewText}</button>
          <br />
          { this.state.moreWork && 
          <div className="more-work-section">
            <h5 className="title-role">Introduction To Computer Science Teacher's Assistant</h5>
            <h6>September 2015 - May 2018</h6>
            <p>Oregon State University, Corvallis, Oregon</p>
            <ul>
              <li>Independently taught recitations and co-lead lab sections and supplemental review sessions.</li>
              <li>Held office hours and in-person grading sessions where I worked 1-on-1 with students to review the curriculum and assist with assigments.</li>
              <li>C++, C</li>
            </ul>
            <h5 className="title-role">Middle Stack Developer</h5>
            <h6>September 2017 - May 2018</h6>
            <p>Ninkasi Brewing, Eugene, Oregon</p>
            <ul>
              <li>Designed and implemented a web app for brewery data collection and tracking.</li>
              <li>Met regularly with Ninkasi’s brewers to tailor the application to their specifications and communicate the app’s progress.</li>
              <li>Vue.js</li>
            </ul>
            <h5 className="title-role">SeqAn Software Development Intern</h5>
            <h6>June 2016 - September 2016</h6>
            <p>Freie Universität Berlin, Berlin, Germany</p>
            <ul>
              <li>Helped develop the SeqAn open source genome sequencing library with a group graduate student and post-graduate workers.</li>
              <li>Independently coded I/O functionality for 5 RNA file types and coded test files for the I/O procedures.</li>
              <li>Documented tutorials and exercises on how to use the software.</li>
              <li>C++, SeqAn API</li>
            </ul>
            </div>
        }

          <h4>Education</h4>
          <p>Oregon State University, Corvallis, Oregon   </p>
          <p>B.S. Computer Science, GPA: 3.69</p>

          <h4>Other Skills And Interests</h4>
          <h6>Languages</h6>
          <ul>
            <li>Spanish - ILR Level 4: Full professional proficiency</li>
            <li>German - ILR Level 2: Limited working proficiency</li>
          </ul>
          </Col>
      </div>
    </Container>
    );
  }
}

