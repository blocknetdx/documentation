title: Blocknet Wallet Installation Guide
description: This guide explains how to install your Blocknet wallet on each operating system to securely manage your BLOCK through a wallet you own.


# Wallet Installation
Installing the [Blocknet wallet](https://github.com/blocknetdx/blocknet/releases) is a simple process. Below are step-by-step instructions for how to install the wallet on each operating system (OS). If you already have the Blocknet wallet installed and are updating, see the updating guide. 

* For a complete guide on setting up the wallet, see the [setup guide](/wallet/setup).

??? tip "Tip: There are two wallet variations."
	There are two wallet variations, a redesigned interface (default) and a classic interface. To use the classic wallet, you'll need to open your `blocknet.conf` file and add `classic=1` on a new line (you may not have a `blocknet.conf` file and will need to create one). You can find the `blocknet.conf` file in your Blocknet data directory:

	--8<-- "data-directories.md"

	**Redesigned Wallet (default)**
	![Redesigned Wallet](/img/wallet-redesign/wallet-redesign.png)
	**Classic Wallet**
	![Classic Wallet](/img/wallet-classic/wallet-classic.png)

---

## Install GUI Wallet

??? example "Windows"

	[![https://youtu.be/r4Xs0RrbAOw](http://img.youtube.com/vi/r4Xs0RrbAOw/0.jpg)](http://www.youtube.com/watch?v=r4Xs0RrbAOw "Blocknet Wallet Installation - Windows")

	1. Download the [latest Blocknet wallet](https://github.com/blocknetdx/blocknet/releases/). There are 2 options:

		1. `blocknet-x.xx.x-win64-setup-unsigned.exe` (recommended for 64-bit)
	1. `blocknet-x.xx.x-win64.zip`

	    --8<-- "anti-virus-flagged.md"

	1. Before continuing, it is recommended to [verify your download](/wallet/installation/#verifying-downloads)
	1. Continue to the instructions below for the download you selected:

	??? example "Using the `.exe` download (option a)"
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

	??? example "Using the `.zip` download (option b)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Right-click the file, select *Extract All*.

			![Extract](/img/wallet/win-extract.jpg)

		1. Select *Extract*.
		1. After the files are extracted, a new folder should open with the contents. If a folder did not open, look for the new folder in the directory the downloaded file is located.

			![Extracted](/img/wallet/win-extracted.jpg)

		1. In this new folder there will be another folder. Double-click on this sub-folder to view the contents.
		1. In this folder there will be a `bin/` folder. Double-click on this sub-folder to view the contents.
		1. Here you will find the `blocknet-qt` executable file.

			![Exectuable](/img/wallet/win-executable.jpg)

		1. Move this file you where you keep your applications, such as your *Desktop*. Additionally, you can right-click and *Pin to Start* or *Pin to Taskbar* for easy access.
		1. After moving this file, the files you downloaded can be deleted since the `blocknet-qt` executable file is all that is needed.
		1. Double-click the `blocknet-qt` file to begin the installation process.

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
	1. Download the [latest Blocknet wallet](https://github.com/blocknetdx/blocknet/releases/). There are 3 options:

		1. `blocknet-x.xx.x-osx-unsigned.dmg` (recommended)
	1. `blocknet-x.xx.x-osx-unsigned.tar.gz`
	1. `blocknet-x.xx.x-osx64.tar.gz`

	    --8<-- "anti-virus-flagged.md"
		<!-- !!! bug "Bug: MacOS"
			The `.dmg` download is unavailable for the latest release. Use the `osx-unsigned.tar.gz` download instead (see guide below). -->

	1. Before continuing, it is recommended to [verify your download](/wallet/installation/#verifying-downloads)
	1. Continue to the instructions below for the download you selected:

	??? example "Using the `osx-unsigned.dmg` download (option a)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to begin installation.
		1. Click and drag the *Blocknet-Qt* application icon over to the *Applications* folder and release.

			![Copy](/img/wallet/mac-copy-1.png)

		1. Open *Finder*, navigate to *Applications*, and find *Blocknet.app* in the list of applications.
		1. Right-click the file and select *Open*. If using the touch pad this can be done by clicking with 2 fingers.

			![Open](/img/wallet/mac-open.png)

		1. If you are prompted with a message asking if you are sure you want to open the application, select *Open*.

			![Opening](/img/wallet/mac-open-confirm.png)

	        ???+ info "Note: If you see a message like the one below instead of the one above, click *Cancel* and repeat step 5 above."
			![Finder](/img/wallet/mac-open-confirm-extra-step.png)
		
		1. Your computer will begin verifying the application. This may take a few minutes to complete.
		1. An installation prompt will appear, select *OK*.

			![Install](/img/wallet/mac-install.png)

		--8<-- "complete-wallet-installation.md"

	??? example "Using the `osx-unsigned.tar.gz` download (option b)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to unpack the contents.
		1. In the newly unpacked folder, navigate to the *dist* folder.
		1. Click and drag the *Blocknet-Qt* application over to the *Applications* folder and release. This will add the wallet to *Applications*.

			![Copy](/img/wallet/mac-copy-2.png)

		1. If you are prompted with a message asking if you would like to replace an existing version with a newer version, select *Replace*.

			![Replace](/img/wallet/mac-replace.png)

		1. The downloaded files may now be removed.
		1. Open *Finder*, navigate to *Applications*, and find *Blocknet-Qt* in the list of applications.
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
		1. Double-click the `blocknet-qt` file.
		1. If you are prompted with a message asking if you are sure you want to open the application, select *Open*.

			![Opening](/img/wallet/mac-open-confirm.png)

		1. Your computer will begin verifying the application. This may take a few minutes to complete.
		1. Since this is a command line executable file, a command-line window will appear to start the wallet, which begins the installation process.
		1. An installation prompt will appear, select *OK*.

			![Install](/img/wallet/mac-install.png)

		--8<-- "complete-wallet-installation.md"



??? example "Linux"
	1. Download the [latest Blocknet wallet](https://github.com/blocknetdx/blocknet/releases/). There are 2 options:

		1. `blocknet-x.xx.x-x86_64-linux-gnu.tar.gz` (recommended for 64-bit)
	1. `blocknet-x.xx.x-arm-linux-gnueabihf.tar.gz` (recommended for Raspberry Pi)

	    --8<-- "anti-virus-flagged.md"

	1. You may be asked for a confirmation to download, select *Save File* then *OK*.

		![Save](/img/wallet/linux-save.jpg)

	1. Find the downloaded file. The default location is in *Downloads*.
	1. Before continuing, it is recommended to [verify your download](/wallet/installation/#verifying-downloads) 
	1. Right-click the file, select *Extract Here*.

		![Extract](/img/wallet/linux-extract.jpg)

	1. Double-click the `blocknet-x.xx.x-x86_64-linux-gnu/` folder to view the contents.
	1. Double-click the `blocknet-x.xx.x/` folder to view the contents.
	1. Double-click the `bin/` folder to view the contents.
	1. Here you will find the `blocknet-qt` executable file.

		![Exectuable](/img/wallet/linux-executable.jpg)

	1. Move this file you where you keep your applications, such as your *Desktop*.
	1. After moving this file, the files you downloaded can be deleted since the `blocknet-qt` executable file is all that is needed.
	1. Double-click the `blocknet-qt` file to begin the installation
       process. (If it fails to open on double-click, you may need to give
       *executable* permission to the file: Either `sudo chmod +x
       blocknet-qt` in Debian terminal, or Right-click property, give
       executable permission.)
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

---

## Verifying Downloads

It is important to verify the integrity of downloads before running them. Depending on how you downloaded it, it's possible the file may have been modified in transit to do something evil when run. The server hosting the download may also have been compromised.

1. Get the sha256 hash of the release you download. These are provided on the Github release page either in a file called `sha256sums.txt` or as a plain text in the release notes. The format follows `SHA256(filename)= hash`. Here is an example of the hashes:
```
SHA256(blocknet-3.13.1-arm-linux-gnueabihf-debug.tar.gz)= 77e6c3e5d1e6ef9f0d54a8f0fe3d638b1c6bd889e609c6a69bb8f82322117847
SHA256(blocknet-3.13.1-arm-linux-gnueabihf.tar.gz)= 94705029ebf05b0aa2b0939dd0da0663e578accbf5dca8e9393456d9d40edde6
SHA256(blocknet-3.13.1-i686-pc-linux-gnu-debug.tar.gz)= 30039c5eb3951a73d578f613d072a79610cb3983113cf816fbed485ce44bd57c
SHA256(blocknet-3.13.1-i686-pc-linux-gnu.tar.gz)= c5c9013b5e0539a99825339f98a460281014b3dca5d970e24faa860b6fd0c0e7
SHA256(blocknet-3.13.1-osx-unsigned.tar.gz)= 0d5be3dedc83521349b5def54c1f045f1cd35c67d8da5beb50c90beaa50ae659
SHA256(blocknet-3.13.1-osx64.tar.gz)= 438b0b82001ca5ce0af8300061207f87421c3c9cfeab47dd4c56ebc856b357da
SHA256(blocknet-3.13.1-win-unsigned.tar.gz)= 1f81058be74d3714f1e07f5b16562f471cd2da1fac8251b3c3d414dba5b0d271
SHA256(blocknet-3.13.1-win32-debug.zip)= fdc15df95dbb1293d59a2a9b90bf421594b0dc27320cd09cf31dcc9073bb2a8e
SHA256(blocknet-3.13.1-win32-setup-unsigned.exe)= c89200719d3e55f9f7eee1cf8f77a4a4c43d8c4551b896a4f0d7617a935f31e0
SHA256(blocknet-3.13.1-win32.zip)= 60c0805f00fe4e1c1e93af2ef3e93fb0fbe3b7bcf2385f8192c1a176b4068c3f
SHA256(blocknet-3.13.1-win64-debug.zip)= e739bf19e5d826ff9750c9ae9dfddf0bf17b9e6da2d90e094698c02171454a6f
SHA256(blocknet-3.13.1-win64-setup-unsigned.exe)= 350d67cdb009a7b4d3101dae145caa9c69e8c7a2ca6252a4d97aedf33a5a3f9d
SHA256(blocknet-3.13.1-win64.zip)= f1f472353f034e1151345c167a48a01d1ceafdd2b7a5b7a5cc82df9cbef6ce6d
SHA256(blocknet-3.13.1-x86_64-linux-gnu-debug.tar.gz)= 998fa0487cc4e8fc2be9fb004cd6eb9bc0e91d690da110a5073e3f3b50bd2938
SHA256(blocknet-3.13.1-x86_64-linux-gnu.tar.gz)= 9608a66feb4616092ddb2dbeeafef01f5c0c28b61cccf13bcd032cee3981be74
```
1. Take a note of the hash for the specific file you downloaded.
1. Get the sha256 hash of the file you downloaded:

	??? example "Windows"
		1. Open the command prompt.
		1. Navigate to the location of the downloaded file.
		1. Enter `certUtil -hashfile filename SHA256` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `certUtil -hashfile blocknet-3.13.1-win64.zip SHA256`

	??? example "MacOS"
		1. Open the terminal.
		1. Navigate to the location of the downloaded file.
		1. Enter `shasum -a 256 filename` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `shasum -a 256 blocknet-3.13.1-osx-unsigned.tar.gz`

	??? example "Linux"
		1. Open the terminal.
		1. Navigate to the location of the downloaded file.
		1. Enter `sha256sum filename` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `sha256sum blocknet-3.13.1-x86_64-linux-gnu.tar.gz`

1. Compare the release hash to the hash of the download. If the hashes do not match, **DO NOT** run the file and delete the file immediately.









<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"
