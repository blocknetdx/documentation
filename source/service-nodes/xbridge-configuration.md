title: Service Node XBridge Configuration Guide
description: This guide explains how to setup and configure your Service Node to support XBridge and earn additional fees.

# XBridge Configuration Guide
This guide explains how to setup and configure your Service Node to support XBridge. If you have not yet setup your Service Node, start with the [Service Node Setup Guide](/service-nodes/setup).

XBridge is a decentralized exchange protocol with the ability to perform non-custodial, trustless, and decentralized exchange between any digital assets that is supported by the Blocknet Protocol. XBridge allows any application to perform decentralized exchange, opening the door to an ecosystem of decentralized trading services (see the [list of compatible blockchains](/protocol/xbridge/compatibility)). Service Nodes are used to verify that the UTXOs in the trades are valid and relay the order book. For these services, Service Nodes receive 100% of [trade fees](/protocol/xbridge/fees).

For each market you would like to support and earn fees from, you must host the full nodes of those blockchains. For example, if you are hosting full nodes of Bitcoin, Litecoin, and Blocknet, you would be supporting the following markets: BTC-LTC, BTC-BLOCK, LTC-BTC, LTC-BLOCK, BLOCK-BTC, BLOCK-LTC.

!!! warning "Note: Full nodes are required."
	Lite wallets and Electrum wallets are not supported. You must host full blockchain nodes with `txindex=1`. In order to check if you are running a full node, use the `getblockchaininfo` command. You should see `"pruned": false,` if you are running a full node. If you see `"pruned": true,` then make sure `txindex=1` is in that wallet's configureation file and restart the wallet. See the [list of compatible blockchains](/protocol/xbridge/compatibility).

To setup XBridge, follow these steps:

1. [Enable XBridge](#enable-xbridge)
1. [Configure XBridge](#configure-xbridge)
1. [Deploy Wallets](#deploy-wallets)

---

## Enable XBridge
XBridge is turned off by default. To turn it on, add `enableexchange=1` to `blocknet.conf`. Changing this to `enableexchange=0` will turn off XBridge.


Example `blocknet.conf`:
```
listen=1
server=1
rpcallowip=127.0.0.1
rpcuser=username
rpcpassword=password
port=41412
rpcport=41414

enableexchange=1
servicenode=1
rpcthreads=8	# equal to number of supported wallets, set to no less than 8
```

!!! tip "Tip: For best performance..."

	- `maxconnections=` setting should **not** be specified. 
	- `rpcthreads=` should be set to the number of blockchains you are supporting (if running 24 blockchains, set `rpcthreads=24`). If you are running less than 8 blockchains then it should remain `rpcthreads=8` as the minimum.

After making these changes you will need to restart your Service Node Blocknet wallet.

---

## Configure XBridge
To configure XBridge, Blocknet's `xbridge.conf` file and the wallet configuration files for each supported blockchain must be setup properly. Configuration is specific to the blockchain and wallet version. Here is a list of [compatible blockchains and wallet versions](/protocol/xbridge/compatibility). All configuration files can be found in the [blockchain-configuration-files Github repo](https://github.com/blocknetdx/blockchain-configuration-files).

Blocknet uses a manifest ([view manifest](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json)) to determine which configurations to use based off the blockchain and wallet version. The manifest uses a code-friendly format called JSON.

This manifest uses "version groups", which is a group of wallet versions for a blockchain that pertain to a specific set of configurations. A blockchain can have multiple version groups, each with different sets of wallet versions. Each version group is separated by {curly brackets} and contains similar sets of information. The information you will need to focus on is the following:

Key          | Example Data (Bitcoin)                    | Description
-------------|-------------------------------------------|-----------------------------
blockchain   | Bitcoin                                   | The name of the blockchain.
ticker       | BTC                                       | The blockchain's ticker.
ver_name     | Bitcoin v0.16.x                           | Version group name.
versions     | ["v0.16.0","v0.16.1","v0.16.2","v0.16.3"] | The wallet versions compatible with this version group.
xbridge_conf | bitcoin--v0.15.1.conf                     | Filename of XBridge configs for these wallet version.
wallet_conf  | bitcoin--v0.16.0.conf                     | Filename of wallet config for these wallet versions.


#### Wallet Confs
1. In the [manifest](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json), find the version group for the blockchain you want to support. For example, if you want to support Bitcoin and have wallet version 0.17.0.1 then find the version group that says `"blockchain": "Bitcoin"` and has `"v0.17.0.1"` listed under `"versions"`. Thre are multiple version groups for Bitcoin, but only 1 version group with v0.17.0.1 listed under it:
```
  {
    "blockchain": "Bitcoin",
    "ticker": "BTC",
    "ver_id": "bitcoin--v0.17.0",
    "ver_name": "Bitcoin v0.17.x",
    "conf_name": "bitcoin.conf",
    "dir_name_linux": "bitcoin",
    "dir_name_mac": "Bitcoin",
    "dir_name_win": "Bitcoin",
    "repo_url": "https://github.com/bitcoin/bitcoin",
    "versions": [
      "v0.17.0",
      "v0.17.0.1",
      "v0.17.1"
    ],
    "xbridge_conf": "bitcoin--v0.15.1.conf",
    "wallet_conf": "bitcoin--v0.17.0.conf"
  },
```
1. Take a note of the `"wallet_conf"` filename. For Bitcoin v0.17.0.1 it is `bitcoin--v0.17.0.conf`.
1. Navigate to the `wallet-confs/` folder of the blockchain configuration files repo: [https://github.com/blocknetdx/blockchain-configuration-files/tree/master/wallet-confs](https://github.com/blocknetdx/blockchain-configuration-files/tree/master/wallet-confs)
1. Open the file with the filename listed in the version group. For Bitcoin v0.17.0.1, filename `bitcoin--v0.17.0.conf`, that would be this file: [https://github.com/blocknetdx/blockchain-configuration-files/blob/master/wallet-confs/bitcoin--v0.17.0.conf](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/wallet-confs/bitcoin--v0.17.0.conf)
1. Copy that file's contents. These are the contents of `bitcoin--v0.17.0.conf`:
```
server=1
listen=1
rpcuser=
rpcpassword=
rpcallowip=127.0.0.1
port=8333
rpcport=8332
txindex=1

# Legacy addresses must be used (address must begin with "1", not "3")
addresstype=legacy
changetype=legacy

# Enable deprecated calls
deprecatedrpc=signrawtransaction
```
1. Open the wallet's configuration file. For Bitcoin this is `bitcoin.conf`.
1. Delete any contents in this file. This is important because and duplicate settings can mess with the configuration.
1. Paste the previously copied file contents into the wallet's configuration file. 
1. Enter a username and password for `rpcuser=` and `rpcpassword=`. These should be difficult and secure credentials.
1. Enter the IP of your Service Node client for `rpcallowip=`. If this blockchain will be hosted on the Service Node computer, use `rpcallowip=127.0.0.1` (localhost).
1. Save the configuration file.
1. If the blockchain's wallet has been open, you will ned to restart it to load the updated configurations.
1. Repeat this process for each blockchain you want to support.


#### XBridge Conf
1. In the [manifest](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json), find the version group for the blockchain you want to support. For example, if you want to support Bitcoin and have wallet version 0.17.0.1 then find the version group that says `"blockchain": "Bitcoin"` and has `"v0.17.0.1"` listed under `"versions"`. Thre are multiple version groups for Bitcoin, but only 1 version group with v0.17.0.1 listed under it:
```
  {
    "blockchain": "Bitcoin",
    "ticker": "BTC",
    "ver_id": "bitcoin--v0.17.0",
    "ver_name": "Bitcoin v0.17.x",
    "conf_name": "bitcoin.conf",
    "dir_name_linux": "bitcoin",
    "dir_name_mac": "Bitcoin",
    "dir_name_win": "Bitcoin",
    "repo_url": "https://github.com/bitcoin/bitcoin",
    "versions": [
      "v0.17.0",
      "v0.17.0.1",
      "v0.17.1"
    ],
    "xbridge_conf": "bitcoin--v0.15.1.conf",
    "wallet_conf": "bitcoin--v0.17.0.conf"
  },
```
1. Take a note of the `"xbridge_conf"` filename. For Bitcoin v0.17.0.1 it is `bitcoin--v0.15.1.conf`.
1. Navigate to the `xbridge-confs/` folder of the blockchain configuration files repo: [https://github.com/blocknetdx/blockchain-configuration-files/tree/master/xbridge-confs](https://github.com/blocknetdx/blockchain-configuration-files/tree/master/xbridge-confs)
1. Open the file with the filename listed in the version group. For Bitcoin v0.17.0.1, filename `bitcoin--v0.15.1.conf`, that would be this file: [https://github.com/blocknetdx/blockchain-configuration-files/blob/master/xbridge-confs/bitcoin--v0.15.1.conf](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/xbridge-confs/bitcoin--v0.15.1.conf)
1. Copy that file's contents. These are the contents of `bitcoin--v0.15.1.conf`:
```
[BTC]
Title=Bitcoin
Address=
Ip=127.0.0.1
Port=8332
Username=
Password=
AddressPrefix=0
ScriptPrefix=5
SecretPrefix=128
COIN=100000000
MinimumAmount=0
TxVersion=2
DustAmount=0
CreateTxMethod=BTC
MinTxFee=7500
BlockTime=600
GetNewKeySupported=false
ImportWithNoScanSupported=false
FeePerByte=120
Confirmations=1
```
1. Open the `xbridge.conf` file. This file can be found in the Blocknet wallet data directory. This file is used to tell the Blocknet wallet how to communicate with the other wallets.
1. At the beginning of the file, enter the following main settings:
```
[Main]
ExchangeWallets=
FullLog=true
```
1. After the [Main] settings, paste the previously copied file contents.
1. Repeat this process and paste in the XBridge configurations for other blockchains.
1. Update each blockchain's `Username=`, `Password=`, and `Ip=` setting with the `rpcuser=`, `rpcpassword=`, and `rpcallowip=` values from the respective wallet conf file. The `Address=` setting can be left blank.
1. Add the blockchain's ticker to the `ExchangeWallets=` setting, separating each one with a comma (no spaces).
1. Save the `xbridge.conf` file.
1. If the blockchain's wallet has been open, you will need to restart it to load the updated configurations.
	* Alternatively, the [dxLoadXBridgeConf](https://api.blocknet.co/#dxloadxbridgeconf) command can be used from either the Debug Console or the command line.

Example `xbridge.conf`:
```
[Main]
ExchangeWallets=BLOCK,LTC,SYS
FullLog=true

[BLOCK]
Title=Blocknet
Ip=127.0.0.1
Port=41414
AddressPrefix=26
ScriptPrefix=28
SecretPrefix=154
COIN=100000000
MinimumAmount=0
TxVersion=1
DustAmount=0
CreateTxMethod=BTC
GetNewKeySupported=true
ImportWithNoScanSupported=true
MinTxFee=10000
BlockTime=60
FeePerByte=20
Confirmations=0
Username=BlockDXBlocknet
Password=13d9c8f8-61e9-2ddf-0418-3232e52bab39
Address=
TxWithTimeField=false
LockCoinsSupported=false

[LTC]
Title=Litecoin
Ip=127.0.0.1
Port=9332
AddressPrefix=48
ScriptPrefix=50
SecretPrefix=176
COIN=100000000
MinimumAmount=0
DustAmount=0
CreateTxMethod=BTC
GetNewKeySupported=false
ImportWithNoScanSupported=true
FeePerByte=200
MinTxFee=50000
TxVersion=1
BlockTime=150
Confirmations=0
Username=BlockDXLitecoin
Password=b28a9f5e-ba864-7bec-9fea-928f78ba910
Address=
TxWithTimeField=false
LockCoinsSupported=false

[SYS]
Title=Syscoin
Ip=127.0.0.1
Port=8370
AddressPrefix=63
ScriptPrefix=5
SecretPrefix=128
COIN=100000000
MinimumAmount=0
TxVersion=1
DustAmount=0
CreateTxMethod=BTC
MinTxFee=10000
BlockTime=60
GetNewKeySupported=false
ImportWithNoScanSupported=false
FeePerByte=20
Confirmations=0
Username=BlockDXSyscoin
Password=6af915fd-a98c-1188-9213-b785e4eb49bf
Address=
TxWithTimeField=false
LockCoinsSupported=false
```

---

## Deploy Wallets
1. Add the blockchains you want to add trading support for in the `ExchangeWallets=` entry in `xbridge.conf`, denoted by the chain's asset's ticker. Separate each wallet name with a comma (no space). You can keep the rest of the configuration body the same, only the `ExchangeWallets=` setting needs to be updated (unless adding new support).
    * Example: `ExchangeWallets=BLOCK,LTC,BTC,SYS,DGB`
1. Restart the Blocknet wallet or use the [dxLoadXBridgeConf](https://api.blocknet.co/#dxloadxbridgeconf) command (from either the Debug Console or the command line) to load the updated settings.
1. Use `servicenodesendping` to propogate these new settings to the network immediately or wait up to 3 minutes for this to happen automatically.
1. You can view the blockchains you are supporting with the `dxGetLocalTokens` command.







<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"






