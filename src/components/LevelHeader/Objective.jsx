import objIcon from '@root/assets/svgs/objective.svg';

export default function Objective({ text }) {
  return (
    <h2 id="objective">
      <img src={objIcon} height={40} />
      <span>objective: </span>
      {text}
    </h2>
  );
}
