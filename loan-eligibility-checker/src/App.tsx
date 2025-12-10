import React, { useState } from 'react';

type Step = "landing" | "input" | "results";

function App() {
  const [step, setStep] = useState<Step>("landing");

  return (
    <div style={{ minHeight: "100vh",  padding: "1.5rem", background: "#f3f4f6" }}>
      <div style={{ maxWidth: 900, margin: "0 autio" }}>
        <h1> Quick Loan Eligibility Checker</h1>
        <p>
          A simple guide to see what you may be able to borrow
        </p>

        {step === "landing" && (
          <Landing onStart={() => setStep("input")} />
        )}

        {step === "input" && (
          <InputForm onBack={() => setStep("landing")} onComplete={() => setStep("results")} />
        )}

        {step === "results" && (
          <Results onRestart={() => setStep("landing")} />
        )}
      </div>
    </div>
    );
}

export default App;

type LandingProps = {
  onStart: () => void;
};

function Landing({ onStart }: LandingProps) {
  return (
    <div>
      <h2>Get instant clarity</h2>
      <p>We will ask a few simple questions about your income and goals.</p>
      <button onClick={onStart}>Start your check</button>
    </div>
  );
}

type InputFormProps = {
  onBack: () => void;
  onComplete: () => void;
};

function InputForm({ onBack, onComplete }: InputFormProps) {
  //Income
  const [incomeSelf, setIncomeSelf] = useState("");
  const [incomePartner, setIncomePartner] = useState("");
  const [incomeFrequency, setIncomeFrequency] = useState<"weekly" | "fortnightly" | "monthly" | "yearly">("yearly");

  //Debts
  const [cardLimits, setCardLimits] = useState("");
  const [carLoanRepay, setCarLoanRepay] = useState("");
  const [studentLoanRepay, setStudentLoanRepay] = useState<"yes" | "no">("no");

  //Expenses
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [dependents, seetDependents] = useState("0");

  //Property
  const [deposit, setDeposit] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // We will add calculation here
    onComplete();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tell us about your situation</h2>

      {/* Income Section */}
      <section>
        <h3>Income</h3>
        <div>
          <label>Your income</label>
          <input
            type="number"
            value={incomeSelf}
            onChange={(e) => setIncomeSelf(e.target.value)}
          />
        </div>
        <div>
          <label>Partner's income</label>
          <input
            type="number"
            value={incomePartner}
            onChange={(e) => setIncomePartner(e.target.value)}
          />
        </div>
        <div>
          <label>Income frequency</label>
          <select
            value={incomeFrequency}
            onChange={(e) => setIncomeFrequency(e.target.value as any)}
          >
            <option value="weekly">Weekly</option>
            <option value="fortnightly">Fortnightly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </section>

      {/* Debts Section */}
      <section>
        <h3>Debts</h3>
        <div>
          <label>Total credit card limits</label>
          <input
            type="number"
            value={cardLimits}
            onChange={(e) => setCardLimits(e.target.value)}
          />
        </div>
        <div>
          <label>Car or personal repayments (monthly)</label>
          <input
            type="number"
            value={carLoanRepay}
            onChange={(e) => setCarLoanRepay(e.target.value)}
          />
        </div>
        <div>
          <label>Do you have a student loan?</label>
          <select
            value={studentLoanRepay}
            onChange={(e) => setStudentLoanRepay(e.target.value as any)}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </section>

      {/* Expenses Section */}
      <section>
        <h3>Expenses</h3>
        <div>
          <label>Monthly living expenses</label>
          <input
            type="number"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
          />
        </div>
        <div>
          <label>Number of dependents</label>
          <input
            type="number"
            value={dependents}
            onChange={(e) => seetDependents(e.target.value)}
          />
        </div>
      </section>

      {/* Property Section */}
      <section>
        <h3>Property</h3>
        <div>
          <label>Deposit amount</label>
          <input
            type="number"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </div>
        <div>
          <label>Purchase price</label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </div>
      </section>

      <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="submit">
          Check Eligibility
          </button>
      </div>
    </form>
  
  )

}
type ResultsProps = {
  onRestart: () => void;
};

function Results({ onRestart }: ResultsProps) {
  return (
    <div>
      <h2>Your indicative results</h2>
      <p>Results will go here</p>
      <button onClick={onRestart}>Start over</button>
    </div>
  );
}