title: 
description:

# Overview

---

## <img class="icon" alt="Blocknet logo" src="img/icons/blocknet-logo.svg" /> What is Blocknet?
--8<-- "what-is-blocknet.md"

---

## Technical Overview
Blocknet is a Proof-of-Stake (PoS) blockchain with a utility token called [BLOCK](/blockchain/introduction). Unlike other currency-focused blockchains, Blocknet is a service-based blockchain comprised of 3 main components:

* __XRouter__ - Provides the Blocknet Protocol with a communication layer consisting of an inter-blockchain SPV client backend that enables the verification of blockchain records without requiring users to download the full blockchain. XRouter allows applications to interface with blockchains on the TCP/IP networking layer, enabling a true Internet of Blockchains;
* __XBridge__ - Provides the ability to perform trustless atomic swap exchanges between any blockchain that is supported by the Blocknet Protocol via APIs. XBridge allows any application to perform decentralized exchange, opening the door to an ecosystem of decentralized trading services;
* __XCloud__ - Provides a decentralized microservice cloud network powered by XRouter. Developers will be able to put both blockchain and non-blockchain microservices on Blocknet’s “public cloud” decentralized network. XCloud allows applications to run entirely decentralized, opening the door to the possibility of monetizable, fully decentralized applications;

The Blocknet Protocol is designed to maximize interoperability between different blockchains through the use of these components. Just as the internet enabled computers to communicate, the Blocknet Protocol is critical for blockchains to realize full potential.
 

---

## Nodes
The network is powered by 2 types of nodes: 

* __Staking Nodes__ - Secures the network by staking BLOCK to verify the blockchain. This service earns block rewards;
* __Service Nodes__ - Hosts the full nodes of compatible blockchains, hosts microservices, audits interactions, and performs anti-spam and anti-DOS measures for the network. This service earns stakers block rewards and 100% of fees generated from use of the network's services;

The following are the requirements to operate each type of node: 

* __Staking Nodes__ - A Staking Node can be operated with any amount of BLOCK, but staking more BLOCK yields more frequent rewards;
* __Service Nodes__ - A Service Node requires 5000 BLOCK;

---

## Tokenomics
[BLOCK](/blockchain/introduction) is the utility token that powers the Blocknet. Fees are paid in BLOCK when using the network and 100% of those fees are distributed to Service Nodes for supporting the network and infrastructure. Normal transaction fees on the network are also paid in BLOCK, but those fees are burned. If seeking to acquire BLOCK, [there are various options available](/project/exchanges).

Blocknet involves multiple economic models with respect to the use of the BLOCK token.

* __Block Rewards__ - Blocknet is Proof-of-Stake(PoS) with 1 BLOCK created every minute, of which 30% is awarded to Staking Nodes and 70% to Service Nodes;
* __Service Fees__ - Service Nodes receive 100% of BLOCK fees generated from the use of services on the network, including trades performed via XBridge, interfacing with blockchains via XRouter, and use of microservices via XCloud;
* __Collateral__ - BLOCK is required for collateral to operate a Service Node, as well as to use certain services on the network;
* __[Governance](/governance/introduction)__ - Submitting proposals to the network requires a fee to be paid in BLOCK and proposals can only be voted on by Service Nodes;
* __Transaction Fees__ - Transferring funds on the network incurs a transaction fee paid in BLOCK;

The utility of the BLOCK token increases the buy pressure on the market, while the reward potential of operating a node reduces sell pressure on the market.







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
// var relatedLinks = [{"name":"Blocknet Website","link":"https://blocknet.co"},{"name":"API Docs","link":"https://api.blocknet.co"}];
var relatedLinks = [];
</script>

--8<-- "related-links.html"
<!-- 
======= End: Related Links Section ======= 
-->







