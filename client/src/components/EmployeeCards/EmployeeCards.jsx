import React from 'react';
import { Link } from 'react-router-dom'
import './EmployeeCards.css'


function EmployeeCards(props) {
  // const [points, setPoints] = useState(0);
  
  // useEffect(() => {
  //   const handleSum = () => {
  //     const totalInfractions = props.employee?.infractions?.map((infraction) => {
  //       return infraction.points
  //     })
  //     const sum = totalInfractions?.reduce((sum, value) => sum + value)
  //     setPoints(sum)
  //   }
  //   handleSum();
  // }, [props.employee.infractions])
  
  return (
    <div className="employee-card">
    <Link className="employee-card-contents" to={`/employees/${props._id}`} style={{textDecoration: 'none', color: 'black'}}>
        <div className='card-content-mask'>
        <img className="card-content-image" src={props.imgURL} alt={`${props.firstName} ${props.lastName}`} />
        </div>
        <div className='card-content-name'>{props.firstName} {props.lastName}</div>
        <div className='card-content-position'>{props.position}</div>
        <div className='card-content-points'>{props.points} points</div>
    </Link>
  </div>
  );
}

export default EmployeeCards;