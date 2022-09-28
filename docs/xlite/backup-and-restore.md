title: XLite Create, Backup & Restore Wallet Guide
description: This guide explains how to initialize, backup and restore your XLite wallet on each operating system.

### The first time you open XLite after installing it, you'll see this screen:

![Create New XLite Wallet](/img/xlite/create-wallet.png) 

### Here you have the option to either [create a brand new wallet](#create-new-wallet), or [create wallet from mnemonic (a.k.a. restore an old wallet)](#create-wallet-from-mnemonic-aka-restore-an-old-wallet).

???+ Tip "Tip: To change the password of an existing XLite wallet, ensure you have [backed up your wallet's 12 word mnemonic passphrase](#back-up-wallet), then follow the instructions below to [Create wallet from mnemonic (a.k.a. Restore an old wallet)](#create-wallet-from-mnemonic-aka-restore-an-old-wallet)"

#### Create New Wallet
1. Choose a password for your wallet and enter it in both the *Enter password* box and the *Repeat password* box
1. Click *Create Wallet*
1. After a new wallet is created, the wallet's 12 word mnemonic passphrase is
   displayed. You can now select the 12 word passphrase, copy it into
   the clipboard, paste it into a file, then save the file. If you've
   chosen this approach, you can now proceed to step 6 in the
   [Back up Wallet](#back-up-wallet) section below. If, instead of
   copying/pasting your 12 word passphrase into a file, you prefer to
   download the passphrase to a file, proceed to step 1 in
   [Back up Wallet](#back-up-wallet) below.

#### Create wallet from mnemonic (a.k.a. Restore an old wallet)
1. Click *Create wallet from mnemonic*  to display this screen:
![Create wallet from mnemonic](/img/xlite/restore-wallet.png) 
1. On this screen, follow these steps to restore your old wallet (with a new password of your choice):
	1. Choose a password for your wallet and enter it in both the *Enter password* box and the *Repeat password* box
	1. Enter the 12 word mnemonic passphrase of the XLite wallet you want to restore
	1. Click *Create Wallet*

???+ Warning "Warning: Before adding funds you your XLite wallet, be sure to [back up your 12 word mnemonic passphrase](#back-up-wallet) for wallet recovery."

## Back up Wallet 

#### After opening and unlocking XLite, you'll see a screen something like this:

![XLite Dashboard](/img/xlite/dashboard.png)

__To back up your wallet's 12 word mnemonic passphrase:__

1. Select *Settings->Backup*
1. Enter your password.
1. Click *Download backup file*.
1. Select Download location
1. Click *Save*
1. Make copies of your wallet's mnemonic phrase to at least 3
physically different locations. You can copy the mnemonic phrase backup file to a private USB
thumb drive (preferably encrypting it first). You can also print or write
your mnemonic phrase on pieces of
paper and store them in different locations.
1. After storing your mnemonic phrase in 3+ locations, __*delete the
   mnemonic phrase backup file from your computer, then empty the trash!*__ Leave no
   trace of your 12 word mnemonic phrase on your computer in an
   unencrypted form.

##### Force Creation of a New XLite Wallet

??? Tip "Tip: Force Creation of a New XLite Wallet."

	On rare occasion, you may want to force a brand new wallet to be
    created. For Example, maybe you can't remember your password, lost
    your mnemonic passphrase, and don't have any funds in your XLite
    wallet worth saving. In such a case, you can force a new wallet to
    be created by moving (or removing) both the `CloudChains`
    and `xlite` directories. Moving/renaming those
    directories is recommended, but if you are 100% certain there are
    no funds in your XLite wallet that might be worth saving, you can
    remove/delete those directories.
	
	The locations of the `CloudChains` and `xlite` directories are as follows:

	* Windows: `%appdata%`
	
	* MacOS:  `~/Library/Application Support/`

	* Linux: `~/.config/`

	Once you have moved or removed the `CloudChains` and `xlite`
    directories, the next time you start XLite you'll see the
    [screen from which you can create a brand new wallet](#the-first-time-you-open-xlite-after-installing-it-youll-see-this-screen)

???+ success "XLite Configuration Complete!"
	Continue to related guide:

	* [Block DX setup guide](/blockdx/setup)

<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"
