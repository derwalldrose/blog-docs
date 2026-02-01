---
title: "🚀 Edgetunnel2.0 全新版本：就是这么简单！就是这么方便！"
pubDate: 2026-01-31
description: "Edgetunnel 2.0 更新概览与部署教程：Pages 上传部署、KV 绑定、变量设置、自定义域名，以及订阅/通知等功能说明。"
tags: ["Cloudflare", "Pages", "VLESS", "Trojan", "Edgetunnel"]

heroImage: "/images/covers/edt2.svg"
---

> 转载说明：本文原文来自 CMLiussss Blog，原链接：
> https://blog.cmliussss.com/p/edt2/
>
> 原站页面通常标注许可为 **CC BY-NC-SA 4.0**。如果你的博客用于商业用途或不方便以相同协议分享，请告诉我，我会改为“摘要 + 要点 + 引用链接”的合规版本。

[科学上网](/categories/%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91/) [Cloudflare](/tags/Cloudflare/) [优选IP](/tags/%E4%BC%98%E9%80%89IP/) [Pages](/tags/Pages/) [优选域名](/tags/%E4%BC%98%E9%80%89%E5%9F%9F%E5%90%8D/) [Cloudflare Pages](/tags/Cloudflare-Pages/) [VLESS](/tags/VLESS/) [Trojan](/tags/Trojan/) [Edgetunnel](/tags/Edgetunnel/)

## 🚀 Edgetunnel2.0 全新版本：就是这么简单！就是这么方便！

全新版本完全升级，集百家之所长，力求打造最强大的 Edgetunnel 解决方案！

Demo 面板预览：
- https://edt-pages.github.io/admin

### ✨ 有哪些改进呢？

- 全新传输架构：提升兼容和稳定性
- 更简化的配置流程：新增 WebUI，修改配置无需改动变量重试部署，点击保存即刻生效
- 多协议支持：一次部署，在线切换 VLESS / Trojan
- 内置三网优选 IP：根据网络自动分配，优选 IP 想要多少就有多少
- 自定义优选：支持在线优选、自选落地国家；也支持优选 API 接入，配合自动化实时优选
- 反代出口：除 ProxyIP 外，还支持 SOCKS5/HTTP（启用全局代理可实现链式代理）
- Telegram Bot 通知：实时获取项目访问/登录/订阅等消息
- CF Account ID/API Token 通知：实时获取当天 Workers/Pages 请求使用情况
- 日志中心：查看可疑登录/订阅操作

## 🛠️ 部署教程（以 Pages 上传为例）

支持 Workers、Pages GitHub、Pages 上传三种部署方式。此处以 Pages 上传为例（无需门槛）。

如需了解其他部署方式，请参考项目文档：
- https://github.com/cmliu/edgetunnel

### 1️⃣ 创建 Pages 应用程序

- 下载项目压缩包：
  - https://github.com/cmliu/edgetunnel/archive/refs/heads/main.zip
- Cloudflare 控制台：计算和 AI → Workers 和 Pages → 创建应用程序
- 选择 Pages → 拖放文件/上传 zip
- 项目名称建议用全新名字（可末尾加随机数字，避免 1101 错误）
- 部署站点，等待完成

### 2️⃣ 设置管理员变量

项目设置 → 设置 → 添加变量和机密：
- 添加文本变量 `ADMIN`：WebUI 管理员密码（建议复杂）

### 3️⃣ 绑定 KV 命名空间

- 存储和数据库 → Workers KV → Create Instance
- 名称可自定义（例如 `EDT2`）
- 回到 Pages 项目：设置 → 绑定 → 添加 KV 命名空间
  - 变量名称必须是大写 `KV`
  - 绑定到刚创建的 KV

### 4️⃣ 重试部署使变量生效

变量修改后需要重新上传部署（生产环境）才能生效。

### 5️⃣ 绑定自定义域名

- Pages → 自定义域 → 设置自定义域
- 如果你的主域名是 `fxxk.cloudns.org` 这类，必须加一级：例如 `edt2.fxxk.cloudns.org`
- 选择 CNAME 设置，按页面提示配置 CNAME（指向 `xxx.pages.dev`）
- 等待 10~30 分钟验证通过

### 6️⃣ 登录管理页面

访问 `/admin` 登录，例如：
- `https://edt2.fxxk.cloudns.org/admin`

> 注意：主页显示 `Welcome to nginx!` 是默认伪装页，部署成功后请访问 `/admin`。

## 🔔 Telegram Bot 通知（摘要）

- @BotFather 创建 bot 拿到 Bot Token
- 获取 Chat ID
- 在管理页面填写 Token/Chat ID，验证成功后启用

## 📊 Workers/Pages 请求数统计（摘要）

- Cloudflare → 管理账户 → 账户 API 令牌 创建 Token（建议用“阅读分析数据和日志”模板）
- 在管理页面填写 Account ID + API Token 验证

## 🎉 彩蛋：EDT2 面板作为 Snippets 节点管理面板

思路：先部署 Snippets 节点（需要 BPSUB 内的 Snippets 源码适配高级功能），再在 EDT2 的 Pages 设置里配置 `UUID` 等变量并重试部署，最后在 EDT2 管理页面修改 HOST/UUID 进行对接。

---

原文：CMLiussss Blog · https://blog.cmliussss.com/p/edt2/
