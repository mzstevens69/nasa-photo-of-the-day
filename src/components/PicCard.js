import React from 'react'


const PicCard = (props) => {
    
    return (
        <div className='nasa-pic'>
            <h1>Nasa's Photo of the day</h1>
          <h2>Title:  {props.title}</h2> 
          <img className='pic-card' alt='space picture' src={props.hdurl}/> 
            <div className='Bottom'>
                <p>Description:
                    {props.explanation}</p>
                

                
                
                
            
            </div>
        </div>
    );
}
export default PicCard









