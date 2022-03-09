import React from 'react'


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
    return ( <div>
      <h3>the generator will go here</h3>
    </div> );
  }
}
 
export default Generator;