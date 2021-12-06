title: Blocknet Wallet Staking Guide
description: This guide explains how to setup your Blocknet wallet for staking to validate transactions on the network and earn block rewards.


# Staking BLOCK
Staking is the Proof-of-Stake equivalent of mining in Proof-of-Work blockchains. Stakers validate transactions on the network. These transactions are grouped in blocks. With [Blocknet](/project/introduction), there is 1 block every minute with a 1 [BLOCK](/blockchain/introduction) reward. You can stake with any amount of BLOCK and are rewarded for supporting the network with block rewards.

---

## Staking Guide
Staking can be performed with any amount of BLOCK, there is no minimum. However, since staking with Blocknet is probability-based, you will receive rewards more frequently by owning and staking more BLOCK. BLOCK can be acquired through [various options available](/project/exchanges).

Use the following guide to enable staking and start earning rewards.

#### Staking from a GUI wallet

??? example "Stake using the redesigned wallet"
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)

	1. [Install and setup](/wallet/setup) the Blocknet wallet.
	1. Open and [sync the wallet](/wallet/syncing).
	1. Make sure there's BLOCK in your wallet.
	1. [Unlock the wallet for staking only](/wallet/lock-unlock/#unlock-for-staking).
	1. It may take a minute for the staking to activate. 
	1. You can verify the wallet is staking with the status icon in the upper-right corner.

		![Status Bar](/img/wallet-redesign/status-bar-synced.png)

		1. The 2nd icon from the left indicates the staking status. If it is grey, staking is inactive. If it is blue, staking is active. You can also hover over the icon to read the staking status.

			![Staking Inactive](/img/wallet-redesign/status-staking-inactive.png)
			![Staking Active](/img/wallet-redesign/status-staking-active.png)

		??? info "Note: Staking will not activate if the wallet is not synced."
			Since staking is the act of confirming the latest transactions, staking cannot be active until the wallet is synced to the more recent transaction on the network.

		??? info "Note: Newly deposited BLOCK can't stake for 60 minutes."
			Funds cannot stake until they have had 60 confirmation on the network. This a security precaution and will take roughly 60 minutes (1 confirmation a minute) to be eligible for staking.

	1. When staking, you may see your wallet balance show as *Immature*. This is a normal part of staking. The funds in your wallet that "won" the staking reward will remain immature until they have 101 confirmations (101 minutes). When funds are immature, they are unspendable and do not count towards your probability for receiving another reward. After 101 confirmations, these funds can be spent again and the balance will show up as normal.


??? example "Stake using the classic wallet"
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

	1. [Install and setup](/wallet/setup) the Blocknet wallet.
	1. Open and [sync the wallet](/wallet/syncing).
	1. Make sure there's BLOCK in your wallet.
	1. [Unlock the wallet for staking only](/wallet/lock-unlock/#unlock-for-staking).
	1. It may take a minute for the staking to activate.

		??? info "Note: Staking will not activate if the wallet is not synced."
			Since staking is the act of confirming the latest transactions, staking cannot be active until the wallet is synced to the more recent transaction on the network.

		??? info "Note: Newly deposited BLOCK can't stake for 60 minutes."
			Funds cannot stake until they have had 60 confirmation on the network. This a security precaution and will take roughly 60 minutes (1 confirmation a minute) to be eligible for staking.

	1. When staking, you may see your wallet balance show as *Immature*. This is a normal part of staking. The funds in your wallet that "won" the staking reward will remain immature until they have 101 confirmations (101 minutes). When funds are immature, they are unspendable and do not count towards your probability for receiving another reward. After 101 confirmations, these funds can be spent again and the balance will show up as normal.

		![Immature](/img/wallet-redesign/balance-immature.png)

#### Staking from CLI on a VPS running Ubuntu Linux

??? example "Staking from CLI on a VPS running Ubuntu Linux"
	!!! info "Note: The instructions below assume default data directories are used for all Blocknet wallets. If using custom data directories, please adjust the data directory references accordingly. They also assume *bash* shell, the default shell for Ubuntu, is used. Please adjust as necessary if a different shell is used."

	1. If you're new to the Linux Command Line Interface (CLI),
       [learn the basics](http://www.linuxcommand.org/index.php). You
       don't have to learn every detail, but learn to navigate the
       file system, move and remove files and directories, and edit text files with [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm), [vim](https://vim.rtorr.com) or [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/).
	1. Sign up for an account at an economical, reliable Virtual
       Private Server (VPS) provider. As of this writing,
       [Digital Ocean](https://www.digitalocean.com) and
       [Contabo](https://contabo.com/en/) seem to be some of the most
       economical and reliable services available. You might also
       compare prices with [Vultr](https://www.vultr.com/products/cloud-compute/#pricing), [Amazon AWS](https://aws.amazon.com) and
       [Google Cloud Computing](https://cloud.google.com) and other
       services. As of this writing (June, 2021), you can rent a VPS
       capable of running a staking wallet for less than USD $7.00 per month.

	    ??? tip "Tip: If you might run a [Service Node](/service-nodes/introduction) on your VPS at some point, [Contabo](https://contabo.com/en/) is probably the best choice. Read more..."
		As of this writing, [Contabo](https://contabo.com/en/) seems to
		offer the most disk space and compute power for your money. For
		staking, you don't need much of either. However, for running a
		[Service Node](/service-nodes/introduction), you'll need a
		quite a lot of disk space, and a fair amount of compute
		power as well. See [Service Node Setup](/service-nodes/setup)
		for a rough estimates hardware requirements as of this writing. Note, if you just
		want to stake on your VPS at present, but might add a Service Node to your
		VPS later on,
		[a small (Size S) Contabo VPS](https://contabo.com/en/vps/)
		may be the best choice.
		You can upgrade your VPS size at any time without losing any of
		your staking wallet data, which is convenient. (The size upgrade can be done quickly and
		easily from the [Contabo Customer ControlPanel](https://my.contabo.com/).)

	1. Through your VPS provider, launch a small,
      economical VPS running a recent (v18+) version of Ubuntu
      Linux. The following are the minimum hardware requirements:
		  - 1 or more vCPUs
		  - 20GB or more storage space
		  - 2GB or more of RAM. (1GB of RAM is sufficient if you
            create 1+GB of swap space in step 12 below).
	1. Follow the guides available from your VPS provider to launch
       your Ubuntu VPS and connect to it via `ssh` (from Mac or Linux
       Terminal) or via `PuTTY` (from Windows). For
       example,
	   [here is a nice Quick Start Guide from Digital Ocean](https://docs.digitalocean.com/products/droplets/quickstart/),
       and
       [here is a guide from Contabo on connecting to your VPS](https://contabo.com/blog/establishing-connection-server-ssh/).
	1. The first time you connect to your VPS, you'll be logged in as
	   `root` user. Create a new user with the following command, replacing `<username>` with a username of your choice.
	   ```
	   adduser <username>
	   ```
	   You will be prompted for a password. Enter and confirm using a
	   new password (different to your root password) and store it in
	   a safe place. You will also see prompts for user information,
	   but this can be left blank.
	1. Once the new user has been created, add it to the `sudo` group so it can perform commands as root. Only commands/applications run with `sudo` will run with root privileges. Others run with regular privileges, so type the following command with your `<username>`
	```
	usermod -aG sudo <username>
	```
	1. Type `exit` at the command prompt to end your Linux session and
    disconnect from your VPS.
	1. Reconnect to your VPS (via `ssh` or `PuTTY`), but this time
    connect as the `<username>` you just added.
		- Using `ssh` from Mac or Linux Terminal:
		```
		ssh <username>@VPS_IP
		```
		Example:
		```
		ssh bob@104.22.10.214
		```
		- Using `PuTTY` from Windows, configure PuTTY to use VPS_IP
		  as before, but this time login to your VPS with the `<username>` and `password` you just set.
	1. Update list of available packages. (Enter password for
	   `<username>` when prompted to do so.)
	   ```
	   sudo apt update
	   ```
	1. Upgrade the system by installing/upgrading packages.
	   ```
	   sudo apt upgrade
	   ```
	1. Make sure `nano` and `unzip` packages are installed.
	   ```
	   sudo apt install nano unzip
	   ```
    1. Create at least as much swap space as you have RAM. So,
       if you have 16 GB or RAM, you should create at least 16 GB of
       swap space. Many recommend creating twice as much swap space as
       you have RAM, which is a good idea if you can spare the disk
       space. However, more than 16 GB of swap
       space may not be required for supporting Blocknet
       services, even if you plan to host a
       [Service Node](/resources/glossary/#service-node) and
       [XQuery](/resources/glossary/#xquery). To create swap space:
	   Check if your system already has swap space allocated:
	   ```
	   swapon --show
	   ```
		- If the results of `swapon --show` look similar to this:
		   ```
		   swapon --show
		   NAME      TYPE SIZE USED PRIO
		   /swapfile file   2G   0B   -2
		   ```
		   that means you alreday have some swap space allocated and
		   you should follow
		   [this guide](https://linuxhandbook.com/increase-swap-ubuntu/)
		   to allocate 1x-2x more swap space than you have GB of RAM.
		- If the results of `swapon --show` do *not* indicate that
          your system has a *swapfile* of type `file`, you'll need to
          create a new swap file with 1x-2x more swap space than you have
          GB of RAM. To do so, follow [this guide](https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-18-04/)

	1. (Recommended)
       Increase the security of your VPS by
       [setting up SSH Keys to restrict access to your VPS from any computer other than
       your own](https://www.cyberciti.biz/faq/how-to-disable-ssh-password-login-on-linux/). Those connecting via `PuTTY` from Windows should first follow [this
       guide to set up SSH Keys with PuTTY](https://devops.ionos.com/tutorials/use-ssh-keys-with-putty-on-windows/). *Note: If you follow this recommendation to restrict access to your
       VPS via SSH Keys, back up your SSH Private key and save the
       password you choose to unlock your SSH Private Key.*
	1. Visit [https://github.com/blocknetdx/blocknet/releases/](https://github.com/blocknetdx/blocknet/releases/) to see
    the latest release version of the Blocknet core wallet:
	![Latest Release](/img/wallet/latest-release.png)
		1. As shown in the image above, the latest release version at this
    time is `4.3.3`.
		1. If there is a "v" before the release version number,
           ignore it; do not prepend "v" to the BLOCKNET_VERSION
           you specify in the next step.
	1. Create some aliases for easy access to the Blocknet wallet
    daemon and Blocknet wallet CLI.
		1. Use a text editor like
           [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm)
           or
           [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/)
           to edit your `~/.bashrc` file. Examples:
			   - `vi ~/.bashrc`
			   - `nano ~/.bashrc`
	    1. Look for the following 3 lines within `~/.bashrc`:
		```
		if [ -f ~/.bash_aliases ]; then
			. ~/.bash_aliases
		fi
		```
		1. If those 3 lines are not already in your `~/.bashrc` file, add
           them, then save the file and exit the editor.
	    1. Edit `~/.bash_aliases`. (Create a new one if it
           doesn't exist.)
		1. Copy/Paste the following variable and alias definitions
         into `~/.bash_aliases`, replacing `4.3.3` with the latest version of the
         Blocknet core wallet. (If upgrading from an old version, simply set
         BLOCKNET_VERSION to the latest version and don't bother changing the
         alias statements if they are already there from a previous installation.):
		 ```
		 BLOCKNET_VERSION='4.3.3'
		 # stdaemon = Start Blocknet daemon for staking wallet
		 alias stdaemon='~/blocknet-${BLOCKNET_VERSION}/bin/blocknetd -daemon'
         # stcli = Staking wallet Command Line Interface
		 alias stcli='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli'
         # stunlock = Unlock staking wallet for staking only
		 alias stunlock='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli walletpassphrase "$(read -sp "Enter Password:" undo; echo $undo;undo=)" 9999999999 true'
         # stunlockfull = Unlock staking wallet fully
		 alias stunlockfull='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli walletpassphrase "$(read -sp "Enter Password:" undo; echo $undo;undo=)" 9999999999 false'
		 ```
		 1. Save your edits to `~/.bash_aliases`, exit the editor and
          type the following to activate all the aliases you just
          defined:
		  ```
		  source ~/.bash_aliases
		  ```
		 1. To confirm all your new aliases have been set, type `alias`. It should show you a list of all your
         current aliases, including all you just added.
	1. Copy/Paste the following sequence of commands to download and unpack
       the latest version of the Blocknet core wallet:
		1. Change Directory to home directory.
		```
		cd ~
		```
		1. Download the latest Blocknet wallet:
	    ```
		wget https://github.com/blocknetdx/blocknet/releases/download/v${BLOCKNET_VERSION}/blocknet-${BLOCKNET_VERSION}-x86_64-linux-gnu.tar.gz
		```
		1. Unpack the download:
		```
		tar xzvf blocknet-${BLOCKNET_VERSION}-x86_64-linux-gnu.tar.gz
		```
		1. (Recommended) Remove the download package:
		```
		rm blocknet-${BLOCKNET_VERSION}-x86_64-linux-gnu.tar.gz
		```
	1. Start the Blocknet daemon using the `stdaemon` alias you defined above. The first time the Blocknet daemon
	is started, it creates the Blocknet data directory, `~/.blocknet`:
	```
	stdaemon
	```
	1. Without waiting for the wallet to [sync](/resources/glossary/#syncing), stop the Blocknet
	daemon using the `stcli` alias you defined above:
	```
	stcli stop
	```

	1. To save 3.5+ hours of time in [syncing](/resources/glossary/#syncing), it's recommended to
       use the *bootstrap* method to speed up syncing:
		1. Remove existing `blocks`, `chainstate` & `indexes`
		directories from the blocknet data directory:
		```
		rm -rf ~/.blocknet/{blocks,chainstate,indexes}
		```
		1. Get the latest bootstrap file:
		```
		wget https://blocknet.co/files/Blocknet.zip
		```
		1. Unzip the bootstrap file:
		```
		unzip Blocknet.zip
		```
		1. Move the required directories to the blocknet data directory:
		```
		mv Blocknet/{blocks,chainstate,indexes} ~/.blocknet/
		```
		1. Clean up. Remove useless directories & files:
		```
		rmdir Blocknet/
		rm Blocknet.zip
		```

	1. Restart the Blocknet daemon:
	```
	stdaemon
	```
	1. Issue the command `stcli getblockcount` every 5
       minutes or so until the command stops returning error messages and
       returns a block height which matches that of
       [Chainz Blockchain Explorer](https://chainz.cryptoid.info/block/).
       (Check the block height much less frequently if you did not
       speed up syncing with the bootstrap method of step 19.)

	1. At this point, the latest Blocknet wallet is installed and
    fully synced. Now you can interact with the Blocknet daemon through
    the Command Line Interface (CLI) as follows:

		The following are examples of commands you can issue to the Blocknet daemon through the CLI:
		```
		stcli getblockchaininfo 
		stcli getstakingstatus 
		stcli getblockcount 
		stcli getblockhash <height>
		```
		Note: Some of the Blocknet CLI commands take parameters. In
		the last example above, *<height\>* represents a number to be
		passed to the `getblockhash` command as a parameter.
		To see a full list of all the Blocknet CLI commands, type:
		```
		stcli help 
		```
		To learn the details about what a command does and how to use
		it, type:
		```
		stcli help <command>
		```
		...where *<command\>* is the command you want to learn about.
		For example, the following will give full details on the
		function and use of the `getnewaddress` command:
		```
		stcli help getnewaddress
		```
		You can also find the same details about all available
		Blocknet commands at the
		[Blocknet API Portal](https://api.blocknet.co).

	    !!! info "Note: The online help documentation you'll find by issuing `stcli help` or `stcli help <command>` may suggest using the command `blocknet-cli` to access the commands of the staking wallet. You can indeed use the `./blocknet-cli` command as the online help suggests, but only if your Current Directory is `~/blocknet-${BLOCKNET_VERSION}/bin/`. You can also use `blocknet-cli` if `~/blocknet-${BLOCKNET_VERSION}/bin/` is in your `$PATH` environment variable. However, an easy way to avoid having to make sure one of those two conditions is true is to use the `stcli` alias we defined above to call the `blocknet-cli` command."

	1. Fund your staking wallet. Skip to
    step 24 if you don't have an already funded Blocknet wallet, or if
    you prefer to fund your VPS staking wallet by sending funds to it
    instead of importing an already funded wallet. Otherwise, import an already funded Blocknet
    wallet from your home computer to your VPS as follows.:
		1. Stop the Blocknet daemon on your VPS with the following
        command:
		```
		stcli stop
		```
		1. Make space for the funded `wallet.dat` to be imported to your VPS
        by renaming the empty `wallet.dat` to `wallet.dat.empty`:
		```
		mv ~/.blocknet/wallets/wallet.dat{,.empty}
		```
		1. Assuming you [backed up](/wallet/backup-restore) your
           Blocknet wallet on your home computer, you'll know where to
           find your funded `wallet.dat` file. Reference the
           [Backup & Restore Guide](/wallet/backup-restore/#cli-wallet-backup-options-also-works-for-guiqt-wallet) to locate your funded `wallet.dat`.
	    1. On your home computer, use [scp](https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/)
             (Mac or Linux) or
             [pscp](https://www.poftut.com/how-to-use-pscp-command-on-windows/)
             (Windows) to copy your funded `wallet.dat` file to your
             VPS:

			 - Mac Terminal (assuming the funded `wallet.dat`
               is in the standard place):
			   ```
			   cd ~/Library/Application\ Support/Blocknet/wallets
			   scp wallet.dat <username>@VPS_IP:.blocknet/wallets
			   ```
			   ...where *<username\>* is the name of the user you
               created on your VPS and *VPS_IP* is the IP address of
               your VPS.

			 - Linux Terminal (assuming the funded `wallet.dat`
               is in the standard place):
			   ```
			   cd ~/.blocknet/wallets
			   scp wallet.dat <username>@VPS_IP:.blocknet/wallets
			   ```
			   ...where *<username\>* is the name of the user you
               created on your VPS and *VPS_IP* is the IP address of
               your VPS.

		    - Windows Command Prompt Terminal (assuming the funded `wallet.dat`
            is in the standard place).

				1. [Install pscp](https://www.poftut.com/how-to-use-pscp-command-on-windows/).

				1. Copy your funded `wallet.dat` to your VPS as follows:
			   ```
			   cd %appdata%\Blocknet\wallets
			   pscp wallet.dat <username>@VPS_IP:.blocknet/wallets 
			   ```
			   ...where *<username\>* is the name of the user you
               created on your VPS and *VPS_IP* is the IP address of
               your VPS.

		1. Restart the Blocknet daemon on your VPS with the following
        command:
		```
		stdaemon
		```

		??? info "Note: It is *not* necessary to delete, remove, uninstall or stop using the Blocknet wallet on your home computer just because you imported your home computer's `wallet.dat` to your staking VPS. Read more..."
		You can access the same Blocknet wallet on your home computer
		that is staking on your VPS. For example, if you've imported
		the `wallet.dat` from your home computer to your VPS, you can
		still access the same `wallet.dat` on your home computer to
		send & receive funds, or to trade BLOCK on
		[BlockDX](/blockdx/introduction). The only thing you have to
		be careful *not* to do is to import private key(s) into one
		`wallet.dat` and not the other. If you absolutely *must*
		import private keys to the wallet on your home computer, for
		example, then you should either import the same private keys
		to the wallet on your VPS, or stop the wallet on your VPS and
		re-import the `wallet.dat` from your home computer so your VPS
		wallet will also have the imported private keys. Note, if
		you've imported private keys, it's recommended to use
		[Coin Control](/wallet/send-funds/#coin-control) to send the
		imported keys/addresses to an address in your wallet which is
		part of the
		[HD wallet](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp)
		hierarchy of addresses associated with your wallet (i.e. send
		them to an address generated from within your wallet). If you do this, you don't have to import the same private key(s) to both your home computer and your VPS wallets, and you don't have to re-import the `wallet.dat` from your home computer to your VPS.



	1. If you don't have an already funded Blocknet wallet, or you
       prefer to fund your VPS staking wallet by sending funds to it instead
       of importing an already funded wallet:
		   1. Encrypt your VPS wallet using the `encryptwallet`
          command. Get details on how to use the `encryptwallet`
          command by typing:
		  ```
		  stcli help encryptwallet
		  ```
		  1. [Back up your VPS Blocknet wallet](/wallet/backup-restore). Hint:
             Use
			 [scp](https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/)
             (Mac or Linux) or
             [pscp](https://www.poftut.com/how-to-use-pscp-command-on-windows/)
             (Windows) to copy your `wallet.dat` and/or the `dumpfile`
             of your wallet's Private Keys from your VPS to another computer.
		  1. Use the `getnewaddress` command to get an address in your VPS
			 Blocknet wallet to which you can send BLOCK. Get details on how to use the `getnewaddress`
			 command by typing:
		  ```
		  stcli help getnewaddress
		  ```
		  1. Fund your VPS Blocknet wallet by sending BLOCK to the address
			 you got from issuing the `getnewaddress` command.

	1. At this point, you should have a fully funded staking wallet
       running on your VPS. The last step is to *unlock your VPS
       wallet for staking*. To unlock your wallet for staking only,
       issue the command:
	   ```
	   stunlock
	   ```
	   When prompted, enter your wallet passphrase to unlock your
       wallet for staking only. (Your wallet passphrase is the
       passphrase you specified when you encrypted the wallet.) To see
       what the `stunlock` alias does, type `alias stunlock`. It
       should show you this command:
	   ```
	   alias stunlock='~/blocknet-${BLOCKNET_VERSION}/bin/blocknet-cli
       walletpassphrase "$(read -sp "Enter Password:" undo; echo
       $undo;undo=)" 9999999999 true'
	   ```
	   The parameters of this command are as follows:
		   - `"$(read -sp "Enter Wallet Passphrase:" undo; echo
			 $undo;undo=)"`  This parameter uses a
			 special *bash shell* trick which prompts the user for a
			 passphrase and inserts that passphrase as a parameter without recording
			 it in the `.bash_history` file. (Recording your passphrase in the `.bash_history` file would
			 be a security risk.)
		  - `9999999999` This parameter is the number of seconds
			you want your wallet to remain unlocked for staking. Do *not*
			use a larger number than this; it will fail to unlock your
			wallet if you attempt to use a larger number.
		 - `true` This parameter tells the `walletpassphrase` command to
		   unlock for staking *only*; don't unlock the wallet fully, which
		   would be a security risk.

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

	1. Whenever a new version of the Blocknet wallet is released, upgrade
    your staking wallet to the latest version by following
    these steps:
		1. Stop the Blocknet daemon:
		```
		stcli stop
		```
		1. Follow steps 14 through 17 above to install the latest
		version of the Blocknet wallet and start the new Blocknet daemon.
		1. Unlock your wallet for staking with:
	   ```
	   stunlock
	   ```
		   1. Confirm your wallet is staking as in step 26 above.
		   1. (Recommended) Remove the directory tree of the old
		   version. Use caution with this command; it recursively
		   removes all files and directories in the specified
		   directory tree:
		   ```
		   rm -ri ~/blocknet-x.y.z
		   ```
		   ...where `x.y.z` represents the old version
		   number. Experienced Linux users can use:
		   ```
		   rm -r ~/blocknet-x.y.z
		   ```
		   ...which does *not* request confirmation before removing all directories and files in the specified
		   directory tree.

### Orphaned Stakes

While staking, you may occasionally see a red flag next to one of your
stake hits, like this:

![Orphan](/img/wallet/orphan.png)

If you hover the mouse over the text of the red/orphaned block, it
will display the text, "Generated but not accepted."

The occasional appearance of a red/orphaned block is normal and
nothing to be concerned about. An orphan happens when another block
beats your staking node, which generally happens because the staker who
won that block was able to get the winning block out to more nodes
before your node.

If, however, you notice a large number of
red/orphaned blocks happening in a short time period, like 5 or more
per day, it could mean your staking wallet is
[on a fork.](/wallet/forking/#fork-management). If you determine your
staking wallet is
[on a fork, follow the instructions in the Fork Management Guide to get your wallet back on the correct chain.](/wallet/forking/#fork-management)

If your staking wallet is *not* on a fork, but still producing more
red/orphaned blocks than you like, here are some possible causes and
ideas to reduce the number of orphaned blocks seen by your staking wallet:

1. Your staking wallet doesn't have `listen=1` set in its
   `blocknet.conf` file (located in the
   [Data Directory](/wallet/backup-restore/#data-directory)). If you
   need to add `listen=1` to your `blocknet.conf`, stop your wallet,
   make the change, then restart your wallet.
1. Your staking wallet doesn't have its P2P port (41412 by default)
   open to the external world and forwarding to your blocknet
   wallet. You can check if your wallet's P2P port is open to the
   external world using [this tool](https://www.yougetsignal.com/tools/open-ports/).

### Maximizing Staking Rewards:

##### Peer Connections
Some stakers believe they receive more staking rewards when they have
more peers connected to their wallet. If you want to test this theory,
you can manually add peers to your wallet
by following the instructions found [here](/wallet/syncing/#troubleshoot-syncing-issues).

##### Dividing funds into optimally sized UTXOs
If we look at the history of which sizes of
[UTXOs](/resources/glossary/#utxo)/[Inputs](/resources/glossary/#input)
have been receiving
the most staking rewards, we might be inspired to create UTXOs in our
staking wallet of those same sizes. To view the sizes of UTXOs which
recently got the most rewards (a.k.a. "stake hits"):

1. Visit
[Blocknet Extraction](https://chainz.cryptoid.info/block/#!extraction).
1. Scroll to the bottom and you'll see the "Stake Input Size for the
last 1000 blocks" represented as blue dots on the chart:

![Extraction](/img/wallet/extraction.png)

1. If you like, you can click *show more* to see more blue dots:

![Extraction more](/img/wallet/extraction-more.png)

As you can see, the UTXOs receiving the most stake hits are the ones
with somewhere between 500 and 5,000 BLOCK (the range where the blue
dots are most concentrated).   So, making UTXO sized in that range may
help to maximize stake hits. 

One way to organize UTXO sizes is to use [Coin Control](/wallet/send-funds/#coin-control) when sending BLOCK to
yourself. This allows you to select from which UTXOs your BLOCK is
sent. Note, you'll probably want to check the *Subtract fee from
total* box when sending from a specific set of UTXOs so you don't get
an "Insufficient Funds" error:

![Subtract Fee](/img/wallet/subtract-fee-from-total.png)

An even more convenient way to split your wallet balance into
UTXOs of the desired size is the following:

1. Send your entire wallet balance to one address in your wallet. When
   doing this, be sure to check the *Subtract fee from total* box, as
   shown above, so you don't get an "Insufficient Funds" error.
1. Issue the `splitbalance` command from *Tools->Debug Console* (or
from CLI):
```
splitbalance amount address
```
where *amount* is the size of the [UTXOs](/resources/glossary/#utxo)
into which you want to split your
balance, and *address* is the address to which you sent all your
block in step 1 above.
For example, if a wallet has 5000 block at address XYZ, then
`splitbalance 1000 XYZ` will result in address XYZ containing 5 UTXOs
of 1000 block each. (In most cases, the amount being split will not be
exactly divisible by *amount* you specify in the `splitbalance`
command. The remainder will be sent to a
[change address](/resources/glossary/#change-address)).






--8<-- "troubleshooting.md"

---

## Staking Rewards

### Probability
The selection of the staker that confirms each block is probability-based. This means that everyone’s chance of being selected to confirm the next block is equal to the amount of BLOCK staking divided by the total amount of BLOCK being staked on the network. The amount of staked BLOCK on the network [can be seen here](https://chainz.cryptoid.info/explorer/index.stakes.dws?coin=block). The value will have to be calculated by totaling each `amount`.

![Staking Probability](/img/wallet/staking-probability.png)

??? abstract "Example: Calculating staking reward probability."
	Assume:

	* You're staking 5000 BLOCK
	* There's a total of 3,325,000 BLOCK staking on the network

	The probability you will earn the next reward is: 

		5000 / 3325000 = 0.0015 * 100 = 0.15%

	This means that, on average, you will earn a reward every:

		1 / 0.0015 = 665 minutes = 11.08 hours

	And the average amount of BLOCK rewarded per day is:

		1440 minutes a day / 665 minutes per reward * 1 BLOCK per reward = 2.16 BLOCK

	With BLOCK valued at $50, that would equate to $108 per day and $39,420 per year.


### ROI
Building off the probabilistic ratio above, the following equation can be derived to estimate the yearly return (in BLOCK) on the initial amount started with. This does not account for compounding, which would increase this value. The amount of staked BLOCK on the network [can be seen here](https://chainz.cryptoid.info/explorer/index.stakes.dws?coin=block). The value will have to be calculated by totaling each `amount`.

> Staking ROI = ( [525600] / [total BLOCK staked on the network] ) * 100

* *525600 = 1 BLOCK reward per minute * 1440 minutes per day * 365 days per year*

??? abstract "Example: Calculating staking reward ROI."
	Assume:

	* There's a total of 3,325,000 BLOCK staking on the network
	* The amount you're staking is irrelevant because ROI is a per unit value

	The yearly ROI under these conditions will be:

		525600 / 3325000 = 0.158 * 100 = 15.8%

	This means that in a year, if you staked 1000 BLOCK the rewards would be:

		1000 * 0.158 = 158 BLOCK

	With BLOCK valued at $50, that would equate to $7,900 per year.

---

<!-- 
## Reward Calculator

There is a simple staking calculator at [block-node.info](https://block-node.info/blocknet_revenue1.php) built by Discord user @ishkb1 (thanks for all your work!)
 -->





<!-- 
- rewards
	- equation
	- calculator
		- how much
		- how often
-->
<!-- 
what are the cli commands to do the following on windows:
1) start wallet
2) close wallet
3) start syncing
4) get syncing status
5) encrypt wallet

-->












<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





