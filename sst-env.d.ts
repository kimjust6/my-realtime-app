/* tslint:disable */
/* eslint-disable */
import "sst"
declare module "sst" {
  export interface Resource {
    MyRealtime: {
      authorizer: string
      endpoint: string
      type: "sst.aws.Realtime"
    }
    MyWeb: {
      type: "sst.aws.Nextjs"
      url: string
    }
  }
}
export {}