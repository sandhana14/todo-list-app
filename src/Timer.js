import React, { useState, useEffect } from "react";

function TimeUserOnWebsite() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div>
      <h3>You have used {count} seconds on this website</h3>
    </div>
  );
}

export default TimeUserOnWebsite;
