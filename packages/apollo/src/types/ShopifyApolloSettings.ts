export interface ShopifyApolloSettings {
  api: {
    domain: string
    storefrontAccessToken: string
    cookies?: string
    apiVersion?: string
  },
  cms?: Record<string, string>
  currency: string
  country: string
}
