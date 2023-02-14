import React,{useEffect,useState} from 'react'
import './covid.css'
const Covid = () => {
  const [data,setData]=useState([]);

    const getCovidData=async ()=>{
        try{
        const res=await fetch('https://data.covid19india.org/data.json');
        const actualData =await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
    getCovidData();
    },[])
    
  return (
    <>
    <section>
    <h1>LIVE</h1>
    <h2>COVID-19 INDIA'S CORONA VIRUS TRACKER</h2>
    <ul>
      <li className="card card1">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name">
              <span className='a'n>OUR</span>COUNTRY
            </p>
            <p className='crad__total card__small'>INDIA</p>
          </div>
        </div>
      </li>
      <li className="card card2">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name">
              <span className='a'>TOTAL</span>RECOVERED
            </p>
            <p className='crad__total card__small'>{data.recovered}</p>
          </div>
        </div>
      </li>
      <li className="card card3">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name">
              <span className='a'>TOTAL</span>CONFIRMED
            </p>
            <p className='crad__total card__small'>{data.confirmed}</p>
          </div>
        </div>
      </li>
      <li className="card card4">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name">
              <span className='a'>TOTAL</span>DEATH
            </p>
            <p className='crad__total card__small'>{data.deaths}</p>
          </div>
        </div>
      </li>
      <li className="card card5">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name">
              <span className='a'>TOTAL</span>ACTIVE
            </p>
            <p className='crad__total card__small'>{data.active}</p>
          </div>
        </div>
      </li>
      <li className="card card6">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name">
              <span className='a'>LAST</span>UPDATED
            </p>
            <p className='crad__total card__small'>{data.lastupdatedtime}</p>
          </div>
        </div>
      </li>
    </ul>
    </section>
    </>
  )
}
export default Covid
