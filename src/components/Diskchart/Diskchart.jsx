import React, { useEffect, useRef, useState, memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Chart from 'chart.js';

import styles from './Diskchart.scss';

const css = classnames.bind(styles);

function Diskchart({ title, className }) {
    const ref = useRef();
    const [chart, setChart] = useState();

    const data = {
        labels: ['Used', 'Free'],
        datasets: [{
            label: '# of Votes',
            data: [70, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    useEffect(() => {
        if (!chart) {
            setChart(new Chart(ref.current, {
                data,
                type: 'pie',
            }));
        }
    });

    return (
        <div className={className}>
            {title}
            <canvas ref={ref} className={css('chart')} />
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
