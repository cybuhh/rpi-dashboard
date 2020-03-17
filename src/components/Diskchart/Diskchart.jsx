import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Chart from 'components/Chart/Chart';

import styles from './Diskchart.scss';

const css = classnames.bind(styles);

function Diskchart({ title, className }) {
    const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));

    function getData () {
        const data = [getRandom(33), getRandom(33)];
        const free = data.reduce((acc, cur) => acc-cur, 100);
        return [...data, free];
    }

    return (
        <div className={css('chart', className)}>
            {title}
            <Chart dataProvider={getData} dataFetchInterval={5000} type="pie" />
        </div>
    );
}

Diskchart.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
}

Diskchart.defaultProps = {
    className: ""
};

export default memo(Diskchart);
