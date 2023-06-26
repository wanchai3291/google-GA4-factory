import { DynamicModule, Module } from "@nestjs/common";
import { GoogleAnalyticsOptions } from "./options";
import { GoogleAnalyticsService } from "./googleAnalytics.service";
import { HttpModule } from "@nestjs/axios";

@Module({})
export class GoogleAnalyticsModule {
  static forRoot(): DynamicModule {
    return {
      imports:[],
      global: true,
      module: GoogleAnalyticsModule,
      providers: [],
      exports: [GoogleAnalyticsService],
    };
  }
}
