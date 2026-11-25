"use client";
import { useState } from "react";
import { calculateEMI, formatINR } from "@/lib/calculator";
import Link from "next/link";
export default function EMICalculator() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);
  const result = calculateEMI(amount, rate, years);
  const fields = [
    {
      id: "loan-amount",
      label: "Loan amount",
      value: amount,
      set: setAmount,
      min: 100000,
      max: 50000000,
      step: 100000,
      suffix: "₹",
      start: "₹1 lakh",
      end: "₹5 crore",
    },
    {
      id: "interest-rate",
      label: "Annual interest rate",
      value: rate,
      set: setRate,
      min: 0,
      max: 20,
      step: 0.1,
      suffix: "%",
      start: "0%",
      end: "20%",
    },
    {
      id: "loan-duration",
      label: "Loan duration",
      value: years,
      set: setYears,
      min: 1,
      max: 30,
      step: 1,
      suffix: "years",
      start: "1 year",
      end: "30 years",
    },
  ];
  return (
    <section id="calculator" className="calculator-section">
      <div className="container section">
        <div className="calculator-heading">
          <p className="eyebrow">PLAN WITH PERSPECTIVE</p>
          <h2>
            Your future.
            <br />
            <em>Within reach.</em>
          </h2>
          <p>
            Bring your plans into focus. Explore what your monthly home loan
            payments could look like.
          </p>
        </div>
        <div className="calculator-panel">
          <div className="calculator-inputs">
            {fields.map((f) => (
              <div className="range-field" key={f.id}>
                <div>
                  <label htmlFor={f.id}>{f.label}</label>
                  <div className="numeric-input">
                    <input
                      id={f.id}
                      type="number"
                      value={f.value}
                      min={f.min}
                      max={f.max}
                      step={f.step}
                      onChange={(e) => {
                        const n = Number(e.target.value);
                        f.set(
                          Number.isFinite(n)
                            ? Math.min(f.max, Math.max(0, n))
                            : f.min,
                        );
                      }}
                      onBlur={() => f.set(Math.max(f.min, f.value))}
                    />
                    <span>{f.suffix}</span>
                  </div>
                </div>
                <input
                  type="range"
                  aria-label={`${f.label} slider`}
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={f.value}
                  onChange={(e) => f.set(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, var(--green) ${Math.max(0, ((f.value - f.min) / (f.max - f.min)) * 100)}%, #dedfd5 0%)`,
                  }}
                />
                <div className="range-labels">
                  <span>{f.start}</span>
                  <span>{f.end}</span>
                </div>
              </div>
            ))}
          </div>
          <div
            className="calculator-result"
            aria-live="polite"
            aria-atomic="true"
          >
            <p>ESTIMATED MONTHLY EMI</p>
            <strong className="emi-amount">{formatINR(result.monthly)}</strong>
            <span>per month</span>
            <div className="repayment-bar" aria-hidden="true">
              <span
                style={{
                  width: `${result.total ? (amount / result.total) * 100 : 100}%`,
                }}
              />
            </div>
            <dl>
              <div>
                <dt>
                  <i />
                  Principal amount
                </dt>
                <dd>{formatINR(amount)}</dd>
              </div>
              <div>
                <dt>
                  <i />
                  Total interest
                </dt>
                <dd>{formatINR(result.interest)}</dd>
              </div>
              <div className="repayment-total">
                <dt>Total repayment</dt>
                <dd>{formatINR(result.total)}</dd>
              </div>
            </dl>
            <Link href="/contact" className="button button-green">
              Talk to an Advisor
            </Link>
          </div>
        </div>
        <p className="calculator-disclaimer">
          These calculations are indicative only and are not a loan approval or
          financial commitment.
        </p>
      </div>
    </section>
  );
}
