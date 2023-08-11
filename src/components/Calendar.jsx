import React, {Fragment, useState} from 'react';
import moment from 'moment';
import styles from './calendar.module.css'
import DayCell from './DayCell';

const Calendar = () => {
  const defValue = {
    days: moment().daysInMonth(),
    month: moment().format('MMMM'),
    days2: []
  }  
  for (let i = 1; i <= defValue.days; i++){
    defValue.days2.push(i)
  }
  const [data, setData] = useState(defValue)  
  
  console.log(data)

  const monthHundler = (event) => {
    const data = {
      days: moment(`2023-${Number(event.target.value)}`).daysInMonth(),
      month: moment(`2023-${Number(event.target.value)}`).format('MMMM'),
      days2: []
    }
    for (let i = 1; i <= data.days; i++){
      data.days2.push(i)
    }
    setData(data)
  }
  return (
    <Fragment>
      <select value={data.month} onChange={monthHundler}>
        <option value="">Выберите месяц</option>
        <option value='7'>Июль</option>
        <option value='8'>Август</option>
        <option value='9'>Сентябрь</option>
        <option value='10'>Октябрь</option>  
      </select>
      <h2>{data.month}</h2>
      <div className={styles.container}>        
        <div className={styles.calBody}>        
          
        </div>          
      </div> 
    </Fragment>
  );
};

export default Calendar;