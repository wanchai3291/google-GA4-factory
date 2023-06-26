import { DynamicModule, Global, Module, Provider, Type } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { CustomAxiosService } from "./ga4/customAxiosService";

@Global()
@Module({})
export class GoogleAnalyticsModule {
  static forRoot(options: {}): DynamicModule {
    return {
      module: GoogleAnalyticsModule,
      imports:[HttpModule.register({})],
      providers: [CustomAxiosService],
      exports: [CustomAxiosService],
    };
  }
}
