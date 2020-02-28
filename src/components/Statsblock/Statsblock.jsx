import React from 'react';
import PropTypes from 'prop-types';

function Statsblock({ title }) {
    return (
        <div>{title}</div>
    );
}

Statsblock.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Statsblock;
