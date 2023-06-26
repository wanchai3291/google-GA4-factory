import { DynamicModule, Module } from "@nestjs/common";
import { GoogleAnalyticsOptions } from "./options";
import { GoogleAnalyticsService } from "./googleAnalytics.service";
import { HttpModule } from "@nestjs/axios";

@Module({})
export class GoogleAnalyticsModule {
  static forRoot(options: GoogleAnalyticsOptions): DynamicModule {
    return {
      imports:[HttpModule.register({})],
      global: true,
      module: GoogleAnalyticsModule,
      providers: [],
      exports: [GoogleAnalyticsService],
    };
  }
}
