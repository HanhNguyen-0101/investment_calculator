export default function UserInput({onChange, userInput}) {

  return (
    <section id="user-input">
      <p className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            required
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            required
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </p>
      <p className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            required
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            required
            type="number"
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </p>
    </section>
  );
}
