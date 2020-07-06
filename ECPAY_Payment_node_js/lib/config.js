const path = require('path')

const ECPAY_PAYMENT_XML_PATH = path.resolve(path.join(__dirname, './ecpay_payment/ECpayPayment.xml'))
const ECPAY_PAYMENT_CONF_XML_PATH = path.resolve(path.join(__dirname, '../conf/payment_conf.xml'))

module.exports = {
  ECPAY_PAYMENT_XML_PATH: process.env.ECPAY_PAYMENT_XML_PATH || ECPAY_PAYMENT_XML_PATH,
  ECPAY_PAYMENT_CONF_XML_PATH: process.env.ECPAY_PAYMENT_CONF_XML_PATH || ECPAY_PAYMENT_CONF_XML_PATH
}
