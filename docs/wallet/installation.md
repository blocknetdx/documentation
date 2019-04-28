title: Blocknet Wallet Installation Guide
description: This guide explains how to install your Blocknet wallet on each operating system to securely manage your BLOCK through a wallet you own.


# Wallet Installation
Installing the [Blocknet wallet](https://github.com/BlocknetDX/blocknet/releases) is a simple process. Below are step-by-step instructions for how to install the wallet on each operating system (OS). If you already have the Blocknet wallet installed and are updating, see the updating guide. 

* For a complete guide on setting up the wallet, see the [setup guide](/wallet/setup).

!!! bug "Bug: MacOS"
	The `.dmg` download is unavailable for the 3.12.1 release due to issues with that build. Use the `osx-unsigned.tar.gz` download instead (see guide below).

??? tip "Tip: There are two wallet variations."
	Each wallet version has a redesigned and classic release. For example with version 3.12.1, [v3.12.1](https://github.com/BlocknetDX/blocknet/releases/tag/v3.12.1) is the release for the redesigned wallet, and [v3.12.1-classic](https://github.com/BlocknetDX/blocknet/releases/tag/v3.12.1-classic) is the release for the classic wallet.

	**Redesigned Wallet**
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)
	**Classic Wallet**
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

---

## Install GUI Wallet

??? example "Windows"
	1. Download the [latest Blocknet wallet](https://github.com/BlocknetDX/blocknet/releases/). There are 4 options:
		1. `blocknetdx-x.xx.x-win64-setup-unsigned.exe` (recommended for 64-bit)
		1. `blocknetdx-x.xx.x-win32-setup-unsigned.exe` (recommended for 32-bit)
		1. `blocknetdx-x.xx.x-win64.zip`
		1. `blocknetdx-x.xx.x-win32.zip`

	??? example "Using the `.exe` download (options a/b)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to begin the installation process.
			
			???+ info "Note: You may receive antivirus warning messages."
				You may recieve warnings from antivirus software. These false positives are normal and can be dismissed.

				If you have Windows SmartScreen enabled, you may see the following message:

				![SmartScreen](/img/wallet/win-protected.jpg)

				Select *More info*, then *Run anyway* to dismiss this message:

				![SmartScreen Dismiss](/img/wallet/win-protected-dismiss.jpg)

		1. The installation guide will appear, select *Next*.

			![Install 1](/img/wallet/win-install-1.jpg)

		1. Select *Next* to accept the default installation directory.

			![Install 2](/img/wallet/win-install-2.jpg)

		1. Select *Install* to accept the default data directory folder name and begin installation.

			![Install 3](/img/wallet/win-install-3.jpg)

		1. Select *Next* when the installation is complete.

			![Install 4](/img/wallet/win-install-4.jpg)

		1. Select *Finish* to complete the installation process. If you would not like the wallet to open right away, uncheck the *Run Blocknet* option.

			![Install 5](/img/wallet/win-install-5.jpg)

		--8<-- "complete-wallet-installation.md"

	??? example "Using the `.zip` download (options c/d)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Right-click the file, select *Extract All*.

			![Extract](/img/wallet/win-extract.jpg)

		1. Select *Extract*.
		1. After the files are extracted, a new folder should open with the contents. If a folder did not open, look for the new folder in the directory the downloaded file is located.

			![Extracted](/img/wallet/win-extracted.jpg)

		1. In this new folder there will be another folder. Double-click on this sub-folder to view the contents.
		1. In this folder there will be a `bin/` folder. Double-click on this sub-folder to view the contents.
		1. Here you will find the `blocknetdx-qt` executable file.

			![Exectuable](/img/wallet/win-executable.jpg)

		1. Move this file you where you keep your applications, such as your *Desktop*. Additionally, you can right-click and *Pin to Start* or *Pin to Taskbar* for easy access.
		1. After moving this file, the files you downloaded can be deleted since the `blocknetdx-qt` executable file is all that is needed.
		1. Double-click the `blocknetdx-qt` file to begin the installation process.
			
			???+ info "Note: You may receive antivirus warning messages."
				You may recieve warnings from antivirus software. These false positives are normal and can be dismissed.

				If you have Windows SmartScreen enabled, you may see the following message:

				![SmartScreen](/img/wallet/win-protected.jpg)

				Select *More info*, then *Run anyway* to dismiss this message:

				![SmartScreen Dismiss](/img/wallet/win-protected-dismiss.jpg)

		1. The installation guide will appear, select *Next*.

			![Install 1](/img/wallet/win-install-1.jpg)

		1. Select *Next* to accept the default installation directory.

			![Install 2](/img/wallet/win-install-2.jpg)

		1. Select *Install* to accept the default data directory folder name and begin installation.

			![Install 3](/img/wallet/win-install-3.jpg)

		1. Select *Next* when the installation is complete.

			![Install 4](/img/wallet/win-install-4.jpg)

		1. Select *Finish* to complete the installation process. If you would not like the wallet to open right away, uncheck the *Run Blocknet* option.

			![Install 5](/img/wallet/win-install-5.jpg)

		--8<-- "complete-wallet-installation.md"



??? example "MacOS"
	1. Download the [latest Blocknet wallet](https://github.com/BlocknetDX/blocknet/releases/). There are 3 options:
		1. `blocknetdx-x.xx.x-osx-unsigned.dmg` (recommended)
		1. `blocknetdx-x.xx.x-osx-unsigned.tar.gz`
		1. `blocknetdx-x.xx.x-osx64.tar.gz`

	??? example "Using the `osx-unsigned.dmg` download (option a)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to begin installation.
		1. Click and drag the *BlocknetDX-Qt* application icon over to the *Applications* folder and release.
			
			![Copy](/img/wallet/mac-copy-1.png)

		1. Open *Finder*, navigate to *Applications*, and find *BlocknetDX-Qt* in the list of applications.
		1. Right-click the file and select *Open*. If using the touch pad this can be done by clicking with 2 fingers.

			![Open](/img/wallet/mac-open.png)

		1. If you are prompted with a message asking if you are sure you want to open the application, select *Open*.

			![Opening](/img/wallet/mac-open-confirm.png)

		1. Your computer will begin verifying the application. This may take a few minutes to complete.
		1. An installation prompt will appear, select *OK*.

			![Install](/img/wallet/mac-install.png)

		--8<-- "complete-wallet-installation.md"

	??? example "Using the `osx-unsigned.tar.gz` download (option b)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to unpack the contents.
		1. In the newly unpacked folder, navigate to the *dist* folder.
		1. Click and drag the *BlocknetDX-Qt* application over to the *Applications* folder and release. This will add the wallet to *Applications*.
			
			![Copy](/img/wallet/mac-copy-2.png)

		1. If you are prompted with a message asking if you would like to replace an existing version with a newer version, select *Replace*.

			![Replace](/img/wallet/mac-replace.png)

		1. The downloaded files may now be removed.
		1. Open *Finder*, navigate to *Applications*, and find *BlocknetDX-Qt* in the list of applications.
		1. Right-click the file and select *Open*. If using the touch pad this can be done by clicking with 2 fingers.

			![Open](/img/wallet/mac-open.png)

		1. If you are prompted with a message asking if you are sure you want to open the application, select *Open*.

			![Opening](/img/wallet/mac-open-confirm.png)

		1. Your computer will begin verifying the application. This may take a few minutes to complete.
		1. An installation prompt will appear, select *OK*.

			![Install](/img/wallet/mac-install.png)

		--8<-- "complete-wallet-installation.md"

	??? example "Using the `osx64.tar.gz` download (option c)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to unpack the contents.
		1. In the new folder created, navigate to the `bin/` folder.
		1. Double-click the `blocknetdx-qt` file.
		1. If you are prompted with a message asking if you are sure you want to open the application, select *Open*.

			![Opening](/img/wallet/mac-open-confirm.png)

		1. Your computer will begin verifying the application. This may take a few minutes to complete.
		1. Since this is a command line executable file, a command-line window will appear to start the wallet, which begins the installation process.
		1. An installation prompt will appear, select *OK*.

			![Install](/img/wallet/mac-install.png)

		--8<-- "complete-wallet-installation.md"



??? example "Linux"
	1. Download the [latest Blocknet wallet](https://github.com/BlocknetDX/blocknet/releases/). There are 3 options:
		1. `blocknetdx-x.xx.x-x86_64-linux-gnu.tar.gz` (recommended for 64-bit)
		1. `blocknetdx-x.xx.x-i686-pc-linux-gnu.tar.gz` (recommended for 32-bit)
		1. `blocknetdx-x.xx.x-arm-linux-gnueabihf.tar.gz` (recommended for Raspberry Pi)
	1. You may be asked for a confirmation to download, select *Save File* then *OK*.

		![Save](/img/wallet/linux-save.jpg)

	1. Find the downloaded file. The default location is in *Downloads*.
	1. Right-click the file, select *Extract Here*.

		![Extract](/img/wallet/linux-extract.jpg)

	1. Double-click the `blocknetdx-x.xx.x-x86_64-linux-gnu/` folder to view the contents.
	1. Double-click the `blocknetdx-x.xx.x/` folder to view the contents.
	1. Double-click the `bin/` folder to view the contents.
	1. Here you will find the `blocknetdx-qt` executable file.

		![Exectuable](/img/wallet/linux-executable.jpg)

	1. Move this file you where you keep your applications, such as your *Desktop*.
	1. After moving this file, the files you downloaded can be deleted since the `blocknetdx-qt` executable file is all that is needed.
	1. Double-click the `blocknetdx-qt` file to begin the installation process.

		???+ bug "Bug: Terminal needed to open 3.12.1 release."
			1. With the 3.12.1 release you will encounter an error when you double-click to open it.<br>
				![Error](/img/wallet/linux-error.jpg)

			1. The wallet must be opened using Terminal. Open Terminal.<br>
				![Terminal](/img/wallet/linux-terminal.jpg)

			1. Navigate to the location of the `blocknetdx-qt` executable file. 
				1. If you moved the file to your *Desktop*, type the following like and press the *Enter* key.
					```
					cd Desktop/
					```
				1. If you moved the file to your *Downloads*, type the following like and press the *Enter* key.
					```
					cd Downloads/
					```
				1. If you moved the file to your *Documents*, type the following like and press the *Enter* key.
					```
					cd Documents/
					```

			1. Type the following command and press the *Enter* key.
				```
				./blocknetdx-qt &
				```

	1. An installation prompt will appear, select *OK*.

		![Install](/img/wallet/linux-install.jpg)

	--8<-- "complete-wallet-installation.md"


<!--
---

## Install CLI Wallet

??? example "Windows"


??? example "MacOS"
	

??? example "Linux"
-->	













<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





