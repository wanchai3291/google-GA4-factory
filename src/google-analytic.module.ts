import { DynamicModule, Global, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GoogleAnalyticsService } from './google-analytics/google-analytic.service';

@Global()
@Module({})
export class GoogleAnalyticsModule {
  static forRoot(): DynamicModule {
    return {
      module: GoogleAnalyticsModule,
      imports: [HttpModule.register({})],
      providers: [GoogleAnalyticsService],
      exports: [GoogleAnalyticsService],
    };
  }
}
