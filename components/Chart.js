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
          padding: 20px;
          border: 1px solid ${theme.chart.border};
          border-radius: 3px;
          width: 100%;
        }

        h4 {
          color: ${theme.chart.title};
          margin-top: 0;
          font-weight: 400;
          font-size: 1.4rem;
        }

        .percentages {
          margin-bottom: 10px;
        }

        .percentage {
          height: 15px;
          display: inline-block;
          position: relative;
        }

        .percentage:first-child {
          border-radius: 3px 0 0 3px;
        }

        .percentage:last-child {
          border-radius: 0 3px 3px 0;
        }

        .legend {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .label {
          margin-right: 15px;
          margin-bottom: 5px;
          font-size: 1.2rem;
        }

        @media (min-width: 900px) {
          .legend {
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
          }
          .label {
            display: inline-block;
          }
        }

        .label:last-child {
          margin-bottom: 0;
        }

        .color {
          height: 8px;
          width: 8px;
          margin-right: 5px;
          display: inline-block;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
});
