import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GoogleAnalyticsService {
  constructor(private readonly httpService: HttpService) {}
  async test() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const requestConfig: AxiosRequestConfig = {
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
      params: {},
    };
    const result = await firstValueFrom(
      this.httpService.request(requestConfig),
    );
    return result.data;
  }
}
