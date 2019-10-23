/**
 * Sismoura.Web.View
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { SiSMouraCoreEntityCliente } from '../model/siSMouraCoreEntityCliente';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ClienteService {

    protected basePath = 'http://localhost:38306';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public clienteGetBI(observe?: 'body', reportProgress?: boolean): Observable<Array<{ [key: string]: any; }>>;
    public clienteGetBI(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<{ [key: string]: any; }>>>;
    public clienteGetBI(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<{ [key: string]: any; }>>>;
    public clienteGetBI(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<{ [key: string]: any; }>>(`${this.basePath}/api/Cliente/GetBI`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public clienteGetCliente(id: number, observe?: 'body', reportProgress?: boolean): Observable<SiSMouraCoreEntityCliente>;
    public clienteGetCliente(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SiSMouraCoreEntityCliente>>;
    public clienteGetCliente(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SiSMouraCoreEntityCliente>>;
    public clienteGetCliente(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling clienteGetCliente.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<SiSMouraCoreEntityCliente>(`${this.basePath}/api/Cliente/GetCliente/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public clienteGetTodos(observe?: 'body', reportProgress?: boolean): Observable<Array<SiSMouraCoreEntityCliente>>;
    public clienteGetTodos(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<SiSMouraCoreEntityCliente>>>;
    public clienteGetTodos(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<SiSMouraCoreEntityCliente>>>;
    public clienteGetTodos(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json',
            'text/json',
            'application/xml',
            'text/xml'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<SiSMouraCoreEntityCliente>>(`${this.basePath}/api/Cliente/GetTodos`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
