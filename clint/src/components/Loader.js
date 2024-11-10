import React, { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function Loader() {
  const [loading] = useState(true); // Assuming it’s always loading when this component is rendered

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="sweet-loading">
        <HashLoader
          color='#3498db'  // Set color to a shade of blue
          loading={loading}
          size={80}
        />
      </div>
    </div>
  );
}

export default Loader;
