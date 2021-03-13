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

	1. Find the downloaded file. The default location is in *Downloads*. 
	1. Before continuing, it is recommended to [verify your download](/xlite/installation/#verifying-downloads)
	1. Continue to the instructions below for the download you
       selected (`.exe` or `.zip`):

	??? tip "Important Tip: If installation fails to complete for either the `.exe` or `.zip` instructions below, click here for instructions what to do."
		1. Install [Visual C++ 2010 Redistributable Package (x64)](https://www.microsoft.com/en-us/download/details.aspx?id=14632).
		1. Redo the installation step below (`.exe` or `.zip` depending on your download).

	??? example "Using the `.exe` download (option a)"
		1. Double-click the downloaded file to begin the installation process.

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
		1. Right-click the downloaded file, select *Extract*.
		1. After the files are extracted, a new folder should open
           with the contents. If a folder did not open, look for the
           new folder in the directory where the `.zip` file was downloaded.
		1. In the newly extracted folder you will find the `XLite` executable file.
		1. Move this `XLite` executable file to where you keep your applications, such as your *Desktop*. Additionally, you can right-click and *Pin to Start* or *Pin to Taskbar* for easy access.
		1. After moving this file, the `.zip` and the remaining extracted folders and files can be deleted since the `XLite` executable was the only file needed.

	#### First Time Opening XLite - Windows
	1. Double-click on the XLite icon wherever you installed it.

	    ??? info "Note: If you see a *Security Warning* from Windows asking if you want to *Run* the file, it is safe to click *Run*, assuming you have [verified your download](#verifying-downloads)."

	    ??? info "If XLite doesn't open when you double-click it, click here"
		1. Install [Visual C++ 2010 Redistributable Package (x64)](https://www.microsoft.com/en-us/download/details.aspx?id=14632).
		1. Redo the installation step above (`.exe` or `.zip` depending on your download).


	1. [Create & Backup XLite Wallet](/xlite/backup-and-restore)   __*(Do This Before Funding Your Wallet.)*__


??? example "MacOS"
	1. Download the
       [latest XLite wallet](https://github.com/blocknetdx/xlite/releases/) There is 1 option:

		* `XLite-x.x.x-mac.dmg` (recommended)
	
	    --8<-- "anti-virus-flagged.md"

	1. Find the downloaded file. The default location is in *Downloads*. 
	1. Before continuing, it is recommended to [verify your download](/xlite/installation/#verifying-downloads)
	1. Double-click the file to begin installation.
	1. Click and drag the *XLite* application icon over to the *Applications* folder and release.
	1. If you are prompted with a message asking if you would like to replace an existing version with a newer version, select *Replace*.
	1. Find the *XLite* installation drive on your desktop and eject
       it. (Mouse Right-click/TrackPad two-finger-click on the *XLite* icon, then select *Eject*).
		  		   

	#### First Time Opening XLite - Mac
	1. Open the [Finder](https://support.apple.com/en-in/HT201732) from
      [the dock](https://support.apple.com/en-in/guide/mac-help/mh35859/mac),
	  then click on *Applications* on the left side of the Finder window to reveal a
      screen like this:
	![Finder](/img/xlite/right-click-xlite-in-applications.png)
	1. Scroll down to locate the *XLite* application, then
      *right-click* (trackpad *two-finger-click*) on *XLite* and
      select *Open* to reveal a message like this:
	  ![Finder](/img/xlite/open-xlite.png)

	    ???+ info "Note: If you see a message like the one below instead of the one above, click *OK* and repeat step 2 above."
		![Finder](/img/xlite/first-open-attempt.png)
		
	1. Click *Open* (This is safe, assuming you have [verified your download](#verifying-downloads).
	1. [Create & Backup XLite Wallet](/xlite/backup-and-restore)   __*(Do This Before Funding Your Wallet.)*__

	??? tip "Tip: After opening XLite the first time as above, you can now use the [Launchpad](https://support.apple.com/en-in/HT202635) to open XLite in the future."
		The above procedure was only necessary due to
		security precautions your Mac takes when opening a new application
		for the first time.



<!--
	??? example "Using the `.zip` download (option b)"
		1. Double-click the downloaded file to unpack the contents into a new
        folder.
		1. Within that new folder you should see the *XLite* application.
		1. Click and drag the *XLite* application over to the *Applications* folder and release.
		1. If you are prompted with a message asking if you would like to replace an existing version with a newer version, select *Replace*.
		1. The `.zip` and the remaining unpacked files and folders may now be deleted as *XLite* was the
           only file needed.

	    --8<-- "complete-xlite-installation.md"
-->
		
??? example "Linux"
	1. Download the [latest XLite wallet](https://github.com/blocknetdx/xlite/releases/) There are 3 options:

		1. `XLite-x.x.x-linux.AppImage` (recommended - works on all flavors of Linux)
	1. `XLite-x.x.x-linux.deb` (Install package for Debian & Ubuntu)
	1. `XLite-x.x.x-linux.tar.gz` (Gzip archive - must be launched
       from Terminal)
	   
	    --8<-- "anti-virus-flagged.md"

	1. You may be asked for a confirmation to download, select *Save File* then *OK*. 
	1. Find the downloaded file. The default location is in *Downloads*. 
	1. Before continuing, it is recommended to [verify your download](/xlite/installation/#verifying-downloads)
	1. Continue to the instructions below for the download you selected:

	    ??? example "Using the `.AppImage` download (option a)"
		1. Give __executable__ permission to the `.AppImage` file as follows:
			1. Right-click the `.AppImage` file to display a dropdown menu like this:
			![Executable](/img/xlite/linux-properties.png)		   
			1. Select `Properties` at the bottom of the dropdown to reveal a screen similar to this:
			![Executable](/img/xlite/linux-executable.png)
			1. Select the *Permissions* tab and check the box, *Allow executing file as program*
			1. Click *X* in the upper left corner of the Properties window to close it
			1. Note: Alternatively, if you prefer the command line,
               you can simply use `chmod u+x .AppImage-File` to make
               the `.AppImage` file executable.
	    1. Move the `.AppImage` file to where you keep your applications, such as your *Desktop*.
		1. Double-click on the XLite icon to open it from wherever you installed it.

	    ??? example "Using the `.deb` download (option b)"
		1. Double-click the downloaded file to open the installation screen.
		1. Select *Install*. 
		1. You may be asked to enter your account password.
		1. The installation process may take a few minutes.
		1. Double-click on the XLite icon to open it from wherever you installed it

	    ??? example "Using the `.tar.gz` download (option c)"
		1. Open a Linux Terminal.
		1. Type:`tar -xzvf XLite-x.x.x-linux.tar.gz` (replacing `x.x.x` with the version you downloaded).
		1. After files are extracted and unzipped by this command, you will see a new directory named `XLite-x.x.x-linux`.
		1. Move this new `XLite-x.x.x-linux` directory to where you keep your applications, such as your *Desktop*.
		1. In a Terminal window, type `cd <install-dir>/XLite-x.x.x-linux` where `install-dir` is the directory where you moved the `XLite-x.x.x-linux` directory after extracting it, and `x.x.x.` is the version you downloaded.
		1. Type, `./xlite` to run the application.

	1. [Create & Backup XLite Wallet](/xlite/backup-and-restore) __*(Do This Before Funding Your Wallet.)*__

---

## Verifying Downloads

It is important to verify the integrity of downloads before running them. Depending on how you downloaded it, it's possible the file may have been modified in transit to do something evil when run. The server hosting the download may also have been compromised.

1. Get the sha256 hash of the release you download. These are provided
on the Github release page as
[plain text in the release notes](https://github.com/blocknetdx/xlite/releases/). The
format follows `SHA256-hash <filename>`. Here is an example of the hashes:
```
95a25f5f903215b38ed5de7bb9f7b91caba6cd979c2100f5203d329bcd9d6bbe  XLite-1.0.0-linux.AppImage
1d5a42f2c23be44274708ff3b7816737edf3c6ba6a7f2f9907f3b6515c9f9916  XLite-1.0.0-linux.deb
7777496c75beeb944d2d65d128f22489f4e643da0aa691c457d359addc78b2b1  XLite-1.0.0-linux.tar.gz
a0a5135f19867ca6e7fddcced2f29f28281c809fdf192708cd7297511cd5567a  XLite-1.0.0-mac.dmg
f378be9cec6093ab84e0f2c1e4995d59ed2b9f43395af7530d43aa9d975b8502  XLite-1.0.0-mac.zip
1709c11a4e60483c3680158d4c34f6ba8716142e295c2b59ac56321630e982de  XLite-1.0.0-win-ia32.zip
5e1b97b5b8828a6a8a43a8dd9c89f40ee076baa1efee99d41b59558d1c25c07b  XLite-1.0.0-win-x64.zip
1c91238d192b7b4b8b7d32e54d4582ebb40f748228ed67f266fd24b929c2eb64  XLite-1.0.0-win.exe
```
1. Take a note of the hash for the specific file you downloaded.
1. Get the sha256 hash of the file you downloaded:

	??? example "Windows"
		1. Open the command prompt.
		1. Navigate to the location of the downloaded file.
		1. Enter `certUtil -hashfile filename SHA256` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `certUtil -hashfile xlite-1.0.0-win.exe SHA256`

	??? example "MacOS"
		1. Open the terminal.
		1. Navigate to the location of the downloaded file.
		1. Enter `shasum -a 256 filename` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `shasum -a 256 xlite-1.0.0-mac.dmg`

	??? example "Linux"
		1. Open the terminal.
		1. Navigate to the location of the downloaded file.
		1. Enter `sha256sum filename` with `filename` replaced by the name fo the file you downloaded. 
		
		**Example**: `sha256sum xlite-1.0.0-linux.AppImage`

1. Compare the release hash to the hash of the download. If the hashes do not match, **DO NOT** run the file and delete the file immediately.









<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"





