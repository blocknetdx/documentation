title: 
description:

# Introduction
--8<-- "what-is-blocknet.md"

---

## Background
Started in 2014, Blocknet is a decentralized, [community-governed](/governance/introduction), [self-funded](/governance/introduction#superblock), open-sourced project that serves as a connector between different blockchains, markets, and communities. 

The project was founded on the principles of openness, transparency, and maintaining a high level of decentralization. These principles apply to both our community and protocol, which are aimed to bring blockchains and communities together.

Blocknet is unique in that there is no company or foundation behind the project. Instead, Blocknet is [self-governed](/governance/introduction) by its stakeholders, meaning that stakers, token-holders, [Service Node](/service-nodes/introduction) operators and others with a stake in the blockchain have the ability to make decisions together. This self-governance is maintained through a Superblock mechanism, as well as open communication in our [Discord](https://discord.gg/2e6s7H8). 

The project is also open-source, meaning anybody can contribute. From development, to content creation, to tools and services, we welcome all and encourage you to take part! You have the freedom to lead up your own project, collaborate with others at your own pace, or come and go as you please. We’re also always working to develop and improve our collaboration process, so if there’s any suggestions on ways to better the process we’d love to hear it!

At Blocknet, we take pride in the level of decentralization the project and protocol maintains. We invite you to join us in our vision of a collaborative blockchain ecosystem.

<!-- ---

## Purpose 
- connect blockchains to basically create an internet of blockchains
- future-proof development
- remove overhead like an isp does

-->

---

## Vision
The future Blocknet sees for blockchain is a highly collaborative microservice ecosystem.

At the moment, there are many projects that try to provide as many features as possible in a single blockchain, resulting in the finished product being inefficient and bloated. This is called monolithic architecture and is generally considered poor practice in software development. 

We envision an ecosystem of single-purpose microservice blockchains that perform one task really well and are secure, reliable, and efficient. These microservice blockchains can then be consumed by dApps and other blockchains to build more complex, yet modular, services.

This type of architecture is made possible with the Blocknet Protocol. Just as the internet enabled computers to communicate, the Blocknet Protocol enables an internet of blockchains, which is critical for the ecosystem to realize its full potential.

Aside from the [use-cases listed here](/project/blocknet-whitepaper.pdf#page=37), let’s take a look at 2 more specific examples of what the Blocknet Protocol enables:

**Development**

If developing a dApp, in the current state of the ecosystem a developer must choose between either developing on an existing platform such as Ethereum, forking a project with similar traits, or building a blockchain from scratch. However, with the use of the Blocknet Protocol, it makes development blockchain-agnostic. This means development can occur on any chain and the features needed can be pulled in from other blockchains. 

For instance, if building a dApp on Ethereum and needed a storage solution, the dApp will be able to use the protocol to communicate with Siacoin or Storj or any other storage blockchain to consume their services. If the dApp needed to perform heavy computations, Golem or Sonm could be used. If the dApp had a payment aspect, payments can be made in Bitcoin or Litecoin, which are more widely supported by vendors.

The protocol enables the use of services from other chains similar to the way libraries are used in traditional software development, allowing developers to focus on the business logic of the application. This technology helps future proof development and also helps monetize blockchain services as features on blockchains are consumed.

**Supply Chain**

In supply chain, there will be multiple blockchains being used at various steps of the process much like there is today with traditional software stacks. The Blocknet Protocol would allow information to be accessible between these different blockchains. For instance, pharmaceutical manufacturers have strict regulations to follow and need to provide certain information and assurances. Being able to access lot information from the raw materials being consumed, temperature and humidity information during transportation, and final destinations are all important. The Blocknet Protocol would enable this communication to occur in a trustless matter, which is important to ensure validity of the information.

---

## Project History
Blocknet was created on October 20th, 2014. A week later, from October 29th, 2014 until November 5th, 2014 an initial trade [offering was held on Bittrex](http://digitalmoneytimes.com/blocknet-ito-token-sale-is-a-success-sale-numbers-revealed/). In the initial trade offering, 3,876,915.43 [BLOCK](/blockchain/introduction) was sold at a price of 0.00025 BTC per BLOCK. There was 369 BTC sold plus altcoins, for a combined total of 969 BTC worth. The price of BTC on November 5th, 2014 was around $335, bringing the total value to $325,000.

The founding team then set out to conduct research on how to best conduct [atomic swaps](https://en.bitcoin.it/wiki/Atomic_swap) and develop an interoperability protocol that is not only decentralized, but also trustless. 

* __Dec 2014__ - First messages sent across blockchains (data transport proof-of-concept)
* __Oct 2015__ - The Blocknet Protocol v.1 (proof-of-concept)
* __Sept 2015__ - [The first trade took place](https://twitter.com/The_Blocknet/status/643427142328549376) on the fully decentralized exchange between BitSwift and XCurrency using the Blocknet Protocol
* __Dec 2015__ - Blockchain XRouter (proof-of-concept)
* __Mar 2016__ - The Blocknet Protocol v.2 (TierNolan's algo, no CLTV)
* __Aug 2016__ - The Blocknet Protocol v.3 (CLTV: nonmalleable design)
* __Dec 2016__ - XBridge alpha was released on the mainnet allowing users to conduct peer-to-peer trading directly from the wallets of the coins being traded
* __May 2017__ - Service Node design (QoS provider concept)
* __Sept 2017__ - Service Nodes launch on mainnet
* __Mar 2018__ - XBridge beta
* __Mar 2018__ - Block DX(decentralized exchange) dApp beta built on the Blocknet Protocol
* __June 2018__ - Blocknet XRouter beta

---

## Codebase History

* XCurrency was created July 9, 2014 
	* Forked Bitcoin
	* Added Dash X11 algorithm
	* Added Peercoin Proof of Stake
* Bitswift was created September 30, 2014
	* Forked XCurrency
	* Replaced X11 with X15 algorithm
* Blocknet was created on October 20, 2014
	* Forked Bitswift
	* Added Blocknet XBridge
* Blocknet hardforked on September 1, 2017
	* Forked PIVX
	* Removed PIVX Seesaw mechanism
	* Transferred Blocknet XBridge














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





