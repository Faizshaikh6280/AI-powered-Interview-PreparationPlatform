import Agent from "@/components/Agent";
import React from "react";

function InterviewPage() {
  return (
    <>
      <h1>Interview Generation</h1>
      <Agent userName="you" userId="user1" type="generate" />
    </>
  );
}

export default InterviewPage;
