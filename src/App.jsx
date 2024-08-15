import React, { useState } from "react";
import '../src/App.css'
function DynamicForm() {
  const [forms, setForms] = useState([{ id: 1 }]);

  
  const handleAddForm = () => {
    setForms([...forms, { id: forms.length + 1 }]);
  };

 
  const handleRemoveForm = () => {
    if (forms.length > 1) {
      setForms(forms.slice(0, -1));
    }
  };

  return (
    <div className="box">
      {forms.map((form) => (
        <div className="forma" key={form.id}>
          <input type="text" placeholder="Input 1" />
          <input type="text" placeholder="Input 2" />
          <input type="text" placeholder="Input 3" />
        </div>
      ))}
      <button className="sub" onClick={handleAddForm}>Submit</button>
      <button className="remove" onClick={handleRemoveForm}>Remove</button>
    </div>
  );
}

export default DynamicForm;
