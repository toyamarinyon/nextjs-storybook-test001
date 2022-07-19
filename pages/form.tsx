import { useState } from "react";

export function Form() {
  const [email, setEmail] = useState("");
  const [showSubmitCompleteMessage, setShowSubmitCompleteMessage] =
    useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await new Promise((r) => setTimeout(() => r(true), 1000));
        setShowSubmitCompleteMessage(true);
      }}
      method="post"
    >
      {showSubmitCompleteMessage && <p>Submit!</p>}
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={email == ""}>
        Submit
      </button>
    </form>
  );
}

export default Form