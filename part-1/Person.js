let Person = ({ hobbies, name, age }) => {
    let info;
    
    if (age >= 18) {
      info = <h3>Please go vote</h3>;
    } else {
      info = <h3>You must be 18</h3>;
    }
  
    return (
      <div>
        <p>Learn some information about this person</p>
        <h3>{name.slice(0, 6)}</h3>
        <h3>{age}</h3>
        {info}
        <h3>Hobbies:</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };
  
// which should say  “Learn some information about this person”
                // if person > 18 return "Please go vote" inside <h3>
                // else  h3 that says “you must be 18”
                //if person name < 8 characters display first 6 letters of name

                // add hobbbies to person that accepts and array of strings
                //person component should list the hobbies in an li