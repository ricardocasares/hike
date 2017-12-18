// external
import React from "react";

// internal
import { Card, CardTitle } from "../Card";

export default ({ title, data, theme }) => {
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
        h4 {
          color: ${theme.chart.title};
          font-size: 2rem;
          font-weight: 600;
        }

        .percentages {
          margin-bottom: 1rem;
        }

        .percentage {
          height: 1.5rem;
          display: inline-block;
        }

        .percentage:first-child {
          border-radius: 0.3rem 0 0 0.3rem;
        }

        .percentage:last-child {
          border-radius: 0 0.3rem 0.3rem 0;
        }

        .legend {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .label {
          margin-right: 1.5rem;
          margin-bottom: 0.5rem;
          font-size: 1.6rem;
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
          height: 0.8rem;
          width: 0.8rem;
          margin-right: 0.5rem;
          display: inline-block;
          position: relative;
          bottom: 2px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};
