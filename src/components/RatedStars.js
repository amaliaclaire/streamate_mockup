import React from 'react';
import {
  Grid,
  Image,
  Rating
} from 'semantic-ui-react';





const RatedStars = () => (
  <Grid columns={3} divided>
     <Grid.Row>
       <Grid.Column>
         <Image src='https://m2.nsimg.net/media/8/1/6/8164835.jpg' />
         <Rating icon="star" defaultRating={5} maxRating={5} size='massive' disabled />
       </Grid.Column>
       <Grid.Column>
         <Image src='https://m1.nsimg.net/media/8/8/5/8855240.png' />
         <Rating icon="star" defaultRating={5} maxRating={5} size='massive' disabled />

       </Grid.Column>
       <Grid.Column>
         <Image src='https://m2.nsimg.net/media/snap/53454745.jpg' />
         <Rating icon="star" defaultRating={5} maxRating={5} size='massive' disabled />

       </Grid.Column>
     </Grid.Row>
   </Grid>
)

export default RatedStars;
