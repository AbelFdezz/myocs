import { useState } from "react";

const Child = () => {
  const [loading, setLoading] = useState(true);
  const [numbers, setNumbers] = useState(["uno", "dos", "tres", "cuatro"]);

  const content = () => {
    return (
      <div>
        {numbers.map((orden, i) => {
          return <p key={i}>mira, sé contar, {orden}.</p>;
        })}
      </div>
    );
  };
  const loader = () => {
    return (
      <>
        <p>loading...</p>
        <button onClick={() => setLoading(false)}>Cambio de estado</button>
      </>
    );
  };
  return <>{loading ? loader() : content()}</>;
};
export default Child;
