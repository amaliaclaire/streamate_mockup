import React from 'react';
import {
  Menu,
  List,
  Segment
} from 'semantic-ui-react'

class FooterComponent extends React.Component {


  render() {

    return (
      <Segment inverted>
        <List bulleted horizontal>
          <List.Item as='a'>Privacy Policy</List.Item>
          <List.Item as='a'>DMCA Notice of Copyright Infringement</List.Item>
          <List.Item as='a'>18 U.S.C. 2257 Record-Keeping Requirements Compliance Statement</List.Item>
        </List>
      </Segment>

     )
   }
 };

export default FooterComponent;
