import React from 'react';
import {
  Container,
  Image
} from 'semantic-ui-react';

const FeaturesContainer = () => (
  <Container overlay className="feature-container">
    <Image
    className="feature-image"
    src='https://cdn.nsimg.net/cache/landing/sexy-tour/img/20180410/background.jpg'
    fluid
    />
    <p className="features-text">text over image</p>

  </Container>
)

export default FeaturesContainer;
