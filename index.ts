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
        text: "Never trouble trouble until trouble troubles you."
    });
    console.log("Check the app for this post.");
}

main();
