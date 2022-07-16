import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreateCallBackRequest, CreateCallBackResponse } from "./createRequest.model";

@Injectable({
    providedIn: 'root'
})
export class RequestService {

    private baseUrl: string = 'https://localhost:7093/';
    private baseDevUrl: string = "https://l88679.azurewebsites.net/";

    constructor(
        private http: HttpClient
    ) {

    }

    public createRequest(createRequest: CreateCallBackRequest): Observable<CreateCallBackResponse> {
        const requestUrl = `${this.baseDevUrl}api/callbackrequest`;
        return this.http.post<CreateCallBackResponse>(requestUrl, createRequest);
    }
}