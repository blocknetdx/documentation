title: Blocknet Service Node Setup Guide
description: This guide explains step-by-step how to setup a Service Node, which earns block rewards and 100% of fees from Blocknet's services (XBridge, XRouter, XCloud).


# Service Node Setup
This guide explains step-by-step how to setup a [Service Node](/service-nodes/introduction). Operating a Service Node requires 5000 BLOCK collateral. This 5000 BLOCK collateral will still be in your wallet and in your control, but must not be moved or spent in order for the Service Node to remain valid and active. However, you may still use this collateral to participate in staking.

Operating as a Service Node requires two Blocknet wallets:

* __Collateral Wallet__ - This wallet will contain the 5000 BLOCK
  collateral and does *NOT* need to remain online and unlocked unless the 5000 BLOCK is being staked or you are [voting on a proposal](/governane/proposal-voting).
* __Service Node Wallet__ - This wallet will act as the Service Node
  and must remain online and open at all times.
## Hardware Requirements For Service Node Wallet

??? abstract "Hardware Requirements For Service Node Wallet"
	Hardware requirements for a Service Node vary depending on which
	[SPV wallets](/resources/glossary/#spv) and services your node will support.

	> Minimum System

	Probably the minumum HW
	requirements for *any* Service Node would be:

	- 4 CPU cores (or 4 vCPUs if the Service Node runs on a VPS)
	- 8 GB RAM
	- 200 GB SSD Storage (doubtful that slower, HDD drives would work).
	- 25+MBit/s Internet download speed. (100+ MBit/s is much better
      for faster syncing.)

	Such a system could support
	a few small SPV wallets and a Blocknet staking wallet.
	As of this writing, the most economical place to rent a VPS with
	the above specs seems to be
	[Contabo](https://contabo.com/en/vps/). In fact, Contabo's "S"
	size VPS has exactly those minimum level specs and currently rents for €4.99 /
	mo.
	> Medium & Large Systems
	
	If you want to host the
    [XQuery Indexer](/resources/glossary/#indexer) (and maybe a few SPV
    wallets as well), youll need 16 GB of RAM and more than 300GB of
    SSD storage space. XQuery *alone* requires 300 GB of storage
    space, so if you want to host XQuery *and* a few SPV wallets, you
    should really have 400+ GB of SSD storage space.

	!!! warning "16 GB of RAM and 300 GB of SSD storage space are required to support indexing of the AVAX chain by XQuery!"

	HW requirements for a medium to large Service Node would be
    something like this:

	- 6-8 CPU cores (or 6-8 vCPUs if the Service Node runs on a VPS)
	- 16 GB RAM
	- 400+ GB SSD Storage
	- 25+MBit/s Internet download speed  (100+ MBit/s is much better
      for faster syncing.)

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
       [Contabo](https://contabo.com/en/vps/), [Vultr](https://www.vultr.com/products/cloud-compute/#pricing),
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
    demanding. The Go-Ethereum (GETH) full archival node, which is the SPV wallet
    needed to run a *Hydra* Service Node, occupies about 8TB of space
    as of this writing (July 17, 2021). Furthermore, it is growing by 3TB per
    year. (Its current size can be found
    [here](https://etherscan.io/chartsync/chainarchive).) Therefore, a
    Hydra Service Node should probably have at least 10TB
    for ETH alone, plus maybe another 1.5-2TB for running other SPV
    wallets and the [XQuery Indexer](/resources/glossary/#indexer). It
    should also have the ability to expand its storage space by 3TB
    per year.

	*Update Sept. 27, 2021: Some Blocknet community members are
    researching the possibility of using the [Erigon ETH archival node](https://github.com/ledgerwatch/erigon) instead
    of the Go ETH (GETH) archival node. This is promising research as
    the Erigon ETH archival node occupies only about a quarter of the
    space of the GETH archival node. In other words, only about 2TB
    instead of 8TB as of this writing. Erigon ETH archival node also
    syncs in about one quarter the time it takes GETH to sync. Please
    join discussions in the #hydra channel of
    [Blocknet Discord](https://discord.gg/cQ9JNyNRW4) to learn the
    latest on this development.*

	It's also important to note that the storage for the ETH full
    archival node *must* be very fast. In other words, it must use
    SSDs, not HDDs. There are 3 types of SSDs: SATA, SAS and
    NVMe/PCIe. Of the 3, SATA are the slowest, SAS are a little
    faster, and NVMe are by far the fastest. NVMe are *definitely*
    the preferred variety of SSD drive when it comes to hosting an ETH archival
    node. In fact, it looks doubtful that SATA or SAS SSD drives will be
    fast enough to allow the ETH node to sync.

	It is also recommended that the SSDs in a Hydra node be configured
    in a RAID mirror configuration (e.g. RAID-1, RAID-10,
    RAID-Z2). Without RAID mirroring, an SSD failure will almost certainly mean
    you'll have to resync the entire ETH full archival node, which
    takes over a month for a GETH node (but probably only a quarter of
    that time for an Erigon ETH node). Your Hydra node will be offline for the
    duration of the resync.

	As of this writing, it's not clear that any of the VPS Provider Options mentioned
    above are capable of providing a VPS which meets the HW
    requirements for a Hydra node, or if they are capable, the cost
    can be a bit extreme and it's not clear they can expand storage space as
    needed to support the growing ETH full archival node. There may
    well be some smaller VPS providers who are capable of both meeting current HW
    needs and allowing for storage space expansion in the
    future. There are also efforts underway to coordinate "package
    discounts" from such VPS provider(s) for a person or group of people to rent
    a number of Hydra-capable VPS's at a discounted rate. Please join
    discussions on this topic in the #hydra channel of
    [Blocknet Discord](https://discord.gg/cQ9JNyNRW4).

	Another option for meeting the HW requirements of a Hydra node is
    to purchase your own hardware and run it at home. If purchasing
    your own SSD drives, be
    aware that ETH core will be writing to your SSDs continuously, so
    you'll want to get SSDs with a high "durability" rating. For
    example, a company called *Sabrent* offers an 8TB NVMe SSD. On the
    surface, it may look like a good choice to use for building a
    system with lots of fast storage space. Unfortunately, this
    particular drive only has a TBW (Total Bytes Written) durability
    rating of 1,800 TB TBW, which, according to
    [this review](https://www.youtube.com/watch?v=iFXjC7k1OOw) makes
    it not very suitable to be used in an application that writes to
    it frequently. More discussions about HW details can
    be found in the #hydra channel of
    [Blocknet Discord](https://discord.gg/cQ9JNyNRW4).

## Running a *Collateral or Staking Wallet* and a *Service Node Wallet* on the same computer

??? example "Click Here to learn about running a *Collateral or Staking Wallet* and a *Service Node Wallet* on the same computer. Do this *before* setting up your Service Node."
	Service Node operators will often want to run a *Collateral Wallet* or a
	*Staking Wallet* on the same computer as their
	*Service Node Wallet*. In almost all cases, the *Collateral
	Wallet* will also be [staking](/resources/glossary/#staking), so we
	can say it is also a *Staking Wallet*. A *Staking Wallet*,
	however, is not always used as a *Collateral Wallet*.

	To run a *Staking Wallet* and a *Service Node Wallet* on the same
	computer, follow these steps:

	1. Set up your *Staking Wallet*. [Here is an example guide for
	setting up a *Staking Wallet* on a VPS running Ubuntu Linux](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux). Note,
	the Hardware Requirements mentioned in that VPS Staking guide
	should be ignored in this case. The
	[Hardware Requirements for a Service Node Wallet](#hardware-requirements-for-service-node-wallet)
	should be followed instead.
	1. Stop your *Staking Wallet*. If your *Staking Wallet* has been set up
		   according to
		   the [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
		   and the alias for `stcli` has
		   also been set up according to that guide, you can stop
		   your *Staking Wallet* by
		   issuing the follow command:
			  ```
			  stcli stop
			  ```
	1. Change the Peer-to-Peer (P2P) port and the RPC port of your *Staking Wallet* so they don't
    conflict with the P2P port and the RPC port of your
    *Service Node Wallet*. To do this on a Linux system,
		1. Change directory to your *Staking Wallet* data
           directory. If your *Staking Wallet* has been set up according to
           the [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
           your *Staking Wallet* data directory will be `~/.blocknet`.
		   For Example:
	       ```
		   cd ~/.blocknet
		   ```
	    1. Use a simple text editor like
           [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm)
           or
           [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/)
		   to edit the wallet configuration file,`blocknet.conf`.
		   For Example:
	       ```
		   nano blocknet.conf 
		   ```
		   Note, editing `blocknet.conf` will create `blocknet.conf` if it doesn't
           already exist.
	    1. Add two lines like the following to your `blocknet.conf`:
	       ```
		   port=41413
		   rpcport=41415 
		   ```
		   Note: The `port` and `rpcport` values you set in your `blocknet.conf` don't have
	       to be 41413 and 41415, as in the example above; they just
	       have to be port numbers which are __*not*__ used as either
	       `port` or `rpcport` in the default
	       Blocknet wallet configuration. Therefore you must __*not*__ use
	       41412 or 41414, which are the default values for `port` and
	       `rpcport`, respectively. You should also __*not*__ use the
	       default `port` or `rpcport` values for Blocknet testnet,
	       which are 41474 and 41419, respectively. Incrementing the
	       default Blocknet `port` and `rpcport` values by 1, as in
	       the example above, is a pretty safe strategy for
	       avoiding potential port conflicts. Not only does this avoid
	       potential port conflicts with the
	       Blocknet testnet, but also with other [SPV wallets](/resources/glossary#spv)
		   running on your Service Node.
	    1. Save your edits to `blocknet.conf`, exit the editor and restart your
           *Staking Wallet*. If your *Staking Wallet* has been set up
		   according to
		   the [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
		   and the aliases for `stcli`, `stdaemon` and `stunlock` have
		   also been set up according to that guide, you can restart
		   your *Staking Wallet* and start it staking again by
		   issuing the follow commands:
			  ```
			  stdaemon
			  ```
			  (You'll need to wait a few minutes after starting the
			  Blocknet daemon for your wallet to
			  sync the headers. Then you'll be allowed
			  to unlock your wallet for staking in the next step.)
		   1. Unlock your staking wallet for staking only:
		   ```
		   stunlock
		   ```
		   (Enter your wallet password when prompted.)
		   1. Confirm your wallet is staking by issuing the command:
		   ```
		   stcli getstakingstatus
		   ```
		   When this command returns, `"status": "Staking is active"`,
		   then you know your wallet is staking properly.
		   Note, you may also want to confirm your staking wallet balance
		   is correct with:
		   ```
		   stcli getbalance
		   ```

	1. If you will be setting up your Service Node following the
       [Automated Docker-Based EXR Service Node Setup Guide](#automated-docker-based-exr-service-node-setup-recommended),
       there is nothing more you need to do regarding your *Staking
       Wallet* and you can proceed directly to the
       [Automated Docker-Based EXR Service Node Setup Guide](#automated-docker-based-exr-service-node-setup-recommended). However,
       if you will be setting up your Service Node following the
       [Manual Service Node Setup Guide](#manual-service-node-setup-deprecated),
       you'll need to move your *Staking Wallet* data directory to
       allow the *Service Node Wallet* data directory to occupy the
       [default data directory location](/wallet/backup-restore/#data-directory). To
       move your *Staking Wallet* data directory, follow these steps:
		   1. Stop your *Staking Wallet*. If your *Staking Wallet* has
			  been set up according to the
		   [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
		   and the alias for `stcli` has also been set up according to that
			  guide, you
		   can stop your *Staking Wallet* with:
		   ```
		   stcli stop
		   ```
		   1. Wait till your *Staking Wallet* stops completely. You
              can monitor the *Staking Wallet* Linux process (called `blocknetd`) by
              repeatedly  pasting/issuing the following command:
		   ```
		   ps x -o args | grep -v "grep" | grep "blocknetd"
		   ```
		   Before the *Staking Wallet* Linux process has stopped
           completely, that command will return something like this:
		   ```
		   /home/[user]/blocknet-4.3.3/bin/blocknetd -daemon
		   ```
		   Continue issuing that `ps x -o args` command until it returns
              nothing. Then you know the `blocknetd` process has stopped completely and it's
              safe to move your data directory.
		  1. Issue the following commands to move
          (rename) your *Staking Wallet* data directory:
		  ```
		  cd ~
		  mv .blocknet .blocknet_staking
		  ```
		  1. Now, assuming your *Staking Wallet* access
             aliases have been set up according to the
		   [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
             you'll need to change those alias definitions to reflect
             the fact that your *Staking Wallet* data directory has
             changed. To do so, use [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm)
           or
           [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/)
		   to edit the `~/.bash_aliases` file.
		   For Example:
	       ```
		   nano ~/.bash_aliases
		   ```
		   Leave the first line of the file as it is:
		   ```
		   BLOCKNET_VERSION='4.3.3'
		   ```
		   With `4.3.3` being replaced by whatever version of Blocknet
           wallet your *Staking Wallet* is running.
		   Then change all the alias definitions to be as follows:
		   ```
		   BLOCKNET_VERSION='4.3.3'
		   # stdaemon = Start Blocknet daemon for staking wallet
		   alias stdaemon='~/blocknet-${BLOCKNET_VERSION}/bin/blocknetd -daemon -datadir=$HOME/.blocknet_staking/'
           # stcli = Staking wallet Command Line Interface
		   alias stcli='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli -datadir=$HOME/.blocknet_staking/'
           # stunlock = Unlock staking wallet for staking only
		   alias stunlock='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli -datadir=$HOME/.blocknet_staking/ walletpassphrase "$(read -sp "Enter Password:" undo; echo $undo;undo=)" 9999999999 true'
           # stunlockfull = Unlock staking wallet fully
		   alias stunlockfull='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli -datadir=$HOME/.blocknet_staking/ walletpassphrase "$(read -sp "Enter Password:" undo; echo $undo;undo=)" 9999999999 false'
		   ```
		   1. Save your edits to `~/.bash_aliases`, exit the editor, then
		   activate your new alias definitions with:
		   ```
		   source ~/.bash_aliases
		   ```
		   1. Restart your staking wallet with:
		   ```
		   stdaemon
		   ```
		   1. Unlock your staking wallet for staking only:
		   ```
		   stunlock
		   ```
		   (Enter your wallet password when prompted.)
		   1. Confirm your wallet is staking by issuing the command:
		   ```
		   stcli getstakingstatus
		   ```
		   When this command returns, `"status": "Staking is active"`,
		   then you know your wallet is staking properly.
		   Note, you may also want to confirm your staking wallet balance
		   is correct with:
		   ```
		   stcli getbalance
		   ```


## Automated Docker-Based [EXR](/resources/glossary/#enterprise-xrouter) Service Node Setup (Recommended)

Note: This Automated Docker-Based EXR Service Node Setup guide is for
setting up a Service Node on a computer running Ubuntu Linux
OS. Please adjust any Ubuntu-specific steps as necessary if
setting up your Service Node on a different OS.

To setup your Service Node using the Automated
Docker-Based EXR Service Node Setup,
complete the following guides in order:

1. [Set up an Ubuntu Linux server](#set-up-an-ubuntu-linux-server)
1. [Collateral Wallet Setup for Automated Service Node Setup](#collateral-wallet-setup-for-automated-service-node-setup)
1. [Prepare to Deploy Service Node](#prepare-to-deploy-service-node)
1. [Auto-Deploy Service Node](#auto-deploy-service-node)
1. [Maintenance of Auto-Deployed Service Node](#maintenance-of-auto-deployed-service-node)

### Set up an Ubuntu Linux server

??? abstract "Set up an Ubuntu Linux server"

	If you didn't follow, and don't plan to follow the
	[VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux)
	to set up a staking wallet on your Service Node computer, then complete steps 1-13 of the
	[VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux)
	to set up an Ubuntu Linux server as your Service Node computer, ignoring
	the Hardware Requirements in that *VPS Staking guide* and instead following the
	[Hardware Requirements for a Service Node](#hardware-requirements-for-service-node-wallet).

### Collateral Wallet Setup for Automated Service Node Setup

??? example "Collateral Wallet Setup for Automated Service Node Setup"

	!!! warning "IMPORTANT"
		This Collateral Wallet Setup guide assumes
		your collateral wallet has been set up according to the
		[VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
		and the aliases for `stcli`, `stdaemon` and `stunlock` have
		also been created according to that
		guide. If your collateral wallet is instead a GUI/Qt Blocknet
		wallet on a different computer, the wallet commands given in this
		guide in the form,`stcli wallet-command` can instead be issued in your
		GUI/Qt wallet under *Tools->Debug
		Console*. For example, a *Staking Wallet*
		command given in this guide as `stcli getnewaddress snode01`
		can be issued in a GUI/Qt wallet under *Tools->Debug Console* as
		simply `getnewaddress snode01`.

	1. If your collateral wallet is not yet funded, send collateral funds
	   to your collateral wallet. Send at least 5001 BLOCK for every Service Node
	   your collateral wallet will support, plus 1 extra BLOCK. (The 1
	   extra BLOCK, and the 1 extra BLOCK per Service Node will cover
	   transaction fees. For example, send at least 15,004 BLOCK for 3
	   Service Nodes' collateral.) To send BLOCK to
	   your collateral wallet:
		   1. Create an address in your collateral wallet to which you can
		   send the funds. On your *Collateral Wallet* computer (which
		   could be the same as your *Service Node Wallet* computer),
		   issue the following command:
		   ```
		   stcli getnewaddress
		   ```
		   Note, you can optionally give a label to the new address you
		   create by passing a *label* parameter to the `getnewaddress`
		   command. For example, you can label your new address,
		   "*receive-address*" by issuing the following command:
		   ```
		   stcli getnewaddress receive-address
		   ```
		   1. Send BLOCK to the address returned by the `getnewaddress` command.
	1. Create a new public address for the Service Node. A unique name for
		this address will need to be provided as an alias. To do this,
		type `stcli getnewaddress [ALIAS]` into the terminal with `[ALIAS]` replaced with the alias you will be using for this address. Example:
		```
		stcli getnewaddress snode01
		BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP
		```
		In this example, `BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP` was the
		address returned by `getnewaddress`.

	1. Create the input(s) needed for the Service Node collateral using the following command structure (**Note:** If you already have your inputs created for your Service Node(s) you can skip this step *and* the next step):
		```
		stcli servicenodecreateinputs [NODE_ADDRESS] [NODE_COUNT] [INPUT_SIZE]
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

	    Single Service Node Example:
		```
		stcli servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP
		```
	Single Service Node (2 inputs) Example:
	```
	stcli servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 1 2500
	```
	Multiple Service Nodes (10k BLOCK) Example:
	```
	stcli servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 2 5000
	```

	1. Prepare to create a `servicenode.conf` file in your
       data directory (Linux data dir =`~/.blocknet` by default). Delete any old `servicenode.conf` file in the data directory, or delete any out-of-date service node references within your `servicenode.conf`. 
	1. Create a `servicenode.conf` configuration file. Enter the command:
	```
	stcli servicenodesetup [NODE_ADDRESS] [ALIAS]
	```
	Where `[NODE_ADDRESS]` is the address created for your Service
	Node in step 2 above, and `[ALIAS]` is any name you want to give
	to your Service Node. With this command, 	an entry will be
	created for the Service Node in the `servicenode.conf` file in
	your collateral wallet data dir. Example: 
		```
		stcli servicenodesetup BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP snode01
		{
			"alias": "snode01",
			"tier": "SPV",
			"snodekey": "02a5d0279e484a3df81acd611e1052d2e0797e796564ecbc25c7fe19f36e9985e5",
			"snodeprivkey": "PswGMd6faZf1ceLojzGeKn7LQuXVwYgRQG8obUKrThZ8ap4pkRR7",
			"address": "BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP"
		}
		```
	1. Copy the *snodeprivkey* and the *address* returned in the
       previous step and paste them into a temporary text file. You'll
       need them later on. (In the above example, *snodeprivkey* is
       `PswGMd6faZf1ceLojzGeKn7LQuXVwYgRQG8obUKrThZ8ap4pkRR7`, and
       *address* is `BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP`). Note, both
       the *snodeprivkey* and the *address* of your Service Node are
       also stored at this point in the `servicenode.conf` file in
       your collateral wallet data directory, so you can always find
       them there if you don't want to paste them into a temporary
       text file to record them.
	   1. Restart the *Collateral Wallet*.
	   ```
	   stcli stop
	   stdaemon
	   ```
	   Note, you will probably need to wait at least 30 seconds
	   after issuing `stcli stop` before you'll be allowed to
	   launch `stdaemon.` Just keep trying every 30 seconds or so to launch `stdaemon`
	   until you no longer get, "*Error: Cannot obtain a lock on data directory.*"
	   1. Assuming you want to [stake](/resources/glossary/#staking) your collateral, unlock your staking wallet for staking only:
	   ```
	   stunlock
	   ```
	   (Enter your wallet password when prompted.)
	   1. Confirm your wallet is staking by issuing the command:
	   ```
	   stcli getstakingstatus
	   ```
	   When this command returns, `"status": "Staking is active"`,
	   then you know your wallet is staking properly.
	   Note, you may also want to confirm your staking wallet balance
	   is correct with:
	   ```
	   stcli getbalance
	   ```
	1. Continue on to [Prepare to Deploy Service Node](#prepare-to-deploy-service-node).


### Prepare to Deploy Service Node

??? example "Prepare to Deploy Service Node"

	Logged in to the Ubuntu Linux server you
    [set up above](#set-up-an-ubuntu-linux-server), (logged in as the
    user you created according to the setup instructions, not as root),

	1. Install necessary SW packages:
	```
	sudo apt install git python3 python3-pip
	```
	(Enter your user's password when prompted - not the root password.)
	1. Add your Linux user to the *docker* group:
		1. `sudo groupadd docker`
		1. `sudo gpasswd -a $USER docker`
		1. `exit` to disconnect from your VPS
		1. Reconnect to your VPS, logging in again as the same user as before (not as root).
	1. Change directory to the directory where you want to install the
       Service Node Automated Setup tools. In this guide, we'll use the
       user's home directory (`~`):
	```
	cd ~
	```
	1. Copy the Service Node Automated Setup tools from the Blocknet
    Github repository:
	```
	git clone https://github.com/blocknetdx/exrproxy-env
	```
	1. Change directory to the `autobuild` subdirectory:
	```
	cd exrproxy-env/autobuild
	```
	1. Install necessary Python3 libraries:
	```
	pip3 install -r requirements.txt
	```
	1. Copy `alldaemons.yaml` example configuration file to
    `custom.yaml` in preparation to configure your Service Node:
	```
	cp examples/alldaemons.yaml custom.yaml
	```
	Explanation: The configuration file used to specify which SPV wallets you want to deploy &
    support on your Service Node is called, `custom.yaml`. It lives
    in the `autobuild` subdirectory of the `exrproxy-env` directory. The
    `examples/alldaemons.yaml` configuration file is meant to be an example of how
    `custom.yaml` should look if you were going to configure your
    Service Node to support *all available SPV
    wallet daemons and Blocknet Services.* The way to create a `custom.yaml` which
    configures *only* the SPV wallets you want to support is to start
    with the `alldaemons.yaml` file, then delete the entries of the
    SPV wallets you *don't* want to support. This is the reason we copied `examples/alldaemons.yaml` to
    `custom.yaml` in the `autobuild` directory.
	1. Edit `custom.yaml` with a simple text editor like
       [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm) or
       [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/).
	   For example:
	   ```
	   vi custom.yaml
	   ```
	1. Because we copied `alldaemons.yaml` to `custom.yaml` earlier,
       editing `custom.yaml` for the first time will reveal a file
       identical to `alldaemons.yaml`, something like the following:
	   ```
	   --- # snode daemon LIST
	   - j2template: dockercompose.j2
		 name: dockercompose
		 daemons:
             # DO NOT DELETE XR_PROXY ENTRY
			 - name: XR_PROXY # DO NOT DELETE
				 image: blocknetdx/exrproxy:0.8.0 # DO NOT DELETE
				 config_mount_dir: /snode/xr_proxy/config # DO NOT DELETE
				 nginx_mount_dir: /snode/xr_proxy/nginx # DO NOT DELETE
             # DELETE THE FOLLOWING ETH ENTRY IF YOU DON'T WANT TO DEPLOY A 10+ TB GETH NODE
			 - name: ETH # DELETE THIS ENTRY IF YOUR SERVER DOESN'T MEET HW REQUIREMENTS: 10+ TB NVMe SSD storage (21 Dec, 2021), 16 GB RAM when GETH deployed locally
				 image: blocknetdx/eth-payment-processor:0.5.2 # DELETE THIS ENTRY IF YOUR SERVER DOESN'T MEET HW REQUIREMENTS
				 postgresql_data_mount_dir: /snode/eth_pymt_db # DELETE THIS ENTRY IF YOUR SERVER DOESN'T MEET HW REQUIREMENTS
				 geth_data_mount_dir: /snode # DELETE THIS ENTRY IF YOUR SERVER DOESN'T MEET HW REQUIREMENTS
             # DO NOT DELETE SNODE ENTRY
			 - name: SNODE # DO NOT DELETE
				 image: blocknetdx/servicenode:latest # DO NOT DELETE
				 config_mount_dir: /snode # DO NOT DELETE
				 data_mount_dir: /snode # DO NOT DELETE
			 # AVALANCHE INDEXER - DELETE IF YOU DON'T WANT TO SUPPORT XQUERY
			 - name: AVAX # Requires 300 GB of SSD disk, 16 GB RAM & 6 vCPUs for XQUERY (21 December, 2021)
				 image: avaplatform/avalanchego:v1.7.3
				 data_mount_dir: /snode
			 # THE STANDARD XLITE WALLET SET - DELETE ANY YOU DON'T WANT TO SUPPORT  
			 - name: BTC # Requires 451 GB of disk (15 December, 2021)
			    image: blocknetdx/bitcoin:v0.20.0
				config_mount_dir: /snode
				data_mount_dir: /snode
			 - name: LTC # Requires 71 GB of disk (15 December, 2021)
			    image: blocknetdx/litecoin:v0.18.1
				config_mount_dir: /snode
				data_mount_dir: /snode
			- name: DGB # Requires 27 GB of disk (15 December, 2021), 4-5 GB RAM/Swap
			    image: blocknetdx/digibyte:v7.17.2
				config_mount_dir: /snode
				data_mount_dir: /snode
			...
	   ```
	1. __Important:__ Pay close attention to the comments embedded in
       this file. Note that some of the entries, like __XR_PROXY__ and
        __SNODE__, should *never* be deleted. Other entries,
       like __ETH__, __BTC__,  __AVAX__, and __LBC__ for example, have comments
       attached to them indicating they require more HW resources
       than some of the other entries. If the sum total of the HW
       resources required by all the entries you have listed in this file
       exceeds the HW resources your server has available, you'll need
       to delete entries until the amount of HW resources required is less than
       what your server has available. The cumulative HW resource requirements
       referred to here are mainly the disk space requirements. The
       RAM and CPU requirements of different entries are not
       necessarily cumulative. For Example, ETH and AVAX both require 16 GB of
       RAM, but that doesn't necessarily mean you need 32 GB RAM to support both
       of them on your SNode. However, if you want to have the ability to sync both
       of them concurrently, then 32+ GB RAM would be recommended.
	1. Proceed to delete the entries of those SPV wallets you do *not*
       want to support on your Service Node. For example, if you don't
       want to support __DGB__, you would delete the following 4 lines:
	```
		- name: DGB # Requires 27 GB of disk (15 December, 2021), 4-5 GB RAM/Swap
		   image: blocknetdx/digibyte:v7.17.2
		   config_mount_dir: /snode
		   data_mount_dir: /snode
	```
	1. Note: The `/snode` mount point used in the `alldaemons.yaml`
       example can be changed as desired. If changing the mount
       points, the only requirements are:
		   1. The two mount points in the __XR_PROXY__ entry must be unique,
			  as they are in the `alldaemons.yaml` example.
		   1. The mount point for `postgresql_data_mount_dir:` in the
			  __ETH__ entry must  be unique, as it is in the `alldaemons.yaml` example.
		   1. All remaining mount points will be automatically
			  "*uniquified*" by the autobuild scripts. For example,
			  specifying `data_mount_dir: /snode` in the __BTC__ entry
			  will cause BTC data to be stored in the unique directory, `/snode/BTC/data`.
	1. If you will deploy an archival
       [GETH](/resources/glossary/#geth) node, the mount point you
       choose in the __ETH__ entry for `geth_data_mount_dir:` *must* have at least 10TB of
       SSD storage space available as of this writing. See
       [Hardware Requirements For Service Node Wallet](#hardware-requirements-for-service-node-wallet)
       for more details.
	1. __Testnet SNODE__: If you want your Service Node to run on *testnet*
    instead of *mainnet*, simply replace the line:
	```
	- name: SNODE
	```
	with this line:
	```
	- name: testSNODE
	```
	1. __Trading Node__: The autobuild deployment tools also allow
       you to deploy a *Trading Node* instead of a *Service Node* if
       you wish. A *Trading Node* is simply a Blocknet core wallet
       which is *not* configured to run as a Service Node. When you
       configure `custom.yaml` to deploy a *Trading Node* instead of a
       Service Node, the other wallet daemons listed in your
       `custom.yaml` become trading wallets rather than SPV
       wallets of an Service Node. The *Trading Node* will automatically be
       connected to all the other wallets daemons listed in your
       `custom.yaml`. As such, issuing `dxGetLocalTokens` from
        your *Trading Node's CLI* will return a list of all the coins
       you had listed in `custom.yaml`, and you can trade
       between any of them from the CLI of your *Trading Node*. To
       deploy a *Trading Node* instead of a Service Node, simply
       replace the line:
	   ```
	   - name: SNODE
	   ```
	   with this line:
	   ```
	   - name: TNODE
	   ```
	1. __Testnet TNODE__: If you want your Trading Node to run on *testnet*
    instead of *mainnet*, simply replace the line:
	```
	- name: TNODE
	```
	with this line:
	```
	- name: testTNODE
	```
	1. (Recommended) It is recommended to deploy certain SPV Wallets
	   in stages. The reason is because some SPV wallets are known to
	   require large amounts of RAM and/or I/O bandwidth while they
	   are syncing their respective blockchains. AVAX, LBC and DGB all
	   fall into this category. For this reason, it is recommended
	   *not* to run more than one of those 3 while any one of them is
	   syncing. For example, it's best *not* to run LBC or DGB while
	   AVAX is syncing, or to run AVAX or DGB while LBC is syncing. To
	   learn techniques for syncing just one of these 3 at a time, see
	   the information given in the
	   [Maintenance of Auto-Deployed Service Node](#maintenance-of-auto-deployed-service-node)
	   section of this guide. Note, if you have over 32 GB of RAM and NVMe
	   storage, you may well be able to sync all of these HW intensive
	   blockchains in parallel without issue.
	1. Save your edits to `custom.yaml` and exit the editor.
	1. Continue on to [auto-deploy your Service Node](#auto-deploy-service-node).

	??? tip "Didn't see an entry in `alldaemons.yaml` for the coin/daemon you want to support?"
		As of this writing, we don't yet have many coin/daemon/SPV wallet
		entries listed in `alldaemons.yaml`. This will be changing very
		soon. The goal is that every coin supported by BlockDX, which
		means every coin listed in the [Blocknet
		manifest-latest.json](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json),
		will have an entry in `alldaemons.yaml` and thus be readily
		available for Service Nodes to support. One thing you can do
		to ensure you have the latest available version of
		`alldaemons.yaml` (and the latest version of the autobuild
		tools in general) is the following:
		```
		cd ~/exrproxy-env
		git pull
		```
		If the `git pull` command gives errors like "Merge conflict" or "error:
		Your local changes to the following files would be overwritten
		by merge," it means you have locally changed one or more of the files `git` is
		trying to pull from the upstream repository. In this case, you can
		undo any local changes you made to any of the files tracked by
		`git` by issuing the command:
		```
		git reset --hard
		```
		Note, `git reset --hard` will cause any changes you made to
		tracked files in the `exrproxy-env` directory tree to be lost.
		After issuing `git reset --hard`, you should now be able to
		issue the `git pull` command without errors.

		Note: If you are trying to
		add Service Node support for a new coin so the new coin can be tested and
		then added to the *manifest-latest.json*, please refer to the
		[Listing Process](/blockdx/listings/#listing-process).


### Auto-Deploy Service Node

??? example "Auto-Deploy Service Node"
	
	1. At this point in the process, your *Present Working Directory* ($PWD) should be
       `~/exrproxy-env/autobuild` and the `custom.yaml` file in that
       directory should contain a list of coins/SPV wallets/daemons
       you want to deploy and support on your Service Node. (Type
       `pwd` to confirm your *Present Working Directory*. Review the contents of `custom.yaml` with:
       `less custom.yaml`.)
	1. Run the *autobuild* script to translate your `custom.yaml`
       configuration file into a `dockercompose-custom.yaml` file
       which can be used by *docker-compose* to launch all the docker
       containers needed to run your Service Node:
		   - If your Service Node will *not* be supporting a
		   [GETH](/resources/glossary/#geth) node, issue the following command:
		   ```
		   ./app.py
		   ```
		   - If your Service Node will support a [GETH](/resources/glossary/#geth) node locally, issue
		   the following command:
		   ```
		   ./app.py --deploy_eth
		   ```
		   - If your Service Node will support an *external* [GETH](/resources/glossary/#geth) node, issue
		   the following command:
		   ```
		   ./app.py --gethexternal [IP-Address-of-External-GETH-Node]
		   ```
		   Note, this *--gethexternal* option has not been fully tested as
		   of this writing.
	1. Move the `dockercompose-custom.yaml` we just generated to the
       `exrproxy-env` directory and give it the name *docker-compose*
       will be looking for:
	   ```
	   mv  dockercompose-custom.yaml ../docker-compose.yml
	   ```
	1. Change directory to the `exrproxy-env` directory:
	   ```
	   cd ..
	   ```
	1. Prepare to enter all the details you'll need when you launch
    the `deploy.sh` script:
		1. Fetch your Service Node computer's Public IP address, then
        copy/paste it to a temporary text file for easy access.
		Some options for fetching your Service Node computer's Public IP include:
		```
		curl ipconfig.io
		curl ifconfig.co
		dig +short myip.opendns.com @resolver1.opendns.com
		```
		1. Make sure you have easy copy/paste access to your *Servicenode Private
           Key* and *Servicenode Address*, which you got earlier from the [Collateral Wallet Setup Procedure](#collateral-wallet-setup-for-automated-service-node-setup).
	    1. Think of a name for your Service Node. It doesn't have to be
          the same name you chose to label the address of your Service
          Node during the *Collateral Wallet Setup*, but it can be.
	    1. Think of a name and a password for the RPC user your Service
          Node will use for communication with the coin daemons it supports.
	1. Run the `deploy.sh` script:
	```
	./deploy.sh
	```
	You'll be asked if you want to install *docker*. If you have not
	yet installed *docker* on your Service Node computer, enter *y*
	for "yes." Then proceed to enter the information you prepared in the
	previous step as the `deploy.sh` script prompts you for each item
	individually. Note, the values you enter for *Servicenode Private
	Key* and *RPC Password* will not be displayed. If you are
	pasting in these values, be sure not to paste twice.
	1. (Informational) You should now see the scripts do their magic and launch [docker
       containers](https://www.docker.com/resources/what-container)
       for all the daemons you configured your Service Node to
       support. You can see all the running docker containers by
       issuing the command:
	   ```
	   docker ps
	   ```
	   This command will display the CONTAINER ID, the IMAGE used to
       build it, the COMMAND running in the container, when it was
       CREATED, its current STATUS, which PORTS it uses, and any NAMES
       assigned to it.
	 1. To complete the Service Node deployment, we'll
       need to know either the CONTAINER ID or container NAME of the
       Service Node container. For that, we can filter the above
       `docker ps` output through `grep` like this:
	   ```
	   docker ps | grep snode
	   ```
	   That command should return information about the *snode* container, something like this:
	   ```
	   f9b910221ca2   blocknetdx/servicenode:latest              "/opt/blockchain/sta…"   26 hours ago   Up 26 hours   41412/tcp, 41414/tcp, 41419/tcp, 41474/tcp         exrproxy-env_snode_1
	   ```
	   The first item returned in this example (`f9b910221ca2`) is the CONTAINER ID, and the last item returned (`exrproxy-env_snode_1`) is the NAME of the container. Either of these two values can be used to access the *snode* container.
	 1. It will take 3.5+ hours for the Blocknet blockchain to sync in your *snode* container. Periodically monitor the current block height of the Blocknet wallet running in the *snode* container by issuing the following command:
	 ```
	 docker exec exrproxy-env_snode_1 blocknet-cli getblockcount
	 ```
	 Note, here we are executing the command, `blocknet-cli` within
	 the `exrproxy-env_snode_1` container, which is the name we found
	 for the *snode* container in the previous step. Also note,
	 initial calls to `getblockcount` may return errors until headers
	 finish syncing. This is normal and nothing to be concerned about.

	    ??? tip "Tips for monitoring block height during syncing, and generally accessing blocknet-cli more easily."
		  To make access to the `blocknet-cli` program more
		  convenient, you may want to create an alias something like
		  the following:
		  ```
		  alias snode-cli='docker exec exrproxy-env_snode_1 blocknet-cli'
		  ```
		  If you add that alias to `~/.bash_aliases` (or any file
		  sourced on login), it will be defined automatically every
		  time you login to your Linux system. Another idea is to
		  create a small Bash Shell script something like this:
		  ```
		  #!/bin/bash
		  docker exec exrproxy-env_snode_1 blocknet-cli $*
		  ```
		  If you create such a shell script, give it a name like `snode-cli`, give it executable
		  permissions (`chmod +x snode-cli`), then move it to some
		  directory in your *$PATH*, then you can use the Linux
		  `watch` utility like this:
		  ```
		  watch snode-cli getblockcount
		  ```
		  (Enter `echo $PATH` to see which directories are in your
		  *$PATH*. Enter`man watch` to learn about the `watch` utility and
		  its options.)

	 1. When the block height in the *snode* container matches that of the [Blocknet blockchain explorer](https://chainz.cryptoid.info/block/), your Service Node wallet is fully synced and you can now activate your Service Node as follows:
		 1. On your *Collateral Wallet*, issue the command, `servicenoderegister`. If your *Collateral Wallet was set up according to the [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
		and the alias for `stcli` was also created according to that
		guide, you can issue the `servicenoderegister` command as follows:
		```
		stcli servicenoderegister
		```
		Otherwise, if your *Collateral Wallet* is a GUI/Qt wallet
		running on a different computer, simply enter
		`servicenoderegister` in *Tools->Debug Console* of your
		*Collateral Wallet*.
		1. On your *Service Node Wallet*, issue the `servicenodesendping` command like this:
		```
		docker exec exrproxy-env_snode_1 blocknet-cli servicenodesendping
		```
		(Note, if you created the `snode-cli` alias or shell script as
		suggested in the *Tip* above, you can enter simply, `snode-cli servicenodesendping`.)
	1. On your *Service Node Wallet*, check to confirm your Service Node is running and supporting all the right coins/SPV wallets like this:
		```
		docker exec exrproxy-env_snode_1 blocknet-cli servicenodestatus
		```
		This command should return `"status": "running",` and also the corrrect/expected list of supported services.
	 1. You can also verify your Service Node is visible on the network by issuing the following command on your *Collateral Wallet*:
		```
		stcli servicenodestatus 
		```
	 1. (Recommended) Install `fail2ban` to protect your EXR SNode from malicious http
	attacks. The following steps are for setting up `fail2ban v0.11.1-1`
	on `Ubuntu 20.04.3 LTS`. The steps for setting up other
	versions of `fail2ban` should be very similar, but they may not be exactly the same.

	    ??? example "Install `fail2ban`"
		  1. Get the *xr_proxy-log-path*:
		  ```
		  docker inspect exrproxy-env_xr_proxy_1 | grep '"LogPath":'
		  ```
		  This will return something like the following:
		  ```
		   "LogPath": "/var/lib/docker/containers/6554ded0f7dd2abc0f415a511ff0099c5233fca6e17f2b409e9f40be4d43d9cf/6554ded0f7dd2abc0f415a511ff0099c5233fca6e17f2b409e9f40be4d43d9cf-json.log",
	      ```
		  The `/var/lib/docker/containers/<big-hex-number>-json.log` part of what's
		  returned is the *xr_proxy-log-path* we'll need in future
		  steps, so copy it someplace for future use.
		  1. Find your LAN address range.
		   Your LAN address range can be found by issuing this command:
		   ```
		   ip addr
		   ```
		   The `ip addr` command will return something like this:
		   ```
		   1: lo: mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
		   link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
		   inet 127.0.0.1/8 scope host lo
		   valid_lft forever preferred_lft forever
		   inet6 ::1/128 scope host
		   valid_lft forever preferred_lft forever
		   2: wlp58s0: mtu 1500 qdisc mq state UP group default qlen 1000
		   link/ether 9c:b6:d0:d0:fc:b5 brd ff:ff:ff:ff:ff:ff
		   inet 192.168.1.20/24 brd 192.168.1.255 scope global dynamic noprefixroute wlp58s0
		   valid_lft 5962sec preferred_lft 5962sec
		   inet6 fe80::bf14:21e3:4223:e5e4/64 scope link noprefixroute
		   valid_lft forever preferred_lft forever
		   ```
		   In the above output, you can ignore item 1: called
		   *lo* (loopback). You can see that the IP address range of
		   the LAN in this example is displayed in item 2: just after
		   the word, *inet*: `192.168.1.20/24`. The `/24` at the end tells
		   us that the first 24 bits of this address define the range
		   of the LAN's
		   [subnet mask](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking). `192.168.1.20/24` then represents the full
		   range of addresses used by the LAN in this example system. Copy whatever value
		   represents the full range of the LAN for *your* system.
		   We'll need it in a future step.
		  1. Intall `fail2ban`:
		  ```
		  sudo apt install fail2ban
		  ```
		  1. Initialize setup
		  ```
		  sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
		  ```
		  1. Edit config file:
		  Use a simple text editor like [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm) or
		  [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/) to
		  edit `/etc/fail2ban/jail.local`. For example:
		  ```
		  sudo nano /etc/fail2ban/jail.local
		  ```
			  1. Within `/etc/fail2ban/jail.local`, search for these 3
			  commented out lines:
			  ```
			  #bantime.increment = true
			  #bantime.factor = 1
			  #bantime.formula = ban.Time * (1<<(ban.Count if ban.Count<20 else 20)) * banFactor
			  ```
			   Note, these 3 lines will be in different parts of the
			  file, *not* contiguous as they are displayed above.
			  1. Uncomment those 3 line by removing the
			  `#` at the beginning of each line:
			  ```
			  bantime.increment = true
			  bantime.factor = 1
			  bantime.formula = ban.Time * (1<<(ban.Count if ban.Count<20 else 20)) * banFactor
			  ```
			  1. Search for the following line
			  ```
			  #ignoreip = 127.0.0.1/8 ::1
			  ```
			  1. Uncomment this line by removing the `#` at the
              begginning of the line so it looks like this:
			  ```
			  ignoreip = 127.0.0.1/8 ::1
			  ```
			  It will also be good to add the
                 full address range of your LAN, as discovered above in step *b*, to the end of this
                 line. This will *whitelist* all the IP addresses of your LAN so they can't get
                 banned. For example, 
				 to *whitelist* all LAN
				 addresses for the example system of step
                 *b* above, you would simply add a space and then `192.168.1.20/24` to
				 the end of the `ipignore` line, like this:
			  ```
			  ignoreip = 127.0.0.1/8 ::1 192.168.1.20/24
			  ```
			  (Be sure to replace `192.168.1.20/24` here with whatever
                 LAN address range you discovered for *your* system in step *b* above.)
			  1. Search for the following line:
			  ```
			  banaction = iptables-multiport
			  ```
			  Change it to:
			  ```
			  banaction = iptables-allports
			  ```
			  1. Search for these 3 lines:
			  ```
			  #
              # JAILS
              #
			  ```
			  Just below those 3 lines, add the following lines,
			  replacing *xr_proxy-log-path* with the
			  *xr_proxy-log-path* you found in step *a* above:
			  ```
			  [nginx-x00]

			  enabled   = true
			  port      = http,https
			  filter    = nginx-x00
			  logpath  = xr_proxy-log-path
			  maxretry = 1
			  findtime = 3600
			  bantime  = 24h

			  [nginx-404]

			  enabled  = true
			  port     = http,https
			  filter   = nginx-404
			  logpath  = xr_proxy-log-path
			  maxretry = 1
			  findtime = 3600
			  bantime  = 1h
			  ```
			  After replacing *xr_proxy-log-path* with the value you
			  found in step *a* above, the `logpath =` lines will look
			  something like this:
			  ```
			  logpath  = /var/lib/docker/containers/<big-hex-number>-json.log
			  ```
			  1. Save your edits to `/etc/fail2ban/jail.local` and
                 exit the editor.
	      1. Add Filters: 
			  1. Use a simple text editor like *vi* or *nano* to
                 create the file,
                 `/etc/fail2ban/filter.d/nginx-x00.conf`. For example:
			  ```
			  sudo nano /etc/fail2ban/filter.d/nginx-x00.conf
			  ```
			  Add the following lines to the file:
			  ```
			  [Definition]
			  failregex = ^{"log":"<HOST> .* .*\\x
			  ignoreregex =
			  ```
			  Then save the file and exit the editor.
			  1. Use a simple text editor like *vi* or *nano* to
                 create the file,
                 `/etc/fail2ban/filter.d/nginx-404.conf`. For example:
			  ```
			  sudo nano /etc/fail2ban/filter.d/nginx-404.conf
			  ```
			  Add the following lines to the file:
			  ```
			  [Definition]
			  failregex = {"log":"<HOST>.*(GET|POST|HEAD).*( 404 )
			  ignoreregex =
			  ```
			  Then save the file and exit the editor.
		  1. Restart `fail2ban` service:
		  ```
		  sudo service fail2ban restart
		  ```
		  1. Verify `fail2ban` is running properly:
		  ```
		  sudo service fail2ban status
		  ```
		  1. Check the logs of `fail2ban`:
		  ```
		  sudo tail -f /var/log/fail2ban.log
		  ```
		  (Ctrl-C to exit scrolling logs.)
		  1. Fix iptables. To complete this last step, you must wait
             for at least one IP address to get banned in each of the
             two jails we created above (`nginx-x00` and
             `nginx-404`). This may take a few hours, so you may want
             to just let `fail2ban` run overnight before coming back
             to this step. Then check the `fail2ban` logs to confirm there has been at
             least one IP banned in each of the new jails:
		  ```
		  sudo less /var/log/fail2ban.log
		  ```
		  Search with `less` for `nginx-404` and `nginx-x00` to confirm
             at least one IP ban in each jail. Once this
             has been confirmed, you can fix the system IP tables so
             the `fail2ban` logs will no longer print the "Already Banned" messages.
             Fix the IP tables by issuing these two commands:
		  ```
		  sudo iptables -I FORWARD -j f2b-nginx-x00
		  ```
		  ```
		  sudo iptables -I FORWARD -j f2b-nginx-404
		  ```

	 1. To learn how to add or subtract coins/SPV Wallets from your Service Node, and generally navigate and manage the docker containers of your Service Node, continue on to [Maintenance of Auto-Deployed Service Node](#maintenance-of-auto-deployed-service-node)

### Maintenance of Auto-Deployed Service Node

??? abstract "Maintenance of Auto-Deployed Service Node"

	> Changing Configuration of a Docker-Based Service Node (or Trading Node)

	1. Before you can add or subtract coin daemons, or change the
	configuration of your Service Node in any way, you first need to shut it down as follows:
	```
	cd ~/exrproxy-env
	docker-compose down
	```
	This will not only stop all the docker containers you
	deployed from the `docker-compose.yml` file, it
    will also remove all those docker containers. It will *not*
    remove the blockchain data for each of the coin daemons you
    deployed. That data is safely stored in the place(s) you had
    specified as the `config_mount_dir` and `data_mount_dir` in
	`custom.yaml` (`/snode` by default). That means you won't have to wait for the
	blockchains of the various coin daemons to sync again the next
	time you bring up your Service Node.
	1. Once your Service Node has been brought down, you can edit the
       configuration file, `~/exrproxy-env/autobuild/custom.yaml`, to
       add or subtract coin daemons as desired. You can also, for example, convert
       your Service Node into a *testnet* Service Node by replacing
       `SNODE` with `testSNODE` in `custom.yaml`. To make sure you
       have a current reference for all coin daemons currently
       available (and the latest version of the autobuild
		tools in general), it is recommended to *pull* the latest changes from
       the Github repository:
	   ```
	   cd ~/exrproxy-env
	   git pull
	   ```
		If the `git pull` command gives errors like "Merge conflict" or "error:
		Your local changes to the following files would be overwritten
		by merge," it means you have locally changed one or more of the files `git` is
		trying to pull from the upstream repository. In this case, you can
		undo any local changes you made to any of the files tracked by
		`git` by issuing the command:
		```
		git reset --hard
		```
		Note, `git reset --hard` will cause any changes you made to
		tracked files in the `exrproxy-env` directory tree to be lost.
		After issuing `git reset --hard`, you should now be able to
		issue the `git pull` command without errors.
		`git pull` will pull all available updates to your local
		`exrproxy-env` repository, including any updates to
		`~/exrproxy-env/autobuild/examples/alldaemons.yaml`. The
		remote/upstream version of `alldaemons.yaml`
		will be updated frequently with new coin daemons/SPV wallets,
		so it'll be good to pull the latest version frequently. When
       you have the latest `alldaemons.yaml`, you can copy/paste coin
       daemon entries from `alldaemons.yaml` into
       `~/exrproxy-env/autobuild/custom.yaml`, as desired.
	1. Once you've finished editing
       `~/exrproxy-env/autobuild/custom.yaml` according to the new
       configuration you want (or even if you didn't edit
       `custom.yaml` at all), you can bring your Service Node back up
       as you did before in
       [Auto-Deploy Service Node](#auto-deploy-service-node), using the
       `app.py` script and the `deploy.sh` script as instructed there.
	1. IMPORTANT: If you are likely to bring your Service Node
       down and back up again multiple times, it is *highly
       recommended* to create a simple Bash Shell script like the
       following to avoid having to use `~/exrprox-env/deploy.sh` each
       time you want to bring your Service Node up. That way you can avoid
       answering all the questions asked by
       `deploy.sh` each time you bring your Service Node up:
	   ```
	   #!/bin/bash

	   export PUBLIC_IP="75.120.155.29"  # Update with your public ip address
	   export SN_NAME="snode01"  # Update with your snode name
	   export SN_KEY="PswGMd6gaZf1ceLojzGeKn7PQuXVwYgRQG8obUKrThZ8ap4pkRR7"  # Update with your snode private key
	   export SN_ADDRESS="BqNaZmLJt9wEGBHDNid9FvsgrG2x7Hbfex"  # Update with your snode address
	   export RPC_USER="my-rpc-user"   # Update with your rpc user
	   export RPC_PASSWORD="my-rpc-pw"    # Update with your rpc password
	   
	   docker-compose -f "docker-compose.yml" up -d --build
	   ```
	   Create the above Bash Shell script and give it a name like,
	   `dockerup.sh`. You can keep it anywhere, but `~/exrproxy-env`
	   is probably a convenient place to keep it. Give it executable
	   permissions too: `chmod +x dockerup.sh`. Now, instead of
	   running `./deploy.sh` in step 6 of the
	   [Auto-Deploy Service Node](#auto-deploy-service-node)
	   instructions, you can run `./dockerup.sh`.
	1. If you've subtracted one or more coin daemons from your
      `custom.yaml` because you want to save the disk space used
      by the blockchains of those coin daemons, please remember that
      the blockchain data is not deleted/removed when the docker container is
      removed. As mentioned above, the blockchain data of a coin
      daemon persists in a special mounted directory. If you kept the
      default data and config dir mount points given in
      `alldaemons.yaml`, which is `/snode`, then the blockchain data
      for DGB, for example, will be stored in `/snode/DGB/config`, and
      it can occupy many GB of space. To find out exactly how much
      space is being used by each coin daemon, you can enter:
	  ```
	  sudo du -d 1 -h /snode
	  57G	/snode/LTC
	  3.6G	/snode/MONA
	  222M	/snode/testsnode
	  3.3G	/snode/snode
	  27G	/snode/DGB
	  16K	/snode/xr_proxy
	  11G	/snode/RVN
	  48M	/snode/eth_pymt_db
	  ```
	  Sudo is necessary here because `/snode` directory is owned by
      `root`, not by $USER. So, if you want to stop supporting DGB
	  coin, for example, and you also want to free up the 27GB of
	  space the DGB blockchain is taking up, you'll need to first
	  make sure your Service Node is shut down according to step 1
	  above, then make sure the DGB entry has been removed from
	  `custom.yaml` according to step 2 above, then issue the
	  following command to permanently remove DGB blockchain data and
	  free the space it is occupying:
	  ```
	  sudo rm -rf /snode/DGB
	  ```

	    !!! warning "Warning: Be very careful to enter the `rm -rf` command very precisely. A typo could be disastrous. Also, be aware that adding support for DGB again after deleting its blockchain data will require the DGB blockchain to sync from scratch."

	> About *docker*

	For the most part, the *docker-compose* commands given thus far in
    this guide will suffice to manage your Service Node. However, if
    something "out of the ordinary" happens, or if you want to do
    something fancy with your docker objects,  there are a few more
    things it will be good to know about docker:

	- Let's say, for example, you want to interact directly with
      the DGB daemon, but you aren't sure the name of the DGB CLI
      executable command. Here's one way to find it:
		  1. Start an interactive *Bash* shell in the DGB container:
		  ```
		  docker exec -it exrproxy-env_DGB_1 /bin/bash
		  ```
		  You should see a prompt like this:
		  ```
		  root@f4c21d83d6fe:/opt/blockchain#
		  ```
		  1. Find which daemons are running in the DGB container:
		  ```
		  root@f4c21d83d6fe:/opt/blockchain# ps uax
		  ```
		  It should show you something like this:
		  ```
		  USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
		  root         1 46.4 28.7 8132896 4726660 ?     SLsl 11:37  25:38 digibyted -conf=/opt/blockchain/config/digibyte.conf
		  root        29  1.7  0.0  18248  3280 pts/0    Ss   12:33   0:00 /bin/bash
		  root        39  0.0  0.0  34424  2788 pts/0    R+   12:33   0:00 ps uax
		  ```
		  1. Note there is one running process called,
			 `digibyted`. This is the name of the Digibyte daemon
			 process and it is also a great clue about the name of the
			 CLI command for interacting with the Digibyte daemon. The
			 name of the CLI command
			 can usually be derived from the name of the daemon
			 process by simply replacing the `d` at the end of
			 the daemon process with `-cli`, like this:
			 ```
			 digibyted -> digibyte-cli
			 ```
		 1. If you want to verify there is a `digibyte-cli` command,
            you can do this:
			```
			which digibyte-cli
			```
			which should return this:
			```			
			/usr/bin/digibyte-cli
			```
		 1. Now you can interact with the Digibyte daemon as follows:
			```
			root@f4c21d83d6fe:/opt/blockchain# digibyte-cli getblockcount
			13535747
			```
			Alternatively, we can exit the Bash shell running in the
            DGB container, then execute the `digibyte-cli` command
            from outside the docker container:
			```
			root@f4c21d83d6fe:/opt/blockchain# exit
			exit
			~$ docker exec exrproxy-env_DGB_1 digibyte-cli getblockcount
			13535762
			```
	- Now let's consider the case where the docker container with
	  which you want to interact does
      *not* have *Bash* shell available. This is the case for the Syscoin
	  container, for example. Attempting to invoke the *Bash*
	  shell in the Syscoin container will result in an error:
	  ```
	  docker exec -it exrproxy-env_SYS_1 /bin/bash
	  OCI runtime exec failed: exec failed: container_linux.go:380:
	  starting container process caused: exec: "/bin/bash": stat
	  /bin/bash: no such file or directory: unknown
	  ```
	  The solution is to invoke a shell which *does* exist in the
	  container, like this:
	  ```
	  docker exec -it exrproxy-env_SYS_1 /bin/sh
	  ```
	- Another unique feature of [an earlier version of] the Syscoin container is that the
      `syscoin-cli` command requires certain parameters to be passed
      to it in order to work properly. For example:
	  ```
	  docker exec exrproxy-env_SYS_1 syscoin-cli getblockcount 
	  ```
	  returns
	  ```
	  error: Could not locate RPC credentials. No authentication cookie could be found, and RPC password is not set.  See -rpcpassword and -stdinrpcpass.  Configuration file: (/root/.syscoin/syscoin.conf)
	  ```
	  But invoking `syscoin-cli` as follows, works properly:
	  ```
	  docker exec exrproxy-env_SYS_1 syscoin-cli -conf=/opt/blockchain/config/syscoin.conf getblockcount
	  1218725
	  ```
	  Alternatively, this also works:
	  ```
	  docker exec exrproxy-env_SYS_1 syscoin-cli -datadir=/opt/blockchain/config getblockcount
	  1218725
	  ```
	  Note: The DASH container, and perhaps others containers, will also require
      these same parameters to be passed to the CLI
      command. [edit: The latest SYS container does *not* require the additional parameter]
	  - Now let's consider another case where more *docker* knowledge
      could be required. Let's consider the case where
      `docker-compose down` fails to complete due to receiving a timeout
      error something like the following:
	  ```
	  UnixHTTPConnectionPool(host='localhost', port=None): Read timed out.
	  ```
	  Some users have actually seen this exact error when trying to run
      `docker-compose down` while an I/O intensive process (e.g.
      `lbrycrdd`) is running on the
      system. [Here are some potentially helpful suggestions on how to fix/avoid this timeout error](https://stackoverflow.com/questions/42230536/docker-compose-up-times-out-with-unixhttpconnectionpool). However,
      once `docker-compose down` has failed to complete even once, it can leave
      your docker environment in a state where some docker containers have been
      *stopped*, but have not yet been removed. This state is
      problematic because your next attempt to bring up your Service
      Node with `deploy.sh` (or `dockerup.sh`) will give errors saying the
      container names you're trying to create, already exist. If you suspect such
      a situation has developed, one thing you can do is to list *all*
      docker containers - both running and stopped:
	  ```
	  docker ps -a
	  ```
	  If this command shows some containers with a *stopped* STATUS,
      then you probably need to remove those *stopped*
      containers. Fortunately, docker has a handy *prune* utility
      for removing all *stopped* containers:
	  ```
	  docker container prune
	  ```
      Also, if your docker containers, images, volumes and/or networks
      get messed up for any reason, or if you end up with docker
      images on your server which are no longer used and taking up
      space unnecessarily,
      [docker offers a variety of *prune* utilities to clean up the current state of your *docker* environment](https://docs.docker.com/config/pruning/).
	  - Note: In the context of a docker-based Service Node
      auto-deployment, executing the following 2 command should be
      equivalent to `docker-compose down`:
	  ```
	  docker stop $(docker ps -q -f name=exrproxy-env_*)
	  docker rm $(docker ps -a -q -f name=exrproxy-env_*)
	  ```
	  This trick can be useful if, for example, `docker-compose.yml`
      is accidentally reconfigured before `docker-compose down` is
      executed, causing `docker-compose down` to fail.
	- *docker* offers a variety of useful utilities for managing and
    interacting with various docker objects. To see a list of all
    docker options and commands,
    enter:
	```
	docker --help
	```
	To get help on a specific docker command, enter:
	```
	docker COMMAND --help
	```
	For example,
	```
	docker export --help
	```
	There are also docker guides available at [https://docs.docker.com/go/guides/](https://docs.docker.com/go/guides/).


## Manual Service Node Setup (Deprecated)

To setup your Service Node Manually, without using the [Automated
Docker-Based EXR Service Node Setup](#automated-docker-based-exr-service-node-setup-recommended),
complete the following guides in order:

1. [Collateral Wallet Setup](/service-nodes/setup/#collateral-wallet-setup)
1. [Service Node Wallet Setup](/service-nodes/setup/#service-node-wallet-setup)
1. [Additional Setup](/service-nodes/setup/#additional-configuration)
1. [Service Node Deployment](/service-nodes/setup/#deploying-service-node)

---

### Collateral Wallet Setup

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
		  * Single Service Node:
		  ```
		  servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP
		  ```
		  * Single Service Node (2 inputs):
		  ```
		  servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 1 2500
		  ```
		  * Multiple Service Nodes (10k BLOCK):
		  ```
		  servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 2 5000
		  ```

		![Create Inputs](/img/service-nodes/redesign-servicenodecreateinputs-response.png)

	1. Prepare to create a `servicenode.conf` file in your
       [data directory](/wallet/backup-restore/#data-directory) by
       first deleting any old `servicenode.conf` file in the data directory, or deleting any out-of-date service node references within your `servicenode.conf`. 
	1. Create a `servicenode.conf` configuration file. Type `servicenodesetup [NODE_ADDRESS] [ALIAS]`. An entry will be created in the `servicenode.conf` for the Service Node. Example:
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
	1. Continue on to [Service Node Wallet Setup](#service-node-wallet-setup).

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
	1. Create a `servicenode.conf` configuration file. Type `servicenodesetup [NODE_ADDRESS] [ALIAS]`. An entry will be created in the `servicenode.conf` for the Service Node. Example:
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
	1. Continue on to [Service Node Wallet Setup](#service-node-wallet-setup).

---

### Service Node Wallet Setup

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

### Additional Configuration
At this point you have completed the basic setup for a Service Node. The Service Node can operate but will not be supporting any service. Now what you need to do is setup the Service Node to support services on the network where 100% of fees are distributed to Service Nodes:

* With [XBridge](/protocol/xbridge/introduction), the decentralized exchange component of the Blocknet Protocol, 100% of [trading fees](/protocol/xbridge/fees) are distributed to Service Nodes for hosting full blockchain nodes and providing verification checks for trustless exchange between digital assets. For setup, see the [XBridge Configuration Guide](/service-nodes/xbridge-configuration).
* With [XRouter](/protocol/xrouter/introduction)\*\*, the decentralized inter-chain communication component of the Blocknet Protocol, 100% of fees are paid to Service Nodes for hosting full blockchain nodes that support SPV calls. For setup, see the [XRouter Configuration Guide](/service-nodes/xrouter-configuration).
* With [XCloud](/protocol/xcloud/introduction)\*\*, a decentralized microservice oracle network built on XRouter, allows you to monetize any microservice, blockchain call, API, or cloud tech on your own hardware, in many cases without having to write any code. For setup, see the [XCloud Configuration Guide](/service-nodes/xcloud-configuration).

\*\* **For XRouter and XCloud services**, your Service Node Wallet IP address must remain unchanged (static). If using a VPN with an IP that changes, it will impact your ability to provide these services.

---

### Deploying Service Node

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

