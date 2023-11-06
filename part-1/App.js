

const App = () => {
    return (
      <div>
        <FirstComponent />
        <NamedComponent name="Azriel" />
        <Tweet 
        username="Kai56"
        date="10-30-2023"
        name="Kai"
        message="I like Pokemon"/>
         <Tweet 
        username="Stu Raps"
        date="10-30-2023"
        name="Stu"
        message="Bam Bama"/>
         <Tweet 
        username="Naruto blue"
        date="10-30-2023"
        name="Naruto"
        message="candy rain"/>

        <Person 
        name="John"
        hobbies={["Training"]}
        age={117}
        />

        <Person 
        name="Ben"
        hobbies={["Fighting bad guys!!"]}
        age={10}
        />

        <Person 
        name="Snow"
        hobbies={["Reading"]}
        age={25}
        />

      

      </div>
      //add 3 copies of Person to the page
    );  
  }

  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
  