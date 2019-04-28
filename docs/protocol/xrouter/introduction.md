title: Blocknet Protocol - XRouter Introduction
description: XRouter is the world's first interoperability protocol with a blockchain router and decentralized inter-blockchain SPV client backend.


# XRouter

---

## Introduction
XRouter provides blockchain interoperability for the Blocknet Protocol with a communication layer consisting of an inter-blockchain SPV client backend, enabling the verification of blockchain records without requiring users to download the full blockchain. This empowers development of lightweight microservice architectures that harness contracts, protocols, and services from other blockchains, laying a foundation for a decentralized API ecosystem.

Since XRouter functions on the TCP/IP level, it is compatible with any network. This includes public and private DLT's from Bitcoin, to IOTA, to Hyperledger.

[Service Node](/service-nodes/introduction) earn 100% of fees from [XBridge](/protocol/xbridge/introduction), XRouter, and [XCloud](/protocol/xcloud/introduction) services. If you'd like to operate your own Service Node, see the [Service Node Setup Guide](/service-nodes/setup).

To use XRouter, see the [XRouter API](https://api.blocknet.co/#xrouter) and [Setup Guide](https://api.blocknet.co/#xrouter-setup).


## Design
The XRouter system utilizes the Service Node network to route calls from the client directly to the respective blockchain. There are 2 types of XRouter calls: submissions and queries. 

XRouter submissions are calls that involve interactions with a blockchain, such as `xrSendTransaction`. With submissions, the packets are routed from the client to the respective blockchain and a response, if any, is routed back to the client. 

XRouter queries are calls requesting information from a blockchain, such as `xrGetBlockCount`. With queries, the packets are also routed from the client to the respective blockchain and the response of the information queried is routed back to the client. XRouter queries can require a specific amount of Service Nodes to receive a response from in order to achieve consensus on the final answer. 

<div class="diagram-group">
	<strong>XRouter Overview</strong>
	<img src="/img/protocol/xrouter-overview-2.png">
	<a href="/img/protocol/xrouter-overview-2.png" target="_blank">(view full size image)</a>
</div>

The following diagrams depict the events of an XRouter query and submission. As seen in the diagrams, a "client" refers to software utilizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.


<div class="diagram-group">
	<strong>XRouter Query</strong>
	<img class="diagram" src="/img/protocol/xrouter-query.png">
	<a href="/img/protocol/xrouter-query.png" target="_blank">(view full size image)</a>
</div>

The flow of the diagram is top-to-bottom:

1. The client dispatches a packet for a query via API call to the Service Node network.
1. The Service Nodes supporting the queried blockchain receive the packet.
1. The Service Nodes route the packet of the query to the blockchain.
1. The Service Nodes route the response from the blockchain back to the client.
1. The client receives all responses, as well as a response for a majority consensus on the answer.


<div class="diagram-group">
	<strong>XRouter Submission</strong>
	<img class="diagram" src="/img/protocol/xrouter-submission.png">
	<a href="/img/protocol/xrouter-submission.png" target="_blank">(view full size image)</a>
</div>

1. The client dispatches a packet for a submission via API call to the Service Node network.
1. The Service Nodes supporting the desired blockchain receive the packet.
1. The Service Nodes route the packet of the query to the blockchain.
1. If there is a response from the blockchain, the Service Nodes route the response back to the client.


## Namespace
XRouter SPV wallets utlize the `xrs::` namespace while [XCloud](/protocol/xcloud/introduction) services utilize the `xrs::` namespace. A list of the SPV wallets and services can be viewed using [xrGetNetworkServices](https://api.blocknet.co/#xrgetnetworkservices) and you can pre-connect to the nodes with [xrConnect](https://api.blocknet.co/#xrconnect).


## Node Scoring
Clients keep a score of each Service Node. When a Service Node reaches a score of `-200`, the Service Node will be banned by the client for a 24hr period. After this 24hr period, the Service Node will start with a score of `-25`. The ban score threshold can be adjusted using the `xrouterbanscore` setting in `blocknetdx.conf` (see [setup](https://api.blocknet.co/#xrouter-setup)). This scoring used for both XRouter and [XCloud](/protocol/xcloud/introduction).

Action                                  | Change in Score
----------------------------------------|-----------------
Failure to respond to call within 30s   | -25
Failure to meet majority consensus      | -5
Matching consensus                      | correct_nodes * 2
Sending bad XRouter config              | -10
Sending bad XCloud config               | -2

This mechanism and values are subject to change in future releases. Join the [Developer mailing list](http://eepurl.com/dDjhYH) to stay updated.


## Fees
With XRouter, and subsequently [XCloud](/protocol/xcloud/introduction), fees are determined by a free market. Service Nodes can specify the fee that they wish to charge for a call and client can specify the max fee they are willing to pay for calls.


## Use Cases

The applications for XRouter are as vast and imaginative as the internet. Below are a few examples of use cases:

* __Supply Chain__ - In supply chain there will be multiple blockchains being used at various steps of the process much like there is today with traditional software stacks. The Blocknet Protocol and XRouter would allow information to be accessible between these different blockchains. For Example, pharmaceutical manufacturers have strict regulations to follow and need to provide certain information and assurances. Being able to access batch information from the raw materials being consumed, temperature and humidity information during transportation, and final destinations are all important. A smart contract utilizing XRouter to gather this information from each respective chain and write it to the pharmaceutical’s blockchain along with the batch code. XRouter would enable this communication to occur in a trustless way, which is important to ensure validity of the information.

* __Storage and Hosting__ - If creating a dApp on Ethereum, you may require storage functionality. Ethereum doesn’t intrinsically handle file storage very efficiently. In this scenario, XRouter can be used to interact with other blockchains such as Storj, Filecoin, Sia, or Swarm to utilize their storage services.

* __Media and Content__ - For content creation, a creator has the option of publishing to the LBRY Credits or Alexandria blockchains. Similar to HootSuite, which is a tool that allows posting to multiple social media platforms simultaneously, a dApp can be created using XRouter that offers the same benefit. The user can post their content once, whether it’s audio, video, literature, or art, and have it published to Alexandria’s and LBRY Credit’s blockchain platform simultaneously. 

* __Markets__ - There are many blockchains creating decentralized marketplaces including Origami, District0x, OpenBazaar, and Syscoin’s marketplace, but the offering of products are relatively low on each independent platform. A dApp that utilizes XRouter to aggregate all the products into a single hub would offer a lot more options to users and a fuller marketplace. It can also make publishing products easier by publishing to all platforms simultaneously through a single form, offering more exposure than posting to a single marketplace while saving time.

* __Business and Industry__ - There are many dApps and blockchains that will end up using health data. Rather than submitting health data to each application, a universal EHR (Electronic Health Record) blockchain can be created to manage personal medical data and accessibility of data by each application. The health data on this EHR ledger can be shared amongst healthcare providers, hospitals, and insurance blockchains, dApps, and applications via XRouter. 

* __Certifications__ - Certifications and licensing records can be stored on a dedicated blockchain where they could be verified by a dApp built on the Blocknet Protocol. These records can be used to confirm qualifications and grant access or permissions.















<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





