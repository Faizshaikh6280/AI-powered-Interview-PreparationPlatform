import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import React from "react";

async function InterviewPage() {
  const user = await getCurrentUser();
  if (!user) return redirect("/");
  return (
    <>
      <h1>Interview Generation</h1>
      <Agent userName={user.name} userId={user?.id} type="generate" />
    </>
  );
}

export default InterviewPage;
