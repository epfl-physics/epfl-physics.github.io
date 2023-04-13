import './SectionHeader.css';

export default function SectionHeader(props) {
  return (
    <div className='section-header'>
      <h2>{props.title}</h2>
      <hr />
    </div>
  );
}
