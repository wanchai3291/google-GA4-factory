import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleAnalyticsService {

    constructor() {}

    generate(): number {
        console.log(1);
        
        return 1
    }
}