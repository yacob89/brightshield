import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Segment,
  Card,
  Image,
  Label,
  List
} from "semantic-ui-react";
import ResponsiveContainer from "./ResponsiveContainer";

export default class HomepageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ResponsiveContainer>
        <Segment style={{ padding: "2em 2em", marginLeft: "0em" }} vertical>
          <Card fluid color="blue">
            <Image
              src="https://yacob-assets.s3.us-east-2.amazonaws.com/mapid.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>GEO MAPID</Card.Header>
              <Card.Meta>
                <Label
                  color="blue"
                  as="a"
                  href="https://geo.mapid.io/"
                  target="_blank"
                >
                  https://geo.mapid.io/
                </Label>
              </Card.Meta>
              <Card.Description>
                GEO MAPID is a web-based Geographic Information System platform
                that functioned to manage, integrate, and analyze real-time
                geospatial data.{" "}
                <Label
                  color="blue"
                  as="a"
                  href="https://mapid.io/geo"
                  target="_blank"
                >
                  https://mapid.io/geo
                </Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label color='brown'>Stacks used</Label>
              <List>
                <List.Item>React JS</List.Item>
                <List.Item>Node JS</List.Item>
                <List.Item>AWS Lambda</List.Item>
                <List.Item>AWS API Gateway</List.Item>
                <List.Item>MongoDB</List.Item>
                <List.Item>AWS Elastic Beanstalk</List.Item>
                <List.Item>HTML</List.Item>
                <List.Item>CSS</List.Item>
                <List.Item>REST API</List.Item>
              </List>
            </Card.Content>
          </Card>
          <Card fluid color="green">
            <Image
              src="https://yacob-assets.s3.us-east-2.amazonaws.com/majalah.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Majalah Jual Beli</Card.Header>
              <Card.Meta>
                <Label
                  color="blue"
                  as="a"
                  href="http://majalahjualbeli.com/"
                  target="_blank"
                >
                  http://majalahjualbeli.com/
                </Label>
              </Card.Meta>
              <Card.Description>
                Majalah Jual Beli adalah sebuah platform dimana para seller bisa
                memasarkan informasi mengenai berbagai macam barang atau jasa
                yang mereka jual seperti properti dan lain lain{" "}
                <Label
                  color="blue"
                  as="a"
                  href="http://majalahjualbeli.com/"
                  target="_blank"
                >
                  http://majalahjualbeli.com/
                </Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label color='brown'>Stacks used</Label>
              <List>
                <List.Item>HTML</List.Item>
                <List.Item>CSS</List.Item>
                <List.Item>Javascript</List.Item>
                <List.Item>Angular</List.Item>
              </List>
            </Card.Content>
          </Card>
          <Card fluid color="purple">
            <Image
              src="https://yacob-assets.s3.us-east-2.amazonaws.com/shuttersong.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Shuttersong iOS App</Card.Header>
              <Card.Meta>
                <Label
                  color="blue"
                  as="a"
                  href="http://www.shuttersong.com/"
                  target="_blank"
                >
                  http://www.shuttersong.com/
                </Label>
              </Card.Meta>
              <Card.Description>
                Simpler than video, richer than photos, Shuttersong® lets you
                effortlessly combine digital images with sound and share them
                everywhere. Use Shuttersong to photograph a moment in time and
                add its soundtrack by selecting a song clip from your music
                library or recording live voice or sound through your phone.
                Then, share your “Shuttersong“ with family, friends and
                colleagues through social networks, email, or text. Shuttersong
                also works with existing photos in your library and images from
                the web, so you can create infinite image + sound combinations.{" "}
                <Label
                  color="blue"
                  as="a"
                  href="https://apps.apple.com/us/app/shuttersong-personalize-share/id700873970"
                  target="_blank"
                >
                  Shuttersong at App Store
                </Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label color='brown'>Stacks used</Label>
              <List>
                <List.Item>XCode</List.Item>
                <List.Item>Objective-C</List.Item>
                <List.Item>REST API</List.Item>
              </List>
            </Card.Content>
          </Card>
          <Card fluid color="olive">
            <Card.Content>
              <Card.Header>Open Source Projects at Github</Card.Header>
              <Card.Meta>
                <Label
                  color="blue"
                  as="a"
                  href="https://github.com/yacob89"
                  target="_blank"
                >
                  Link to my Github page
                </Label>
              </Card.Meta>
              <Card.Description>
                I love to explore various open source projects. Sometimes I make
                simple ones myself to explore some projects idea.{" "}
                <Label
                  color="blue"
                  as="a"
                  href="https://github.com/yacob89"
                  target="_blank"
                >
                  yacob89's Github page
                </Label>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label color='brown'>Stacks used</Label>
              <List>
                <List.Item>Android</List.Item>
                <List.Item>React JS</List.Item>
                <List.Item>Javascript</List.Item>
              </List>
            </Card.Content>
          </Card>
        </Segment>

        <Segment inverted vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={13}>
                  <Header as="h4" inverted>
                    Copyright
                  </Header>
                  <p>2019 @yacob89. All rights reserved.</p>
                  <p>yacob.madiana@gmail.com</p>
                  <p>+62 813 2188 6593</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    );
  }
}
