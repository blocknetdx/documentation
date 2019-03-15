title: 
description:

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

The Blocknet Protocol is supported by a network of Service Nodes, which are similar to masternodes but with an increased level of participation. These Service Nodes are used as a DHT network overlay to support [XBridge](/protocol/xbridge/introduction), XRouter, and XCloud services. In order to support these service, they host full nodes of the blockchains the protocol is compatible with, host microservices, verify interactions between peers, route communication between blockchains, and perform anti-spam and anti-DOS measures for the network. Service Nodes can also [vote](/governance/proposal-voting) to participate in Blocknet's [self-governance system](/governance/introduction).

Service Nodes require 5000 [BLOCK](/blockchain/introduction). If seeking to acquire BLOCK, [there are various options available](/project/exchanges).

---

## Rewards

Details on rewards can be [found here](https://docs.google.com/document/d/18OV7SGyFPp-V0D2AjmyA904bc5XZQeLOSgzS1SUAK2w/preview) with an updated version on the way, which can be found here when complete.

Additional resources:

* [Service Node Revenue Forcasting](https://bit.ly/revenue-forecasting)
* [Block Reward Calculator](https://block-node.info/blocknet_revenue1.php)


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
Ability to receive 0.7 BLOCK rewards
Will not receive any trading fees rewards from trades incurred on Block DX

‘Hosting’ Service Node’ (Supporting at least one digital asset on the Blocknet protocol)
Ability to receive 0.7 BLOCK rewards
Ability to receive 0.015 BLOCK trading fee rewards from trades incurred on Block DX
Ability to receive XRouter fees (...coming soon)

 -->












<!-- 
======= Start: Related Links Section =======
- This is the related links section at the bottom of each page.
- It lists the links in the relatedLinks array variable below.
	Example: relatedLinks = [{"name":"Blocknet Website","link":"https://blocknet.co"},{"name":"API Docs","link":"https://api.blocknet.co"}];
- If the array is empty, ie. relatedLinks = [], then the related links section will not be displayed.
related-links.html
- The template and logic for the related links section can be found in docs/snippets/related-links.html
- The base path is defaulted to docs/snippets/, which can be edited in the mkdocs.yml file
- The template and logic is linked with markdown_extensions: pymdownx.snippets
-->
<script type="text/javascript">
var relatedLinks = [];
</script>

--8<--
related-links.html
--8<-- 
<!-- 
======= End: Related Links Section ======= 
-->





