import { DynamicModule, Global, Module, Provider, Type } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

@Global()
@Module({})
export class GoogleAnalyticsModule {
  static forRoot(options: {}): DynamicModule {
    return {
      module: GoogleAnalyticsModule,
      imports:[HttpModule.register({})],
      providers: [],
      exports: [],
    };
  }
}
