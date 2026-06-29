import { Controller, Get } from '@nestjs/common';
import { UsageService } from './usage.service';

@Controller('usage')
export class UsageController {
    constructor(private readonly usageService: UsageService) {}

    @Get()
    async getUsage() {
        return this.usageService.Getusage()
    }
}
