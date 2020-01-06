title: Service Node XRouter Configuration Guide
description: This guide explains how to setup and configure your Service Node to support XRouter and earn additional fees.

# XRouter Configuration Guide
This guide explains how to setup and configure your Service Node to support XRouter. If you have not yet setup your Service Node, start with the [Service Node Setup Guide](/service-nodes/setup).

!!! info "Note: XRouter requires a static IP"
	For XRouter services, your Service Node Computer **IP address must remain unchanged (static IP) and use port 41412** . If using a VPN with an IP that changes, it will impact your ability to provide XRouter services.

    XRouter makes direct connections and you'll need a WAN IP as your Service Node IP address and if it's behind a router you'll need to port-forward to it.

XRouter is a decentralized interoperability protocol with an SPV client backend supported by Service Nodes that allows users to validate transactions and ensure transactions are in a block. These calls are supported by default if XRouter is enabled with no additional settings. For example, if you have a fully synced Bitcoin node with txindex on, you can use XRouter to sell transaction information on Bitcoin's blockchain. So if a user doesn't want to download the full chain, but needs to know information about a transaction, they could query your XRouter node and you can charge them a fee to do so.

You have the option to offer these services for free or to charge a fee for each call. Fees can be set to be specific for each individual call.

To setup XRouter, follow these steps:

1. [Enable XRouter](#enable-xrouter)
1. [Configure XRouter](#configure-xrouter)
1. [Deploy SPV Wallets](#deploy-spv-wallets)
1. [Additional Information](#additional-information)
1. [Setup XCloud](/service-nodes/xcloud-configuration) (option): XCloud is a decentralized microservice cloud network that allows you to monetize any microservice, blockchain, API, or cloud tech on your own hardware, many cases without having to write any code.

---

## Enable XRouter
XRouter is turned off by default. To turn it on, add `xrouter=1` to `blocknet.conf`. Changing this to `xrouter=0` will turn off XRouter. Upon enabling XRouter, SPV calls will also be enabled and free by default. See [Configure XRouter](#configure-xrouter) for further configuration.

Example `blocknet.conf`:
```
listen=1
server=1
rpcallowip=127.0.0.1
rpcuser=username
rpcpassword=password
port=41412
rpcport=41414

xrouter=1
enableexchange=1
servicenode=1
servicenodeaddr=47.18.1.29:41412
servicenodeprivkey=922m1YhfTRK6oLnSXGptbqjbSSSqXrktzAiybQBWJeQimHiHoU2
rpcthreads=8	# equal to number of supported wallets, set to no less than 8
```

!!! tip "Tip: For best performance..."

	- `maxconnections=` setting should **not** be specified. 
	- `rpcthreads=` should be set to the number of blockchains you are supporting (if running 24 blockchains, set `rpcthreads=24`). If you are running less than 8 blockchains then it should remain `rpcthreads=8` as the minimum.

After making these changes you will need to restart your Service Node Blocknet wallet.

---

## Configure XRouter
When starting the wallet, an `xrouter.conf` file is automatically created in the Blocknet wallet data directory if not already present. The `xrouter.conf` file is used to specify all your general XRouter settings and SPV call settings.

!!! info "Note: SPV support also requires *xbridge.conf* configuration."
	To support SPV calls, you must also have your `xbridge.conf` file setup for the chains you wish to support.

  For ETH, you will also need `JSONVersion=2.0` and `ContentType=application/json` added to the `xbridge.conf` ETH entry. This applies to GETH and Parity clients.

Similar to `xbridge.conf`, the general XRouter settings are specified under a `[Main]` heading.

Settings            | Description
--------------------|-------------
wallets             | The wallets you'd like to support XRouter calls on. All commands are on by default for all supported wallets listed in `wallets=`. If you want to turn one of them off, set `disabled=1` in the call's subsection.
plugins             | The XCloud services you are supporting, see [XCloud Configuration](/service-nodes/xcloud-configuration).
fee                 | The fee (in BLOCK) you require for calls. A value of `0` means there is no fee and that the calls are free (*default*). Fees can be specified for individual calls in each subsection.
clientrequestlimit  | The minimum time allowed between calls in milliseconds. A value of `-1` means there is no limit (*default*). If client requests exceed this value they will be penalized and eventually banned by your node.
disabled\*          | Used to disable a call. A value of `1` means the call is disabled and `0` means the call is enabled (*default*). This setting is only for subsections and not supported under `[Main]`.
fetchlimit          | The maximum number of records returned. This pertains to calls such as `xrGetBlocks` and `xrGetTransactions` where multiple records are returned. The default value is `50`. A value of `-1` means there is no limit.

\* Only for subsection settings, not supported under `[Main]`.

!!! info "Note: Setting values use hierarchy priority."
    Values set under `[Main]` override the default values and become the new default settings for all subsections that don't have the respective setting specified. Subsection settings override `[Main]` and default settings. Wallet-specific subsections have the highest priority and override all other settings.

    The setting hierarchy from highiest priority to lowest priority is as follows: *[BTC::xrGetBlockCount] > [BTC] > [xrGetBlockCount] > [Main] > default*. The higher priority settings override the lower priority settings.

Example `xrouter.conf`:
```

[Main]
wallets=BLOCK,SYS,BTC
plugins=
fee=0
paymentaddress=
clientrequestlimit=50

[xrGetBlockCount]
fee=0.01

[xrGetBlockHash]
fee=0.01

[xrGetTransaction]
fee=0.1
clientrequestlimit=20

[BTC::xrGetTransactions]
fee=0.5
timeout=50
fetchlimit=20

[BTC::xrGetBlocks]
fee=0.3
timeout=30
fetchlimit=20

[xrGetBlocks]
disabled=1
fetchlimit=50
```

Here is a list of current SPV calls:

Call                    | Description
------------------------|-------------
xrGetBlockCount         | Returns a blockchain's block height
xrGetBlockHash          | Returns a block number's hash
xrGetBlock              | Returns a block hash's block number
xrGetBlocks             | Returns block hashes for multiple block numbers
xrDecodeRawTransaction  | Returns decoded transaction HEX
xrGetTransaction        | Returns transaction data for transaction ID
xrGetTransactions       | Returns transaction data for multiple transaction IDs
xrSendTransaction       | Submit a signed transaction to the network

---

## Deploy SPV Wallets
1. Add the chains you want to support SPV calls for in the `wallets=` entry in `xrouter.conf`, denoted by the chain's asset's ticker. Separate each wallet name with a comma.
    * Example: `wallets=SYS,BLOCK,BTC,ETH,MNP`
1. If you added or removed blockchain support, make sure to also update the `rpcthreads=` value in the `blocknet.conf` file.
1. Use `xrReloadConfigs` to load your newly configured settings to `xrouter.conf` without needing to restart your Service Node.
1. Use `sendserviceping` to propogate these new settings to the network immediately or wait up to 10 minutes for this to happen automatically.
1. You can view your configs using `xrStatus`.

---

## Additional Information

#### Fees
While Service Nodes can set their own fees, users can also set the max fee they will pay. Any Service Node's with a fee that is higher than a user's max fee will not be used. It is recommended to offer free calls for any call that are not computationally intesive. Lower fees will help encourage an ecosystem to build around the network. A healthy ecosystem will lead to much more usage of the network and receiving a lot of small fees will be more beneficial than receiving a few high fees. Granted, some calls may actually take computational time and will therefore require a higher fee.

#### Snode Scoring
Clients keep a score of each Service Node. When a Service Node reaches a score of `-200`, the Service Node will be banned by the client for a 24hr period. After this 24hr period, the Service Node will start with a score of `-25`.

Action                                  | Change in Score
----------------------------------------|-----------------
Failure to respond to call within 30s   | -25
Failure to meet majority consensus      | -5
Matching consensus                      | correct_nodes * 2
Sending bad XRouter config              | -10
Sending bad XCloud config               | -2

These values are subject to change in future releases. Join the [Service Node mailing list](https://eepurl.com/c5OJMj) to stay updated.











<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"






