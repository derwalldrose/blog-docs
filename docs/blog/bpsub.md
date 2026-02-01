---
title: "🚀 CF Snippets 节点部署手册：零门槛快速上手、付费域名全功能、免费 Cloudns 域名双向解析详解"
pubDate: 2026-01-31
description: "Cloudflare Snippets 部署节点教程：功能检测、付费域名/Cloudns 域名两种部署方式，以及订阅生成器相关说明。"
tags: ["Cloudflare", "Snippets", "Cloudns", "部署", "BPSUB"]

heroImage: "/images/covers/bpsub.svg"
---

> 转载说明：本文原文来自 CMLiussss Blog，原链接：
> https://blog.cmliussss.com/p/BPSUB/
>
> 原站页面标注的许可为 **CC BY-NC-SA 4.0**。如果你的博客用于商业用途或不方便以相同协议分享，请告诉我，我会改为“摘要 + 要点 + 引用链接”的合规版本。

[开发笔记](/categories/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/) [Cloudflare](/tags/Cloudflare/) [Snippets](/tags/Snippets/) [Cloudns](/tags/Cloudns/) [订阅生成器](/tags/%E8%AE%A2%E9%98%85%E7%94%9F%E6%88%90%E5%99%A8/) [BPSUB](/tags/BPSUB/)

## 🛠️ 部署 Cloudflare Snippets 节点

## ⚠️ 免责声明

- Snippets 目前仍处于灰度 / 新功能阶段，免费额度只向部分账号开放，不排除未来会因为部署该服务导致封禁账号或关闭你账号的 Snippets 功能。请务必谨慎部署，更不要在生产环境中部署代理服务！！！
- 当前相对更稳妥的方式是：使用全新注册的小号通过 CF Pages 部署方式部署。单账号每日请求上限 10 万次，不够就再注册（无额外成本）。

## 🧪 部署方式优缺点速览

这期图文教程为大家准备了三种部署方法，以应对你当前的账号情况：

- **CF Snippets 部署方式 — 自有付费域名**
  - 优点：功能最全，支持自定义域名并可使用全部 Snippets 功能
  - 缺点：必须使用并在账号中开启 Snippets 的付费域名，免费域名不支持

- **CF Snippets 部署方式 — 使用 cloudns 域名**
  - 优点：免费获取域名，同样可使用完整功能，支持自定义域名
  - 缺点：需配置双向解析，相比正常付费域名有更多且更繁琐的设置步骤

## 🔍 检测是否具备 Snippets 功能

### 🤖 自动检测

如果我们的域名很多，可以使用下面的自动检测脚本进行批量检测。

首先登录 Cloudflare，查看一下我们的域名是否具备 Snippets 功能。

登录账号后，点击 F12，进入浏览器的开发者模式，点击控制台，输入以下命令：

```bash
(async function main() {
  const zonesUrl = (page = 1) =>
    `https://dash.cloudflare.com/api/v4/zones?type=full,partial,secondary&per_page=100&page=${page}`;

  async function fetchJson(url) {
    const res = await fetch(url, { credentials: "include" });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    return res.json();
  }

  try {
    const results = [];
    let page = 1;

    while (true) {
      const zonesData = await fetchJson(zonesUrl(page));
      const zones = Array.isArray(zonesData.result) ? zonesData.result : [];
      if (zones.length === 0) break;

      for (const zone of zones) {
        const entitlementsUrl = `https://dash.cloudflare.com/api/v4/zones/${zone.id}/entitlements`;
        const entData = await fetchJson(entitlementsUrl);
        const entResults = Array.isArray(entData.result) ? entData.result : [];
        const rule = entResults.find(r => r.feature?.key === "rulesets.snippets_rule_max");
        const value = rule?.allocation?.value ?? 0;
        if (value > 0) {
          results.push({
            zone_id: zone.id,
            zone_name: zone.name,
            rulesets_snippets_rule_max: value
          });
        }
      }

      const info = zonesData.result_info || {};
      if (!info.page || info.page >= (info.total_pages || info.page)) break;
      page++;
    }

    console.log(results);
  } catch (err) {
    console.error("请求失败:", err);
  }
})();
```bash

检测代码来源：https://www.nodeseek.com/post-464626-1

- 如果你看到返回结果是一个包含 zone 的数组，说明当前账号下有域名开启 Snippets 功能。
- 如果返回结果是空数组 `[]`，说明当前账号下没有任何域名具备 Snippets 功能。

### 🧭 手动检测

登录 Cloudflare 选择一个域名进入：**Rules（规则） > Snippets**。

- 若提示「欢迎使用 Snippets！」说明该域名具备 Snippets 功能。
- 若提示「升级计划」说明当前域名不具备 Snippets 功能。

## 1️⃣ CF Snippets 部署方式 — 付费域名

前往 **BPSUB 网站**：https://bp.sub.cmliussss.net/

- 点击「CF Snippets 部署」，选择源码并生成 UUID 验证
- 复制生成的源码（建议保存 UUID 以便后续使用）
- 在 Cloudflare 域名管理页面进入：Rules > Snippets > 创建片段
- 填写片段名称（例如 `sp`）
- 粘贴源码到 `snippet.js`

片段规则（示例）：

- 选择：自定义筛选表达式
- 字段：主机名
- 运算符：等于
- 值：你的自定义域名，例如 `bp.jinxa.me`

注意：如果你的域名是 `jinxa.me`，则必须多加一级域名，例如 `bp.jinxa.me`。

点击完成后部署；如提示「此规则可能不适用于您的流量」，可选择创建新代理 DNS 记录：

- 类型 A
- 名称：你的自定义域名
- IPv4：`192.0.2.1`

然后继续完成部署。

## 2️⃣ CF Snippets 部署方式 — Cloudns 域名

同样先在 BPSUB 生成 UUID 和源码，然后在 Cloudflare：Rules > Snippets > 创建片段，粘贴源码。

片段规则（示例）：

- 字段：主机名
- 运算符：等于
- 值：`bp.cmliussss.cloudns.org`

注意：如果你的域名是 `cmliussss.cloudns.org`，则必须多加一级域名，例如 `bp.cmliussss.cloudns.org`。

部署时如果需要创建代理 DNS 记录，可用：

- 类型 CNAME
- 名称：你的自定义域名
- 值：`cf.090227.xyz`

然后到 Cloudns 进行双向解析配置（CNAME / NS 记录等），等待解析生效。

## 🧰 BPSUB - Cloudflare Snippets 订阅生成器

- GitHub：https://github.com/cmliu/CF-Workers-BPSUB

该面板是运行在 Cloudflare Workers 上的 Snippets 订阅生成器，用于生成订阅内容。

## 🧩 实用工具

- CF 优选域名汇总：https://cmliussss.com/p/CloudFlare%E4%BC%98%E9%80%89/
- ProxyIP 可用性检测：https://check.proxyip.cmliussss.net/
- Socks5/HTTP 代理检测：https://check.socks5.cmliussss.net/

---

原文：CMLiussss Blog · https://blog.cmliussss.com/p/BPSUB/
