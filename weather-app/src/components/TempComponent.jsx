import React from 'react';

export const Temp = ({ forecasts }) => {
    forecasts.map((forecast) => (
        <div>
        <p className="temp">
            <b>74°/</b> 86°
        </p>
    </div>

    ))
};