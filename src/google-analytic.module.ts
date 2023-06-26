import { DynamicModule, Global, Module, Provider, Type } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { GoogleAnalyticsService } from "./google-analytic/google-analytic.service";

@Global()
@Module({})
export class GoogleAnalyticsModule {
  static forRoot(options: {}): DynamicModule {
    return {
      module: GoogleAnalyticsModule,
      imports:[HttpModule.register({})],
      providers: [GoogleAnalyticsService],
      exports: [GoogleAnalyticsService],
    };
  }
}
