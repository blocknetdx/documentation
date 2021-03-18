title: Blocknet Service Node Overview
description: Service Nodes are a network of full nodes used as a DHT network overlay to support Blocknet's services (XBridge, XRouter, and XCloud).


# Service Node Overview

<!-- 
- what is it
	- snode role description

	- why is it needed/benefits
	- design
	- how it applies to xbridge
	- how it applies to xrouter
- rewards
	- better operation = more rewards
		- less downtime, good hardware, high bandwidth, more wallets
-->

---

## Introduction

The Blocknet Protocol is supported by a network of Service Nodes, which are similar to masternodes but with an increased level of participation. These Service Nodes are used as a DHT network overlay to support [XBridge](/protocol/xbridge/introduction), [XRouter](/protocol/xrouter/introduction), and [XCloud](/protocol/xcloud/introduction) services. In order to support these services, they host full nodes of the blockchains the protocol is compatible with, serve oracle data, verify UTXOs, route communication between blockchains, and perform anti-spam and anti-DOS measures for the network. Service Nodes can also [vote](/governance/proposal-voting) to participate in Blocknet's [self-governance system](/governance/introduction).

--8<-- "explore-service-nodes.md"

Service Nodes require 5000 [BLOCK](/blockchain/introduction). If seeking to acquire BLOCK, [there are various options available](/project/exchanges).

Operating a Service Node should be viewed as a business since the amount of revenue you generate is completely in your control. You can choose to provide as many services as you'd like. The more services you offer and the higher the quality service you provide, the greater the revenue you will be able to produce. You can also invest in your services by advertising them to developers and selling those services to them. You can develop relationships with developers and gather feedback on the type of services that they would find the most valuable and then capitalize on that by offering those services. 

For XBridge services, the fees for trades are currently set at a static 0.015 BLOCK taker fee per trade and are paid out to a random Service Node that supports **both** of the chains that the trade took place between. In a future update, these fees will be set to a percent of the trade for the taker.

For XRouter and XCloud services, it's a free market model where you are able to specify the amount you want to charge for each call and users get to specify the maximum fee they are willing to pay. The more useful and/or computationally expensive the call, the more valuable it is to the user, and the more you can charge. 

XCloud service can vary widely and not everything requires coding. For instance, you can setup a plugin file that allows you to offer CoinMarketCap pricing info via your Service Node for developers to use on-chain. You can set this up in a minute without any programming. This is just one example of an extremely useful service for developers. Not only do they want access to this data, but offering it through Blocknet allows them to pay in crypto, which is much simpler than needing to deal with fiat payments paid via on-chain functions.

More documentation will be added here progressively, but if you have any questions in the meantime feel free to ask in our [Discord](https://discord.gg/vGa7GeCu8B).



<!-- 
Service Nodes operators are rewarded according to which type of Service Node they are acting as.

There are two types of Service Nodes:
‘Naked’ Service Nodes - Not supporting any digital assets on the  Blocknet protocol
‘Hosting’ Service Nodes - Supporting at least one digital asset on the Blocknet protocol

Rewards
Service Nodes operators are rewarded according to which type of Service Node they are acting as.


XWallets

Operating as a ‘Hosting’ Service Node requires running and maintaining full nodes of each digital asset.

View compatible digital assets and wallet versions
‘Naked Service Node’ (Not supporting any digital assets on the Blocknet protocol)
Ability to receive block rewards
Will not receive any trading fees rewards from trades incurred on Block DX

‘Hosting’ Service Node’ (Supporting at least one digital asset on the Blocknet protocol)
Ability to receive block BLOCK rewards
Ability to receive 0.015 BLOCK trading fee rewards from trades incurred on Block DX
Ability to receive XRouter fees (...coming soon)

 -->













<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





