import React from 'react';
import './index.css';
import ScaleLoader from "react-spinners/ScaleLoader";
import { css } from "@emotion/react";

const Spinner = React.memo(({ loading }) => {
    if (loading) {
        return <div className="spinner-content">
            <ScaleLoader color={"#36d7b7"} loading={loading} height={150} width={20} radius={8} margin={4}/>
        </div>
    } else {
        return null;
    }
})

export default Spinner;