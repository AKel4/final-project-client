import React from 'react'
import Badge from 'react-bootstrap/esm/Badge';

interface ChoreDeleteProps {
  
}
 
interface ChoreDeleteState {
  
}
 
class ChoreDelete extends React.Component<ChoreDeleteProps, ChoreDeleteState> {
  constructor(props: ChoreDeleteProps) {
    super(props);
    this.state = {   };
  }

  deleteChore = async () => {
    // console.log(this.state.postToUpdate.id)
        try {
          const res = await fetch(`http://localhost:4000/chore/`, {
            method: 'DELETE',
            headers: new Headers({
              'Content-Type': 'application/json',
              'Authorization': String(localStorage.getItem('token'))
            }),
          })
          const data = await res.json()
          console.log(data)
          
        } catch (error) {
          console.log({error})
        }
      }



  render() { 
    return ( <div>
      <Badge pill bg="danger" onClick={() => this.deleteChore()}>Delete</Badge>
    </div> );
  }
}
 
export default ChoreDelete;