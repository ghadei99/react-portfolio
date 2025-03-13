import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skilled in using top industry tools such as Selenium, Cypress, RestAssured and Playwright, enabling me to create and maintain automated tests that improve software quality and speed up the development cycle.
                        <br></br>
                        <br></br> Proficient in Java,JavaScript and Python, which allows me to write effective and efficient test scripts tailored to specific testing needs.
                        <br></br>
                        <br></br>Insurance Domain Testing at EPAM Systems: Developed and refined automation frameworks using Cypress with TypeScript and Rest Assured with Java, contributing to a 25% reduction in regression testing time.
                        <br></br>
                        <br></br>E-commerce Platform Enhancement: Implemented a comprehensive automation strategy for a high-traffic e-commerce platform, resulting in a 40% improvement in testing efficiency and a significant reduction in post-release defects.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Selenium</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>RestAssured</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Cypress</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Playwright</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Karate DSL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Pytest</h5>
                            </div>

                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Jenkins</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
