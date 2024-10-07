// Loader.tsx
import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <img src="/src/assets/ic.gif" alt="Loading..." />
    </div>
  );
};

export default Loader;