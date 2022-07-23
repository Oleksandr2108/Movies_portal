import React from "react";
import prepareDate from "utils/prepareDate";


interface IDateViewParams {
    value: string;
}

const DataView: React.FC<IDateViewParams> = ({ value }) => {

    const { year } = prepareDate(value)
    return (
        <span className="year">{year}</span>
    )
}

export default DataView