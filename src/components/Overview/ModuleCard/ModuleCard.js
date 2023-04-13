import './ModuleCard.css';

export default function ModuleCard(props) {
  return (
    <div className='module-card-container'>
      <div className='module-card-icon'>{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}
