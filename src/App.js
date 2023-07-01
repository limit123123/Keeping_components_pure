import "./styles.css";

function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup guest={4} />
      <Cup guest={5} />
      <Cup guest={6} />
    </>
  );
}
