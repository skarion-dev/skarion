/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCheckoutDto } from '../models/CreateCheckoutDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentsService {
    /**
     * Create checkout session
     * @param requestBody
     * @returns any Checkout session created
     * @throws ApiError
     */
    public static paymentsControllerCreateCheckout(
        requestBody: CreateCheckoutDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payments/checkout',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get course details
     * @returns any Course details retrieved
     * @throws ApiError
     */
    public static paymentsControllerGetCourse(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payments/course',
        });
    }
    /**
     * Get purchase details by session ID
     * @param sessionId
     * @returns any Purchase details retrieved
     * @throws ApiError
     */
    public static paymentsControllerGetPurchase(
        sessionId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payments/purchase/{sessionId}',
            path: {
                'sessionId': sessionId,
            },
        });
    }
}
