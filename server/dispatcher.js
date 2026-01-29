import { taskQueue } from "./queue.js";

export async function dispatchAction(actionSchema) {
  if (actionSchema.action === "CREATE_TASK") {
    await taskQueue.add("reminder", actionSchema.payload);
    return { status: "Task scheduled" };
  }

  return { status: "No action taken" };
}
