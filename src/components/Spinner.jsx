import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { useState } from 'react';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

function Spinner() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  return (
    <>
    <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  )
}

export default Spinner