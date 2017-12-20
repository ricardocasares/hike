// external
import React from "react";

// internal
import { Card, CardTitle } from "../Card";

export default ({ title, subtitle, data, theme }) => {
  const total = data.reduce((acc, point) => (acc = acc + point.value), 0);
  const percentages = data.map((d, idx) => ({
    ...d,
    value: (d.value / total * 100).toFixed(4),
    color: theme.chart.colors[idx]
  }));

  return (
    <div className="chart">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
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
          font-size: 1.4rem;
          font-weight: 300;
          margin: 0;
          margin-bottom: 0.5rem;
        }

        h5 {
          margin: 0;
          margin-bottom: 1rem;
          font-weight: 300;
          color: ${theme.chart.subtitle};
        }

        .percentages {
          margin-bottom: 1rem;
        }

        .percentage {
          height: 1rem;
          display: inline-block;
        }

        .percentage:first-child {
          border-radius: 1rem 0 0 1rem;
        }

        .percentage:last-child {
          border-radius: 0 1rem 1rem 0;
        }

        .legend {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .label {
          margin-bottom: 1rem;
          font-size: 1.2rem;
          font-weight: 300;
        }

        .label:last-child {
          margin-bottom: 0;
        }

        .color {
          height: 0.8rem;
          width: 0.8rem;
          margin-right: 1rem;
          display: inline-block;
          position: relative;
          bottom: 1px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};
