import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis();

export const taskQueue = new Queue("task-queue", {
  connection,
});
