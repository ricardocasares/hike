// external
import React from "react";

// internal
import { withTheme } from "../providers/Theme";

export default withTheme(({ title, data, theme }) => {
  const total = data.reduce((acc, point) => (acc = acc + point.value), 0);
  const percentages = data.map((d, idx) => ({
    ...d,
    value: (d.value / total * 100).toFixed(2),
    color: theme.chart.colors[idx]
  }));

  return (
    <div className="chart">
      <h4>{title}</h4>
      <div className="percentages">
        {percentages.map((p, idx) => (
          <div
            key={idx}
            className="percentage"
            style={{
              width: `${p.value}%`,
              background: p.color
            }}
          />
        ))}
      </div>
      <ul className="legend">
        {percentages.map((p, idx) => (
          <li className="label" key={idx}>
            <div className="color" style={{ background: p.color }} />
            {p.label}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .chart {
          padding: 2rem;
          border: .1rem solid ${theme.chart.border};
          border-radius: .3rem;
          width: 100%;
        }

        h4 {
          color: ${theme.chart.title};
          margin-top: 0;
          font-weight: 400;
          font-size: 1.4rem;
        }

        .percentages {
          margin-bottom: 1rem;
        }

        .percentage {
          height: 1.5rem;
          display: inline-block;
          position: relative;
        }

        .percentage:first-child {
          border-radius: .3rem 0 0 .3rem;
        }

        .percentage:last-child {
          border-radius: 0 .3rem .3rem 0;
        }

        .legend {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .label {
          margin-right: 1.5rem;
          margin-bottom: .5rem;
          font-size: 1.2rem;
        }

        @media (min-width: 600px) {
          .label {
            display: inline-block;
          }
        }

        .label:last-child {
          margin-bottom: 0;
        }

        .color {
          height: .8rem;
          width: .8rem;
          margin-right: .5rem;
          display: inline-block;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
});
