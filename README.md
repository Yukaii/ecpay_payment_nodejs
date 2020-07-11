# 綠界 全方位(All In One) 金流

> 本專案 fork 自綠界 [ECPay/ECPayAIO_Node.js](https://github.com/ECPay/ECPayAIO_Node.js)，為方便部屬及維護，做少許修改並發佈至 npm。
> 商業支援除錯請找綠界，本人將提供任何支援 🐱

## 1. 介紹

綠界對於有收款需求的會員，提供完整的交易介接API，並有多種收款方式(All In One)可選擇使用。 本套件為Node.js版，可使用作建立訂單，接受付款通知，查詢訂單等金流交易的應用。

收款方式清單：

- 信用卡(一次付清、分期付款、定期定額)
- 網路ATM
- ATM櫃員機
- 超商代碼
- 超商條碼
- Apple Pay
- Google Pay (須特別申請才能使用)(原Android Pay)

## 2. 安裝環境

- node-v6.11.0-x64  以上
- ECMA Script6

## 3. 使用教學

使用者文件放置於Doc資料夾內，可供參閱

## 4. 聯絡我們

綠界技術服務工程師信箱: techsupport@ecpay.com.tw

## 5. 設定

| 環境變數 | 描述 | 範例值 |
| -- | -- | -- |
| `ECPAY_PAYMENT` | 綠界支付方法設定檔**內容**，可預設不給 | `<?xml  version="1.0" encoding="utf-8"?>......` |
| `ECPAY_PAYMENT_XML_PATH` | 綠界支付方法設定檔**檔案路徑**，可預設不給 | `/etc/ecpay_payment/lib/ECpayPayment.xml` |
| `ECPAY_PAYMENT_CONF` | 綠界支付設定檔 | 綠界支付設定檔**內容**，依照申請值設定 | `<?xml  version="1.0" encoding="utf-8"?>......` |
| `ECPAY_PAYMENT_CONF_XML_PATH` | 綠界支付設定檔**檔案路徑** | `/etc/ecpay_payment/conf/payment_conf.xml` |
