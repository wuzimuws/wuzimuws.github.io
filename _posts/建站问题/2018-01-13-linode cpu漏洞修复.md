---
title: linode cpu漏洞修复
date: 2018-01-13 15:00:07
categories:
- linode
tags:
- 幽灵
- 漏洞
- linode
---
Google的Project Zero团队最近披露了一些影响多CPU架构的严重安全漏洞，正如我们的博客[1]中所述。为了解决这些漏洞，您的Linode所在的主机将需要进行维护。这是完全缓解这些漏洞所必需的几个独立维护工作中的第一个。 

每个Linode的维护窗口都将通过支持凭单传达给您，并且在Linode管理器中也会显示。在维护期间，您的Linode将被彻底关闭，并在执行更新时不可用。分配一个两小时的窗口，但实际的停机时间应该少得多。维护结束后，每个Linode将返回到最后一个状态（运行或关闭）。 

您可以按照我们的重新启动生存指南来准备您的Linode进行维护。在维护之前遵循本指南，您将能够确保在您的Linode上运行的服务能够正常恢复。重新启动生存指南可在这里：https://www.linode.com/docs/uptime/reboot-survival-guide 

这些更新会影响您的Linode所在的基础架构，并且不会影响存储在您的Linode中的数据。为了完全缓解熔毁漏洞，**您必须将您的Linode内核更新到版本4.14.11或更高版本。如果您的Linode的配置文件设置为使用我们最新的内核，则在重新启动时，您的Linode将自动使用4.14.11或更高版本。** 

我们还提供了有关这些漏洞的更多信息的指南，以及如何保护您的Linode：https://www.linode.com/docs/platform/meltdown_statement/ 

我们感到遗憾的是，这次维护所需的时间短暂和停机。但是，由于这些漏洞的严重性，我们别无选择，只能立即采取行动，确保客户的安全。由于这些原因，我们必须坚持严格的时间表，不能重新安排或延期维修。 

敬请期待更多的信息。 

[1] https://blog.linode.com/2018/01/03/cpu-vulnerabilities-meltdown-spectre
发表于2天前。UTC，2018年1月10日 - 22:17



