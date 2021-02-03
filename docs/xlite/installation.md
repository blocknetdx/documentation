title: XLite Installation Guide
description: This guide explains how to install your XLite wallet on each operating system to securely manage your [digital assets](/resources/glossary/#digital-asset) through a wallet you own.


# Wallet Installation
Installing the XLite wallet is a simple process. Below are
step-by-step instructions for how to install the wallet on each
operating system (OS). If you already have the XLite wallet
installed and are updating, the steps are basically the same.

---

## Install GUI Wallet

??? example "Windows"

	1. Download the [latest XLite wallet](https://github.com/blocknetdx/xlite/releases/) There are 3 options:

		1.  `XLite-x.x.x-win.exe` (recommended - works on 64-bit and 32-bit Windows)
	1.  `XLite-x.x.x-win-x64.zip` (for 64-bit Windows)
	1.  `XLite-x.x.x-win-ia32.zip` (for 32-bit Windows)

	    --8<-- "anti-virus-flagged.md"

	1. Continue to the instructions below for the download you selected:

	??? example "Using the `.exe` download (option a)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to begin the installation process.

			??? info "Note: You may receive antivirus warning messages such as these."
			You may recieve warnings from antivirus software. These false positives are normal and can be dismissed.

				If you have Windows SmartScreen enabled, you may see the following message:

				![SmartScreen](/img/wallet/win-protected.jpg)

				Select *More info*, then *Run anyway* to dismiss this message:

				![SmartScreen Dismiss](/img/wallet/win-protected-dismiss.jpg)

		1. When the Setup Wizard appears, follow the setup
        instructions to finish installing XLite.
		1. When installation is complete, you can delete the
           downloaded `.exe` file.

	??? example "Using the `.zip` download (options b/c)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Right-click the file, select *Extract*.
		1. After the files are extracted, a new folder should open
           with the contents. If a folder did not open, look for the
           new folder in the directory where the `.zip` file was downloaded.
		1. In the newly extracted folder you will find the `XLite` executable file.
		1. Move this `XLite` executable file to where you keep your applications, such as your *Desktop*. Additionally, you can right-click and *Pin to Start* or *Pin to Taskbar* for easy access.
		1. After moving this file, the `.zip` and the remaining
           extracted folders and files can be deleted since the `XLite` executable
           file was all we needed.


	--8<-- "complete-xlite-installation.md"


??? example "MacOS"
	1. Download the [latest XLite wallet](https://github.com/blocknetdx/xlite/releases/) There are 2 options:

		1. `XLite-x.x.x-mac.dmg` (recommended)
	1. `XLite-x.x.x-mac.zip`
	
	    --8<-- "anti-virus-flagged.md"

	1. Continue to the instructions below for the download you selected:

	??? example "Using the `.dmg` download (option a)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to begin installation.
		1. Click and drag the *XLite* application icon over to the *Applications* folder and release.
		1. If you are prompted with a message asking if you would like to replace an existing version with a newer version, select *Replace*.
		1. Find the *XLite* installation drive on your desktop and
          eject it. (Right-click/two-finger tap on the *XLite* icon,
          then select *Eject*).
		  		   
	    --8<-- "complete-xlite-installation.md"

	??? example "Using the `.zip` download (option b)"
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to unpack the contents into a new
        folder.
		1. Within that new folder you should see the *XLite* application.
		1. Click and drag the *XLite* application over to the *Applications* folder and release.
		1. If you are prompted with a message asking if you would like to replace an existing version with a newer version, select *Replace*.
		1. The `.zip` and the remaining unpacked files and folders may now be deleted as *XLite* was the
           only file we needed.

	    --8<-- "complete-xlite-installation.md"

??? example "Linux"
	1. Download the [latest XLite wallet](https://github.com/blocknetdx/xlite/releases/) There are 3 options:

		1. `XLite-x.x.x-linux.AppImage` (recommended - works on all flavors of Linux)
	1. `XLite-x.x.x-linux.deb` (Install package for Debian & Ubuntu)
	1. `XLite-x.x.x-linux.tar.gz` (Gzip archive)
	   
	    --8<-- "anti-virus-flagged.md"

	1. Continue to the instructions below for the download you selected:

	??? example "Using the `.AppImage` download (option a)"
		1. You may be asked for a confirmation to download, select *Save File* then *OK*.
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Give __executable__ permission to the `.AppImage` file as follows:
			1. Right-click the `.AppImage` file to display a dropdown menu like this:
			![Executable](/img/xlite/linux-properties.png)		   
			1. Select `Properties` at the bottom of the dropdown to reveal a screen similar to this:
			![Executable](/img/xlite/linux-executable.png)
			1. Check the box, *Allow executing file as program*
			1. Click *X* in the upper left corner of the Properties
            window to close it
			1. Note: Alternatively, if you prefer the command line, you can simply use `chmod u+x AppImage-File` to make it executable.

	??? example "Using the `.deb` download (option b)"
		1. You may be asked for a confirmation to download, select *Save File* then *OK*.
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Double-click the file to open the installation screen.
		1. Select *Install*. 
		1. You may be asked to enter your account password.
		1. The installation process may take a few minutes.

	??? example "Using the `.tar.gz` download (option c)"
		1. You may be asked for a confirmation to download, select *Save File* then *OK*.
		1. Find the downloaded file. The default location is in *Downloads*.
		1. Right-click the file, select *Extract Here*.
		1. Double-click the `XLite-x.x.x-linux/` folder to view the contents.
		1. Here you will find the `XLite` executable file.
		1. Move this `XLite` executable file to where you keep your applications, such as your *Desktop*.
		1. After moving this file, the `.tar.gz` and the remaining
           extracted folders and files can be deleted since the `XLite` executable
           file was all we needed.


		
	--8<-- "complete-xlite-installation.md"

---

## Verifying Downloads (recommended)

It is important to verify the integrity of downloads before running them. Depending on how you downloaded it, it's possible the file may have been modified in transit to do something evil when run. The server hosting the download may also have been compromised.

1. Get the sha256 hash of the release you download. These are provided on the Github release page either in a file called `sha256sums.txt` or as a plain text in the release notes. The format follows `SHA256(filename)= hash`. Here is an example of the hashes:
```
SHA256(xlite-1.0.0-arm-linux-gnueabihf-debug.tar.gz)= 77e6c3e5d1e6ef9f0d54a8f0fe3d638b1c6bd889e609c6a69bb8f82322117847
SHA256(xlite-1.0.0-arm-linux-gnueabihf.tar.gz)= 94705029ebf05b0aa2b0939dd0da0663e578accbf5dca8e9393456d9d40edde6
SHA256(xlite-1.0.0-i686-pc-linux-gnu-debug.tar.gz)= 30039c5eb3951a73d578f613d072a79610cb3983113cf816fbed485ce44bd57c
SHA256(xlite-1.0.0-i686-pc-linux-gnu.tar.gz)= c5c9013b5e0539a99825339f98a460281014b3dca5d970e24faa860b6fd0c0e7
SHA256(xlite-1.0.0-osx-unsigned.tar.gz)= 0d5be3dedc83521349b5def54c1f045f1cd35c67d8da5beb50c90beaa50ae659
SHA256(xlite-1.0.0-osx64.tar.gz)= 438b0b82001ca5ce0af8300061207f87421c3c9cfeab47dd4c56ebc856b357da
SHA256(xlite-1.0.0-win-unsigned.tar.gz)= 1f81058be74d3714f1e07f5b16562f471cd2da1fac8251b3c3d414dba5b0d271
SHA256(xlite-1.0.0-win32-debug.zip)= fdc15df95dbb1293d59a2a9b90bf421594b0dc27320cd09cf31dcc9073bb2a8e
SHA256(xlite-1.0.0-win32-setup-unsigned.exe)= c89200719d3e55f9f7eee1cf8f77a4a4c43d8c4551b896a4f0d7617a935f31e0
SHA256(xlite-1.0.0-win32.zip)= 60c0805f00fe4e1c1e93af2ef3e93fb0fbe3b7bcf2385f8192c1a176b4068c3f
SHA256(xlite-1.0.0-win64-debug.zip)= e739bf19e5d826ff9750c9ae9dfddf0bf17b9e6da2d90e094698c02171454a6f
SHA256(xlite-1.0.0-win64-setup-unsigned.exe)= 350d67cdb009a7b4d3101dae145caa9c69e8c7a2ca6252a4d97aedf33a5a3f9d
SHA256(xlite-1.0.0-win64.zip)= f1f472353f034e1151345c167a48a01d1ceafdd2b7a5b7a5cc82df9cbef6ce6d
SHA256(xlite-1.0.0-x86_64-linux-gnu-debug.tar.gz)= 998fa0487cc4e8fc2be9fb004cd6eb9bc0e91d690da110a5073e3f3b50bd2938
SHA256(xlite-1.0.0-x86_64-linux-gnu.tar.gz)= 9608a66feb4616092ddb2dbeeafef01f5c0c28b61cccf13bcd032cee3981be74
```
1. Take a note of the hash for the specific file you downloaded.
1. Get the sha256 hash of the file you downloaded:

	??? example "Windows"
		1. Open the command prompt.
		1. Navigate to the location of the downloaded file.
		1. Enter `certUtil -hashfile filename SHA256` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `certUtil -hashfile xlite-1.0.0-win64.zip SHA256`

	??? example "MacOS"
		1. Open the terminal.
		1. Navigate to the location of the downloaded file.
		1. Enter `shasum -a 256 filename` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `shasum -a 256 xlite-1.0.0-osx-unsigned.tar.gz`

	??? example "Linux"
		1. Open the terminal.
		1. Navigate to the location of the downloaded file.
		1. Enter `sha256sum filename` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `sha256sum xlite-1.0.0-x86_64-linux-gnu.tar.gz`

1. Compare the release hash to the hash of the download. If the hashes do not match, **DO NOT** run the file and delete the file immediately.









<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





