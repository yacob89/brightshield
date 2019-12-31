import PropTypes from "prop-types";
import React, { Component } from "react";
import { Container, Header, Label } from "semantic-ui-react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);

export default class HomepageHeading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { mobile } = this.props;

    return (
      <Container text textAlign="left">
        <div>
          <Header
            as="h1"
            content="Hi, I'm Yacob Madiana"
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "2em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: mobile ? "1.5em" : "3em"
            }}
          />
          <Header
            as="h2"
            content="Full Stack Web Developer"
            inverted
            style={{
              fontSize: mobile ? "1.5em" : "1.7em",
              fontWeight: "normal",
              marginTop: mobile ? "0.5em" : "1.5em"
            }}
          />
          <Container text>
            <p>
              Application Developer in a wide variety of business & social
              applications. Particularly interested in application development
              using modern javascript technologies (React, node JS). Always
              interested in mobile and web application development projects. I
              also able to deliver serverless solution to your cloud
              infrastructure using AWS products to reduce production costs in
              Software Development Projects.
            </p>
            <p>
              <br/>I am comfortable with:
              <br/><Label color="green">Programming Languages</Label> Javascript, Java
              <br/><Label color="teal">Web Technologies</Label> Node JS, React JS, REST API
              <br/><Label color="blue">Databases</Label> mongoDB, DynamoDB.
              <br/><Label color="violet">Operating System</Label> MacOS, Debian/Arch based Linux Distros.
              <br/><Label color="grey">Revision Control</Label> Git
              <br/><Label color="brown">CI/CD</Label> Travis, Gitlab
              <br/>
                Familiar with following <Label color="orange">AWS Technologies</Label> EC2, Elastic Beanstalk,
                Lambda, API Gateway, DynamoDB, S3.
              <br/> I also write markdown documentations, make it easy for other devs to understand what I'm doing.
              
              <br/>My Github page: https://github.com/yacob89 
            </p>
          </Container>
        </div>
      </Container>
    );
  }
}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};
