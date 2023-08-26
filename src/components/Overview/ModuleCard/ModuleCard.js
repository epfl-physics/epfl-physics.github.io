import './ModuleCard.css';

export default function ModuleCard(props) {
  return (
    <div className='module-card'>
      <div className='module-card-title'>
        <div className='module-card-icon'>{props.icon}</div>
        <h3>{props.title}</h3>
      </div>
      <p>{props.description}</p>
    </div>
  );
}
