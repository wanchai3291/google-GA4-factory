import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosRequestConfig } from "axios";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CustomAxiosService {
    constructor(
        private readonly httpService: HttpService,
    ) {
    }
}
