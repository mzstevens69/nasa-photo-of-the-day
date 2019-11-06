import React from 'react'
const [nasaPic, setNasaPic] = useState([])
const PicCard = ({title, explaination, hdurl}) => {

    return (
        <div className='nasa-pic'>
            <img className='picOfDay' alt="pic o day" src={hdurl}/>

            <div className='entry'>
                {nasaPic.map((pic, index)}
            <h2>title</h2>
            </div>


        </div>
    );
}
export default PicCard









