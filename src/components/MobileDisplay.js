import React from 'react';
import {
  Container,
  Grid,
  Image,
  Button
} from 'semantic-ui-react'

const MobileDisplay = () => (
  <Container>
    <Grid divided='vertically'>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Image src='https://cdn.nsimg.net/cache/landing/sexy-tour/img/20190328/cam-2-cam-02.png'
          floated="left"
           />
        </Grid.Column>
        <Grid.Column>
        <p>Mobile Chat Connect with Friends</p>
        <Button size="large" floated="right">Get Started Now</Button>

        </Grid.Column>

      </Grid.Row>
    </Grid>

    </Container>
)

export default MobileDisplay;
