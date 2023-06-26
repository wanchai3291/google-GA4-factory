import { DynamicModule, Module } from "@nestjs/common";
// import { GoogleAnalyticsOptions } from "./options";
// import { GoogleAnalyticsService } from "./googleAnalytics.service";
import { HttpModule, HttpService } from "@nestjs/axios";


@Module({})
export class GoogleAnalyticsModule {
  static forRoot(options: {}): DynamicModule {
    return {
      module: GoogleAnalyticsModule,
      imports:[HttpModule],
      providers: [],
      exports: [],
    };
  }
}
