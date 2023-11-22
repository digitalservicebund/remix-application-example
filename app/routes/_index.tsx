import type { MetaFunction } from "@remix-run/node";
import { requestFeedback } from "~/feedback/nationale-feedback-komponente.client";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Application Template" },
    { name: "description", content: "Hello DigitalService!" },
  ];
};

export default function Index() {
  return (
    <main className={"flex flex-col items-center m-40"}>
      <h1 className={"ds-heading-01-reg mb-40"}>Hello DigitalService!</h1>
      <button
        className="ds-button ds-button-large"
        onClick={() => requestFeedback()}
      >
        <span className="ds-button-label">Click me for nothing</span>
      </button>
    </main>
  );
}
