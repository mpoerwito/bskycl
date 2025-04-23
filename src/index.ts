import { AtpAgent } from '@atproto/api';
import * as dotenv from 'dotenv';

dotenv.config();

// Create a Bluesky Agent 
const agent = new AtpAgent({
    service: 'https://bsky.social',
  })

async function submitPost(thePost: string) {
    await agent.login({ identifier: process.env.BLUESKY_USERNAME!, password: process.env.BLUESKY_PASSWORD!})
    await agent.post({
        text: thePost
    });
    console.log("Check the app for this post.");
}

async function main() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.error("Please provide a post to submit.");
        process.exit(1);
    } else {
        //var post = Math.floor(Date.now() / 1000);
        await submitPost(args[0].toString());
        process.exit(0);
    }
}

main();
