title: XLite Create, Backup & Restore Wallet Guide
description: This guide explains how to initialize, backup and restore your XLite wallet on each operating system.

## First Time Open XLite

??? example "Windows"

	* Double-click on the XLite icon wherever you installed it in the [Installation](/xlite/installation) step. 

	    ??? info "Note: If you see a *Security Warning* from Windows asking if you want to *Run* the file, it is safe to click *Run*, assuming you have [verified your download](/xlite/installation/#verifying-downloads-recommended)."

	    ??? info "If XLite doesn't open when you double-click it, click here"
		1. Install [Visual C++ 2010 Redistributable Package (x64)](https://www.microsoft.com/en-us/download/details.aspx?id=14632).
		1. [Redo the installation step](/xlite/installation).

??? example "MacOS"

	1. Open the [Finder](https://support.apple.com/en-in/HT201732) from
      [the dock](https://support.apple.com/en-in/guide/mac-help/mh35859/mac),
	  then click on *Applications* on the left side of the Finder window to reveal a
      screen like this:
	![Finder](/img/xlite/right-click-xlite-in-applications.png)
	1. Scroll down to locate the *XLite* application, then
      *right-click* (trackpad *two-finger-tap*) on *XLite* and
      select *Open* to reveal a message like this:
	  ![Finder](/img/xlite/open-xlite.png)

	    ???+ info "Note: If you see the message below instead of the one above, click *OK* and repeat step 2 above."
		![Finder](/img/xlite/first-open-attempt.png)
		
	1. Click *Open* (This is safe, assuming you have [verified your download](/xlite/installation/#verifying-downloads-recommended)).

	??? tip "Tip: After opening XLite the first time as above, you can now use the [Launchpad](https://support.apple.com/en-in/HT202635) to open XLite in the future."
		The above procedure was only necessary due to
		security precautions your Mac takes when opening a new application
		for the first time.

??? example "Linux"

	If you [downloaded and installed](/xlite/installation) the `.AppImage` or the `.deb`
    file,
	
	* Double-click on the XLite icon wherever you installed it in the [Installation](/xlite/installation) step.

	If you downloaded and installed XLite from the `.tar.gz` file,

	1. In a Terminal window, type `cd <install-dir>/XLite-x.x.x-linux`
       where `install-dir` is the directory where you moved the
       `XLite-x.x.x-linux` directory after extracting it, and `x.x.x.` is the version you
       downloaded.
	1. Type, `./xlite` to run the application.

### The first time you open XLite after installing it, you'll see this screen:

![Create New XLite Wallet](/img/xlite/create-wallet.png) 

### Here you have the option to either [create a brand new wallet](#create-new-wallet), or [create wallet from mnemonic (a.k.a. restore an old wallet)](#create-wallet-from-mnemonic-aka-restore-an-old-wallet).

???+ Tip "Tip: To change the password of an existing XLite wallet, ensure you have [backed up your wallet's 12 word mnemonic passphrase](#back-up-wallet), then follow the instructions below to [Create wallet from mnemonic (a.k.a. Restore an old wallet)](#create-wallet-from-mnemonic-aka-restore-an-old-wallet)"

#### Create New Wallet
1. Choose a password for your wallet and enter it in both the *Enter password* box and the *Repeat password* box
1. Click *Create Wallet*

#### Create wallet from mnemonic (a.k.a. Restore an old wallet)
1. Click *Create wallet from mnemonic*  to display this screen:
![Create wallet from mnemonic](/img/xlite/restore-wallet.png) 
1. On this screen, follow these steps to restore your old wallet (with a new password of your choice):
	1. Choose a password for your wallet and enter it in both the *Enter password* box and the *Repeat password* box
	1. Enter the 12 word mnemonic passphrase of the XLite wallet you want to restore
	1. Click *Create Wallet*

???+ Warning "Warning: Before adding funds you your XLite wallet, be sure to back up your 12 word mnemonic passphrase for wallet recovery."

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
