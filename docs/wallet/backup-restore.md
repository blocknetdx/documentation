title: Blocknet Wallet  Backup & Restore Guide
description: This guide explains how to backup and restore your Blocknet wallet.

# Backup & Restore

## Backup

After your wallet is [encrypted](/wallet/encrypting), it should immediately be backed up. The file
called `wallet.dat` contains all the critical information for
accessing your wallet, and that is the file which should be backed up
(copied) to multiple physically different locations. For example, it
is recommended to keep copies of this file on multiple USB drives and
store them in different locations. Also, unless your wallet is an
[HD Wallet](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp)
and you are certain no non-HD __PrivateKey/Address__
pairs have been imported into your wallet, the latest version of
`wallet.dat` should be backed up whenever
funds are added to a new address in your wallet. Your `wallet.dat`
file is typically stored in the `wallets` subdirectory of your data directory:

### Data Directory

--8<-- "data-directories.md"

---

### CLI Wallet Backup Options (also works for GUI/Qt wallet) 

1. __Option 1 - Close/Quit Blocknet wallet, then backup `wallet.dat`__
	1. To ensure `wallet.dat` is not being modified as you are copying
       it, Close/Quit Blocknet wallet. If you are running a CLI
       wallet on a Linux OS, quit your wallet by issuing the CLI command,
       `./blocknet-cli stop` in the directory where `blocknet-cli`
       is located. Note, if your CLI wallet was set up on a Linux
       system according to the
       [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
       you can stop your CLI wallet from any directory with:
		   ```
		   blocknet-cli stop
		   ```
	 1. Wait till your Wallet stops completely. If running the GUI/Qt wallet,
              this means waiting till the "*Blocknet is shutting
              down...*" message disappears. If running a CLI wallet on
              Linux, you can monitor the Linux process called `blocknetd` by
              repeatedly  pasting/issuing the following command:
		   ```
		   ps x -o args | grep -v "grep" | grep "blocknetd"
		   ```
		   Before the `blocknetd` Linux process has stopped
           completely, that command will return something like this:
		   ```
		   /home/[user]/blocknet-4.3.3/bin/blocknetd -daemon
		   ```
		   Continue issuing that `ps x -o args` command until it returns
              nothing. Then you know the `blocknetd` process has
              stopped completely and it's safe to backup/copy your `wallet.dat` file.

	1. Within the [data directory](#data-directory) there is usually a subdirectory called `wallets` which is the default place for `wallet.dat`. If you find a `wallet.dat` file in the `wallets` subdirectory, that is the file which should be backed up.
	1. If the `wallets` subdirectory does __*not*__ exist, then the
      `wallet.dat` in the [data directory](#data-directory) itself is the file which
      should be backed up.
	1. Back up your `wallet.dat` simply by copying it to different
       computer(s) and/or USB drives.
	1. Restart your Blocknet wallet. If you are running a CLI
       wallet on a Linux OS, restart your wallet by issuing the CLI command,
       `./blocknetd -daemon` in the directory where `blocknetd`
       is located. Note, if your CLI wallet was set up on a Linux
       system according to the
       [VPS Staking guide](/wallet/staking/#staking-from-cli-on-a-vps-running-ubuntu-linux),
       you can restart your CLI wallet from any directory with:
		   ```
		   blocknet-daemon
		   ```

1. __Option 2 - Issue `backupwallet <backupfile.dat>` command from *Debug Console* or
*Command Line Interface*__
	1. This option does *not* require that you Close/Quit the Blocknet
    wallet.
	1. Be sure to specify the full path of your `backupfile.dat` and make sure it's in a
	directory where you have write permission.
		- Example: (Mac):
		```backupwallet /Users/(username)/Desktop/mywallet.dat```
		- Example (Windows):
		```backupwallet c:\Users\(username)\Desktop\mywallet.dat```

### GUI/Qt Backup Option

If you are using the GUI/Qt wallet, one way to be certain to back up the
correct `wallet.dat` file is to select the *File->Backup Wallet...*
option in the GUI interface:

![File Backup](/img/wallet/file-backup.png)

This gives you the option to write a
backup of your current `wallet.dat` to any location and give it any name.

### Dumpfile Backup Option
If you want to be extra sure you'll be able to restore your wallet,
in addition to backing up your `wallet.dat`, you can also back up your
wallet in a `dumpfile` format. This format can be especially useful for those who are using an
[HD Wallet](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp)
because it backs up the wallet's HD seed(s) in a human-readable
format. 

??? tip "Tip: Is my wallet an [HD Wallet](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp)? How do I find HD seed(s) in the `dumpfile`? How do I migrate to HD?"
	In the lower right corner of the Qt/GUI wallet are some symbols
	that look something like this:
	![HD Wallet Indicator](/img/wallet/hd-wallet.png)

	If you see __HD__ there (not crossed out or greyed out), then your wallet is an
	[HD Wallet](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp). Note:
	All wallets created with Blocknet v4.0 or greater are HD
	wallets. To find your wallet's HD seed(s), search the `dumpfile`
	for `hdseed=1`. [See the answer posted here](https://bitcoin.stackexchange.com/questions/101767/dumpwallet-output-documentation-explanation) for full details on the format of `dumpfile`.

	If your wallet is __*not*__ an HD wallet and you want to be using a new
	HD wallet, the way to acheive that is to create an HD wallet (by
	creating a new wallet with the [latest version of the Blocknet wallet](https://github.com/blocknetdx/blocknet/releases/)), then
	transfer all your BLOCK to your new HD wallet. Note: You can, for
	example, create your new HD wallet on a different computer or in
	a different data directory on your existing computer. That way you
	can continue to have access to your old non-HD
	wallet until funds have been transferred to the new HD
	wallet. Another option is to create a new HD wallet simply by
	renaming the non-HD `wallet.dat` to something else, then restarting Blocknet
	wallet (v4.0+). The full instructions for doing it this way are as follows:

	1. [Locate](#cli-wallet-backup-option-also-works-for-guiqt-wallet)
       your current, non-HD `wallet.dat`.
	1. Rename that `wallet.dat` to `wallet.dat.non-hd`.
	1.  Restart Blocknet wallet (must be Blocknet wallet v4.0+).
	1. Back up the new HD `wallet.dat` which was created by restarting
       your wallet.
	1. Created a receive address within your new HD wallet
	(*Address Book->Create New Address->My Address*) and copy it
	into a temporary file.
	1. Close Blocknet wallet
	1. Rename the new HD `wallet.dat` to
	`wallet.dat.hd`.
	1. Rename `wallet.dat.non-hd` back to `wallet.dat`.
	1. Restart Blocknet wallet.
	1. Send all your BLOCK from your old non-HD wallet to the newly
	created receive address in your new HD wallet. Note, if you want to start out by sending a small test amount from your old non-HD wallet to your new HD wallet, you can certainly do so. It just means you'll have to repeat the procedures for switching back and forth between your old non-HD wallet and your new HD wallet.
	1. Close Blocknet wallet.
	1. Rename the `wallet.dat` to	`wallet.dat.non-hd`.
	1. Rename `wallet.dat.hd` back to `wallet.dat`.
	1. Restart Blocknet.

To back up your wallet in a `dumpfile` format, issue the following command:
```
dumpwallet <dumpfile>
```
This command can be issued from *Tools->Debug
Console*, or from the CLI if using a Command Line Interface to the
wallet.

The `dumpwallet <dumpfile>` command will dump all your wallet's __Private
Key/Address__ pairs in a
[human-readable format](https://bitcoin.stackexchange.com/questions/101767/dumpwallet-output-documentation-explanation) to
the file you specify as your `dumpfile`. Note: Be sure to specify
the full path of `dumpfile` and make sure it's in a
directory where you have write permission.

- Example: (Mac):
```dumpwallet /Users/(username)/Desktop/dumpfile.txt```
- Example (Windows):
```dumpwallet c:\Users\(username)\Desktop\dumpfile.txt```

??? danger "Caution: It is strongly recommended __*NOT*__ to keep this `dumpfile` stored on a computer while the computer is connected to the Internet."
	You can print the `dumpfile`, then delete it, then empty your
	Trash. You can also store it within a 256-bit encrypted folder
	on your computer and/or on USB drives. (Google for how to encrypt a folder on Windows/Mac.)
	However, due to the extremely sensitive information in this file, it
	should __*NOT*__ be kept stored on a computer that can be connected to the
	Internet (unless it is within a 256-bit encrypted folder).

---

## Restore

### Restore from `wallet.dat`

To restore a previously backed up `wallet.dat` file, follow these steps:

1. If you haven't already done so,
   [Install Blocknet Wallet](/wallet/installation) and [sync it](/wallet/syncing)
1. Close your Blocknet wallet application.
1. Rename or move the `wallet.dat` file in your
[data directory](#data-directory), if there is one.
1. If there is a `wallets` subdirectory/folder in the data directory
   and it contains a file called `wallet.dat`, rename that `wallet.dat` file to something like `wallet.dat.empty`.
1. If  a `wallets` subdirectory/folder doesn't already exist in the
   data directory, make a new `wallets` subdirectory/folder in the data directory.
1. Copy your backup copy of `wallet.dat` into the `wallets` subdirectory
of your [data directory](#data-directory). Note, it's fine to name
your `wallet.dat` to something else while it's being stored safely in
other locations. However, it must be named, `wallet.dat` when
placed in the `wallets` subdirectory if the Blocknet wallet app is going to find it.

	!!! info "Note, instead of copying your backup `wallet.dat` into the `wallets` subdirectory, you could optionally copy it into the data directory itself. However, if you choose this option, be sure to remove the `wallets` subdirectory because the Blocknet application will *not* use a `wallet.dat` file in the data directory itself if a `wallets` subdirectory exists."

1. Restart Blocknet wallet.

### Restore from `dumpfile`

Firstly, if you haven't already done so, [Install Blocknet Wallet](/wallet/installation) and [sync it](/wallet/syncing)

Next, there are three options:

1. If you [backed up your wallet using the](#dumpfile-backup-option) `dumpwallet <dumpfile>`
command, you can restore it simply by issuing the `importwallet
<dumpfile>` command from either *Tools->Debug Console* or from the
CLI if using the Command Line Interface. This is the recommended method of
restoring from a `dumpfile`.
1. Another option you have if you are restoring an
[HD Wallet](https://www.investopedia.com/terms/h/hd-wallet-hierarchical-deterministic-wallet.asp)
and you are certain no non-HD __PrivateKey/Address__
pairs were imported into the wallet you want to restore, is to
[extract the HD seed from the dumpfile](https://bitcoin.stackexchange.com/questions/101767/dumpwallet-output-documentation-explanation),
then use the `sethdseed ( newkeypool "seed" )`
command to effectively import all the __PrivateKey/Address__ pairs of
the HD wallet. Type, `help sethdseed` in the Debug Console or CLI for
more details on the `sethdseed` command.
1. It's also possible to use the `importprivkey` command to import
   individual __PrivateKey/Address__ pairs, where the Private Key
   could come from the `dumpfile`, or from the output of a
   `dumpprivkey` command issued in some wallet. The use of these
   commands is not generally recommended, especially if you are
   using an HD wallet. However, in certain circumstances, these commands
   might be the only way to salvage funds.



<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





