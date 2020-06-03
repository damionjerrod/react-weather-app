import React from 'react';

class Temp extends React.Component {

    render(){
        return(
                <div>
                    <p className="temp">
                        <b>{ Math.round(this.props.dayTemp) }°</b>
                    </p>
                </div>
        )
    }
};

export default Temp;