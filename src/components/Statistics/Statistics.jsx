import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import { randomColor } from "./randomColor";

export const Statistics = ({ title, stats }) => (
    <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        
        <ul className={css.statList}>
            {stats.map(key => {
                return (
                    <li
                        className={css.item}
                        key={key.id}
                        style={{backgroundColor: randomColor()}}
                    >
                        <span className={css.label}>{key.label}</span>
                        <span className={css.percentage}>{key.percentage}%</span>
                    </li>
                );
            })}
        </ul>
    </section>
);

Statistics.propTypes = { 
    title: PropTypes.string,
    stats: PropTypes.array
}