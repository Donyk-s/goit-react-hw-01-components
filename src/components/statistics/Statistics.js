import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// функція рандомогоо кольру
export const StatisticsComponent = ({ title, stats }) => (
  <section className="statistics">
    <h2 className={css.title}>{title}</h2>

    <ul className={css.stat_list}>
      {stats.map(stat => (
        <li
          className={css.item}
          key={stat.id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

StatisticsComponent.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default StatisticsComponent;
