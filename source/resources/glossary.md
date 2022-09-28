title: Blocknet Documentation Glossary
description:

# Glossary

<!--
words to add:
Full Node
Orphan

-->


---

## A

---

#### Address
Each wallet has an *address* (or multiple). Addresses are used similar
to bank account routing and checking numbers to tell the network where
to send and receive funds during transactions. The address by default
is a 34 character alphanumeric string, but an *alias* can also be
created as a more user-friendly naming preference to refer to the
wallet's default address. Within each *address* there can exist
multiple [UTXOs](#utxo) , also called [Inputs](#input).

---

## B

---

#### BLOCK
*BLOCK* is the utility token for the Blocknet network. Unlike USD where the smallest denomination is $0.01, the smallest incremental unit of BLOCK is 0.00000001 BLOCK.

#### Blockchain Block
A *block* is a record of [transaction](#transaction) data in a set period of time ([block time](#block-time)). A time-series collection of the blocks makes up the [blockchain](#blockchain) (a chain of blocks).

#### Blockchain
A *blockchain* is a growing list of records, called [blocks](#blockchain-block), which are linked using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. By design, a blockchain is resistant to modification of the data.

#### Block DX
Block DX is a [decentralized exchange](#decentralized-exchange) dApp built with the [Blocknet Protocol](#blocknet-protocol) to showcase what can be built using it.

#### Blocknet
Blocknet is a self-funded and self-governed open source project with contributors around the world building an open and collaborative ecosystem with the development of the [Blocknet Protocol](#blocknet-protocol).

#### Blocknet Protocol
The Blocknet Protocol is a blockchain [interoperablity](#interoperability) protocol that consists of 3 components: [XBridge](#xbridge), [XRouter](#xrouter), and [XCloud](#xcloud).

#### Block Reward
A *block reward* is a reward you earn when [staking](#staking) for helping secure the network.

#### Block Time
*Block time* defines the time it takes to mine a [block](#blockchain-block). In all [blockchains](#blockchain) there is an expected block time. In [Blocknet](#blocknet), the expected block time is 1 minute.



---

## C

---

#### Change Address
A *change address* is the address where the 'change' of a transaction is returned to your wallet. This is always
an [address](#address) you own. If your wallet uses a [UTXO](#utxo) of 20 BLOCK
to fund a transaction in which you are sending only 15 BLOCK, then the remaining 5
BLOCK 'change' from the transaction will be returned to your wallet in the change address. This is similar
to the concept of paying for an $15 item with a $20 bill and receiving $5 back as change.

#### Client
Depending on the context, *client* refers either to hardware running the Blocknet blockchain or software utilizing the Blocknet Protocol, which can be a blockchain, microservice, dApp, mobile app, website, etc.

#### Coin
*Coin* and *token* refers to [digital assets](#digital-asset).

#### Coin Control
[Coin Control](/wallet/send-funds/#coin-control) gives the ability to break up or combine [inputs](#input). This is comparable to going to a bank and exchanging a bunch of smaller bills for a $50 bill or breaking a larger bills for smaller denominations. Using [Coin Control](/wallet/send-funds/#coin-control) you can also choose to select specific inputs, addresses, and [change addresses](#change-address) to use for transactions.

#### Confirmation
When transactions are made, the transactions must go through a *confirmation* process, which validates the transaction to make sure it is authentic. Funds that are being confirmed cannot be used until 60 confirmations (about 60 minutes). 



---

## D

---

#### Decentralized Exchange
*Decentralized exchange* is the process exchanging [funds](#funds) between 2 parties with no middlemen. This requires the four core functions of an exchange to be decentralized: storage of funds, order books, order matching, and settlement.

#### DEX
*DEX* is a short-hand acronym for a [decentralized exchange](#decentralized-exchange).

#### Digital Asset
A *digital asset* is new asset class that describes digital cryptographic coins and tokens. These coins and tokens can represent monetary characteristics (cryptocurrency), digital or virtual goods (unique tokenized items, such as music or art), and ownership (tokenized shares, such as of land or a company). 



---

## E

---

#### Encrypted
*Encrypting* your wallet adds an additional level of security. An encrypted wallet requires a passphrase set by the user to spend funds the wallet.

#### Enterprise XRouter
An *Enterprise XRouter* Service Node (also called an *EXR* Service Node) is a
[Service Node](#service-node) which services [XRouter](#xrouter),
[XBridge](#xbridge) and [XCloud](#xcloud) requests from two different
networks simultaneously:

1. The original Peer-to-Peer (P2P) Blocknet network of Service Nodes
1. An HTTP based, high performance, metered P2P network of Service Nodes

Here are architectural diagrams of the *current* and *future* versions of
[Hydra](#hydra) Service Nodes. These illustrate the implementation
details of an *Enterprise XRouter* and its relationship to a
[Hydra](#hydra) Service Node:

![Current Hydra](/img/resources/current-hydra.png) 
![Future Hydra](/img/resources/future-hydra.png) 

See [this guide](/service-nodes/setup/#service-node-setup) to learn about
hosting Blocknet's XQuery and Hydra services on a Service Node.

#### EVM
EVM stands for *Ethereum Virtual Machine*. It refers to any blockchain
which supports smart contracts in the style of Ethereum. These include
blockchains like Ethereum/ETH, Avalanche/AVAX, Binance Smart Chain/BSC, Fantom/FTM, Solana/SOL, Polkadot/DOT, Cardano/ADA, etc.

#### EXR 
EXR stands for *Enterprise XRouter*. See [Enterprise XRouter](#enterprise-xrouter) 

#### EXR ENV
EXR ENV stands for *Enterprise XRouter Environment* - an environment
set up by running the [Global Install Script for Enterprise XRouter Environment](/service-nodes/setup/#run-global-install-script-for-enterprise-xrouter-environment).

---

## F

---

#### Funds
*Funds* refers to your [digital assets](#digital-asset).



---

## G

---

#### GETH
GETH stands for *Go ETH*. It is an implementation of the Ethereum
core node protocol written in Golang.


---

## H

---

#### Hydra
A *Hydra Service Node* is simply an [Enterprise XRouter Service Node](#enterprise-xrouter) which
hosts [EVM](#evm). A Hydra Service Node can also be easily configured to provide
[XQuery](#indexer) services, since Hydra and XQuery services share the
same payment mechanism, the same reverse proxy services, and the same
hosted EVM blockchains.

These architectural diagrams illustrate the implementation
details of a Hydra Service Node:

![Current Hydra](/img/resources/current-hydra.png) 
![Future Hydra](/img/resources/future-hydra.png) 

See [this guide](/service-nodes/setup/#service-node-setup) to learn about
hosting Blocknet's XQuery and Hydra services on a Service Node.

---

## I

---

#### Indexer
An Indexing service makes blockchain data readily accessible to
developers via an SQL-style database query protocol. The Blocknet Indexer, called "XQuery," makes indexed data
from [EVM](#evm) blockchains, (and potentially non-EVM blockchains),
readily available to developers in a
decentralized fashion. A decentralized indexing service is vital to
DApps which need ready access to blockchain data and want to maintain
their status as a DApp (Decentralized Application). Note, since
XQuery and [Hydra](#hydra) services share the
same payment mechanism, the same reverse proxy services, and the same
hosted EVM blockchains, a Service
Node set up to provide XQuery services can easily be configured to
also provide [Hydra](#hydra) services.  See
[this guide](/service-nodes/setup/#service-node-setup) to learn about
hosting Blocknet's XQuery and Hydra services on a Service Node.

#### Input
Within a users [wallet](#wallet), the total balance is composed of
either one large *input* or various smaller *inputs*. Think of an
input as a bill in a physical wallet. You can have $100 in your
wallet, but that may be composed of a single $100 bill, 5 $20 bills,
etc. There are also [addresses](#address) within each wallet. Each
address can contain multiple inputs. An input is sometimes also referred to as a [UTXO](#utxo).

#### Interchain Communication
*Interchain communication* is the ability for different blockchains to interact and communicate with each other. For example, one blockchain can write their latest block hashes to the Bitcoin blockchain and also call the data to add extra verification and security.

#### Interoperability
Blockchain *interoperability* is the ability for different blockchains to operate, interact, and communicate with one another. Interoperability comes in two parts: [exchange](#decentralized-exchange) and [communication](#interchain-communication).



<!-- ---

## J

--- -->



<!-- ---

## K

--- -->



---

## L

---

#### Locked
By having the wallet *locked*, funds cannot be sent and staking cannot be enabled. *Unlocking* the wallet, by entering in the passphrase(created when [encrypting](#encrypted) the wallet), is required to send funds and also allows [staking](#staking) to be enabled. The wallet can also be partially unlocked, which allows just for staking to be enabled, but does not allow the user to send funds.

#### Lite Wallet
A *lite wallet* is a wallet that does not require the full [blockchain](#blockchain) in order to function. It instead uses an external data source to provide [SPV](#spv) functionality.



---

## M

---

#### Mint
*Minting* is the process of generating new [digital assets](#digital-asset) on a blockchain that did not exist in any previous [blocks](#blockchain-block).

#### Multiwallet
A *multiwallet* is a [wallet](#wallet) that can store multiple types of [digital assets](#digital-asset).



---

## N

---

#### Naked Node
A *naked node* is a [Service Node](#service-node) that does not run any [xwallets](#xwallets).

#### Network
*Network* refers to the collection of peers and data on the blockchain.

#### Non-custodial
*Non-custodial* means the user has 100% control of their [funds](#funds). A third party has no control over it and cannot gain control if they wanted to.



---

## O

---

#### Open Source
*Open source* is used to describe software for which the source code is made freely available for contribution, redistributed, and modification.



---

## P

---

#### Peers
*Peers* are other wallets that you are connected to that help confirm transactions and share updated [blocks](#blockchain-block) and data between. When the wallet is not in sync, the wallet is brought up-to-date by [syncing](#syncing) with information from peers.

#### Proof-of-Stake
*Proof-of-stake*, also known as PoS, is a type of algorithm by which a blockchain [network](#network) achieves distributed consensus. 

#### Proposals
*Proposals* are requests for funding for contributions to the Blocknet ecosystem. Each
[Superblock](#superblock) period, new proposals are submitted and
BLOCK holders can cast 1 vote on these proposals for every 5000 BLOCK
they own. See details [here](/governance/introduction)



<!-- ---

## Q

--- -->



---

## R

---

#### Reward
A *reward* refers to a payment earned for providing a service.



---

## S

---

#### Service Node
*Service Nodes* provide services to the Blocknet [network](#network). Read about Service Nodes [here](/service-nodes/introduction)

#### Snode
*Snode* is a short-hand term to refer to a [Service Node](#service-node).

#### SPV
*SPV* is an acronym that stands for __Simplified Payment
Verification__. It is a method of verifying if particular transactions
are included in a block without downloading the entire blockchain. An SPV
wallet is a wallet which enables SPV by hosting the full blockchain so
the client requesting the SPV doesn't have
to. Blocknet [Service Nodes](#service-node) host multiple SPV wallets and thereby allow
SPV for multiple blockchains.

#### Staking
*Staking* is used to secure the network by confirming [blocks](#blockchain-block). Users that stake earn rewards. The reward can be referred to as a *stake*. When users earn a staking reward, it is tied to a specific [input](#input) in the user's wallet. For a user to stake, the option must be enabled.

#### Superblock
A *Superblock* refers to a specific [block](#blockchain-block) that occurs roughly once a month. The Superblock block finalizes the votes on any active [proposals](#proposals) and makes funding payouts for any passing proposals.

#### Syncing
In order to make [transactions](#transaction) or [stake](#staking), the [wallet](#wallet) needs to be up-to-date with the latest [blockchain](#blockchain) data. When a wallet is *Out of Sync*, it is not up-to-date. Alternatively, the wallet being synced means it is up-to-date.



---

## T

---

#### Token
*Token* and *coin* refers to [digital assets](#digital-asset).

#### Transaction
A transaction, similar to a bank transaction, is the process of transferring [funds](#funds) from one account to another..



---

## U

---

#### Unocked
By having the wallet *locked*, funds cannot be sent and staking cannot be enabled. *Unlocking* the wallet, by entering in the passphrase(created when [encrypting](#encrypted) the wallet), is required to send funds and also allows [staking](#staking) to be enabled. The wallet can also be partially unlocked, which allows just for staking to be enabled, but does not allow the user to send funds.

#### User
Refers to someone whom has a the wallet program installed on their computer. This may sometimes also be referred to as a [peer](#peers).

#### UTXO
UTXO stands for
[Unspent Transaction Output](https://en.wikipedia.org/wiki/Unspent_transaction_output). Within
a user's [wallet](#wallet), the total balance is composed of either
one large UTXO or various smaller UTXOs. Think of a UTXO as a bill in
a physical wallet. You can have $100 in your wallet, but that may be
composed of a single $100 bill, 5 $20 bills, etc. There are also
[addresses](#address) within each wallet. Each
address can contain multiple UTXOs. A UTXO is sometimes also referred to as an [input](#input).


---

## V

---

#### Voting
Voting is performed by [Service Nodes](#service-node) to voice approval/disapproval of [proposals](#proposals).



---

## W

---

#### Wallet
A wallet is used to hold you [funds](#funds) of
[digital assets](#digital-asset). This is the digital version of your
physical wallet that holds physical money, very much like how your
bank account works. Every wallet has one or more associated
[Addresses](#address) and each wallet *address* can contain multiple
[UTXOs](#utxo), , also called [Inputs](#input).



---

## X

---

#### XBridge
The [decentralized exchange](#decentralized-exchange) component of the [Blocknet Protocol](#blocknet-protocol).

#### XCloud
The decentralized cloud component of the [Blocknet Protocol](#blocknet-protocol).

#### XQuery
XQuery is the name of Blocknet's [Indexer service](#indexer)

#### XRouter
The [interchain communication](#interchain-communication) component of the [Blocknet Protocol](#blocknet-protocol).

#### XWallets
*XWallets* refers to the full node wallets hosted by [Service Nodes](#service-node).




<!-- ---

## Y

--- -->



<!-- ---

## Z

--- -->









<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





