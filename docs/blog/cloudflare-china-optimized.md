---
title: CloudFlare中国大陆地区优选方案汇总
description: 整理：Cloudflare 中国大陆地区优选方案（转载/汇总）
pubDate: '2024-05-30T09:10:38.000Z'
author: DavidLi
tags:
  - Cloudflare
  - 优选IP
  - 网络优化
  - CF反代
  - CDN
  - 优选域名
  - 网站加速
heroImage: "/images/covers/cloudflare-youxuan.svg"
---
由于众所周知的原因，CloudFlare在中国大陆地区没有CDN节点，因此大陆用户在访问使用CloudFlare CDN的网站时，体验可能不够流畅。优选服务通过将筛选出的优质CloudFlare CDN解析到特定的优质IP地址来改善这一状况。以下内容是我个人收集的一些CloudFlare优选信息，仅供参考。

**本网站的所有信息仅供参考。我们尽力确保信息的准确性和完整性，但对于信息的准确性、完整性和及时性不做任何明示或暗示的保证或声明。用户需自行承担使用本网站信息的风险。同时，禁止使用本站信息进行任何违法违规活动。**

HTTP支持端口：`80`，`8080`，`8880`，`2052`，`2082`，`2086`，`2095`；  
HTTPS支持端口：`443`，`2053`，`2083`，`2087`，`2096`，`8443`。

* * *

## CM优选域名

*   \*.cf.090227.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/youxuan.cf.090227.xyz:443) 泛域名 三网优选

*   **泛域名**的意思就是下列域名的使用效果都是一样的
    
    1. youxuan.cf.090227.xyz
    2. 优选.cf.090227.xyz
    3. 123.cf.090227.xyz
    

> 其效果和直接使用`cf.090227.xyz`是一样的，推荐优先使用自定义前缀的泛域名。

* * *

## 官方优选域名

*   mfa.gov.ua [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/mfa.gov.ua:443) 乌克兰政府官网
*   www.shopify.com [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/www.shopify.com:443)
*   www.visa.cn [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/www.visa.cn:443)
*   time.is [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/time.is:443)
*   icook.hk [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/icook.hk:443)
*   icook.tw [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/icook.tw:443)

🚀 点击展开 **「官方优选域名列表」**

1. mfa.gov.ua#乌克兰政府官网
2. www.shopify.com#Shopify官方优选
3. www.visa.cn#visa中国优选
4. time.is#官方优选
5. icook.hk#官方优选
6. icook.tw#官方优选

* * *

## 更多优选域名

> 未备注出处的为未知，来源均为网络收集，仅供参考

*   \*.cloudflare.182682.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cf.cloudflare.182682.xyz:443) 泛域名 wetest.vip维护
*   \*.tencentapp.cn [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cf.tencentapp.cn:443) 泛域名 ktff维护
*   cf.877774.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cf.877774.xyz:443) 秋名山维护
*   cfip.xxxxxxxx.tk [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cfip.xxxxxxxx.tk:443) OTC维护
*   bestcf.030101.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/bestcf.030101.xyz:443) MingYu维护
*   777.ai7777777.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/777.ai7777777.xyz:443)
*   cdn.2020111.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cdn.2020111.xyz:443)
*   cfip.cfcdn.vip [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cfip.cfcdn.vip:443)
*   cf.0sm.com [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cf.0sm.com:443)
*   cfip.1323123.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cfip.1323123.xyz:443)
*   cloudflare-ip.mofashi.ltd [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cloudflare-ip.mofashi.ltd:443)
*   cf.877771.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cf.877771.xyz:443)
*   cf.900501.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cf.900501.xyz:443)
*   cdns.doon.eu.org [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/cdns.doon.eu.org:443)
*   fn.130519.xyz [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/fn.130519.xyz:443)
*   nrt.xxxxxxxx.nyc.mn [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/nrt.xxxxxxxx.nyc.mn:443)
*   nrtcfdns.zone.id [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/nrtcfdns.zone.id:443)
*   saas.sin.fan [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/saas.sin.fan:443)
*   xn--b6gac.eu.org [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/xn--b6gac.eu.org:443)
*   freeyx.cloudflare88.eu.org [点击前往 itdog-tcping延迟测试](https://www.itdog.cn/tcping/freeyx.cloudflare88.eu.org:443)

🚀 点击展开 **「一键复制 更多优选域名列表」**

1. cloudflare.182682.xyz#wetest.vip维护
2. tencentapp.cn#ktff维护
3. cf.877774.xyz#秋名山维护
4. cfip.xxxxxxxx.tk#OTC维护
5. bestcf.030101.xyz#MingYu维护
6. 777.ai7777777.xyz
7. cdn.2020111.xyz
8. cfip.cfcdn.vip
9. cf.0sm.com
10. cfip.1323123.xyz
11. cloudflare-ip.mofashi.ltd
12. cf.877771.xyz
13. cf.900501.xyz
14. cdns.doon.eu.org
15. fn.130519.xyz
16. nrt.xxxxxxxx.nyc.mn
17. nrtcfdns.zone.id
18. saas.sin.fan
19. xn--b6gac.eu.org
20. freeyx.cloudflare88.eu.org

* * *

## 第三方维护的优选**官方IP**的API

1. https://ipdb.api.030101.xyz/?type=bestcf&country=true
2. https://addressesapi.090227.xyz/CloudFlareYes
3. https://addressesapi.090227.xyz/ip.164746.xyz

## 第三方维护的优选**反代IP**的API

1  

https://ipdb.api.030101.xyz/?type=bestproxy&country=true  

* * *

# 更多优选内容可自行查看

[https://vps789.com/cfip/?remarks=domain](https://vps789.com/cfip/?remarks=domain)  
[https://cf.090227.xyz](https://cf.090227.xyz/)  
[https://ipdb.api.030101.xyz](https://ipdb.api.030101.xyz/)  
[https://www.wetest.vip/page/cloudflare/address\_v4.html](https://www.wetest.vip/page/cloudflare/address_v4.html)  
[https://ip.164746.xyz](https://ip.164746.xyz/)  
[https://stock.hostmonit.com/CloudFlareYes](https://stock.hostmonit.com/CloudFlareYes)

* * *

新人[Youtuber](https://www.youtube.com/@CMLiussss)，需要您的支持，请务必帮我**点赞**、**关注**、**打开小铃铛**，_**十分感谢！！！**_

---

> 原文：https://blog.cmliussss.com/p/CloudFlare%E4%BC%98%E9%80%89/（如有侵权请联系删除）
