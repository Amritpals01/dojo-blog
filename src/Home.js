import { useState } from 'react';

const Home = () => {
    //let name='Ammy'
    const [name , setName]=useState('Ammy');
    const [age , setAge]=useState(25);

    const handelClick=() =>{
       setName('KAHLON');
       setAge(30);
    }
    
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handelClick}>ClickMe</button>
            
        </div>
    );
}
 
export default Home;