function Card({ val, idx , getData}) {
    return (
      <div>
        <h1>{val} {idx}</h1>
        <button onClick={() => getData("Abdul Haseeb")}>Send Data Please!</button>
      </div>
    );
}

export default Card;