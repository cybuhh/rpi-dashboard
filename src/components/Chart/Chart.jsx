import React, { useEffect, useRef, useState, memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import Chartjs from 'chart.js';

import styles from './Chart.scss';

const css = classnames.bind(styles);

function Chart({ type, dataProvider, dataFetchInterval }) {
    const ref = useRef();
    const [chart, setChart] = useState();

    const data = {
        labels: ['Used', 'Free'],
        datasets: [{
            data: [],
            label: '# of Votes',
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

    function refreshData() {
        if (chart) {
            chart.data.datasets[0].data = dataProvider();
            chart.update();
            setTimeout(() => refreshData(), dataFetchInterval);
        }
    }

    useEffect(() => {
        if (!chart) {
            setChart(new Chartjs(ref.current, {
                data,
                type,
            }));
        }
    });

    useEffect(() => {
        refreshData();
    });

    return (
        <canvas ref={ref} className={css('chart')} />
    );
}

Chart.propTypes = {
    type: PropTypes.string.isRequired,
    dataProvider: PropTypes.func.isRequired,
    dataFetchInterval: PropTypes.number.isRequired,
}

export default memo(Chart);
