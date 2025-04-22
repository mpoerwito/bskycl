import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';

dotenv.config();

// Create a Bluesky Agent 
const agent = new AtpAgent({
    service: 'https://bsky.social',
  })


async function main() {
    await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})
    await agent.post({
        text: "🙂"
    });
    console.log("Bot activated!")
}

main();


// Run this on a cron job
// const scheduleExpressionMinute = '* * * * *'; // Run once every minute for testing
// const scheduleExpression = '0 */3 * * *'; // Run once every three hours in prod

// const job = new CronJob(scheduleExpression, main); // change to scheduleExpressionMinute for testing

// job.start();