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
	
	If you want to host the [Hydra](/resources/glossary/#hydra) and/or
    [XQuery Indexer](/resources/glossary/#indexer) services (and maybe a few SPV
    wallets as well), youll need 8 vCPUs, 16 GB of RAM and 512+ GB of
    SSD storage space. Hosting  Hydra or XQuery services requires
    hosting an EVM (Ethereum Virtual Machine) blockchain like
    Ethereum/ETH, Avalanche/AVAX, Binance Smart Chain/BSC, Fantom/FTM, Solana/SOL,
    Polkadot/DOT, Cardana/ADA, Etc. As of this writing, the smallest EVM
    blockchain supported by Blocknet is Avalanche/AVAX. AVAX
    blockchain *alone* requires 8 vCPUs, 16 GB of RAM and 512 GB of storage
    space. Therefore, if you want to host XQuery/Hydra services *and* a few SPV wallets, you
    should really have more than 512 GB of SSD storage space.

	!!! warning "8 vCPUs, 16 GB of RAM and 512+ GB of SSD storage space are required to host the Avalanche/AVAX blockchain for Hydra/XQuery services!"

	Minumum HW requirements for a medium to large Service Node would be
    something like this:

	- 8 CPU cores (or 8 vCPUs if the Service Node runs on a VPS)
	- 16 GB RAM
	- 512+ GB SSD Storage
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

	> Extra Large System for supporting ETH archival node

	To support [Hydra](/resources/glossary/#hydra) and/or
    [XQuery Indexer](/resources/glossary/#indexer) services of the
    Ethereum/ETH blockchain, a Service Node must host an ETH archival node.
	In terms of CPU and RAM requirements, running an ETH archival node
    requires:

	- 8 CPU Cores (or 8 vCPUs if the ETH archival Node runs on a VPS)
	- 16 GB RAM
	
	The storage space requirements for an ETH archival node are a bit more
    demanding. The Go-Ethereum (GETH) archival node, which is the core wallet
    needed to run an ETH archival node, occupies about 8TB of space
    as of this writing (July 17, 2021). Furthermore, it is growing by 3TB per
    year. (Its current size can be found
    [here](https://etherscan.io/chartsync/chainarchive).) Therefore,
    a Service Node supporting an
    ETH archival node should probably have at least 10TB
    for ETH alone, plus maybe another 1.5-2TB for running other SPV
    wallets. It should also have the ability to expand its storage space by 3TB
    per year.

	*Update Sept. 27, 2021: Some Blocknet community members are
    researching the possibility of using the [Erigon ETH archival node](https://github.com/ledgerwatch/erigon) instead
    of the Go ETH (GETH) archival node. This is promising research as
    the Erigon ETH archival node occupies only about a quarter of the
    space of the GETH archival node. In other words, only about 2TB
    instead of 8TB as of this writing. Erigon ETH archival node also
    syncs in about one quarter the time it takes GETH to sync. As of
    this writing, it appears Erigon ETH may well be able to support
    Hydra services of ETH in its current stage of development, but
    until Erigon has standard ETH filter
    methods, it won't support XQuery services of ETH. Please
    join discussions in the #hydra channel of
    [Blocknet Discord](https://discord.gg/cQ9JNyNRW4) to keep up with the
    latest developments on Erigon ETH.*

	It's also important to note that the storage for the ETH full
    archival node *must* be very fast. In other words, it must use
    SSDs, not HDDs. There are 3 types of SSDs: SATA, SAS and
    NVMe/PCIe. Of the 3, SATA are the slowest, SAS are a little
    faster, and NVMe are by far the fastest. NVMe are *definitely*
    the preferred variety of SSD drive when it comes to hosting an ETH archival
    node. In fact, it looks doubtful that SATA or SAS SSD drives will be
    fast enough to allow the ETH node to sync.

	It is also recommended that the SSDs used for an ETH archival node be configured
    in a RAID mirror configuration (e.g. RAID-1, RAID-10,
    RAID-Z2). Without RAID mirroring, an SSD failure will almost certainly mean
    you'll have to resync the entire ETH full archival node, which
    takes over a month for a GETH node (but probably only a quarter of
    that time for an Erigon ETH node). Your ETH archival node will be offline for the
    duration of the resync.

	As of this writing, it's not clear that any of the VPS Provider Options mentioned
    above are capable of providing a VPS which meets the HW
    requirements for an ETH archival node, or if they are capable, the cost
    can be a bit extreme and it's not clear they can expand storage space as
    needed to support the growing ETH full archival node. There may
    well be some smaller VPS providers who are capable of both meeting current HW
    requirements and allowing for storage space expansion in the
    future. There are also efforts underway to coordinate "package
    discounts" from such VPS provider(s) for a person or group of people to rent
    a number of ETH archival-capable VPS's at a discounted rate. Please join
    discussions on this topic in the #hydra channel of
    [Blocknet Discord](https://discord.gg/cQ9JNyNRW4).

	Another option for meeting the HW requirements of an ETH archival node is
    to purchase your own hardware and run it at home or in a
    *colocation hosting* data center. (Colocation hosting services can be found
    for USD $50 per month per server, as of Feb., 2022.) If purchasing
    your own SSD drives, be aware that ETH core will be writing to
    your SSDs continuously, so
    you'll want to get SSDs with a high "durability" rating. For
    example, a company called *Sabrent* offers an 8TB NVMe SSD. On the
    surface, it may look like a good choice to use for building a
    system with lots of fast storage space. Unfortunately, this
    particular drive only has a TBW (Total Bytes Written) durability
    rating of 1,800 TB TBW, which, according to
    [this review](https://www.youtube.com/watch?v=iFXjC7k1OOw) makes
    it not very suitable to be used in an application that writes to
    it frequently. (Note, Samsung NVMe drives and/or any NVMe drives rated
    for industrial use are probably quite *durable* and suitable for
    supporting an archival ETH node.) More discussions about HW details can
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
		   and the alias for `blocknet-cli` has
		   also been set up according to that guide, you can stop
		   your *Staking Wallet* by
		   issuing the follow command:
			  ```
			  blocknet-cli stop
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
		   and the aliases for `blocknet-cli`, `blocknet-daemon` and `blocknet-unlock` have
		   also been set up according to that guide, you can restart
		   your *Staking Wallet* and start it staking again by
		   issuing the follow commands:
			  ```
			  blocknet-daemon
			  ```
			  (You'll need to wait a few minutes after starting the
			  Blocknet daemon for your wallet to
			  sync the headers. Then you'll be allowed
			  to unlock your wallet for staking in the next step.)
		   1. Unlock your staking wallet for staking only:
		   ```
		   blocknet-unlock
		   ```
		   (Enter your wallet password when prompted.)
		   1. Confirm your wallet is staking by issuing the command:
		   ```
		   blocknet-cli getstakingstatus
		   ```
		   When this command returns, `"status": "Staking is active"`,
		   then you know your wallet is staking properly.
		   Note, you may also want to confirm your staking wallet balance
		   is correct with:
		   ```
		   blocknet-cli getbalance
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
		   and the alias for `blocknet-cli` has also been set up according to that
			  guide, you
		   can stop your *Staking Wallet* with:
		   ```
		   blocknet-cli stop
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
		   # blocknet-daemon = Start Blocknet daemon for staking wallet
		   alias blocknet-daemon='~/blocknet-${BLOCKNET_VERSION}/bin/blocknetd -daemon -datadir=$HOME/.blocknet_staking/'
           # blocknet-cli = Staking wallet Command Line Interface
		   alias blocknet-cli='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli -datadir=$HOME/.blocknet_staking/'
           # blocknet-unlock = Unlock staking wallet for staking only
		   alias blocknet-unlock='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli -datadir=$HOME/.blocknet_staking/ walletpassphrase "$(read -sp "Enter Password:" undo; echo $undo;undo=)" 9999999999 true'
           # blocknet-unlockfull = Unlock staking wallet fully
		   alias blocknet-unlockfull='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli -datadir=$HOME/.blocknet_staking/ walletpassphrase "$(read -sp "Enter Password:" undo; echo $undo;undo=)" 9999999999 false'
		   ```
		   1. Save your edits to `~/.bash_aliases`, exit the editor, then
		   activate your new alias definitions with:
		   ```
		   source ~/.bash_aliases
		   ```
		   1. Restart your staking wallet with:
		   ```
		   blocknet-daemon
		   ```
		   1. Unlock your staking wallet for staking only:
		   ```
		   blocknet-unlock
		   ```
		   (Enter your wallet password when prompted.)
		   1. Confirm your wallet is staking by issuing the command:
		   ```
		   blocknet-cli getstakingstatus
		   ```
		   When this command returns, `"status": "Staking is active"`,
		   then you know your wallet is staking properly.
		   Note, you may also want to confirm your staking wallet balance
		   is correct with:
		   ```
		   blocknet-cli getbalance
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

	1. Create a new public address to hold collateral for your Service
		Node. It is recommended to create a new collateral address for each
		Service Node whose collateral will be stored in this wallet. A unique name for
		each collateral address will need to be chosen as an alias.
		We'll refer to this name below as ALIAS.

	    * To create a collateral address on the GUI/Qt wallet, there are 2 options:

		    1. Select *Address Book* tab on the left side of the
		wallet, then select *Create New Address* at the top, then fill
		in the *Alias* field with your ALIAS and click *Add
		Address*.

			1. Navigate to *Tools->Debug Console* and type:
			```
			getnewaddress ALIAS
			```
			For Example:
			```
			getnewaddress snode01
			```
			The `getnewaddress` command will return a new address, like `BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP`

	    * To create a collateral address on the CLI wallet:
		```
		blocknet-cli getnewaddress ALIAS
		```
		For Example:
		```
		blocknet-cli getnewaddress snode01
		```
		The `getnewaddress` command will return a new address, like `BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP`

	1. Create the inputs needed for the collateral address.
		Each address where collateral funds for a Service Node are
		stored must meet the following requirements:

	    #### Collateral Address Requirements

	    * There must be 10 or fewer [inputs](/resources/glossary/#input) in the
          address whose sum is >= 5000 BLOCK. There can be other
          inputs in the address which don't factor into this
          calculation, but it must be possible to add 10 or fewer
          inputs in the address to achieve a sum of >= 5000 BLOCK.
	 * If you want the address to qualify for 1
       [Superblock vote](/governance/proposal-voting/) (recommended),
       you should create one small [input](/resources/glossary/#input)
       to the address, ideally around 1 BLOCK in size, which is
       *separate* from the inputs used to meet the 5000 BLOCK
       requirement listed above. 
	 * If you want the address to qualify for 1
       [Superblock vote](/governance/proposal-voting/) (recommended),
       you should also ensure that the set of inputs used to meet the
       5000 BLOCK requirement are all 100 BLOCK or larger in size.

	    To fund a collateral address such that it meets these
		requirements, there are two options: __Manual Funding__ or
		__servicenodecreateinputs__. Use one of these two options (*a*
		or *b*):

	    1. __Manual Funding:__ (recommended) Each time you send BLOCK to the
		   collateral address, it creates an
		   [input](/resources/glossary/#input) to the address whose
		   size is equal to the amount sent. So, to meet all [the above
		   requirements](#collateral-address-requirements), you could
		   send 1 BLOCK to the collateral address, then send
		   BLOCK in amounts of >= `500` and <= `5000` BLOCK to the same
		   collateral address until the sum of the >= 500 BLOCK inputs
		   is >=5000. <br>
		   
			   * For example, you could send 1 BLOCK to the
			   collateral address, then send 1250 BLOCK to the collateral
			   address 4 times. After doing so, the collateral address
			   would have 5 [inputs](/resources/glossary/#input): 1 input
			   of 1 BLOCK and 4 inputs of 1250 BLOCK each. This would meet [the above
		   requirements](#collateral-address-requirements).

	           * As another example, you could send 1 BLOCK to
			   the collateral address, then send 5000 BLOCK to the same collateral
			   address. That would leave the collateral address with 2
			   [inputs](/resources/glossary/#input): 1 input of 1
			   BLOCK and 1 input of 5000 BLOCK. This
			   would also meet [the above requirements](#collateral-address-requirements).

		       Note: If you are sending to the collateral
			   address from the same wallet which contains the collateral
			   address, and that wallet also contains other
			   collateral addresses, it will be good to send the funds using the
			   [Coin Control](/wallet/send-funds/#coin-control) feature
			   to ensure the funds you're sending are not withdrawn from other
			   collateral addresses. If sending from a CLI wallet, you can use methods like
			   `createrawtransaction` and `sendrawtransaction` to accomplish
			   coin controlled sending. Get help on using these
			   methods in the CLI wallet with:<br>
			   `blocknet-cli help createrawtransaction` <br>
			   and <br> 
			   `blocknet-cli help sendrawtransaction`. 

	        ??? "Tip: Click here to learn how to see all inputs of a collateral address."

				* In a GUI/Qt wallet:
				  Select *Window->Coin Control* to display the addresses and
				  [Inputs](/resources/glossary/#input) where funds are stored in your
				  wallet:

                      ![Coin Control](/img/wallet/coin-control-window.png) <br>
	                  This will display a screen like this (*in Tree mode*):
				      ![Coin Control](/img/wallet/coin-control-screen.png)
					  On this screen you can click the small grey triangle
	                  to the left of an address to see the
	                  [Inputs](/resources/glossary/#input) of the address.

				* In a CLI wallet, or in *Tools->Debug Console* of
                  the GUI/Qt wallet: Use the `listunspent` method to
                  list all wallet [Inputs](/resources/glossary/#input)
                  and their associated addresses.<br>
				  From the CLI wallet:
				  ```
				  blocknet-cli listunspent
				  ```
				  From *Tools->Debug Console* of the GUI/Qt wallet:
				  ```
				  listunspent
				  ```

	    1. __servicenodecreateinputs__: `servicenodecreateinputs` is a
		method/tool of the Blocknet core wallet which can facillitate creating a set
		of [inputs](/resources/glossary/#input) in a collateral
		address which meets
		[the above requirements](#collateral-address-requirements). Not
		only does it automatically create a set of inputs which meets
		[the requirements](#collateral-address-requirements), it also
		automatically creates a 1 block input to the collateral
		address to make the address eligible for
		[voting](/governance/proposal-voting/). Unfortunately,
		this tool does not (yet) have the ability to avoid withdrawing
		funds from other collateral addresses in the wallet (if any exist) as it
		creates the desired set of inputs for a new collateral
		address. For this reason, and because the recommendation is
		now to use a separate collateral address for each Service
		Node's collateral, the use of `servicenodecreateinputs` is
		deprecated (for now). There are only 2 cases where
		`servicenodecreateinputs` can be used without issue:

	        1. The first case is when you don't already have a collateral addresses in your
		wallet which has been set up with
		[inputs](/resources/glossary/#input) that meet [the above
		requirements](#collateral-address-requirements).

			1. The second case is when you want to store the collateral for *multiple* Service
               Nodes in a single collateral address. This approach is not recommended,
               but it is possible.

	    To use the `servicenodecreateinputs`
		method/tool, your collateral wallet should contain at least 1 BLOCK
		to cover the transaction fee of calling the
		`servicenodecreateinputs` method, and at least 5001
		BLOCK for each Service Node collateral
		you want to set up. Once those conditions are met, you
		can use the `servicenodecreateinputs` method like this: <br>
		From *Tools->Debug Console* of the GUI/Qt wallet:
		```
		servicenodecreateinputs NODE_ADDRESS NODE_COUNT INPUT_SIZE
		```
		From the CLI wallet:
		```
		blocknet-cli servicenodecreateinputs NODE_ADDRESS NODE_COUNT INPUT_SIZE
		```
		In these examples, replace `NODE_ADDRESS`, `NODE_COUNT` and
		`INPUT_SIZE` with the desired values, as per the following definitions:
		
		* `NODE_ADDRESS` = The collateral address created in step 1 above.

	    * `NODE_COUNT` = The number of Service Nodes for which to
					 configure the collateral address. It is
					 recommended to make this 1, or just leave it
					 blank so it will default to 1. However, as
					 mentioned, it is possible to configure a single
					 collateral address to provide collateral for
					 multiple Service Nodes.

	    * `INPUT_SIZE` = The amount of BLOCK for each
					 [input](/resources/glossary/#input) of the collateral address. 

	        * Must be >= `500` and <= `5000`.

	        * If left blank, it defaults to `1250`.

			* Example: `1000` will create 5 inputs of
                           1000 BLOCK each (per Service Node)

	    Example which creates 4 inputs of 1250 BLOCK each in the collateral address, for a single Service Node :
		```
		servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP
		```
		Example which creates 2 inputs of 2500 BLOCK each in the collateral address, for a single Service Node :
		```
		servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 1 2500
		```
		Example which creates 2 inputs of 2500 BLOCK each in
		the collateral address for each of 4 Service Nodes
		```
		servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 4 2500
		```
		This last example will result in 8 inputs of 2500 BLOCK
		each being created in the collateral address (plus a 1
		BLOCK input for voting).

	1. Prepare to create a `servicenode.conf` file in your
       [data directory](/wallet/backup-restore/#data-directory). If
       the `servicenode.conf` file does not exist in your data
       directory, proceed to the next step. Otherwise, review
       the contents of `servicenode.conf` in an editor like [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm)
           or
           [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/). If *all* the
       service node references in the file are
       out-of-date, exit the editor and delete the file. If some service node references
       are current/valid, but others are out-of-date, delete all lines containing
       out-of-date service node references, save the file and exit the editor.
	1. Create a `servicenode.conf` configuration file. Use the
	`servicenodesetup` command as follows: <br>
	From *Tools->Debug Console* of the GUI/Qt wallet:
	```
	servicenodesetup NODE_ADDRESS ALIAS
	```
	From the CLI wallet:
	```
	blocknet-cli servicenodesetup NODE_ADDRESS ALIAS
	```
	Where `NODE_ADDRESS` is the collateral address you created in step
	1 above, and `ALIAS` is any name you want to give
	to your Service Node (or group of Service Nodes). The ALIAS you
	choose here doesn't have to be the
	same as the ALIAS you chose for your collateral address in step 1,
	but it is usually most convenient to use the same ALIAS. The
	`servicenodesetup` command will create an entry for the Service Node(s) in the
	`servicenode.conf` file in your collateral wallet [data directory](/wallet/backup-restore/#data-directory). Example: 
		```
		servicenodesetup BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP snode01
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
		  * For GUI/Qt wallet, simply close the Blocknet wallet application, then open it again. 
		  * For CLI wallet (assuming aliases for *blocknet-cli* and
		  *blocknet-daemon* have been set up according to the [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux)):
		  ```
		  blocknet-cli stop
		  blocknet-daemon
		  ```
	   Note, you will probably need to wait at least 30 seconds
	   after issuing `blocknet-cli stop` or closing the GUI wallet app before you'll be allowed to
	   relaunch `blocknet-daemon` or relaunch the GUI wallet.  Just keep trying every 30 seconds or so to relaunch until you no longer get errors.
	   1. Assuming you want to [stake](/resources/glossary/#staking) your collateral, unlock your staking wallet for staking only:
		  * For GUI/Qt wallet, unlock your wallet for staking only
	   according to [the staking guide for GUI wallet](/wallet/staking/#staking-from-a-gui-wallet).
		  * For CLI wallet (assuming an alias for *blocknet-unlock* has been set up according to the [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux)):
		  ```
		  blocknet-unlock 
		  ```
	   (Enter your wallet password when prompted.)
	   1. Confirm your wallet is staking with the `getstakingstatus` command.<br>
	   From *Tools->Debug Console* of the GUI/Qt wallet:
	   ```
	   getstakingstatus
	   ```
	   From the CLI wallet:
	   ```
	   blocknet-cli getstakingstatus
	   ```
	   When this command returns, `"status": "Staking is active"`,
	   then you know your wallet is staking properly.
	   Note, you may also want to confirm your staking wallet balance
	   is correct with `getbalance`:<br>
	   From *Tools->Debug Console* of the GUI/Qt wallet:
	   ```
	   getbalance
	   ```
	   From the CLI wallet:
	   ```
	   blocknet-cli getbalance 
	   ```
	1. Continue on to [auto-deploy your Service Node](#auto-deploy-service-node).

### Auto-Deploy Service Node

??? example "Auto-Deploy Service Node"
	<br>
	Firstly, log in to the Ubuntu Linux server you
    [set up above](#set-up-an-ubuntu-linux-server), (log in as the
    user you created, not as root), then continue with this guide.

	### Run Global Install Script for Enterprise XRouter Service Node Environment

	If you have never run the
	[Enterprise XRouter](/resources/glossary/#enterprise-xrouter)
	Service Node Global Install script on this server, and you don't
	mind using your server's *built-in python3*, copy/paste these
	commands to run the *Global Install* script:
	```
	curl -fsSL https://blocknetdx.github.io/blocknetdx -o env_installer.sh
	chmod +x env_installer.sh
	./env_installer.sh --install
	```
	Note, this script will log you out after it's finished installing
	everything. This is necessary to update the user's membership in
	the *docker* group of Linux. Simply log in again after it logs you out.<br>
	Then following the steps below.<br>

	1. Prepare to enter all the details you'll need when you run
    the `builder.py` script:
		1. Fetch your Service Node computer's Public IP address, then
        copy/paste it to a temporary text file for easy access.
		Some options for fetching your Service Node computer's Public IP include: 
		```
		curl ipconfig.io
		curl ifconfig.co
		dig +short myip.opendns.com @resolver1.opendns.com
		```
		Most likely, `builder.py` will automatically find your server's public IP
        address and display it, but it will be good to know it so you can
        verify it.
		1. Make sure you have easy copy/paste access to your *Servicenode Private
           Key* and *Servicenode Address*, which you got earlier from the [Collateral Wallet Setup Procedure](#collateral-wallet-setup-for-automated-service-node-setup).
	    1. Think of a name for your Service Node. It doesn't have to be
          the same name you chose to label the address of your Service
          Node during the *Collateral Wallet Setup*, but it's often
          convenient to use the same name.
	    1. Think of a name and a password for the RPC user your Service
          Node will use when communication with the services/coins it supports.
	1. Change directory to your local `exrproxy-env` repository
	(`exrproxy-env` is located `~` by default.):
	```
	cd ~/exrproxy-env 
	```
	1. Update your local repository and launch the
	[SNode](/resources/glossary/#snode) Builder:<br>
	Assuming you have previously run the
	[Global Install Script](/service-nodes/setup/#run-global-install-script-for-enterprise-xrouter-service-node-environment)
	on this server, you can update your local environment repository
	and launch the SNode builder tool with this command:
	```
	./exr_env.sh -u -b ""
	```
	The `-u` parameter updates the local repository.<br>
	The `-b ""` parameter launches the
      `builder.py` tool when the update is complete. If you prefer,
      you can leave off the `-b ""` parameter, then call `./builder.py`
      standalone after `./exr_env.sh -u` completes, like this:
	```
	./exr_env.sh -u
	./builder.py
	```
	IMPORTANT: When passing parameters to `./builder.py` through
      `./exr_env.sh`, the parameters of `./builder.py` must follow the
      `-b` parameter and they must all be enclosed in double quotes
      ("). For example:
	```
	./exr_env.sh -b "--deploy"
	./exr_env.sh -b "--source autobuild/custom.yaml"
	./exr_env.sh -b ""
	```
	Parameters passed to `./builder.py` when it's called as a
	standalone app do *not* require double quotes around them. For
      example:
	```
	./builder.py --source autobuild/custom.yaml --deploy
	```

	1. `builder.py` will first check to see if the necessary versions
       of `docker` and `docker-compose`
       have been installed on your server. If not, it will instruct
       you to install them and exit.
	1. Next, it will display some information about your system's available hardware
    resources. This information will be useful in the SNode
    configuration process. It will look something like this:
	![available-hw](/img/service-nodes/system-hw.png)
	1. Next, it will prompt you for your *sudo* password. Enter your
       *user* password, not your *root* password.
	1. Next, it will ask you some questions about how you want to
		configure your Service Node. If at any time you want to change
		any of the answers you have given while configuring your SNode,
		simply issue *Control-C* to stop the configuration process,
		then run `./builder.py` (or `./exr_env.sh -b ""`) again.
	1. The first questions it will ask will be about your Public IP address, Service Node
		Name, Service Node Private Key, Service Node Address, RPC User
		and RPC Password. You should
		have the answers to all these questions already prepared from
		step 1 above.
	1. Next, you'll be presented with a series of queries about which
       services you want to support on your Service Node. The
       approximate amount of RAM,
       # of CPUs, and amount of DISK (SSD) storage space required to support each
       service will be displayed next to the service name. Note
       that the cumulative DISK storage space requirements of all the services you
       select to store data in a particular directory, must be less
       than the total amount of DISK storage space available in that
       directory. For example, the sum of the DISK requirements for
       all the services you select to store data in the `/snode`
       directory must be less than the total available space in
       the `/snode` directory. (Note, the available space on each of your server's mounted
       directories is displayed when you first run `builder.py`, as in
       step 5 above.) The RAM and CPU requirements for different services are not
       necessarily cumulative in the same way. For Example, ETH and AVAX both require 16 GB of RAM, but that doesn't necessarily mean you need 32 GB RAM to support both
       of them on your SNode. However, if you want to have the ability to sync both
       of them concurrently, or to guarantee optimal performance, then
       32+ GB RAM would be recommended.
	1. The first services you'll be given the option to
       support will be the XBridge [SPV](/resources/glossary/#spv)
       blockchain services. In the
       following example, SPV blockchains DASH, LTC, PIVX and SYS have been
       selected to be supported as XBridge services:
	   ![xbridge-chains](/img/service-nodes/xbridge-chains.png) <br> Next to each XBridge service in the list, the
       approximate RAM, # of CPU cores and
       DISK requirements for the blockchain are displayed. The default
       *data mount directory* (`/snode` in this example) is also displayed for each
       blockchain. (In a later step, you'll be given the option to change the *data
       mount directory* for specific services.)
	   If you want to change the global default *data mount directory* for *all* services
       you'll deploy, you can change it from `/snode` to some other
       directory by following this procedure:

	    ??? example "Change Global Default Data Mount Directory."
		  1. Issue *Control-C* to stop `builder.py` if it's currently running.
		  1. Make a copy of `autobuild/sources.yaml`. For example:
		  ```
		  cp autobuild/sources.yaml autobuild/custom.yaml
		  ```
		  1. Use a simple editor like  [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm)
           or
           [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/),
           to edit the copy you just made. For
           Example:
		   ```
		   vi autobuild/custom.yaml
		   ```
		   1. In the editor, search for all occurrances of `/snode`
		   and replace them with whatever new global default you want for your *data
		   mount dir*.
		   1. Save the file and exit the editor.
		   1. Run `./builder.py`, passing it a parameter to
		   specify the file you just edited as the *source* of available
		   coins/services. For example:
		   ```
		   ./builder.py --source autobuild/custom.yaml
		   ```

	1. Next, you'll be given the option to choose which
       [EVM](/resources/glossary/#evm) blockchains you 
       want to support.  In the following example, both ETH and AVAX
       EVM blockchains are selected to be supported:
	   ![xbridge-chains](/img/service-nodes/evm-chains.png) <br>
	   The HW requirements and default
       *data mount directory* (`/snode` in this example) are displayed for each
       blockchain. Note: The HW requirements listed next to
       each EVM chain assume the EVM chain will be hosted *internally*,
       on the SNode server itself. Supporting an *externally* hosted EVM
       does not add any HW requirements to the SNode server.  (In a
       later step, you'll be given the option to
       specify the Host IPs of the EVM blockchains your
       SNode will support *externally*.)
	1. If you chose to support [EVM](/resources/glossary/#evm) blockchains,
       you'll be given the option to support [Hydra](/resources/glossary/#hydra) and/or
       [XQuery](/resources/glossary/#indexer) services for each of the
       EVMs you'll support.
	1. If you chose to support XQuery, you'll be given the
       option to select which indices you want XQuery to support for each EVM you'll
       support. Supporting all available indices is recommended. For
       example:

	       ![eth-indices](/img/service-nodes/eth-indices.png)	   
    	   ![avax-indices](/img/service-nodes/avax-indices.png)	   

	1. Next, if you chose to support [EVM](/resources/glossary/#evm)
	   blockchains, you'll be prompted to enter the
	   US dollar values you want to charge for access to *tier1* and
       *tier2* [Hydra](/resources/glossary/#hydra) and
       [XQuery](/resources/glossary/#indexer) services on your Service
	   Node. (Default values are recommended.) See
       [XQuery/Hydra Project Payment API](https://api.blocknet.co) for
	   definitions of *tier1* and *tier2* payments.
	1. Next, you'll be prompted to enter the
	   discount percentages you want to offer clients for payments in aBLOCK or
	   aaBLOCK. These payment discounts are relative to the US dollar
	   values entered in the previous step. The idea of giving
	   discounts to clients paying with aBLOCK or aaBLOCK came from
	   the idea that we want to encourage payment in various forms of
	   BLOCK in order to increase demand for BLOCK. Due to high eth
	   gas fees currently associated with paying in aBLOCK, and due to aaBLOCK
	   being the *only* form of payment available on the AVAX
	   blockchain, default values of 20% discount for aBLOCK, and 0%
	   discount for aaBLOCK are recommended.
	1. Next, you'll be asked, "*Do you wish to change install
       locations?*"  Type "*y*" here if you want to change the *data
       mount directory* of any service from `/snode` to some other
       directory. This option can
       be useful if, for example, you have a separate, very large, fast disk
       dedicated to supporting ETH, a service which requires large,
       fast NVMe SSD storage. Selecting "*y*" here will display
       a selection menu which displays the current *data
       mount directory* for each service and allows you to select the
       services for which you want to change the *data
       mount directory*. The selection menu will look something like
       the following:
	   ![xbridge-chains](/img/service-nodes/select-new-install.png)
	1. Next, a *storage space calculations* table will be displayed
       which can help you confirm that your server's storage space
       resources are capable of supporting all the services you've elected
       to support. The table will look something like this:
	   ![xbridge-chains](/img/service-nodes/storage-calcs.png) <br>
	   On analyzing this table, if you determine that your server's storage space
       resources are *not* capable of supporting all the services you've elected
       to support, issue *Control-C* to stop the configuration process,
       then run `./builder.py` (or `./exr_env.sh -b ""`) again. <br>
	   There are 6 columns in the *storage space calculations*  table:
		   * __Directory__: This column displays the directory in which
             the data for the service will be stored, called the *data mount directory*.
		   * __Available__: This column displays the available disk
             space in the *data mount directory* of the
             service.
		   * __Required__: This column displays the approximate space
             required to host the blockchain of the service.
		   * __Existing dir__: If a previously synced blockchain of the service was
             found in the *data mount directory* of the
             service, this column displays the subdirectory in which
             the synced blockchain
             was found (e.g. `BTC`, `LTC`) and size of that
			 synced blockchain (e.g. `456.64 GB`, `76.95 GB`).  If none was
             found, it displays no subdirectory and `0 GB` for size.
		   * __Checks__: This column displays a green __PASS__ if
			 the *data mount directory* of the service has enough
			 space to host the service. Otherwise, it displays
			 a red __WARNING__. <br> Note: A __WARNING__ message in the
			 __Checks__ column should *only* be ignored if you are
			 certain the value displayed in the __Required__ column is
			 too large/not accurate, and you have carefully calculated that all
			 your selected services will actually fit on the selected
			 *data mount directories* of your system.
		   * __Requirement Calculations__: This column displays the
             calculations performed to determine if green __PASS__ or
             red __WARNING__ should be displayed in the __Checks__
             column. <br>
			 If the calculation, "__Available__ - (__Required__ - __Existing
             dir__)" yields a positive number, __PASS__ is displayed;
             Otherwise, __WARNING__ is displayed.
		   * At the bottom of the *storage space calculations*  table
             is a row titled, __TOTAL__, which gives a cumulative
             summary of all the rows above.
	1. Finally, you'll be given the option to use a unique
       auto-generated file name, or a user-specified file name for
       storing the SNode configuration information you've
       entered. If, for example, you enter the file name `latest` then
       a file containing your SNode configuration will be generated in
       the `inputs_yaml` directory, and the file will be
       named, `latest.yaml` (i.e. your SNode config will be stored as `inputs_yaml/latest.yaml`).
	1. (Informational) In addition to being stored in the `.yaml` format mentioned
       in the previous step, your SNode configuration will also be stored in
       a processed form in the file,
       `docker-compose.yml`. `docker-compose.yml` will then
       be used by the `./deploy.sh` script when you're ready to deploy
       your Service Node. <br>
	   Note for advanced users: If you ever want to manually modify
       the `.yaml` file mentioned in the previous step, then use your
       modified `.yaml` file to generate a new `docker-compose.yml` file, you
       can do so using the `--yaml` parameter like this:
	   ```
	   ./builder.py --yaml inputs_yaml/latest.yaml
	   ```
	1. Before you deploy your Service Node, you may want to review the
       SNode config file generated by `builder.py`
       (e.g. `inputs_yaml/latest.yaml`) to confirm that everything is
       configured as intended. For example, you may want to review the
       *data mount directory* (`data_mount_dir`) for the services
       which require large amounts of disk space to confirm the
       specified `data_mount_dir` has enough disk space
       available to support the service. If the configuration looks
       good, you can launch your Service Node by issuing
       the following command:
	   ```
	   ./deploy.sh
	   ```
	    Tip: If you pass the `--deploy` paramter to `./builder.py`,
        it will automatically call `./deploy.sh` after it finishes
		generating the SNode configuration files. <br>
		Examples:<br>
		```
		./builder.py --deploy
		./exr_env.sh -b "--deploy"
		```
		__Most likely you
       won't need to follow the remaining steps below if you have
       followed them previously and you're simply reconfiguring you
       SNode on this run. However, if your SNode has been offline for a
       while, you may need to reregister it as per steps 25-29
       below. You can check if your SNode needs to be reregistered by
       following steps 28 & 29 below.__

	    ??? info "Didn't see an option to support the service or coin you want to support?"
		Options to support more services/coins are continuously being
		added. The goal is that Service Nodes will have an option to
		support every coin supported by [BlockDX](/blockdx/introduction/), which
		means every coin listed in [Blocknet
		manifest-latest.json](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json). Service
		Nodes will also soon have the option to support a wide variety
		of EVM blockchains, like Ethereum/ETH, Avalanche/AVAX, Binance
		Smart Chain/BSC, Fantom/FTM, Solana/SOL, Polkadot/DOT, Cardana/ADA, Etc.

	    ??? tip "Tip: How to Reset Configuration Defaults."
		`builder.py` *remembers* previous SNode configuration
		choices. Usually this is quite handy and desirable, but
		sometimes it's useful to make it *forget* previous
		configuration choices. There are 5 files `builder.py` uses to
		*remember* previous configuration choices made by the user:
		`.env`, `.known_hosts`, `.known_volumes`, `.cache` and
		`.cache_ip`. If you want to reset any of the default values
		`builder.py` presents to you during the configuration process,
		deleting (or renaming) one or more of these files before
		running `./builder.py` will likely do the trick. You can also
		reset all of these files at once like this:
		```
		./builder.py --prunecache
		```

	        * `.env` - remembers your Public IP address, Service Node
				Name, Service Node Private Key, Service Node Address, RPC User
				and RPC Password.

			* `.known_hosts` - remembers the IP addresses of any
				externally hosted EVM chains.

			* `.known_volumes` - remembers any special *data mount
				directories* you chose for specific services.

			* `.cache` - remembers choices you made about which
				services to support, and how to set up payments

			* `.cache_ip` - remembers the IP addresses assigned to
				docker containers on the last deployment (so it can try
				to assign the same IP addresses again if they are available).

	1. If you are trying to add Service Node support for a *new*
		coin which is not yet listed in [Blocknet
		manifest-latest.json](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json)
		configuration file, please refer to the
		[Listing Process](/blockdx/listings/#listing-process) for
		general information on listing a new coin. Then, to add support for
		the new coin on your Service Node, follow this procedure:

	    ??? example "Add Support for a New Coin or a New Config of a Coin."
		1. Make a copy of `autobuild/sources.yaml`. For example:
		```
		cp autobuild/sources.yaml autobuild/custom.yaml
		```
		1. Use a simple editor like  [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm)
           or
           [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/),
           to edit the copy you just made. For
           Example:
		   ```
		   vi autobuild/custom.yaml
		   ```
	    1. In the editor, duplicate the entry for some common coin (e.g. LTC), then
		modify the duplicate entry so that it references the name and docker
		image of the new coin you want to support.
        1. Save the file and exit the editor.
	    1. Run `./builder.py`, passing it two parameters: One to
		specify the file you just edited as the *source* of available
		coins/services, and one to instruct it to reference a configuration repository
		which contains configuration data for the new coin. For example:
		```
		./builder.py --source autobuild/custom.yaml --branchpath https://raw.githubusercontent.com/ConanMishler/blockchain-configuration-files/bitcoin--v0.22.0.conf
		```
		NOTE: The URL passed via the `--branchpath` parameter must be in *raw* form, 
		as in the example above. 
		1. Launch your SNode by issuing the following command:
	    ```
	    ./deploy.sh
	    ```

	1. Advanced users may want to deploy a *Testnet SNode*, a *Trading Node*, or a
		*Testnet Trading Node* instead of a regular *SNode*. These 3
		special kinds of nodes are [defined here](/service-nodes/introduction/#special-kinds-of-service-nodes-for-advanced-users).

	    ??? example "Deploy a *Testnet SNode*, a *Trading Node*, or a *Testnet Trading Node*."
		  1. Make a copy of `autobuild/sources.yaml`. For example:
		  ```
		  cp autobuild/sources.yaml autobuild/custom.yaml
		  ```
		  1. Use a simple editor like  [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm)
           or
           [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/),
           to edit the copy you just made. For
           Example:
		   ```
		   vi autobuild/custom.yaml
		   ```
		   1. In the editor, search for the following text
		   ```
		   - name: SNODE
		   ```
		   then change __SNODE__ to one of the following,
           depending which type of node you want to deploy:
			   * __testSNODE__
			   * __TNODE__
			   * __testTNODE__
		   1. Save the file and exit the editor.
		   1. Run `./builder.py`, passing it a parameter to
		   specify the file you just edited as the *source* of available
		   coins/services. For example:
		   ```
		   ./builder.py --source autobuild/custom.yaml
		   ```
		   1. Launch your node by issuing the following command:
		   ```
		   ./deploy.sh
		   ```

	1. (Recommended for servers with less than 32
	   GB RAM or less than 10 CPU cores.) If your server HW resources
	   are somewhat limited, it is recommended to deploy certain SNode services
	   in stages. The reason is because some services are known to
	   require large amounts of RAM and/or I/O bandwidth while they
	   are syncing their respective blockchains. ETH, AVAX, LBC and DGB all
	   fall into this category. For this reason, it is recommended
	   *not* to run more than one of those 4 while any one of them is
	   syncing on a server with limited HW resources. For example, it's
	   best *not* to run LBC or DGB while
	   AVAX is syncing, or to run AVAX or DGB while LBC is syncing. To
	   deploy SNode services in stages, simply limit which services
	   you select to support the first time you run `./builder.py`,
	   then run `./builder.py` again after the resource intensive
	   blockchain(s) have synced, this time selecting additional
	   services to support.
	1. (Informational) Once your SNode is configured and deployed, you should see the scripts do their magic and launch [docker
       containers](https://www.docker.com/resources/what-container)
       for all the services you configured your Service Node to
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
	   f9b910221ca2   blocknetdx/servicenode:latest              "/opt/blockchain/sta…"   26 hours ago   Up 26 hours   41412/tcp, 41414/tcp, 41419/tcp, 41474/tcp         exrproxy-env-snode-1
	   ```
	   The first item returned in this example (`f9b910221ca2`) is the CONTAINER ID, and the last item returned (`exrproxy-env-snode-1`) is the NAME of the container. Either of these two values can be used to access the *snode* container.
	 1. It will take 3.5+ hours for the Blocknet blockchain to sync in your *snode* container. Periodically monitor the current block height of the Blocknet wallet running in the *snode* container by issuing the following command:
	 ```
	 docker exec exrproxy-env-snode-1 blocknet-cli getblockcount
	 ```
	 Note, here we are executing the command, `blocknet-cli` within
	 the `exrproxy-env-snode-1` container, which is the name we found
	 for the *snode* container in the previous step. Also note,
	 initial calls to `getblockcount` may return errors until headers
	 finish syncing. This is normal and nothing to be concerned about.

	    ??? tip "Tips for monitoring block height during syncing, and generally accessing blocknet-cli more easily."
		  To make access to the `blocknet-cli` program more
		  convenient, you may want to create an alias something like
		  the following:
		  ```
		  alias snode-cli='docker exec exrproxy-env-snode-1 blocknet-cli'
		  ```
		  If you add that alias to `~/.bash_aliases` (or any file
		  sourced on login), it will be defined automatically every
		  time you login to your Linux system. Another idea is to
		  create a small Bash Shell script something like this:
		  ```
		  #!/bin/bash
		  docker exec exrproxy-env-snode-1 blocknet-cli $*
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
		 1. On your *Collateral Wallet*, issue the command, `servicenoderegister`. If your *Collateral Wallet* was set up according to the [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
		and the alias for `blocknet-cli` was also created according to that
		guide, you can issue the `servicenoderegister` command as follows:
		```
		blocknet-cli servicenoderegister
		```
		Otherwise, if your *Collateral Wallet* is a GUI/Qt wallet
		running on a different computer, simply enter
		`servicenoderegister` in *Tools->Debug Console* of your
		*Collateral Wallet*.
		1. On your *Service Node Wallet*, issue the `servicenodesendping` command like this:
		```
		docker exec exrproxy-env-snode-1 blocknet-cli servicenodesendping
		```
		(Note, if you created the `snode-cli` alias or shell script as
		suggested in the *Tip* above, you can enter simply, `snode-cli servicenodesendping`.)
	1. On your *Service Node Wallet*, check to confirm your Service Node is running and supporting all the right coins/services, like this:
		```
		docker exec exrproxy-env-snode-1 blocknet-cli servicenodestatus
		```
		This command should return `"status": "running",` and also the corrrect/expected list of supported services.
	 1. You can also verify your Service Node is visible on the network by issuing the following command on your *Collateral Wallet*:
		```
		blocknet-cli servicenodestatus
		```
		(If your *Collateral Wallet* is a GUI/Qt wallet,
		simply enter `servicenodestatus` in *Tools->Debug Console* of your
		*Collateral Wallet*.)
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

	 1. To learn how to add or subtract supported services/coins from your Service Node, and generally navigate and manage the docker containers of your Service Node, continue on to [Maintenance of Auto-Deployed Service Node](#maintenance-of-auto-deployed-service-node)

### Maintenance of Auto-Deployed Service Node

??? abstract "Maintenance of Auto-Deployed Service Node"

	> Changing Configuration of a Docker-Based Service Node (or Trading Node)

	1. With the advent of the `builder.py` script, the procedure for
       changing the configuration of an SNode is basically the same as
       it is for configuring and deploying an SNode for the first
       time. That procedure is given in the first 20 steps of the
       [Auto-Deploy Service Node](#auto-deploy-service-node) guide.
	   Note, however, if you've subtracted one or more services/coins from your SNode's
      supported services because you want to save the disk space occupied
      by those services/coins, please remember that
      the blockchain data is not deleted/removed when the docker
       container of a service is removed by `builder.py`. The
       blockchain data of a service/coin persists in the
      *data mount directory* you chose for the service when configuring
      your SNode. If you kept the default *data mount directory*, which
      is `/snode`, then the blockchain data
      for DGB, for example, will be stored in `/snode/DGB`, and
      it can occupy many GB of space. To find out exactly how much
      space is being used by each service/coin, you can enter:
	  ```
	  sudo du -d 1 -h /snode
	  ```
	  which will return something like this:
	  ```
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
	  space the DGB blockchain is occupying, you'll need to first
	  use `./builder.py` to reconfigure and relaunch your SNode
	  *without* DGB support, then issue the
	  following command to permanently remove DGB blockchain data and
	  free the space it is occupying:
	  ```
	  sudo rm -rf /snode/DGB
	  ```

	    !!! warning "Warning: Be very careful to enter the `rm -rf` command very precisely. A typo could be disastrous. Also, be aware that adding support for DGB again after deleting its blockchain data will require the DGB blockchain to sync from scratch."

	> About *docker*

	For the most part, the *docker* commands given thus far in
    this guide will suffice to manage your Service Node. However, if
    something "out of the ordinary" happens, or if you want to do
    something fancy with your docker objects,  there are a few more
    things it will be good to know about docker:

	- Let's say, for example, you want to interact directly with
      the DGB daemon, but you aren't sure the name of the DGB CLI
      executable command. Here's one way to find it:
		  1. Start an interactive *Bash* shell in the DGB container:
		  ```
		  docker exec -it exrproxy-env-DGB-1 /bin/bash
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
			~$ docker exec exrproxy-env-DGB-1 digibyte-cli getblockcount
			13535762
			```
	- Now let's consider the case where the docker container with
	  which you want to interact does
      *not* have *Bash* shell available. This is [edit: *was*] the case for the Syscoin
	  container, for example. Attempting to invoke the *Bash*
	  shell in the Syscoin container will result in an error:
	  ```
	  docker exec -it exrproxy-env-SYS-1 /bin/bash
	  OCI runtime exec failed: exec failed: container_linux.go:380:
	  starting container process caused: exec: "/bin/bash": stat
	  /bin/bash: no such file or directory: unknown
	  ```
	  The solution is to invoke a shell which *does* exist in the
	  container, like this:
	  ```
	  docker exec -it exrproxy-env-SYS-1 /bin/sh
	  ```
	- Another unique feature of [an earlier version of] the Syscoin container is that the
      `syscoin-cli` command requires certain parameters to be passed
      to it in order to work properly. For example:
	  ```
	  docker exec exrproxy-env-SYS-1 syscoin-cli getblockcount 
	  ```
	  returns
	  ```
	  error: Could not locate RPC credentials. No authentication cookie could be found, and RPC password is not set.  See -rpcpassword and -stdinrpcpass.  Configuration file: (/root/.syscoin/syscoin.conf)
	  ```
	  But invoking `syscoin-cli` as follows, works properly:
	  ```
	  docker exec exrproxy-env-SYS-1 syscoin-cli -conf=/opt/blockchain/config/syscoin.conf getblockcount
	  1218725
	  ```
	  Alternatively, this also works:
	  ```
	  docker exec exrproxy-env-SYS-1 syscoin-cli -datadir=/opt/blockchain/config getblockcount
	  1218725
	  ```
	  Note: The DASH container, and perhaps other containers, will also require
      these same parameters to be passed to the CLI
      command. [edit: The latest SYS container does *not* require the additional parameter]
	  - Now let's consider another case where more *docker* knowledge
      could be required. Let's consider the case where you try to
      manually stop and remove all the docker containers of your SNode
      using `docker-compose down` in the `~/exrproxy-env`
      directory. Consider the example where
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
      Node with `deploy.sh` will give errors saying the
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
	  This trick can be useful, for example, if `docker-compose.yml`
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

