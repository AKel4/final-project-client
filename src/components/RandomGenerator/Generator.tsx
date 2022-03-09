import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';


interface GeneratorProps {
  
}
 
interface GeneratorState {
  
}
 
class Generator extends React.Component<GeneratorProps, GeneratorState> {
  constructor(props: GeneratorProps) {
    super(props);
    this.state = {   };
  }


  
  render() { 
    return ( 
    <div>
      <h3>the generator will go here</h3>

      <h3>will need to map this button to contain data from chore.time</h3>
      <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Choose your time limit"
        className="mt-2"
        >
        <Dropdown.Item > this is the element that will be mapped into with chore.time </Dropdown.Item>
      </DropdownButton>

      <h3>will need to map this button to contain data from chore.time</h3>
        <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        menuVariant="dark"
        title="Choose a room"
        className="mt-2"
        >
        <Dropdown.Item > this is the element that will be mapped into with room.room </Dropdown.Item>
      </DropdownButton>

      <div style={{justifyContent: 'center', paddingLeft: '25vw', paddingTop: '10vh', }}>
      <Button style={{width: '45vw'}} size='lg' variant="info">Generate A Chore</Button>
      </div>
    </div> );
  }
}
 
export default Generator;