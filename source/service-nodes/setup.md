title: Blocknet Service Node Setup Guide
description: This guide explains step-by-step how to setup a Service Node, which earns block rewards and 100% of fees from Blocknet's services (XBridge, XRouter, XCloud).


# Service Node Setup
This guide explains step-by-step how to setup a [Service Node](introduction.md). Operating a Service Node requires 5000 BLOCK collateral. This 5000 BLOCK collateral stays in your wallet and under your control, but must not be moved or spent while the Service Node is active. You may still use this collateral to participate in staking.

Operating as a Service Node requires two Blocknet wallets:

* __Collateral Wallet__ — contains the 5000 BLOCK collateral. Does *not* need to remain online and unlocked unless the 5000 BLOCK is being staked or you are [voting on a proposal](../governance/proposal-voting.md).
* __Service Node Wallet__ — runs the Service Node software and must remain online and open at all times.

## Quick Navigation

!!! example "Choose Your Path"

	**Both paths share these steps first:**

	1. [Hardware Requirements](#hardware-requirements) — check your server specs
	2. [Collateral Wallet Setup](#collateral-wallet-setup) — create address, fund it, configure SN, enable staking

	**Then choose your deployment method:**

	???+ link "Option A: Docker/EXR (Recommended)"
		1. [Set Up an Ubuntu Server](#set-up-an-ubuntu-server)
		2. [Run the Install Script](#run-the-install-script)
		3. [Run the Builder](#run-the-builder)
		4. [Deploy](#deploy)
		5. [Register and Verify (Docker)](#register-and-verify-dockerexr)

	??? link "Option B: Manual Setup (No Docker)"
		1. [Service Node Wallet (Manual)](#service-node-wallet-manual)
		2. [Deploy (Manual)](#deploy-manual)
		3. [Register and Verify (Manual)](#register-and-verify-manual)

	**After setup (both paths):**

	* [Troubleshooting](#troubleshooting) — common issues and fixes
	* [Maintenance](#maintenance) — managing services, Docker basics, co-location
	* [Quick Reference](#quick-reference) — command cheat sheet

## Before You Begin

- [ ] Acquire hardware meeting the [minimum requirements](#hardware-requirements) below
- [ ] Set up an Ubuntu 20.04+ LTS server (or use an existing VPS)
- [ ] Obtain 5001+ BLOCK for collateral (5000 for SN + 1 extra for voting/spending)
- [ ] Download and install the latest Blocknet wallet on a local machine for collateral management

## Prerequisites

### Hardware Requirements

??? abstract "Hardware Requirements For Service Node Wallet"

	| Tier | CPU | RAM | Storage | Internet | Use Case |
	|------|-----|-----|---------|----------|----------|
	| Small | 4 cores (vCPUs) | 8 GB | 200 GB SSD | 25+ Mbps (100+ recommended) | Few small SPV wallets + staking |
	| Medium | 10 cores (vCPUs) | 60 GB | 1.3+ TB SSD | 100+ Mbps | Hydra, XQuery Indexer, multiple SPV wallets |
	| Large (ETH Archival) | 8+ cores | 16+ GB | 10+ TB NVMe SSD | 100+ Mbps | ETH archival node + other services |

	???+ tip "Storage Types"
		For ETH archival nodes, storage **must** be fast NVMe SSDs (not SATA/SAS HDDs).
		Configure in RAID mirror (RAID-1, RAID-10, RAID-Z2) to prevent data loss.
		Without RAID, an SSD failure requires a full resync (1+ month for GETH).

	For VPS providers, compare [Digital Ocean](https://www.digitalocean.com),
	[Contabo](https://contabo.com/en/vps/), [Vultr](https://www.vultr.com/products/cloud-compute/#pricing),
	[AWS](https://aws.amazon.com), and [Google Cloud](https://cloud.google.com).

	??? "SPV Wallet Disk Space Reference"
		*Approximate sizes — all blockchains grow over time.*

		| SPV Wallet | Estimated Size |
		|------------|----------------|
		| Bitcoin | 500 GB |
		| Dogecoin | 70 GB |
		| Litecoin | 85 GB |
		| Dash | 35 GB |
		| DigiByte | 33 GB |
		| Raven | 32 GB |
		| PIVX | 22 GB |
		| Verge | 11 GB |
		| Crown | 9 GB |
		| Phore | 8 GB |
		| Blocknet | 5 GB |
		| Other SPV wallets | 2-6 GB each |

### Software Requirements

- Ubuntu 20.04+ LTS server
- Docker and Docker Compose (installed by the [Global Install Script](#run-the-install-script))
- SSH access to your server
- A local machine with the Blocknet wallet installed

### Collateral Requirements

| Requirement | Amount | Notes |
|-------------|--------|-------|
| Service Node collateral | 5000 BLOCK | Must not be moved while SN is active |
| **Recommended total** | **5001+ BLOCK** | Extra BLOCK covers voting/spending without dropping below 5000 |

???+ note "Collateral Address Rules"
    - All inputs (collateral + extra) go to the **same address** as separate UTXOs
    - Maximum 10 inputs contributing to the 5000 BLOCK requirement
    - Each collateral input must be >= 500 BLOCK and <= 5000 BLOCK

## Collateral Wallet Setup

This section covers preparing your collateral wallet for Service Node registration. These steps are the same whether you use the Docker-based EXR deployment or the manual setup.

### Create a Collateral Address

Create a new public address to hold the 5000 BLOCK collateral. Choose a unique alias for your Service Node (e.g., `snode01`).

* **GUI/Qt wallet (Redesign):** Navigate to *Address Book* > *Create New Address*, enter your alias, and click *Add Address*.
* **GUI/Qt wallet (Debug Console):**
    ```bash
    getnewaddress snode01
    ```
* **CLI wallet:**
    ```bash
    blocknet-cli getnewaddress snode01
    ```

This returns a new address (e.g., `BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP`). **Save this address** — you'll need it in the next step.

### Fund the Collateral Address

Send BLOCK to your collateral address. You need 5001+ BLOCK total (5000 for collateral + 1 extra for voting/spending flexibility).

**Recommended: Manual Funding**

1. Send 1 BLOCK to the collateral address (extra UTXO for voting/spending)
2. Send BLOCK in amounts of 500-5000 BLOCK until the collateral sum reaches 5000 BLOCK

*Example:* Send 1 BLOCK, then 1250 BLOCK four times = 5001 BLOCK total across 5 inputs on the same address.

**Alternative: `servicenodecreateinputs` Tool**

This wallet tool automatically creates valid collateral inputs. The `NODE_COUNT` and `INPUT_SIZE` parameters are optional — defaults are 1 SN and 1250 BLOCK per input.

```bash
blocknet-cli servicenodecreateinputs <NODE_ADDRESS> [NODE_COUNT] [INPUT_SIZE]
```

| Parameter | Description | Default |
|-----------|-------------|---------|
| `NODE_ADDRESS` | The collateral address from the previous step | — |
| `NODE_COUNT` | Number of Service Nodes | 1 |
| `INPUT_SIZE` | Amount per input, 500-5000 | 1250 |

*Examples:*
```bash
# 4 inputs of 1250 BLOCK (5000 total) for 1 SN — uses defaults for NODE_COUNT and INPUT_SIZE
blocknet-cli servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP

# 2 inputs of 2500 BLOCK for 1 SN
blocknet-cli servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 1 2500

# 2 inputs of 2500 BLOCK each for 4 SNs (20000 total)
blocknet-cli servicenodecreateinputs BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP 4 2500
```

??? warning "Coin Control"
    If sending from the same wallet that contains collateral addresses, use [Coin Control](../wallet/coin-control.md) to prevent accidental spending from collateral addresses.

### Configure Your Service Node

Create the `servicenode.conf` entry using the `servicenodesetup` command:

```bash
blocknet-cli servicenodesetup <NODE_ADDRESS> <ALIAS>
```

Example:
```bash
blocknet-cli servicenodesetup BmpZVb522wYmryYLDy6EckqGN4g8pT6tNP snode01
```

This returns JSON containing the `snodekey` and `snodeprivkey`. **Copy the *address* and *snodeprivkey* to a secure temporary file** — you'll need them during Docker deployment.

The entry is saved to `servicenode.conf` in your wallet's [data directory](../wallet/backup-restore.md#data-directory).

### Enable Staking

Restart your collateral wallet, then enable staking on the collateral:

* **GUI/Qt wallet:** Close and reopen the wallet. Then unlock for staking only per the [staking guide](../wallet/staking.md#staking-from-a-gui-wallet).
* **CLI wallet:**
    ```bash
    blocknet-cli stop
    blocknet-daemon
    blocknet-unlock
    ```
    (Enter your wallet password when prompted. Wait 30+ seconds between `stop` and restart.)

Verify staking is active:
```bash
blocknet-cli getstakingstatus
```
Expected output: `"status": "Staking is active"`

## Deploy Enterprise XRouter Environment (EXR)

This recommended setup uses Docker containers managed by the EXR Environment scripts.

### Set Up an Ubuntu Server

??? abstract "Set up an Ubuntu Linux server"

	Follow these steps to set up a Virtual Private Server (VPS)
	running Ubuntu 20.04 LTS Linux Operating System. Please make sure the
	VPS you set up meets the
	[hardware requirements for a Service Node](#hardware-requirements).

	--8<-- "ubuntu.md"

	Continue to [Collateral Wallet Setup](#collateral-wallet-setup) above, then return here for deployment.

### Run the Install Script

Copy and paste these commands to install Docker and set up the EXR environment:

```bash
curl -fsSL https://raw.githubusercontent.com/blocknetdx/exrproxy-env-scripts/main/env_installer.sh -o env_installer.sh
chmod +x env_installer.sh
./env_installer.sh --install
```

This installs Docker, creates `~/exrproxy-env`, and logs you out. **Log back in** after it completes.

### Run the Builder

1. **Prepare your information:**

    ```bash
    # Get your server's public IP for verification
    curl ipconfig.io
    ```

    Have ready:
    - Server public IP address
    - *Service Node Private Key* and *Service Node Address* (from [Configure Your Service Node](#configure-your-service-node))
    - A Service Node name (no spaces)
    - RPC username and password for blockchain services

2. **Launch the builder:**
    ```bash
    cd ~/exrproxy-env
    ./exr_env.sh --update --builder ""
    ```

    The builder displays your system's hardware specs, checks Docker versions, and prompts for your sudo password.

3. **Enter Service Node credentials:**
    - Public IP address
    - Service Node Name
    - Service Node Private Key
    - Service Node Address
    - RPC User and Password

4. **Select services to support:**

    ???+ warning "EVM, XQuery & Hydra — Not Yet Available"
        **EVM blockchains and XQuery** are not yet functional. When the builder prompts for these, leave them **unchecked**. These services require very large hardware (10+ TB NVMe per EVM chain, 16+ GB RAM each) and are not ready for use. Your configuration can be edited later by running `builder.py` again — no data is lost by skipping these now.

    You'll be presented with interactive menus for:

    **XBridge SPV chains** — Select blockchains to support as XBridge services. Each shows approximate RAM, CPU, and disk requirements.

    **EVM blockchains, XQuery indices, Pricing & Payment discounts** — Leave **unchecked**. Select EVM chains, XQuery indices, configure Pricing (USD per 6M API calls) and Payment discounts (sysBLOCK).

    **UTXO_PLUGIN service** — Requires ~2-6 GB RAM per container, around 200 GB disk for all supported coins. No financial reward yet but used to provide XLite clients with chains data.

5. **Configure storage locations (optional):**

    If you have separate fast disks for specific services (e.g., NVMe for ETH), type `y` to change data mount directories.

6. **Review storage calculations:**

    The builder displays a table showing:
    - Directory and available space
    - Required space per service
    - Existing synced data (if any)
    - PASS/WARNING for each directory

    If you see __WARNING__, verify your calculations or adjust service selections.

7. **Generate configuration:**

    Enter a filename (e.g., `latest`) to save your configuration as `inputs_yaml/latest.yaml`.

??? tip "Resetting Configuration Defaults"
    `builder.py` remembers previous choices in `.env`, `.known_hosts`, `.known_volumes`, `.cache`, and `.cache_ip`. To reset:
    ```bash
    ./builder.py --prunecache
    ```

??? example "Advanced: Custom Data Mount Directory"
    To change the default data mount directory (`/snode`):
    1. Stop `builder.py` (Control-C)
    2. Copy the sources file:
       ```bash
       cp autobuild/sources.yaml autobuild/my_custom_dir_sources.yaml
       ```
    3. Edit the copy, replacing `/snode` with your preferred directory
    4. Run builder with your custom file:
       ```bash
       ./builder.py --source autobuild/my_custom_dir_sources.yaml
       ```

??? example "Advanced: Add Support for New Coin"
    For coins not yet in `manifest-latest.json`:
    1. Copy sources file: `cp autobuild/sources.yaml autobuild/custom.yaml`
    2. Edit the copy, duplicating and modifying a common coin entry
    3. Run builder with custom source and branch path:
       ```bash
       ./builder.py --source autobuild/custom.yaml --branchpath https://raw.githubusercontent.com/ConanMishler/blockchain-configuration-files/bitcoin--v0.22.0.conf
       ```
    4. Deploy: `./deploy.sh`

??? example "Advanced: Deploy Testnet/Trading Node"
    1. Copy sources file: `cp autobuild/sources.yaml autobuild/custom.yaml`
    2. Edit, replacing `- name: SNODE` with:
       - `testSNODE__` for testnet
       - `__TNODE__` for trading node
       - `__testTNODE__` for testnet trading node
    3. Run builder and deploy as usual.

??? tip "Limited Hardware: Deploy in Stages"
    On servers with <32 GB RAM or <10 CPU cores, deploy resource-intensive services (ETH, AVAX, LBC, DGB) one at a time. Run `./builder.py` with only light services first, wait for sync, then add more.

??? warning "Security: Hasura GUI Port"
    The Hasura GUI Console port (8080) is *not* exposed by default. Exposing it to all hosts is a security risk. If needed for advanced debugging, uncomment the ports in `docker-compose.yml` and restrict access with `ufw`.

### Deploy

```bash
./deploy.sh
```

Alternatively, combine configuration and deployment:
```bash
./builder.py --deploy
```

Docker containers will launch for all selected services.

### Register and Verify (Docker/EXR)

Complete these steps after your EXR containers are running.

#### Wait for Sync (Docker)

After deployment, the Blocknet blockchain in your SNode container needs time to sync. Monitor progress:

```bash
docker exec exrproxy-env-snode-1 blocknet-cli getblockcount
```

??? tip "Easier CLI access"
    Add this alias to `~/.bash_aliases`:
    ```bash
    alias snode-cli='docker exec exrproxy-env-snode-1 blocknet-cli'
    ```
    Then use: `snode-cli getblockcount` or `watch snode-cli getblockcount`

Initial calls may return errors until headers sync — this is normal.

#### Register on the Network (Docker)

When your container's block count matches the [Blocknet blockchain explorer](https://chainz.cryptoid.info/block/):

1. **On your Collateral Wallet**, register:
    ```bash
    blocknet-cli servicenoderegister
    ```

2. **On your Service Node**, send ping:
    ```bash
    docker exec exrproxy-env-snode-1 blocknet-cli servicenodesendping
    ```

3. **Verify Service Node status:**
    ```bash
    docker exec exrproxy-env-snode-1 blocknet-cli servicenodestatus
    ```
    Expected: `"status": "running"` with correct service list.

4. **Verify network visibility** (from Collateral Wallet):
    ```bash
    blocknet-cli servicenodelist
    ```
    Your Service Node should appear with `"status": "running"`.

??? info "Checking running containers"
    ```bash
    docker ps | grep snode
    ```
    Expected output example:
    ```
    f9b910221ca2   blocknetdx/servicenode:latest   "/opt/blockchain/sta…"   26 hours ago   Up 26 hours   exrproxy-env-snode-1
    ```

---

## Alternative: Manual Setup (Without Docker)

The Docker-based EXR setup above is the recommended approach. If you prefer not to use Docker, you can set up a Service Node manually using the Blocknet wallet directly. This method gives you more control but requires more manual configuration.

Steps 1-4 above ([Collateral Wallet Setup](#collateral-wallet-setup)) are identical for both approaches. The steps below cover the manual-specific configuration.

### Service Node Wallet (Manual)

**Using the Redesign GUI Wallet:**

1. [Install the Blocknet wallet](../wallet/installation.md).
2. [Fully sync the wallet](../wallet/syncing.md). This is the Core wallet application used for registration and service exposure — it does not hold funds.
3. Navigate to [data directory](../wallet/backup-restore.md#data-directory)
4. Open the `blocknet.conf` configuration file and add:
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
5. Set `rpcuser` and `rpcpassword` to secure values.
6. The `rpcallowip=127.0.0.1` setting (localhost) connects to the Blocknet blockchain. To use a different wallet for the blockchain, update this to that wallet's IP. **Note:** Changing from localhost also requires adding `rpcbind=`.
7. Do **NOT** specify `maxconnections=` for best performance.
8. Save and close `blocknet.conf`.
9. Open `xbridge.conf` and add:
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
10. Set `Username=` to match `rpcuser` from `blocknet.conf`.
11. Set `Password=` to match `rpcpassword` from `blocknet.conf`.
12. Set `Ip=` to match `rpcallowip` from `blocknet.conf`.
13. Save and close `xbridge.conf`.
14. Open *Tools* > *Debug Console* and import the configuration:
    ```bash
    servicenodeimport <EXPORTED_HASH> <ENCRYPTION_PASSWORD>
    ```
15. You should receive `true`, confirming `servicenode.conf` was created.
16. Restart the wallet.

**Using the Classic GUI Wallet:** Same steps as above, except go to *Window* > *Console* instead of *Tools* > *Debug Console*.

### Deploy (Manual)

**On the Service Node Wallet:**

1. Start (or restart) the Blocknet SNode wallet.
2. Ensure the data directory contains the configured `blocknet.conf` and `servicenode.conf`.
3. Fully sync the wallet.
4. **This wallet must stay running.** If closed and you've staked a block since, you must re-register from the Collateral Wallet.

Once synced, continue to [Register and Verify (Manual)](#register-and-verify-manual) below.

### Register and Verify (Manual)

**On your Collateral Wallet:**

1. Start (or restart) the Blocknet Collateral wallet and fully sync.
2. Wait for all collateral inputs to have at least 2 confirmations (~2 minutes).
3. Open the debug console and register:
    ```bash
    servicenoderegister <ALIAS>
    ```
    Omit `[ALIAS]` to register all known Service Nodes.

**On your Service Node Wallet (send ping):**

1. Open the debug console and type:
    ```bash
    servicenodesendping
    ```
    You should see `"status": "running"` with a list of hosted services.

**On your Service Node Wallet (check status):**

1. Open the debug console and type:
    ```bash
    servicenodestatus
    ```
    You should still see `"status": "running"` with hosted services listed.

**Verify on the network:**

1. On a client wallet (not the SNode wallet), open the debug console:
    ```bash
    servicenodelist
    ```
    Your Service Node should appear with `"status": "running"`.

    !!! note "Cleanup"
        The Collateral Wallet can now be closed if you're not voting or staking.

---

## Maintenance

### Managing Services

**Changing configuration:** Rerun `./builder.py` (or `./exr_env.sh --update --builder ""`) and adjust your selections. Re-deploy with `./deploy.sh`.

**Removing services:** Blockchain data persists after removing a service from Docker. To free disk space:
```bash
# Check usage
sudo du -d 1 -h /snode

# Remove service config first, then delete data
sudo rm -rf /snode/DGB
```

!!! warning ""
    - Save any Trading Node wallet files before removing data mount directories
    - Double-check `rm -rf` paths — typos are catastrophic
    - Re-adding a service requires full blockchain resync from scratch

### Docker Basics

**View running containers:**
```bash
docker ps
```

**Stop a specific container:**
```bash
docker stop exrproxy-env-DGB-1
```

**Start a specific container:**
```bash
docker start exrproxy-env-DGB-1
```

**Fix corrupted blockchain database:**
```bash
docker stop exrproxy-env-DGB-1
sudo rm -rf /snode/DGB
docker start exrproxy-env-DGB-1
```

**Stop all SNode containers:**
```bash
docker stop $(docker ps -q -f name=exrproxy-env_*)
docker rm $(docker ps -a -q -f name=exrproxy-env_*)
```

**Remove all stopped containers:**
```bash
docker container prune
```

**Interactive shell in container:**
```bash
# Containers with bash:
docker exec -it exrproxy-env-DGB-1 /bin/bash

# Containers without bash (use sh):
docker exec -it exrproxy-env-SYS-1 /bin/sh
```

**Run CLI commands from outside container:**
```bash
docker exec exrproxy-env-DGB-1 digibyte-cli getblockcount
docker exec exrproxy-env-SYS-1 syscoin-cli -conf=/opt/blockchain/config/syscoin.conf getblockcount
```

**Docker help:**
```bash
docker --help
docker COMMAND --help
```

See [https://docs.docker.com/go/guides/](https://docs.docker.com/go/guides/) for more.

### Multi-Wallet Co-Location

To run a staking wallet alongside your EXR Service Node on the same server:

1. Stop your staking wallet:
    ```bash
    blocknet-cli stop
    ```

2. Change P2P and RPC ports to avoid conflicts (default: 41412/41414):
    ```bash
    cd ~/.blocknet
    nano blocknet.conf
    ```
    Add or modify:
    ```
    port=41413
    rpcport=41415
    ```
    Use ports *not* in the default set (41412, 41414, 41419, 41474).

3. Restart and enable staking:
    ```bash
    blocknet-daemon
    blocknet-unlock
    blocknet-cli getstakingstatus
    ```

If using the manual SNode setup, rename the staking data directory:
```bash
mv .blocknet .blocknet_staking
```
Then update aliases in `~/.bash_aliases` to use `-datadir=$HOME/.blocknet_staking/`.

---

## Troubleshooting

### Service Node Won't Register

- Ensure the SNode Wallet is fully synced and running *before* running `servicenoderegister` on the Collateral Wallet.
- Ensure all collateral inputs have at least 2 confirmations (~2 minutes) before registering.
- Ensure you have exactly 5000 BLOCK in your designated `[NODE_ADDRESS]`.
- Ensure the 5000 BLOCK didn't accidentally send to a change address (if creating inputs manually).
- Ensure each input is >= 500 BLOCK and <= 5000 BLOCK (max 10 inputs).
- Ensure you didn't include `[` or `]` when typing commands. Correct: `getnewaddress snode1` — Incorrect: `getnewaddress [snode1]`
- Ensure you have the latest wallet and that it's fully synced.
- Ensure the configuration filename is `servicenode.conf` and **NOT** `servicenode.conf.txt`.

### SNode Shows "Missing" or "Not Active"

- Verify the SNode Wallet (or Docker container) is online and synced.
- Run `servicenodesendping` — the node must ping at least once per hour.
- Check that the server is not sleeping or restarting unexpectedly.
- Verify firewall rules allow outbound connections on required ports.
- For Docker: check container health with `docker ps | grep snode`.

### Blockchain Not Syncing

- Verify disk space: `sudo du -d 1 -h /snode` (Docker) or check the wallet's data directory.
- Check network connectivity to Blocknet peers.
- Sync time varies based on hardware and SPV wallet selection — be patient.
- If stuck, try restarting the container or wallet.

### Docker Container Keeps Restarting

- Check container logs: `docker logs exrproxy-env-snode-1`
- Verify sufficient disk space and RAM.
- If the blockchain database is corrupted, stop the container, delete the data directory, and restart:
    ```bash
    docker stop exrproxy-env-DGB-1
    sudo rm -rf /snode/DGB
    docker start exrproxy-env-DGB-1
    ```

### Staking Not Active

- Verify the wallet is unlocked for staking: `blocknet-cli getstakingstatus`
- Ensure the wallet is online (not idle).
- For GUI wallets: unlock the wallet and enable staking in settings.
- Wait 30+ seconds after unlocking before checking status.

### Port Conflicts

- Ensure no other Blocknet instances are running on the same server with conflicting ports.
- Default ports: P2P 41412, RPC 41414, additional 41419, 41474.
- If co-locating wallets, change ports as described in [Multi-Wallet Co-Location](#multi-wallet-co-location).

### RPC Connection Errors

- Verify `rpcuser` and `rpcpassword` are set in `blocknet.conf` (manual setup).
- Verify `rpcallowip` includes the connecting IP address.
- For Docker setups, ensure the SNode container is running before connecting.

---

## Quick Reference

### Collateral Commands (Collateral Wallet)

| Action | Command |
|--------|---------|
| Create collateral address | `blocknet-cli getnewaddress <ALIAS>` |
| Create collateral inputs | `blocknet-cli servicenodecreateinputs <ADDRESS> [COUNT] [SIZE]` |
| Configure SNode | `blocknet-cli servicenodesetup <ADDRESS> <ALIAS>` |
| Export config (manual only) | `servicenodeexport <ALIAS> <PASSWORD>` |
| Register SNode | `blocknet-cli servicenoderegister` |
| List SNodes | `blocknet-cli servicenodelist` |
| Check staking status | `blocknet-cli getstakingstatus` |
| Unlock wallet for staking | `blocknet-unlock` |

### Docker / EXR Commands (Server)

| Action | Command |
|--------|---------|
| Check SNode block count | `docker exec exrproxy-env-snode-1 blocknet-cli getblockcount` |
| Send SNode ping | `docker exec exrproxy-env-snode-1 blocknet-cli servicenodesendping` |
| Check SNode status | `docker exec exrproxy-env-snode-1 blocknet-cli servicenodestatus` |
| View Docker containers | `docker ps` |
| Stop all SNode containers | `docker stop $(docker ps -q -f name=exrproxy-env_*)` |
| Restart builder | `cd ~/exrproxy-env && ./exr_env.sh --update --builder ""` |
| Deploy | `./deploy.sh` |
| Check disk usage | `sudo du -d 1 -h /snode` |

<script type="text/javascript">
// read instructions for related links in ../snippets/extras.md
var relatedLinks = [];
</script>

--8<-- "extras.md"
