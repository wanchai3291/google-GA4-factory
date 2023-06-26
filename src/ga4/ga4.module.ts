import { Module } from '@nestjs/common';
import { Ga4Service } from './ga4.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [Ga4Service]
})
export class Ga4Module {}
