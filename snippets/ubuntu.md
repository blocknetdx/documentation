	!!! info "Note: The instructions below assume *bash* shell, the default shell for Ubuntu 20.04.3 LTS Linux, is used. Please adjust as necessary if a different shell is used."

	1. If you're new to the Linux Command Line Interface (CLI),
       [learn the basics](http://www.linuxcommand.org/index.php). You
       don't have to learn every detail, but learn to navigate the
       file system, move and remove files and directories, and edit text files with [vi](https://www.tutorialspoint.com/unix/unix-vi-editor.htm), [vim](https://vim.rtorr.com) or [nano](https://www.howtogeek.com/howto/42980/the-beginners-guide-to-nano-the-linux-command-line-text-editor/).
	1. Sign up for an account at an economical, reliable VPS provider. For example, you may wish to explore services available from VPS providers like [Contabo](https://contabo.com/en/), 
       [Digital Ocean](https://www.digitalocean.com), [Vultr](https://www.vultr.com/products/cloud-compute/#pricing), [Amazon AWS](https://aws.amazon.com) and
       [Google Cloud Computing](https://cloud.google.com). A Google search for "VPS hosting provider" will yield a multitude of other options. You'll want to rent and deploy a VPS running Ubuntu 20.04.3 LTS Linux through your VPS provider.
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
	   You will be prompted for a password. Enter a
	   password for `<username>`, different from your root password, and store it in
	   a safe place. You will also see prompts for user information,
	   but these can be left blank.
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
	   `<username>` when prompted for the [sudo] password.)
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
       space may not be required. To create swap space:<br>
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
		   that means you already have some swap space allocated and
		   you should follow
		   [this guide](https://linuxhandbook.com/increase-swap-ubuntu/)
		   to allocate 1x-2x more swap space than you have GB of RAM.
		- If the results of `swapon --show` do *not* indicate that
          your system has a *swapfile* of type `file`, you'll need to
          create a new swap file with 1x-2x more swap space than you have
          GB of RAM. To do so, follow [this guide](https://linuxize.com/post/how-to-add-swap-space-on-ubuntu-18-04/)

	1. (Highly Recommended)
       Increase the security of your VPS by
       [setting up SSH Keys to restrict access to your VPS from any computer other than
       your own](https://www.cyberciti.biz/faq/how-to-disable-ssh-password-login-on-linux/). Those connecting via `PuTTY` from Windows should first follow [this
       guide to set up SSH Keys with PuTTY](https://devops.ionos.com/tutorials/use-ssh-keys-with-putty-on-windows/). *Note: If you follow this recommendation to restrict access to your
       VPS via SSH Keys, back up your SSH Private key and save the
       password you choose to unlock your SSH Private Key.* <br>
