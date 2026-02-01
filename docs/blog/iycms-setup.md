---
title: 爱影cms搭建iycms
pubDate: '2024-10-20T00:00:00.000Z'
description: 爱影cms搭建iycms
author: DavidLi
tags:
  - '爱影cms,iycms'
heroImage: "/images/covers/cmsiycms.svg"
---
[爱影 CMS](https://iycms.com/index.html) 是市面上不多见的 GO 语言实现的 CMS 软件。虽然免费但是没有开源，考虑官方已经一个多月没有更新，且官方社区、电报群、在线客服都处于失联状态，很有可能要干不下去。所以先把官方安装教程、相关资源做个备份。

## Ubuntu 安装脚本

官方提供了一键安装脚本，很方便。

```bash
sudo rm -f iycms.sh; sudo wget --no-check-certificate -c -O iycms.sh https://www.iycms.com/api/static/down/linux/ubuntu/install_x86_64.sh;sudo chmod +x iycms.sh;sudo ./iycms.sh
```bash

install\_x86\_64.sh 文件内容：

```bash
1. ```bash
2. ```bash
3. #!/bin/bash
4. apt install -y unzip
5. echo "开始安装爱影CMS最新版本"
6. rm -f iycms.zip;
7. wget --no-check-certificate "https://www.iycms.com/api/v1/download/cms/latest?os=1&kind=x86_64" -O iycms.zip
8. echo "解压文件"
9. unzip -o -q iycms.zip -d /home/iycms
10. rm -f iycms.zip
11. echo "开始安装系统服务"
12. echo "[Unit]
13. Description=iycms service
14. Documentation=https://www.iycms.com
15. [Service]
16. Type=simple
17. Restart=always
18. User=root
19. WorkingDirectory=/home/iycms/
20. ExecStart=/home/iycms/cms
21. RestartSec=1
22. StandardOutput=append:/home/iycms/stdout.log
23. StandardError=append:/home/iycms/stdout.log
24. [Install]
25. WantedBy=multi-user.target">/etc/systemd/system/iycms.service
26. systemctl daemon-reload
27. systemctl enable iycms
28. systemctl restart iycms
29. rm -f ./iycms.sh
30. systemctl stop ufw
31. systemctl disable ufw
32. echo "安装完成"
33. ```bash

到时候把安装程序的下载链接改成自己的就行。

脚本安装自动配置好了进程守护并使用 systemctl 管理器进行状态管理。

在线安装或脚本安装的默认安装路径为：/home/iycms

systemctl 管理：

```bash
systemctl start iycms			# 启动iycms服务

systemctl stop iycms         	# 停止iycms服务

systemctl restart iycms     	# 重新启动iycms服务
```bash

## 配置

访问 [http://yourserver:21007](http://yourserver:21007/) 进入数据库安装界面。

数据库可选 MySQL 或 PostgreSQL。

我用的是 MySQL，虽然有选择数据库端口跟名称的步骤，但我实测不能改，否则找不到数据库，只能用默认值。

数据库安装完就可以登录后台配置网站内容了。

爱影 CMS 提供了很多插件，但是很多都是需要通过官方认证授权的，比如常用的统计分析、模板中心。一旦官方跑路，这些插件就不能用了。

网站统计没什么，把自己常用的统计代码放到模板 html 文件里就行。

模板的话，需要提前把模板压缩包备份，用的时候放到 `/iycms/data/tpl/` 目录下。

资源备份地址：[github](https://github.com/LiangZuoting/iycms-backup)

> Photo by [Pawel Czerwinski](https://unsplash.com/@pawel_czerwinski) on [Unsplash](https://unsplash.com/)
