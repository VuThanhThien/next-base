/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserEntity {
  id: string
  email: string
  phone: string
  name: string
  surName: string
  companyName: string
  webSite: string
  headQuater: string
  country: string
  stripeCustomerId: string
  password: string
  contract: ContractEntity[]
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt?: string
}

export interface MilestoneEntity {
  id: string
  contract: ContractEntity
  contractId: string
  summary: string
  description: string
  /** @format date-time */
  deadline: string
  status: 'on_going' | 'to_do' | 'payment_pending' | 'paid'
  amount: number
  invoiceId: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt?: string
}

export interface ContractEntity {
  id: string
  user: UserEntity
  userId: string
  name: string
  type: 'project' | 'talent'
  /** @format date-time */
  deadline: string
  invoiceId: string
  attachment: string
  contractType: 'fixed' | 'hourly'
  status: 'in_discussion' | 'need_deposit' | 'on_going' | 'payment_pending' | 'complete'
  price: number
  pricePerHour: number
  pic: string
  description: string
  /** @format date-time */
  startDate: string
  milestones: MilestoneEntity[]
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt?: string
}

export interface GetCheckoutSessionDto {
  sessionId: string
}

export interface CreateCheckoutSessionDto {
  /** @example 2 */
  quantity: number
  /** @example "eur" */
  currency: string
  /** @example "Contract A" */
  name: string
  /** @example "Contract for project A with the agreement of 8seneca and B" */
  description?: string
  /** @example 500 */
  unit_amount: number
}

export interface LoginDto {
  email: string
  password: string
}

export interface LoginResponse {
  data: {
    accessToken: string
  }
}

export interface BaseResponse {
  data: {
    message: 'Created!' | 'Updated!' | 'Deleted' | 'Success!'
    item?: {
      id: string
      name?: string
    }
  }
}

export interface UserRegisterDto {
  email: string
  name: string
  companyName: string
  password: string
  preferredLocale?: string
  phone: string
  surName?: string
  webSite?: string
  headQuater?: string
  country?: string
}

export interface SignUpResponse {
  data: {
    accessToken: string
  }
}

export interface CreateMeetingRequestDto {
  name: string
  email: string
  date: string
  comment?: string
}

export interface CurrentMeetingDto {
  id: string
  status: string
  start: string
  end: string
}

export interface FileUploadDto {
  name?: string
  folder: 'Programming & Tech' | 'Graphic & Design' | 'Digital Marketing'
  subfolder?: string
  /** @format binary */
  file: File
}

export interface CreateContractDto {
  /** @example "Contract A" */
  name: string
  /**
   * Client who own the contract
   * @example "6ae3b9a1-c84f-4460-9e30-873cd9e925f4"
   */
  userId: string
  /** @example "project" */
  type: 'project' | 'talent'
  /**
   * @format date-time
   * @example "Fri Jul 14 2023"
   */
  deadline: string
  /** @example "https://www.africau.edu/images/default/sample.pdf" */
  attachment?: string
  /** @example "fixed" */
  contractType: 'fixed' | 'hourly'
  /** @example 500 */
  price: number
  /** @example null */
  pricePerHour: number
  /** @example "This is a project between 8seneca and A company" */
  description: string
  /**
   * @format date-time
   * @example "Fri Jul 14 2023"
   */
  startDate: string
}

export interface EditContractDto {
  /** @example "Contract B" */
  name?: string
  /** @example "project" */
  type?: 'project' | 'talent'
  /**
   * @format date-time
   * @example "Fri Jul 14 2023"
   */
  deadline?: string
  /** @example "https://www.africau.edu/images/default/sample.pdf" */
  attachment?: string
  /** @example "fixed" */
  contractType?: 'fixed' | 'hourly'
  /** @example 500 */
  price?: number
  /** @example null */
  pricePerHour?: number
  /** @example "This is a project between 8seneca and A company" */
  description?: string
  /**
   * @format date-time
   * @example "Fri Jul 14 2023"
   */
  startDate?: string
}

export interface MilestoneDto {
  /** @example "contractId" */
  contractId: string
  /** @example "Complete all landing pages" */
  summary: string
  /** @example "Delivery includes homepage, about us, payment and pricing" */
  description: string
  /**
   * @format date-time
   * @example "Fri Jul 14 2023"
   */
  deadline: string
  /** @example "to_do" */
  status: 'on_going' | 'to_do' | 'payment_pending' | 'paid'
  /** @example 500 */
  amount: number
}

export interface UpdateMilestoneDto {
  /** @example "Complete all landing pages 1" */
  summary?: string
  /** @example "Delivery includes homepage, about us, payment and pricing 1" */
  description?: string
  /**
   * @format date-time
   * @example "Fri Jul 14 2023"
   */
  deadline?: string
  /** @example "to_do" */
  status?: 'on_going' | 'to_do' | 'payment_pending' | 'paid'
  /** @example 500 */
  amount?: number
}

export interface SubscriberDto {
  email: string
}
export interface ProjectEntity {
  id: string
  contractId: string
  projectType: string
  techStack: string
  requirement: string
  status: 'to_do' | 'in_review' | 'on_going' | 'payment_pending' | 'paid'
  /** @format date-time */
  deadline: string
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  updatedAt: string
  /** @format date-time */
  deletedAt?: string
}
export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = ''
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key])
    return keys
      .map(key => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async response => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch(e => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title 8seneca APIs
 * @version 1.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Health check!
   * @name AppControllerHealthCheck
   * @request GET:/
   */
  appControllerHealthCheck = (params: RequestParams = {}) =>
    this.request<object, any>({
      path: `/`,
      method: 'GET',
      format: 'json',
      ...params,
    })

  exchangeRate = {
    /**
     * No description
     *
     * @tags Health check!
     * @name AppControllerGetExchangeRate
     * @request GET:/exchange-rate
     */
    appControllerGetExchangeRate: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/exchange-rate`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  }
  blog = {
    /**
     * No description
     *
     * @tags Blog
     * @name IndexPosts
     * @summary Retrieve posts from Notion database
     * @request GET:/blog
     * @secure
     */
    indexPosts: (
      query?: {
        pageSize?: number
        startCursor?: string
        isFeatured?: boolean
      },
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/blog`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Blog
     * @name GetPost
     * @summary Retrieve one single post from Notion database
     * @request GET:/blog/{slug}
     * @secure
     */
    getPost: (slug: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/blog/${slug}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  }
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name IndexUsers
     * @summary Index users
     * @request GET:/users
     * @secure
     */
    indexUsers: (params: RequestParams = {}) =>
      this.request<UserEntity[], any>({
        path: `/users`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  payment = {
    /**
     * No description
     *
     * @tags Payment
     * @name CreateCustomerPortalSession
     * @summary Create a temporary customer portal session
     * @request POST:/payment/portal
     * @secure
     */
    createCustomerPortalSession: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/payment/portal`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name CreatePaymentIntent
     * @summary Create a payment intent
     * @request POST:/payment/intent
     * @secure
     */
    createPaymentIntent: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/payment/intent`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name GetCheckoutSession
     * @summary Get detail of a checkout session
     * @request GET:/payment/checkout-session
     * @secure
     */
    getCheckoutSession: (
      query: {
        sessionId: string
      },
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/payment/checkout-session`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name CreateCheckoutSession
     * @summary Create a checkout session
     * @request POST:/payment/checkout-session
     * @secure
     */
    createCheckoutSession: (data: CreateCheckoutSessionDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/payment/checkout-session`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name HandlePaymentNotification
     * @summary Handle Stripe notification
     * @request POST:/payment/checkout-session/webhook
     * @secure
     */
    handlePaymentNotification: (params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/payment/checkout-session/webhook`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name GetStripePublishableKey
     * @summary Get Stripe publishable key
     * @request GET:/payment/config
     * @secure
     */
    getStripePublishableKey: (params: RequestParams = {}) =>
      this.request<string, void>({
        path: `/payment/config`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name RetrieveInvoice
     * @summary Get invoice detail
     * @request GET:/payment/invoice/{invoiceId}
     * @secure
     */
    retrieveInvoice: (invoiceId: string, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/payment/invoice/${invoiceId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name SendInvoice
     * @summary Send invoice to customer
     * @request POST:/payment/invoice/{invoiceId}
     * @secure
     */
    sendInvoice: (invoiceId: string, params: RequestParams = {}) =>
      this.request<object, void>({
        path: `/payment/invoice/${invoiceId}`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogin
     * @request POST:/auth/login
     */
    authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.request<LoginResponse, any>({
        path: `/auth/login`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerLogout
     * @request POST:/auth/logout
     */
    authControllerLogout: (params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/auth/logout`,
        method: 'POST',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name AuthControllerRegister
     * @request POST:/auth/register
     */
    authControllerRegister: (data: UserRegisterDto, params: RequestParams = {}) =>
      this.request<SignUpResponse, any>({
        path: `/auth/register`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  meetingRequests = {
    /**
     * No description
     *
     * @tags Meeting Requests
     * @name CreateMeetingRequest
     * @request POST:/meeting-requests
     */
    createMeetingRequest: (data: CreateMeetingRequestDto, params: RequestParams = {}) =>
      this.request<BaseResponse, any>({
        path: `/meeting-requests`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Meeting Requests
     * @name GetAvailableSchedules
     * @request GET:/meeting-requests
     */
    getAvailableSchedules: (
      query?: {
        timeMin?: string
        timeMax?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<CurrentMeetingDto[], any>({
        path: `/meeting-requests`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Meeting Requests
     * @name CalendarEventsNotification
     * @request POST:/meeting-requests/webhook
     */
    calendarEventsNotification: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/meeting-requests/webhook`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  }
  storage = {
    /**
     * No description
     *
     * @tags Storage
     * @name StorageControllerUploadFile
     * @request POST:/storage/upload
     */
    storageControllerUploadFile: (data: FileUploadDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/storage/upload`,
        method: 'POST',
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  }
  recruitment = {
    /**
     * No description
     *
     * @tags Recruitment
     * @name IndexRecruitingJobs
     * @summary Retrieve jobs from Notion database
     * @request GET:/recruitment
     * @secure
     */
    indexRecruitingJobs: (
      query?: {
        pageSize?: number
        startCursor?: string
        category?: 'Digital Marketing' | 'Graphic & Design' | 'Programming & Tech'
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/recruitment`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Recruitment
     * @name GetRecruitingJob
     * @summary Retrieve job from Notion database
     * @request GET:/recruitment/{jobId}
     * @secure
     */
    getRecruitingJob: (jobId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/recruitment/${jobId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  }
  contract = {
    /**
     * No description
     *
     * @tags Contract
     * @name CreateContract
     * @summary Create new contract
     * @request POST:/contract
     */
    createContract: (data: CreateContractDto, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/contract`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name IndexContracts
     * @summary Index contracts
     * @request GET:/contract
     */
    indexContracts: (params: RequestParams = {}) =>
      this.request<ContractEntity[], any>({
        path: `/contract`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name IndexContractById
     * @summary Index contract by id
     * @request GET:/contract/{contractId}
     */
    indexContractById: (contractId: string, params: RequestParams = {}) =>
      this.request<ContractEntity, any>({
        path: `/contract/${contractId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name EditContracts
     * @summary Edit contracts
     * @request PUT:/contract/{contractId}
     */
    editContracts: (contractId: string, data: EditContractDto, params: RequestParams = {}) =>
      this.request<ContractEntity, any>({
        path: `/contract/${contractId}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name CreateInvoiceDeposit
     * @summary Create deposit invoice for a contract
     * @request GET:/contract/deposit/{contractId}
     */
    createInvoiceDeposit: (contractId: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/contract/deposit/${contractId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contract
     * @name CreateAndSendInvoiceDeposit
     * @summary Create and send deposit invoice for a contract
     * @request POST:/contract/deposit/{contractId}
     */
    createAndSendInvoiceDeposit: (contractId: string, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/contract/deposit/${contractId}`,
        method: 'POST',
        format: 'json',
        ...params,
      }),
  }
  milestone = {
    /**
     * No description
     *
     * @tags Milestone
     * @name CreateMilestone
     * @summary Create new milestone
     * @request POST:/milestone
     */
    createMilestone: (data: MilestoneDto, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/milestone`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestone
     * @name IndexMilestone
     * @summary Index milestones
     * @request GET:/milestone
     */
    indexMilestone: (params: RequestParams = {}) =>
      this.request<MilestoneDto[], any>({
        path: `/milestone`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestone
     * @name IndexMilestonesById
     * @summary Get one milestones
     * @request GET:/milestone/{id}
     */
    indexMilestonesById: (id: string, params: RequestParams = {}) =>
      this.request<MilestoneDto, any>({
        path: `/milestone/${id}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestone
     * @name DeleteMilestonesById
     * @summary Delete milestones
     * @request DELETE:/milestone/{id}
     */
    deleteMilestonesById: (id: string, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/milestone/${id}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestone
     * @name EditMilestonesById
     * @summary Edit milestones
     * @request PUT:/milestone/{id}
     */
    editMilestonesById: (id: string, data: UpdateMilestoneDto, params: RequestParams = {}) =>
      this.request<MilestoneDto, any>({
        path: `/milestone/${id}`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Milestone
     * @name IndexMilestonesByContractId
     * @summary Index milestones of contract
     * @request GET:/milestone/contract/{contractId}
     */
    indexMilestonesByContractId: (contractId: string, params: RequestParams = {}) =>
      this.request<MilestoneDto[], any>({
        path: `/milestone/contract/${contractId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  }
  subscriber = {
    /**
     * No description
     *
     * @tags Subscriber
     * @name Subscribe
     * @summary Subscribe Us
     * @request POST:/subscriber
     */
    subscribe: (data: SubscriberDto, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/subscriber`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
