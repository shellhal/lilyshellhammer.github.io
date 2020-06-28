import React from 'react';

import { Container, Col } from 'reactstrap';
import Title from './Title';
class Resume extends React.Component {

  render() {
    return (
      <Container>
        <div className="portfolio-wrapper">
          <Title title={'Resume'} hoverContent={''}/>
          <Col>
          <h3>Lily Shellhammer</h3>
          <p>Phone: (541)-740-8581 Email: lily.shellhammer@gmail.com</p>
          <h4>Objectives</h4>
          <ul>
            <li>Work in the tech industry __</li>
            <li>Make software usable ___</li>
          </ul>
          <h4>Education</h4>
          <p>Oregon State University, Corvallis, Oregon 	</p>
          <p>B.S. Computer Science, GPA: 3.69</p>
          <p>Related Courses: Web Development, Introduction to Databases, Software Engineering I and II, Analysis of Algorithms, Operating Systems I and II, Programming Language Fundamentals, Computer Graphics and Graphics Shaders, Linear Algebra, Calculus and Vector Calculus, Usability, Introduction to Networks</p>
          <h4>Experience</h4>
          <h6>Software Engineer	July 2019 - current</h6>
          <p>Marinus Analytics, Pittsburgh, Pennsylvania</p>
          <ul>
            <li>Worked on creating Allegheny___</li>
            <li>Independently refactored __ SimSearch</li>
            <li>Worked on several pages in Traffic Jam</li>
            <li>Communicated with clients Allgheney and PD</li>
            <li>Javascript, React, Django, SQL, Bash</li>
          </ul>
          <h6>Penrose Graphics Research Intern	May 2018 - August 2018</h6>
          <p>Carnegie Mellon University, Pittsburgh, Pennsylvania</p>
          <ul>
            <li>Researched graphics optimization methods for ideal shape placement within a 2D diagram.</li>
            <li>Engineered solutions to the optimization problem and documented the proposed algorithms in design documents.</li>
            <li>Implemented the foundations of the Penrose graphics API in Haskell and Javascript</li>
            <li> Haskell, Javascript</li>
          </ul>
          <h6>Middle Stack Developer 	September 2017 - May 2018</h6>
          <p>Ninkasi Brewing, Eugene, Oregon</p>
          <ul>
            <li>Designed and implemented a web app for brewery data collection and tracking.</li>
            <li>Met regularly with Ninkasi’s brewers to tailor the application to their specifications and communicate the app’s progress.</li>
            <li>Vue.js</li>
          </ul>
          <h6>SeqAn Software Development Intern	June 2016 - September 2016</h6>
          <p>Freie Universität Berlin, Berlin, Germany</p>
          <ul>
            <li>Helped develop the SeqAn open source genome sequencing library with a group graduate student and post-graduate workers.</li>
            <li>Independently coded I/O functionality for 5 RNA file types and coded test files for the I/O procedures.</li>
            <li>Documented tutorials and exercises on how to use the software.</li>
            <li>C++, SeqAn API</li>
          </ul>

          <h4>Skills And Interests</h4>
          <h6>Computing Skills</h6>
          <ul>
            <li>Well versed in Javascript, React, C, C++, Python, HTML, SQL and Bash.</li>
            <li>Has a moderate understanding of CSS, Django, ElasticSearch, Vue.js, jQuery, and ___.</li>
            <li>Is proficient in Adobe XD</li>
          </ul>
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

export default Resume;
