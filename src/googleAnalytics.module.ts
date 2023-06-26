import { DynamicModule, Module } from "@nestjs/common";
import { GoogleAnalyticsOptions } from "./options";
import { GoogleAnalyticsService } from "./googleAnalytics.service";
import { HttpModule } from "@nestjs/axios";

@Module({})
export class GoogleAnalyticsModule {
  static forRoot(options: {}): DynamicModule {
    return {
      global: true,
      module: GoogleAnalyticsModule,
      imports:[HttpModule.register({})],
      providers: [],
      exports: [],
    };
  }
}
