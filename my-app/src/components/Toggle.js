import React from 'react'
import { Toggle } from 'react-toggle' 

class Toggle extends Component {

  initialState = {
    isChecked: false
  }



  render () {

    getValidationType = isChecked => (isChecked ? 'success' : 'error');
    getValidationMessage = isChecked =>
    isChecked ? 'Task Complete' : 'You must log task';
  }




}
    
        return (
          <div className="completedTasks">
           
           <Toggle checked={state.isChecked} onChange={event => setState({ isChecked: event.target.checked })}>
           <Label>Completed Tasks</Label>
        
           <Message validation={getValidationType(state.isChecked)}>
             {getValidationMessage(state.isChecked)}
           </Message>
         </Toggle>;
           />
          </div>
        );
    

  
  export default Toggle