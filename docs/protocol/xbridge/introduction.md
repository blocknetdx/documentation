title: Blocknet Protocol - XBridge Introduction
description: XBridge is a cross-chain decentralized exchange protocol that provides the ability to exchange between any two supported blockchains.


# XBridge

---

## Introduction
XBridge provides the ability to perform *true* trustless and decentralized exchanges between [any digital asset that is supported](/protocol/xbridge/compatibility/#supported-digital-assets) by the Blocknet Protocol [via APIs](https://api.blocknet.co/#xbridge-api). When paired with XRouter, any application can perform exchanges between any compatible blockchains using a decentralized SPV implementation. Unlike every other "decentralized" exchange protocols, no derivatives (proxy tokens or colored coins) are used and the entire process is done in a trustless manner by decentralizing the four components of an exchange:

* __Storage of Funds__ - Trading occurs directly out of the client's wallet and funds are within the client's control throughout the entire process. 
* __Order Books__ - Orders are broadcasted directly peer-to-peer over the network. Each client compiles the order book themselves instead of relying on a central order book service. All integrators and services on the protocol share the orderbook and liquidity. Currently there is just support for a public order book, but there are plans for private order books and direct trading as well.
* __Order Matching__ - This is performed peer-to-peer by the clients.
* __Settlement__ - This is performed using BIP65 CLTV atomic swap contracts<sup>[1]</sup>. For blockchains that do not inherently support BIP65, such as Ethereum, similar methods are being emulated to extend the protocol to those blockchains and subsequent assets.

<small>[1] [ACCT using Check Lock Time Verify (#4)](http://www.kkurokawa.com/2015/10/atomic-cross-chain-transfer-overview.html)</small>

The exchange takes place on each respective blockchain with the process overlooked by a network of 400+ [Service Nodes](/service-nodes/introduction) running full nodes of the compatible blockchains to ensure no malicious behavior is occurring. Note that once an exchange is completed, when the funds are received will be dependent on the blockchain's accepted confirmation time. By default, the required amount of confirmations is set 0 and the funds aren't spent until each blockchain achieves their respective required amount of confirmations. For instance, lets look at an example of an exchange between BTC requiring 1 confirmation and BLOCK requiring 2 confirmations. BLOCK has a faster confirmation time so it will receive 2 confirmations while BTC has 0, but the funds will not be spent until BLOCK has at least 2 confirmation and BTC has at least 1 confirmation. 


## Design
The following diagrams depict the events of an exchange with various outcomes. In these diagrams, a "client" refers to software utlizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.



<div class="diagram-group">
	<strong>Successful Exchange</strong>
	<img src="/img/protocol/swap-success.png">
	<a href="/img/protocol/swap-success.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally;
	* Order put in `new` state;
1. The order is broadcasted to the network;
	* A network transaction fee for the maker asset's blockchain is charged to the maker;
1. The Service Node network verifies the order is good;
1. The order is added to the order books, which the Service Nodes sync;
	* Order put in `open` state;
1. The taker client responds to take the order;
	* A network transaction fee for the taker asset's blockchain is charged;
	* A fixed 0.015 BLOCK fee is charged to the taker;
	* Order put in `accepting` state;
1. The Service Node network verifies the response to take the order is good;
1. The maker acknowledges the taker;
    * Order put in `hold` state;
1. The maker and trader assets are deposited into the atomic swap P2SH address;
    * Order put in `created` state;
1. The Service Nodes verify the terms of the atomic swap contract are good;
1. The transactions to the P2SH meet the required amount of confirmations;
1. The P2SH secrets are spent to the opposite party;
	* Order put in `signed` state;
	* Order put in `commited` state;
1. The maker and taker successfully receive the exchanged assets;
    * Order put in `finished` state;



<div class="diagram-group">
	<strong>Failed Exchange - Bad Maker Order</strong>
	<img src="/img/protocol/swap-fail-1.png">
	<a href="/img/protocol/swap-fail-1.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally;
	* Order put in `new` state;
1. The order is broadcasted to the network;
	* A network transaction fee for the maker asset's blockchain is charged to the maker;
1. The Service Node network verifies the order is bad;
1. The order is rejected by the network;
	* Order put in `canceled` state;



<div class="diagram-group">
	<strong>Failed Exchange - Bad Taker Response</strong>
	<img src="/img/protocol/swap-fail-2.png">
	<a href="/img/protocol/swap-fail-2.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally;
	* Order put in `new` state;
1. The order is broadcasted to the network;
	* A network transaction fee for the maker asset's blockchain is charged to the maker;
1. The Service Node network verifies the order is good;
1. The order is added to the order books, which the Service Nodes sync;
	* Order put in `open` state;
1. The taker client responds to take the order;
	* A network transaction fee for the taker asset's blockchain is charged;
	* A fixed 0.015 BLOCK fee is charged to the taker;
	* Order put in `accepting` state;
1. The Service Node network verifies the response to take the order is bad;
	* Order put in `canceled` state;



<div class="diagram-group">
	<strong>Failed Exchange - Bad Atomic Swap Terms</strong>
	<img src="/img/protocol/swap-fail-3.png">
	<a href="/img/protocol/swap-fail-3.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram above is top-to-bottom, left-to-right:

1. The maker client creates an order locally;
	* Order put in `new` state;
1. The order is broadcasted to the network;
	* A network transaction fee for the maker asset's blockchain is charged to the maker;
1. The Service Node network verifies the order is good;
1. The order is added to the order books, which the Service Nodes sync;
	* Order put in `open` state;
1. The taker client responds to take the order;
	* A network transaction fee for the taker asset's blockchain is charged;
	* A fixed 0.015 BLOCK fee is charged to the taker;
	* Order put in `accepting` state;
1. The Service Node network verifies the response to take the order is good;
1. The maker acknowledges the taker;
    * Order put in `hold` state;
1. The maker and trader assets are deposited into the atomic swap P2SH address;
    * Order put in `created` state;
1. The Service Nodes verify the terms of the atomic swap contract are bad;
1. The funds in the P2SH addresses are redeemed back to the original party;
	* Order put in `canceled` state;


## Fees
See [XBridge Fees](/protocol/xbridge/fees).













<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





