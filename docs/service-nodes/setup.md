title: Blocknet Service Node Setup Guide
description: This guide explains step-by-step how to setup a Service Node, which earns block rewards and 100% of fees from Blocknet's services (XBridge, XRouter, XCloud).


# Service Node Setup
This guide explains step-by-step how to setup a [Service Node](/service-nodes/introduction). Operating a Service Node requires 5000 BLOCK collateral. This 5000 BLOCK collateral will still be in your wallet and in your control, but must not be moved or spent in order for the Service Node to remain valid and active. However, you may still use this collateral to participate in staking.

Operating as a Service Node requires two Blocknet wallets:

* __Collateral Wallet__ - The wallet will contain the 5000 BLOCK
  collateral and does *NOT* need to remain online and unlocked unless the 5000 BLOCK is being staked or you are [voting on a proposal](/governane/proposal-voting).
* __Service Node Wallet__ - This wallet will act as the Service Node
  and must remain online and open at all times.
## Hardware Requirements For Service Node Wallet

??? example "Hardware Requirements For Service Node Wallet"
	Hardware requirements for a Service Node vary depending on which
	[SPV wallets](/resources/glossary/#spv) and services your node will support.

	> Minimum System

	Probably the minumum HW
	requirements for *any* Service Node would be:

	- 4 CPU cores (or 4 vCPUs if the Service Node runs on a VPS)
	- 8 GB RAM
	- 200 GB SSD Storage (not sure if slower, HDD drives would work).
	- 25+MBit/s Internet download speed

	Such a system should be able to support a Service Node running the
	[Avalanche Indexer](/resources/glossary/#indexer), which requires >= 2 vCPUs and >= 100GB
	Storage. In addition to the Avalanche Indexer, it could support
	a few small SPV wallets and a Blocknet staking wallet.
	As of this writing, the most economical place to rent a VPS with
	the above specs seems to be
	[Contabo](https://contabo.com/en/vps/). In fact, Contabo's "S"
	size VPS has exactly those minimum level specs and currently rents for €4.99 /
	mo. One nice feature of renting a VPS to run a Service Node is
	that the VPS provider usually gives you the option to *upgrade*
	your system (i.e. add more storage space, vCPUs & RAM)
	without losing any of your data. So, if you're running the
	Avalanche Indexer
	on a Contabo size "S" VPS and one day the Indexer starts to require
	more storage space than you have available, or if you decide you
	want to start hosting more SPV wallets, you can easily upgrage
	your VPS to "M", "L", or ever "XL" size.

	> Medium & Large Systems
	
	If you want to host the [Avalanche Indexer](/resources/glossary/#indexer) *and* several large SPV
    wallets as well, youll need more than 200GB of storage space.
	HW requirements for a medium to large Service Node would be
    something like this:

	- 6-8 CPU cores (or 6-8 vCPUs if the Service Node runs on a VPS)
	- 8-16 GB RAM
	- 400+ GB SSD Storage (not sure if slower, HDD drives would work).
	- 25+MBit/s Internet download speed

	The Avalanche Indexer, as of June 22, 2021, requires about 100GB of
    space (~40GB for database + ~50GB for AVAX chain data).

	Then you'll need space for each of the SPV wallets you intend to host.

	To give an estimate of how much storage space is required for various
    SPV wallets, here is a snapshot of approximate disk space utilizations taken June 7, 2021:

	??? summary "Snapshot of SPV wallet disk space utilizations taken June 7, 2021"
		SPV wallet      | Estimated Size (GB)
		-------------|--------------------
		bitcoin        | 415.5
		dogecoin        | 52.9
		litecoin        | 50.8
		dash        | 29.6
		digibyte        | 25.7
		raven        | 19.7
		pivx        | 18.6
		verge        | 9.1
		crown        | 6.9
		phore        | 6.2
		unobtanium        | 3.5
		lux        | 3.2
		blocknet        | 3.2
		terracoincore        | 3.1
		alqocrypto        | 2.8
		monetaryunit        | 2.6
		syscoin        | 2.5
		merge        | 2.3
		zenzo        | 2.1
		goldcoin        | 1.5
		egulden        | 1.4
		stakecubecoin        | 1.0

	> VPS Provider Options for Small, Medium & Large Systems

	If you want to compare prices between VPS service providers, you
    can compare the offerings of companies like [Digital Ocean](https://www.digitalocean.com),
       [Contabo](https://contabo.com/en/vps/),
    [Amazon AWS](https://aws.amazon.com), and
       [Google Cloud Computing](https://cloud.google.com). A
    Google search for "VPS Hosting Service Provider" will show many
    more options. As of this
    writing, [Contabo](https://contabo.com/en/vps/) seems to offer the most hardware for the money,
    but it's always good to do a little comparison shopping.

	> Extra Large System for supporting ETH full archival node, a.k.a. Hydra

	In terms of CPU and RAM requirements, running a Hydra node
    requires:

	- 8 CPU Cores (or 8 vCPUs if the Hydra Node runs on a VPS)
	- 16 GB RAM
	
	The storage space requirements for a Hydra node are a bit more
    demanding. The Ethereum (ETH) full archival node, which is the SPV wallet
    needed to run a *Hydra* Service Node, occupies about 8TB of space
    as of this writing (July 17, 2021). Furthermore, it is growing by 3TB per
    year. (Its current size can be found
    [here](https://etherscan.io/chartsync/chainarchive).) Therefore, a
    Hydra Service Node should probably have at least 10TB
    for ETH alone, plus maybe another 1-2TB for running other SPV
    wallets and the [Avalanche Indexer](/resources/glossary/#indexer). It
    should also have the ability to expand its storage space by 3TB
    per year.

	It's also important to note that the storage for the ETH full
    archival node *must* be very fast. In other words, it must use
    SSDs, not HDDs. As of this writing, it hasn't been confirmed that
    SATA bus SSDs will be fast enough, but probably they
    will. NVMe/PCIe SSDs will *definitely* be fast enough and greatly
    accelerate the syncing of the ETH blockchain, which takes over a month.

	It is also recommended that the SSDs in a Hydra node be configured
    in a RAID mirror configuration (e.g. RAID-1, RAID-10,
    RAID-Z2). Without RAID mirroring, an SSD failure will almost certainly mean
    you'll have to resync the entire ETH full archival node, which
    takes over a month, and your Hydra node will be offline for the
    duration of the resync.

	As of this writing, *none* of the VPS Provider Options mentioned
    above are capable of providing a VPS which meets the HW
    requirements for a Hydra node, or if they are capable, the cost is
    a bit extreme and it's not clear they can expand storage space as
    needed to support the growing ETH full archival node. There *are*
    some VPS providers who are capable of both meeting current HW
    needs and allowing for storage space expansion in the
    future. There are also efforts underway to coordinate "package
    discounts" from such VPS provider(s) for a person or group of people to rent
    a number of Hydra-capable VPS's at a discounted rate. Please join
    discussions on this topic in the #hydra channel of
    [Blocknet Discord](https://discord.gg/cQ9JNyNRW4).

	Another option for meeting the HW requirements of a Hydra node is to purchase your own
    hardware and run it at home. Discussions about HW details can also
    be found in the #hydra channel of
    [Blocknet Discord](https://discord.gg/cQ9JNyNRW4).

To setup your Service Node, complete the following guides in order:

1. [Collateral Wallet Setup](/service-nodes/setup/#collateral-wallet-setup)
1. [Service Node Wallet Setup](/service-nodes/setup/#service-node-wallet-setup)
1. [Additional Setup](/service-nodes/setup/#additional-configuration)
1. [Service Node Deployment](/service-nodes/setup/#deploying-service-node)

---

## Collateral Wallet Setup

??? example "Setup using the redesign wallet"
	![Redesign Wallet](/img/service-nodes/redesign-wallet.png)

	1. [Install the Blocknet wallet](/wallet/installation).
	1. [Fully sync the wallet](/wallet/syncing).
	1. [Encrypt the wallet](/wallet/encrypting).

		!!! info "Note"
			If your BLOCK funds are located on a different wallet, you will need to first send the 5000 BLOCK to this collateral Blocknet wallet. Make sure to include a little extra (1 BLOCK) to have enough to cover transaction fees when continuing this step.

	1. Select *Tools* from the left menu, then the *Debug Console* tab. The input field at the bottom is where you will type commands.
	1. Create a new public address for the Service Node. A unique name for this address will need to be provided as an alias. To do this, type `getnewaddress [ALIAS]` into the debug console with `[ALIAS]` replaced with the alias you will be using for this address. Example:
		```
		getnewaddress snode01
		```

		![Create Address](/img/service-nodes/redesign-getnewaddress-command.png)

	1. Press the *Enter* or *Return* key. The command will appear in the console window followed by a response with the created address.

		![Address](/img/service-nodes/redesign-getnewaddress-response.png)

	1. (Optional step - Not really necessary if you carefully
		followed the
		[backup procedure](/wallet/backup-restore/#backup) when you
		installed your collateral wallet.) Retrieve your private key for the newly created address for backup purposes. Type `dumpprivkey [ADDRESS]` using the new address and press the *Enter* or *Return* key. Example:
		```
		dumpprivkey BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP
		```

		--8<-- "privkey-warning.md"

	1. Create the input(s) needed for the Service Node collateral using the following command structure (**Note:** If you already have your inputs created for your Service Node(s) you can skip this step *and* the next step):
		```
		servicenodecreateinputs [NODE_ADDRESS] [NODE_COUNT] [INPUT_SIZE]
		```
		* `NODE_ADDRESS` = The address returned in the previous step.
		* `NODE_COUNT` = The number of Service Nodes to create. 
			* Requires a minimum of 5001 BLOCK per Service Node (1 BLOCK extra for transaction fee).
			* If left blank, it defaults to `1`.
			* Example: 20,001 BLOCK will be needed to create 4 Service Nodes

		* `INPUT_SIZE` = The amount of BLOCK for each collateral input. 
		  * Must be >= `500` and <= `5000`.
		  * If left blank, it defaults to `1250`.
		  * Example: `1000` will create 5 inputs of 1000 BLOCK each per Service Node

	1. Type the above command replacing the variables with the respective values in place. See examples below:
		* Single Service Node: `servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP`
		* Single Service Node (2 inputs): `servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 1 2500`
		* Multiple Service Nodes (10k BLOCK): `servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 2 5000`

		![Create Inputs](/img/service-nodes/redesign-servicenodecreateinputs-response.png)

	1. Prepare to create a `servicenode.conf` file in your
       [data directory](/wallet/backup-restore/#data-directory) by
       first deleting any old `servicenode.conf` file in the data directory, or deleting any out-of-date service node references within your `servicenode.conf`. 
	1. Create a `servicenode.conf` configuration file. Type `servicenodesetup [NODE_ADDRESS] [ALIAS]`. An entry will be created in the `servicenode.conf` for the Service Node(s). Example:
		```
		servicenodesetup BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP snode01
		```

		![Config Setup](/img/service-nodes/redesign-servicenodesetup-response.png)

	1. Export the `servicenode.conf` configuration file. Type `servicenodeexport [ALIAS] [ENCRYPTION_PASSWORD]`. The password is used to encrypt the export data. Example:
		```
		servicenodeexport snode01 supersecretpassword
		```

		![Config Setup](/img/service-nodes/redesign-servicenodeexport-response.png)

	1. Copy this output hash for later use.
	1. Restart the Blocknet wallet.
	1. Continue on to [Service Node Wallet Setup](/service-nodes/setup/#snode-server-wallet-setup).

??? example "Setup using the classic wallet"
	![Classic Wallet](/img/service-nodes/classic-wallet.png)

	1. [Install the Blocknet wallet](/wallet/installation).
	1. [Fully sync the wallet](/wallet/syncing).
	1. [Encrypt the wallet](/wallet/encrypting).

		!!! info "Note"
			If your BLOCK funds are located on a different wallet, you will need to first send the 5000 BLOCK to this collateral Blocknet wallet. Make sure to include a little extra (0.1 BLOCK) to have enough to cover transaction fees when continuing this step.

	1. In the program menu, go to *Window* > *Console*. A new window will appear with an input field at the bottom where you will type commands.
	1. Create a new public address for the Service Node. A unique name for this address will need to be provided as an alias. To do this, type `getnewaddress [ALIAS]` into the debug console with `[ALIAS]` replaced with the alias you will be using for this address. Example:
		```
		getnewaddress snode01
		```

		![Create Address](/img/service-nodes/classic-getnewaddress-command.png)

	1. Press the *Enter* or *Return* key. The command will appear in the console window followed by a response with the created address.

		![Address](/img/service-nodes/classic-getnewaddress-response.png)

	1. (Optional step - Not really necessary if you carefully
		followed the
		[backup procedure](/wallet/backup-restore/#backup) when you
		installed your collateral wallet.) Retrieve your private key for the newly created
		address for backup purposes. Type `dumpprivkey [ADDRESS]` using the new address and press the *Enter* or *Return* key. Example:
		```
		dumpprivkey BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP
		```

		--8<-- "privkey-warning.md"

	1. Create the input(s) needed for the Service Node collateral using the following command structure (**Note:** If you already have your inputs created for your Service Node(s) you can skip this step *and* the next step):
		```
		servicenodecreateinputs [NODE_ADDRESS] [NODE_COUNT] [INPUT_SIZE]
		```
		* `NODE_ADDRESS` = The address returned in the previous step.
		* `NODE_COUNT` = The number of Service Nodes to create. 
			* Requires a minimum of 5001 BLOCK per Service Node (1 BLOCK extra for transaction fee).
			* If left blank, it defaults to `1`.
			* Example: 20,001 BLOCK will be needed to create 4 Service Nodes

		* `INPUT_SIZE` = The amount of BLOCK for each collateral input. 
		  * Must be >= `500` and <= `5000`.
		  * If left blank, it defaults to `1250`.
		  * Example: `1000` will create 5 inputs of 1000 BLOCK each per Service Node

	1. Type the above command replacing the variables with the respective values in place. See examples below:
		* Single Service Node: `servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP`
		* Single Service Node (2 inputs): `servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 1 2500`
		* Multiple Service Nodes (10k BLOCK): `servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 2 5000`

		![Create Inputs](/img/service-nodes/classic-servicenodecreateinputs-response.png)

	1. Prepare to create a `servicenode.conf` file in your
       [data directory](/wallet/backup-restore/#data-directory) by
       first deleting any old `servicenode.conf` file in the data directory, or deleting any out-of-date service node references within your `servicenode.conf`. 
	1. Create a `servicenode.conf` configuration file. Type `servicenodesetup [NODE_ADDRESS] [ALIAS]`. An entry will be created in the `servicenode.conf` for the Service Node(s). Example:
		```
		servicenodesetup BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP snode01
		```

		![Config Setup](/img/service-nodes/classic-servicenodesetup-response.png)

	1. Export the `servicenode.conf` configuration file. Type `servicenodeexport [ALIAS] [ENCRYPTION_PASSWORD]`. The password is used to encrypt the export data. Example:
		```
		servicenodeexport snode01 supersecretpassword
		```

		![Config Setup](/img/service-nodes/classic-servicenodeexport-response.png)

	1. Copy this output hash for later use.
	1. Restart the Blocknet wallet.
	1. Continue on to [Service Node Wallet Setup](/service-nodes/setup/#snode-server-wallet-setup).

---

## Service Node Wallet Setup

??? example "Setup using the redesign wallet"
	![Redesign Wallet](/img/service-nodes/redesign-wallet.png)

	1. [Install the Blocknet wallet](/wallet/installation).
	1. [Fully sync the wallet](/wallet/syncing). Encryption is not needed on this wallet since it will not be holding funds.

	--8<-- "data-directories-1.md"

	1. Open the `blocknet.conf` configuration file.
	1. A file will be opened with your default text editor. Add the following information on new lines:
		```
		server=1
		listen=1
		rpcuser=
		rpcpassword=
		rpcallowip=127.0.0.1
		port=41412
		rpcport=41414
		txindex=1

		enableexchange=1
		servicenode=1
		rpcthreads=8
		```
	1. Enter a username and password for `rpcuser=` and `rpcpassword=`. These should be difficult and secure credentials.
	1. Here the SNode Wallet is used to connect to the Blocknet blockchain with the `rpcallowip=127.0.0.1` setting (localhost). If you would like to setup a different wallet to host the Blocknet blockchain, update the `rpcallowip=` setting to the IP of that wallet.
	1. For best performance, a `maxconnections=` setting should **NOT** be specified.
	1. Save and close the `blocknet.conf` file.
	1. Open the `xbridge.conf` configuration file (also in the Blocknet data directory).
	1. A file will be opened with your default text editor. Add the following information on new lines:
		```
		[Main]
		ExchangeWallets=BLOCK
		FullLog=true
		LogPath=
		ExchangeTax=300

		[BLOCK]
		Title=Blocknet
		Ip=127.0.0.1
		Username=
		Password=
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
		Address=
		TxWithTimeField=false
		LockCoinsSupported=false
		JSONVersion=
		ContentType=
		```
	1. Set `Username=` to the same value as `rpcuser=` from your `blocknet.conf`.
	1. Set `Password=` to the same value as `rpcpassword=` from your `blocknet.conf`.
	1. Set `Ip=` to the same value as `rpcallowip=` from your `blocknet.conf`.
	1. Save and close the `xbridge.conf` file.
	1. Select *Tools* from the left menu, then the *Debug Console* tab. The input field at the bottom is where you will type commands.
	1. Import the `servicenode.conf` configuration file. Type `servicenodeimport [EXPORTED_HASH] [ENCRYPTION_PASSWORD]` with `[ENCRYPTION_PASSWORD]` replaced with the encryption password used to export your *servicenode.conf* on your collateral wallet and `[EXPORTED_HASH]` replaced with the hash that was returned in that response. Example:
		```
		servicenodeimport 5f1e7eeb2f8d2033ae95789008fbf1c60c52a45a20bee1b56ef5052438577e3916f0ff5cc468151463caa34c13097ba4cbd35b398f2cb6e7a43af675d27042b1a105845a7c61d988e6cc6388cd563f900d821dc7956727ddf897841678fa7c8c5a5ca57253a2f4bd7d9a29babae1f163f2ffc25ac60eaa7102f23cbac6837abf1f232b4d6a5fcf65b9d8ea61231fc804ddb8aeff164d79e9b6503e8b4624a153 supersecretpassword
		```

		![Config Setup](/img/service-nodes/redesign-servicenodeimport-response.png)

	1. You should receive a `true` response, which means a `servicenode.conf` file was automatically created and saved.
	1. Restart the Blocknet wallet.

??? example "Setup using the classic wallet"
	![Classic Wallet](/img/service-nodes/classic-wallet.png)

	1. [Install the Blocknet wallet](/wallet/installation).
	1. [Fully sync the wallet](/wallet/syncing). Encryption is not needed on this wallet since it will not be holding funds.

	--8<-- "data-directories-1.md"

	1. Open the `blocknet.conf` configuration file.
	1. A file will be opened with your default text editor. Add the following information on new lines:
		```
		server=1
		listen=1
		rpcuser=
		rpcpassword=
		rpcallowip=127.0.0.1
		port=41412
		rpcport=41414
		txindex=1

		enableexchange=1
		servicenode=1
		rpcthreads=8
		```
	1. Enter a username and password for `rpcuser=` and `rpcpassword=`. These should be difficult and secure credentials.
	1. Here the SNode Wallet is used to connect to the Blocknet blockchain with the `rpcallowip=127.0.0.1` setting (localhost). If you would like to setup a different wallet to host the Blocknet blockchain, update the `rpcallowip=` setting to the IP of that wallet. **Note**: Changing `rpcallowip=` to anything other than localhost will also require you to include the `rpcbind=` setting. 
	1. For best performance, a `maxconnections=` setting should **NOT** be specified.
	1. Save and close the `blocknet.conf` file.
	1. Open the `xbridge.conf` configuration file (also in the Blocknet data directory).
	1. A file will be opened with your default text editor. Add the following information on new lines:
		```
		[Main]
		ExchangeWallets=BLOCK
		FullLog=true
		LogPath=
		ExchangeTax=300

		[BLOCK]
		Title=Blocknet
		Ip=127.0.0.1
		Username=
		Password=
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
		Address=
		TxWithTimeField=false
		LockCoinsSupported=false
		JSONVersion=
		ContentType=
		```
	1. Set `Username=` to the same value as `rpcuser=` from your `blocknet.conf`.
	1. Set `Password=` to the same value as `rpcpassword=` from your `blocknet.conf`.
	1. Set `Ip=` to the same value as `rpcallowip=` from your `blocknet.conf`.
	1. Save and close the `xbridge.conf` file.
	1. In the program menu, go to *Window* > *Console*. A new window will appear with an input field at the bottom where you will type commands.
	1. Import the `servicenode.conf` configuration file. Type `servicenodeimport [EXPORTED_HASH] [ENCRYPTION_PASSWORD]` with `[ENCRYPTION_PASSWORD]` replaced with the encryption password used to export your *servicenode.conf* on your collateral wallet and `[EXPORTED_HASH]` replaced with the hash that was returned in that response. Example:
		```
		servicenodeimport 5f1e7eeb2f8d2033ae95789008fbf1c60c52a45a20bee1b56ef5052438577e3916f0ff5cc468151463caa34c13097ba4cbd35b398f2cb6e7a43af675d27042b1a105845a7c61d988e6cc6388cd563f900d821dc7956727ddf897841678fa7c8c5a5ca57253a2f4bd7d9a29babae1f163f2ffc25ac60eaa7102f23cbac6837abf1f232b4d6a5fcf65b9d8ea61231fc804ddb8aeff164d79e9b6503e8b4624a153 supersecretpassword
		```

		![Config Setup](/img/service-nodes/classic-servicenodeimport-response.png)

	1. You should receive a `true` response, which means a `servicenode.conf` file was automatically created and saved.
	1. Restart the Blocknet wallet.

---

## Additional Configuration
At this point you have completed the basic setup for a Service Node. The Service Node can operate but will not be supporting any service. Now what you need to do is setup the Service Node to support services on the network where 100% of fees are distributed to Service Nodes:

* With [XBridge](/protocol/xbridge/introduction), the decentralized exchange component of the Blocknet Protocol, 100% of [trading fees](/protocol/xbridge/fees) are distributed to Service Nodes for hosting full blockchain nodes and providing verification checks for trustless exchange between digital assets. For setup, see the [XBridge Configuration Guide](/service-nodes/xbridge-configuration).
* With [XRouter](/protocol/xrouter/introduction)\*\*, the decentralized inter-chain communication component of the Blocknet Protocol, 100% of fees are paid to Service Nodes for hosting full blockchain nodes that support SPV calls. For setup, see the [XRouter Configuration Guide](/service-nodes/xrouter-configuration).
* With [XCloud](/protocol/xcloud/introduction)\*\*, a decentralized microservice oracle network built on XRouter, allows you to monetize any microservice, blockchain call, API, or cloud tech on your own hardware, in many cases without having to write any code. For setup, see the [XCloud Configuration Guide](/service-nodes/xcloud-configuration).

\*\* **For XRouter and XCloud services**, your Service Node Wallet IP address must remain unchanged (static). If using a VPN with an IP that changes, it will impact your ability to provide these services.

---

## Deploying Service Node

??? example "Setup using the redesign wallet"

	> **On the Service Node Wallet, prepare to deploy**

	1. Start the Blocknet SNode wallet (or restart if you haven't already or have made changes).
	1. Make sure the data directory of this wallet contains the previously configured `blocknet.conf` file and the `servicenode.conf` with the Service Node credentials.
	1. Fully sync the wallet.
	1. This wallet must stay running. If the Service Node Wallet is closed, you will need to re-register the Service Node from the Collateral Wallet if you have staked a block in that time period.

	> **On the Collateral wallet, Register the Service Node**

	1. Start the Blocknet Collateral wallet (or restart if you haven't already or have made changes).
	1. Fully sync the wallet.
	1. Make sure all your inputs have at least 2 confirmations (about 2 minutes since `servicenodecreateinputs`).
	1. Open the debug console and type `servicenoderegister [ALIAS]` with `[ALIAS]` replaced with the alias of the Service Node you want to register. If `[ALIAS]` isn't specified, all known Service Nodes will be registered. You will see a response similar to this:

		![Register](/img/service-nodes/redesign-servicenoderegister-response.png)

	1. The `snodekey` will remain unchanged as long as the contents of your `servicenode.conf` remains unchanged and you haven't used the `servicenodesetup` command.


	> **On the Service Node Wallet, Send Service Node Ping to the Network**

	1. Open the debug console on the SNode wallet and type `servicenodesendping`. You should see that the Service Node status is now `"status": "running"` along with a list of the services being hosted.

		![Send Ping](/img/service-nodes/redesign-servicenodesendping-response.png)


	> **On the Service Node Wallet, Check Service Node Status**

	1. On the Service Node Wallet, open the debug console and type `servicenodestatus`. You should still see a `running` status and the services being hosted.

		![Check Status](/img/service-nodes/redesign-servicenodestatus-response.png)


	> **Check Service Node Is Available on the Network**

	1. On a client *other than* the Service Node Wallet (such as the Collateral Wallet), open the debug console and type `servicenodelist`. You should see your newly created Service Node in the returned list with the status as `"status": "running"`. Your Service Node is the one with the `"snodekey"` that matches the ones returned when registering your node.

		![Network Status](/img/service-nodes/redesign-servicenodelist-response.png)

	1. At this point the Collateral Wallet can be closed if you are not voting or staking.



??? example "Setup using the classic wallet"

	> **On the Service Node Wallet, prepare to deploy**

	1. Start the Blocknet SNode wallet (or restart if you haven't already or have made changes).
	1. Make sure the data directory of this wallet contains the previously configured `blocknet.conf` file and the `servicenode.conf` with the Service Node credentials.
	1. Fully sync the wallet.
	1. This wallet must stay running. If the Service Node Wallet is closed, you will need to re-register the Service Node from the Collateral Wallet if you have staked a block in that time period.

	> **On the Collateral wallet, Register the Service Node**

	1. Start the Blocknet Collateral wallet (or restart if you haven't already or have made changes).
	1. Fully sync the wallet.
	1. Make sure all your inputs have at least 2 confirmations (about 2 minutes since `servicenodecreateinputs`).
	1. Open the debug console and type `servicenoderegister [ALIAS]` with `[ALIAS]` replaced with the alias of the Service Node you want to register. If `[ALIAS]` isn't specified, all known Service Nodes will be registered. You will see a response similar to this:

		![Register](/img/service-nodes/classic-servicenoderegister-response.png)

	1. The `snodekey` will remain unchanged as long as the contents of your `servicenode.conf` remains unchanged and you haven't used the `servicenodesetup` command.


	> **On the Service Node Wallet, Send Service Node Ping to the Network**

	1. On the Service Node Wallet, open the debug console and type `servicenodesendping`. You should see that the Service Node status is now `"status": "running"` along with a list of the services being hosted.

		![Send Ping](/img/service-nodes/classic-servicenodesendping-response.png)


	> **On the Service Node Wallet, Check Service Node Status**

	1. On the Service Node Wallet, open the debug console and type `servicenodestatus`. You should still see a `running` status and the services being hosted.

		![Check Status](/img/service-nodes/classic-servicenodestatus-response.png)


	> **Check Service Node Is Available on the Network**

	1. On a client *other than* the Service Node Wallet (such as the Collateral Wallet), open the debug console and type `servicenodelist`. You should see your newly created Service Node in the returned list with the status as `"status": "running"`. Your Service Nodes are the ones with the `"snodekey"` that matches the ones returned when registering your node.

		![Network Status](/img/service-nodes/classic-servicenodelist-response.png)

	1. At this point the Collateral Wallet can be closed if you are not voting or staking.

---

## Operation

View the [Operations](/service-nodes/operation) for reference on how to go about common Service Node operations such as staking, voting, updating, restarting, and checking your Service Node configs.

---

## Troubleshooting
* Ensure you have the latest wallet and that it's fully synced.
* Ensure the SNode Wallet is open and synced before using the `servicenoderegister` from the Collateral Wallet.
* Ensure that you have at least 5000 BLOCK per Service Node in your designated `[NODE_ADDRESS]`.
* Ensure that your 5000 BLOCK accidentally didn’t send to a change address (if creating inputs manually).
* Ensure all your inputs have at least 2 confirmations before registering.
* Ensure you didn't include the `[` or `]` when typing commands and replacing the variables. Example:
	* Correct: `getnewaddress snode1`
	* Incorrect: `getnewaddress [snode1]`
* If you manually setup your Service Node (this guide shows the automatic procedure):
	* Ensure your `servicenode.conf` information is correct to your settings. 
	* Ensure that the `servicenode.conf` matches on both the Collateral and Service Node Wallets.
	* Ensure your configuration file is `servicenode.conf` and **NOT** `servicenode.conf.txt`.




<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





