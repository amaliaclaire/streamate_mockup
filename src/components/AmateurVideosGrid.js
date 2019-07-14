import React from 'react';
import {
  Grid,
  Image
} from 'semantic-ui-react';



const AmateurVideosGrid = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://cdn.nsimg.net/cache/landing/sexy-tour/img/20180410/1.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://cdn.nsimg.net/cache/landing/sexy-tour/img/20180410/2.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://cdn.nsimg.net/cache/landing/sexy-tour/img/20180410/3.jpg' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='https://cdn.nsimg.net/cache/landing/sexy-tour/img/20180410/5.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://cdn.nsimg.net/cache/landing/sexy-tour/img/20180410/6.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='https://cdn.nsimg.net/cache/landing/minisite/img/02132018/Uma-index.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default AmateurVideosGrid;
