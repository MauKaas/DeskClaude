import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsageService {
    constructor(private readonly configService: ConfigService) {}

    async Getusage() {
        const response = await axios.post("https://api.anthropic.com/v1/messages", {
            model: 'claude-haiku-4-5',
            max_tokens: 1,
            messages: [{ role: 'user', content: 'hi' }]
        },
            {
                headers: {
                'Authorization': `Bearer ${this.configService.get("CLAUDE_BEARER_TOKEN")}`,
                'anthropic-version': '2023-06-01',
                'Content-Type': 'application/json',
                }
            }
        )

        const headers = response.headers

        return {
            usage5h: headers['anthropic-ratelimit-unified-5h-utilization'],
            usage7d: headers['anthropic-ratelimit-unified-7d-utilization']
        }
    }
}
