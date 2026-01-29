import { Worker } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis();

new Worker(
  "task-queue",
  async job => {
    const { title, time } = job.data;

    console.log(`🔔 Reminder Triggered: ${title} at ${time}`);
    // email / notification logic here
  },
  { connection }
);
