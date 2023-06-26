import { DynamicModule, Module } from "@nestjs/common";
import { GoogleAnalyticsOptions } from "./options";
import { GoogleAnalyticsService } from "./googleAnalytics.service";
import { HttpModule, HttpService } from "@nestjs/axios";
import { Ga4Module } from './ga4/ga4.module';

@Module({})
export class GoogleAnalyticsModule {
  static forRoot(options: {}): DynamicModule {
    return {
      module: GoogleAnalyticsModule,
      imports:[HttpModule.register({}),Ga4Module],
      providers: [HttpService],
      exports: [HttpService],
    };
  }
}
