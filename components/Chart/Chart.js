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
    <Card>
      <CardTitle>{title}</CardTitle>
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
        .percentages {
          margin-bottom: 1rem;
        }

        .percentage {
          height: 1.5rem;
          display: inline-block;
          position: relative;
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
          height: 0.8rem;
          width: 0.8rem;
          margin-right: 0.5rem;
          display: inline-block;
          border-radius: 50%;
        }
      `}</style>
    </Card>
  );
};
