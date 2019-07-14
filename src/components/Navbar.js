import React from 'react';
import {
  Menu,
  Image,
  Button
} from 'semantic-ui-react'

class Navbar extends React.Component {
  state = { activeItem: 'home' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   render() {
     const { activeItem } = this.state

     return (
       <Menu inverted>
        <Menu.Item>
          <Image className="streamate-logo" src="https://m1.nsimg.net/2.0/skin/sm/images/20160120/logo.png" />
        </Menu.Item>

         <Menu.Menu position='right'>
           <Menu.Item>
             <Button primary>Create Free Account</Button>
           </Menu.Item>
           <Menu.Item>
            Login
           </Menu.Item>
         </Menu.Menu>
       </Menu>
     )
   }
 }; 

export default Navbar;
