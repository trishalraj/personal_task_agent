// Simulated Llama 3 intent parser
export function parseIntent(userInput) {
  // In real use: call Llama 3 API / local model
  if (userInput.toLowerCase().includes("remind")) {
    return {
      action: "CREATE_TASK",
      payload: {
        title: "Reminder Task",
        time: "2026-01-30T09:00:00",
        priority: "medium"
      }
    };
  }

  return {
    action: "UNKNOWN",
    payload: {}
  };
}
