import { DynamicModule, Module } from "@nestjs/common";
import { GoogleAnalyticsOptions } from "./options";
import { GoogleAnalyticsService } from "./googleAnalytics.service";
import { HttpModule, HttpService } from "@nestjs/axios";

@Module({})
export class GoogleAnalyticsModule {
  static forRoot(options: {}): DynamicModule {
    return {
      global: true,
      module: GoogleAnalyticsModule,
      imports:[HttpModule.register({})],
      providers: [HttpService],
      exports: [HttpService],
    };
  }
}
