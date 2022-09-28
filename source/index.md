title: 
description:

# Overview

---

## <img class="icon" alt="Blocknet logo" src="img/icons/blocknet-logo.svg" /> What is Blocknet?
--8<-- "what-is-blocknet.md"

---

## Technical Overview
Blocknet is a Proof-of-Stake (PoS) blockchain with a utility token called [BLOCK](/blockchain/introduction). Unlike other currency-focused blockchains, Blocknet is a service-based blockchain comprised of 3 main components:

* [__XRouter__](/protocol/xrouter/introduction) - Provides blockchain interoperability for the Blocknet Protocol with a communication layer consisting of a decentralized inter-blockchain SPV client backend that enables the verification of blockchain records without requiring users to download the full blockchain. XRouter allows applications to interface with blockchains on the TCP/IP networking layer, enabling a true Internet of Blockchains. By default, XRouter is compatible with all blockchains.
* [__XBridge__](/protocol/xbridge/introduction) - Provides the ability to perform trustless exchange between any [digital assets](/resources/glossary/#digital-asset) that is supported by the Blocknet Protocol via APIs. XBridge allows any application to perform decentralized exchange, opening the door to an ecosystem of decentralized trading services. See the [list of compatible assets](/protocol/xbridge/compatibility).
* [__XCloud__](/protocol/xcloud/introduction) - Provides a decentralized oracle network powered by XRouter. XCloud allows applications to run entirely decentralized by enabling on-chain use of off-chain data, APIs, and services, opening the door to the possibility of monetizable, fully decentralized applications.

The Blocknet Protocol is designed to maximize interoperability between different blockchains through the use of these components. **Just as the internet connected computers, the Blocknet Protocol is critical for blockchains to communicate and realize full potential**.
 

---

## Nodes
The network is powered by 2 types of nodes: 

* [__Staking Nodes__](/wallet/staking) - Secures the network by staking BLOCK to verify the blockchain. This service earns 100% of block rewards and the fees for transactions in that block.
* [__Service Nodes__](/service-nodes/introduction) - Hosts the full nodes of compatible blockchains, serves oracle data, audits interactions, and performs anti-spam and anti-DOS measures for the network. This service earns 100% of fees generated from use of the network's services ([XBridge](/protocol/xbridge/introduction), [XRouter](/protocol/xrouter/introduction), [XCloud](/protocol/xcloud/introduction)).

The following are the requirements to operate each type of node: 

* [__Staking Nodes__](/wallet/staking) - A Staking Node can be operated with any amount of BLOCK, but staking more BLOCK yields more frequent rewards.
* [__Service Nodes__](/service-nodes/introduction) - A Service Node requires 5000 BLOCK.

--8<-- "explore-service-nodes.md"
---

## Tokenomics
[BLOCK](/blockchain/introduction) is the utility token that powers the Blocknet. Fees are paid in BLOCK when using the network and 100% of those fees are distributed to [Service Nodes](/service-nodes/introduction) for supporting the network and infrastructure. Normal transaction fees on the network are also paid in BLOCK and awarded to stakers. If seeking to acquire BLOCK, [there are various options available](/project/exchanges).

Blocknet involves multiple economic models with respect to the use of the BLOCK token.

* __Block Rewards__ - Blocknet is Proof-of-Stake(PoS) with 1 BLOCK created every minute which is awarded to stakers. Stakers also receive the network transaction fees for the block they have validated. Read more about [staking rewards](/wallet/staking/#staking-rewards).
* __Service Fees__ - Service Nodes receive 100% of BLOCK fees generated from the use of services on the network, including trades performed via XBridge, interfacing with blockchains via XRouter, and use of microservices via XCloud.
* __Collateral__ - BLOCK is required for collateral to operate a Service Node, as well as to use certain services on the network.
* __[Governance](/governance/introduction)__ - Submitting proposals to the network requires a fee to be paid in BLOCK and proposals can only be voted on by Service Nodes.
* __Transaction Fees__ - Transferring funds on the network incurs a transaction fee that's paid in BLOCK and awarded to stakers.

The utility of the BLOCK token increases the buy pressure on the market, while the reward potential of operating a node reduces sell pressure on the market.







<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"






