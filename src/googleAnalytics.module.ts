import { DynamicModule, Module } from '@nestjs/common';
import { GoogleAnalyticsOptions } from './options';
import { GoogleAnalyticsService } from './googleAnalytics.service';

@Module({})
export class GoogleAnalyticsModule {
    static forRoot(
        options: GoogleAnalyticsOptions,
    ): DynamicModule {
        return {
            providers: [GoogleAnalyticsService],
            exports: [GoogleAnalyticsService],
            module: GoogleAnalyticsModule,
        };
    }
}