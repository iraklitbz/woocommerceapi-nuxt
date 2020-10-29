import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export default (context, inject) => {
  const woocomerceApi = new WooCommerceRestApi({
    url: 'http://15.188.143.111',
    consumerKey: 'ck_8bd545d57f4348acefef0918836cffeb655c6d13',
    consumerSecret: 'cs_beaddd1e13bb282402a2203627bd9abb64bab003',
    version: 'wc/v3'
  })

  inject('woocomerceApi', woocomerceApi)
}