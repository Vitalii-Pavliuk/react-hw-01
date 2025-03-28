import PropTypes from 'prop-types';

import style from './Statistics.module.css';

export const Statistics = ({ title, stats}) => {
    return (
        <section className={style.statistics}>
        <h2 className={style.title}>{title}</h2>
      
        <ul className={style.statList}>
        {stats.map(stat => (
          <li className={style.item}
          key={stat.id}
          style={{ backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` }}>

            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
        </ul>
      </section>
   );
};

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
