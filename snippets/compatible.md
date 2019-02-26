<style>
.md-typeset__scrollwrap {
	overflow-x: visible;
}
.md-typeset .md-typeset__table #bn-table {
    margin-bottom: -15px;
}
</style>

<!-- 
<form>
	Asset Lookup: <input id="sb_input" type="text" placeholder="Enter asset"/>
	<br><br>
</form>
-->

???+ abstract "Compatible with Blocknet wallet v3.12.1"
	[View Manifest](https://github.com/BlocknetDX/blockchain-configuration-files/blob/master/manifest-latest.json)

	<table id="bn-table">
		<thead>
			<tr>
				<th>Digital Asset</th>
				<th>Ticker</th>
				<th>Supported Versions</th>
			</tr>
		</thead>
		<tbody id="bn-tbody">
			<!-- 
			<tr><td>AeriumX					</td><td>AEX	</td><td>v2.0, v2.1, v2.2</td><tr>
			<tr><td>ALQO					</td><td>XLQ	</td><td>v4.1, v4.2</td><tr>
			<tr><td>AmsterdamCoin			</td><td>AMS	</td><td>v4.6.0.0</td><tr>
			<tr><td>APR Coin				</td><td>APR	</td><td>v1.0, v2.0, V2.1, V2.2, V3.0</td><tr>
			<tr><td>AustraliaCash			</td><td>AUS	</td><td>v0.17.4.0</td><tr>
			<tr><td>Banq					</td><td>BANQ	</td><td>v1.0</td><tr>
			<tr><td>Bitcoin					</td><td>BTC	</td><td>v0.15.1, v0.15.2, v0.16.0, v0.16.1, v0.16.2, v0.16.3, v0.17.0, v0.17.0.1, v0.17.1</td><tr>
			<tr><td>Bitcoin Green			</td><td>BITG	</td><td>1.1.0, 1.2.2, v1.3.0</td><tr>
			<tr><td>BitCore					</td><td>BTX	</td><td>0.15.2.0.0</td><tr>
			<tr><td>BitcoinZero				</td><td>BZX	</td><td>5.0.1.0, 5.0.1.1</td><tr>
			<tr><td>BLAST					</td><td>BLAST	</td><td>v1.2.0.2, v1.3.0.0</td><tr>
			<tr><td>Blocknet				</td><td>BLOCK	</td><td>v3.12.1, v3.12.1-classic</td><tr>
			<tr><td>Bulwark					</td><td>BWK	</td><td>1.2.4, 1.3.0, 1.3.1, 2.0.0, 2.1.0, 2.1.1</td><tr>
			<tr><td>Carebit					</td><td>CARE	</td><td>v3.0.0.0, v4.0.0.0</td><tr>
			<tr><td>Civitas					</td><td>CIV	</td><td>v1.2.2</td><tr>
			<tr><td>ColossusXT				</td><td>COLX	</td><td>v1.0.5, v1.1.1, v1.2.0</td><tr>
			<tr><td>Crave					</td><td>CRAVE	</td><td>v2.5.0.3, v2.5.1</td><tr>
			<tr><td>CrowdCoin				</td><td>CRC	</td><td>2.0.0, 2.0.1</td><tr>
			<tr><td>Crown					</td><td>CRW	</td><td>v0.12.4.1, v0.12.5.1, v0.12.5.2, v0.12.5.3</td><tr>
			<tr><td>CryptoCashBack			</td><td>CCBC	</td><td>v1.2.0.1</td><tr>
			<tr><td>Dash					</td><td>DASH	</td><td>v0.12.2.3, v0.12.3, v0.12.3.1, v0.12.3.2, v0.12.3.3, v0.13.0.0</td><tr>
			<tr><td>Desire					</td><td>DSR	</td><td>Desire-v.0.12.2.2</td><tr>
			<tr><td>Diamond					</td><td>DMD	</td><td>v3.0.1.1, v3.0.1.2, 3.0.1.3</td><tr>
			<tr><td>DigiByte				</td><td>DGB	</td><td>v6.16.2, v6.16.3, v6.16.4, v6.16.5, v6.16.5.1</td><tr>
			<tr><td>Digiwage				</td><td>WAGE	</td><td>v1.1.0, 1.2.0, 1.2.1</td><tr>
			<tr><td>Dinero					</td><td>DIN	</td><td>v1.0.1.1</td><tr>
			<tr><td>Divi					</td><td>DIVI	</td><td>DESK-1.2.2</td><tr>
			<tr><td>Dogecoin				</td><td>DOGE	</td><td>v1.10.0, v1.10.0-dogeparty, v1.14-beta-1</td><tr>
			<tr><td>Dynamic					</td><td>DYN	</td><td>v2.3.5.0</td><tr>
			<tr><td>Einsteinium				</td><td>EMC2	</td><td>v0.13.48.0, v0.13.5.0</td><tr>
			<tr><td>Eternity				</td><td>ENT	</td><td>v0.12.1.7</td><tr>
			<tr><td>Faircoin				</td><td>FAIR	</td><td>v2.0.0, v2.0.1</td><tr>
			<tr><td>Flo						</td><td>FLO	</td><td>v0.15.0.3, v0.15.1.0, v0.15.1.1</td><tr>
			<tr><td>FujiCoin				</td><td>FJC	</td><td>fujicoin-v0.16.1, fujicoin-v0.16.3</td><tr>
			<tr><td>Galactrum				</td><td>ORE	</td><td>v1.1.6, v1.2.1</td><tr>
			<tr><td>GINcoin					</td><td>GIN	</td><td>1.1.0.0</td><tr>
			<tr><td>GoByte					</td><td>GBX	</td><td>v0.12.2.4</td><tr>
			<tr><td>GravityCoin				</td><td>GXX	</td><td>4.0.5.0</td><tr>
			<tr><td>HTMLCoin				</td><td>HTML	</td><td>v2.0.3.0, v2.1.0.0, v2.1.1.0, v2.1.2, v2.2.0, v2.3.0</td><tr>
			<tr><td>Innova					</td><td>INN	</td><td>12.1.10</td><tr>
			<tr><td>Internet of People		</td><td>IOP	</td><td>v6.1.0, v6.2.1, v6.2.2, v6.2.3</td><tr>
			<tr><td>Ixcoin					</td><td>IXC	</td><td>v0.14.1</td><tr>
			<tr><td>Jiyo					</td><td>JIYOX	</td><td>v.2.1</td><tr>
			<tr><td>Kalkulus				</td><td>KLKS	</td><td>v2.6.0, 2.7.0</td><tr>
			<tr><td>Kreds					</td><td>KREDS	</td><td>v1.0.0.5.1, v1.0.0.6</td><tr>
			<tr><td>KZCash					</td><td>KZC	</td><td>v0.1.9.1</td><tr>
			<tr><td>LBRY Credits			</td><td>LBC	</td><td>v0.12.2.1, v0.12.2.2, v0.12.2.3, v0.12.3.0, v0.12.3.1</td><tr>
			<tr><td>Light Pay Coin			</td><td>LPC	</td><td>v1.0.0.0, v1.0.0.1, v1.0.1.0</td><tr>
			<tr><td>Litecoin				</td><td>LTC	</td><td>v0.15.1, v0.16.0, v0.16.2, v0.16.3</td><tr>
			<tr><td>Lynx					</td><td>LYNX	</td><td>v0.15.1.0, v0.16.3.4</td><tr>
			<tr><td>Machinecoin				</td><td>MAC	</td><td>v0.16.1.4, v0.16.2.1, v0.16.3</td><tr>
			<tr><td>Magna Coin				</td><td>MGN	</td><td>v1.0.0</td><tr>
			<tr><td>MinexCoin				</td><td>MNX	</td><td>v1.3.1</td><tr>
			<tr><td>MktCoin					</td><td>MLM	</td><td>0.14.3, 0.14.3.1</td><tr>
			<tr><td>MonaCoin				</td><td>MONA	</td><td>monacoin-0.15.1, monacoin-0.16.2, monacoin-0.16.3</td><tr>
			<tr><td>MonetaryUnit			</td><td>MUE	</td><td>v2.0.2, v2.1.2</td><tr>
			<tr><td>Monoeci					</td><td>XMCC	</td><td>v0.12.2.3</td><tr>
			<tr><td>Myriad					</td><td>XMY	</td><td>v0.14.2.5, v0.14.3.0, v0.14.4.0, v0.14.4.1, v0.16.3.0</td><tr>
			<tr><td>Namecoin				</td><td>NMC	</td><td>nc0.13.99-name-tab-beta1</td><tr>
			<tr><td>Nix						</td><td>NIX	</td><td>v2.2.0, v2.2.0.1</td><tr>
			<tr><td>Nodium					</td><td>XN		</td><td>3.0.6</td><tr>
			<tr><td>Noir					</td><td>NOR	</td><td>v1.0.0.2, v1.0.0.3</td><tr>
			<tr><td>Northern				</td><td>NORT	</td><td>1.0.0, 2.2.0, 2.3.0, 2.4.0</td><tr>
			<tr><td>NyxCoin					</td><td>NYX	</td><td>v2.0.0.0</td><tr>
			<tr><td>Odin					</td><td>ODIN	</td><td>v1.4.2</td><tr>
			<tr><td>Ohmcoin					</td><td>OHMC	</td><td>2.3.1, 2.3.2, 2.3.2.1</td><tr>
			<tr><td>PACcoin					</td><td>$PAC	</td><td>v0.12.5.1</td><tr>
			<tr><td>Phore					</td><td>PHR	</td><td>v1.3.3.1, v1.4.4, v1.4.5, v1.5.0, v1.5.1, v1.6.0</td><tr>
			<tr><td>PIVX					</td><td>PIVX	</td><td>v3.1.0.2, v3.1.1</td><tr>
			<tr><td>Polis					</td><td>POLIS	</td><td>v1.3.1, v1.4.0, v1.4.1, v1.4.2, v1.4.3, v1.4.4, v1.4.5, v1.4.6, v1.4.7, v1.4.8, v1.4.8.1</td><tr>
			<tr><td>Pura					</td><td>PURA	</td><td>v1.0.0.0, v1.3.7</td><tr>
			<tr><td>Qbic					</td><td>QBIC	</td><td>v1.0</td><tr>
			<tr><td>Qtum					</td><td>QTUM	</td><td>mainnet-ignition-v0.15.2, mainnet-ignition-v0.15.3, mainnet-ignition-v0.16.0, mainnet-ignition-v0.16.1, mainnet-ignition-v0.16.2, mainnet-ignition-v0.17.1</td><tr>
			<tr><td>Ravencoin				</td><td>RVN	</td><td>v0.15.99.0, v2.0.4, v2.0.4.1, v2.1.0, v2.1.1, v2.1.2, v2.1.3, 2.2.0</td><tr>
			<tr><td>Secure Cloud Net		</td><td>SCN	</td><td>v2.4.3</td><tr>
			<tr><td>Shekel					</td><td>JEW	</td><td>1.4.0</td><tr>
			<tr><td>Sibcoin					</td><td>SIB	</td><td>v0.16.1.3, v0.16.2.0, v0.16.3.0</td><tr>
			<tr><td>Social Send				</td><td>SEND	</td><td>v1.1.0.0, V1.2.0.1, v1.2.0.0</td><tr>
			<tr><td>Solaris					</td><td>XLR	</td><td>v2.8.0.0, v2.8.1.0</td><tr>
			<tr><td>SparksPay				</td><td>SPK	</td><td>v0.12.3.2</td><tr>
			<tr><td>Stakenet				</td><td>XSN	</td><td>v1.0.9</td><tr>
			<tr><td>STRAKS					</td><td>STAK	</td><td>1.14.7.3, 1.14.7.4</td><tr>
			<tr><td>Sucre					</td><td>SUCR	</td><td>v0.12.2.1</td><tr>
			<tr><td>Syndicate				</td><td>SYNX	</td><td>v2.0.0, x2.1.0</td><tr>
			<tr><td>Syscoin					</td><td>SYS	</td><td>3.0.5.0, 3.1.3.0, 3.1.4.0, 3.2.0.0</td><tr>
			<tr><td>Terracoin				</td><td>TRC	</td><td>v0.12.1.8, v0.12.2.3, v0.12.2.4</td><tr>
			<tr><td>Tribe					</td><td>TRB	</td><td>v1.0.0</td><tr>
			<tr><td>Ultranatum				</td><td>ULTRA	</td><td>1.1.0.2</td><tr>
			<tr><td>UnbreakableCoin			</td><td>UNB	</td><td>v0.10.3.0</td><tr>
			<tr><td>Uniform Fiscal Object	</td><td>UFO	</td><td>v0.16.1, v0.17.0</td><tr>
			<tr><td>Unobtanium				</td><td>UNO	</td><td>v0.10.1.1, v0.10.4.0</td><tr>
			<tr><td>Vertcoin				</td><td>VTC	</td><td>0.14.0</td><tr>
			<tr><td>Viacoin					</td><td>VIA	</td><td>v0.15.1, v0.15.2</td><tr>
			<tr><td>Vitae					</td><td>VITAE	</td><td>v4.1.0.1, 4.2.0, Vitae-4.2.1, 4.3.0</td><tr>
			<tr><td>VIVO					</td><td>VIVO	</td><td>v0.12.1.8, v0.12.1.9, v0.12.1.12, v0.12.1.14</td><tr>
			<tr><td>Vsync					</td><td>VSX	</td><td>v3.8.5.0</td><tr>
			<tr><td>Vyigrat					</td><td>VYI	</td><td>v1.3.0.0</td><tr>
			<tr><td>Wagerr					</td><td>WGR	</td><td>1.5.0, v2.0.0, v2.0.1, v2.0.2</td><tr>
			<tr><td>XCurrency				</td><td>XC		</td><td>v3.0.05</td><tr>
			<tr><td>ZCoin					</td><td>XZC	</td><td>v0.13.6.4, v0.13.6.6, v0.13.6.7, v0.13.6.8, v0.13.6.9, v0.13.7.1, v0.13.7.2, v0.13.7.3, v0.13.7.4, v0.13.7.5, v0.13.7.6, v0.13.7.7</td><tr>
			-->
		</tbody>
	</table>


??? abstract "Compatible with Blocknet wallet v3.11.0 (deprecated)"
	[View Manifest](https://github.com/BlocknetDX/blockchain-configuration-files/blob/master/manifests/manifest-3.11.0.1.json)

	Digital Asset 			| Ticker| Supported Versions
	------------------------|-------|-------------------
	AeriumX					|AEX	|v2.0
	ALQO					|XLQ	|v4.1
	AmsterdamCoin			|AMS	|v4.6.0.0
	APR Coin				|APR	|v1.0, v2.0, V2.1, V2.2
	Banq					|BANQ	|v1.0
	Bitcoin					|BTC	|v0.15.1, v0.15.2, v0.16.0, v0.16.1, v0.16.2, v0.16.3, v0.17.0, v0.17.0.1
	Bitcoin Green			|BITG	|1.1.0, 1.2.2, v1.3.0
	BitcoinZero				|BZX	|5.0.1.0
	BLAST					|BLAST	|v1.2.0.2, v1.3.0.0
	Blocknet				|BLOCK	|v3.11.0, v3.11.0-redesign
	Bulwark					|BWK	|1.2.4, 1.3.0, 1.3.1, 2.0.0
	Carebit					|CARE	|v3.0.0.0, v4.0.0.0
	Civitas					|CIV	|v1.2.2
	ColossusXT				|COLX	|v1.0.5, v1.1.1
	Crave					|CRAVE	|v2.5.0.3, v2.5.1
	CrowdCoin				|CRC	|1.1.0
	Crown					|CRW	|v0.12.4.1, v0.12.5.1, v0.12.5.2
	Dash					|DASH	|v0.12.2.3, v0.12.3, v0.12.3.1, v0.12.3.2, v0.12.3.3, v0.13.0.0-rc1, v0.13.0.0-rc2, v0.13.0.0-rc3, v0.13.0.0-rc4, v0.13.0.0-rc5, v0.13.0.0-rc6
	Desire					|DSR	|Desire-v.0.12.2.2
	Diamond					|DMD	|v3.0.1.1, v3.0.1.2, 3.0.1.3
	DigiByte				|DGB	|v6.16.2, v6.16.3, v6.16.4, v6.16.5, v6.16.5.1
	Digiwage				|WAGE	|v1.1.0, 1.2.0
	Dinero					|DIN	|v1.0.1.1
	Dogecoin				|DOGE	|v1.10.0, v1.10.0-dogeparty, v1.14-beta-1
	Dynamic					|DYN	|v2.3.5.0
	Einsteinium				|EMC2	|v0.13.48.0, v0.13.5.0
	Eternity				|ENT	|v0.12.1.7
	Faircoin				|FAIR	|v2.0.0, v2.0.1
	Flo						|FLO	|v0.15.0.3, v0.15.1.0, v0.15.1.1
	FujiCoin				|FJC	|fujicoin-v0.16.1, fujicoin-v0.16.3
	Galactrum				|ORE	|v1.1.6, v1.2.1
	GINcoin					|GIN	|1.1.0.0
	GoByte					|GBX	|v0.12.2.4
	GravityCoin				|GXX	|4.0.5.0
	HTMLCoin				|HTML	|v2.0.3.0, v2.1.0.0, v2.1.1.0, v2.1.2, v2.2.0
	Innova					|INN	|12.1.10
	Internet of People		|IOP	|v6.1.0, v6.2.1, v6.2.2, v6.2.3
	Ixcoin					|IXC	|v0.14.1
	Jiyo					|JIYOX	|v.2.1
	Kalkulus				|KLKS	|v2.6.0
	Kreds					|KREDS	|v1.0.0.5.1, v1.0.0.6
	KZCash					|KZC	|v0.1.9.1
	LBRY Credits			|LBC	|v0.12.2.1, v0.12.2.2, v0.12.2.3
	Light Pay Coin			|LPC	|v1.0.0.0, v1.0.0.1
	Litecoin				|LTC	|v0.15.1, v0.16.0, v0.16.2, v0.16.3
	Lynx					|LYNX	|v0.15.1.0
	Machinecoin				|MAC	|v0.16.1.4, v0.16.2.1, v0.16.3
	Magna Coin				|MGN	|v1.0.0
	MinexCoin				|MNX	|v1.3.1
	MktCoin					|MLM	|0.14.3, 0.14.3.1
	MonaCoin				|MONA	|monacoin-0.15.1, monacoin-0.16.2, monacoin-0.16.3
	MonetaryUnit			|MUE	|v2.0.2
	Monoeci					|XMCC	|v0.12.2.3
	Myriad					|XMY	|v0.14.2.5, v0.14.3.0, v0.14.4.0, v0.14.4.1, v0.16.3.0
	Namecoin				|NMC	|nc0.13.99-name-tab-beta1
	Nix						|NIX	|v2.0.3, v2.1.0, v2.1.1
	Nodium					|XN		|3.0.6
	Noir					|NOR	|v1.0.0.2
	Northern				|NORT	|1.0.0
	NyxCoin					|NYX	|v2.0.0.0
	Odin					|ODIN	|v1.4.2
	Ohmcoin					|OHMC	|2.3.1, 2.3.2
	Phore					|PHR	|v1.3.3.1, v1.4.4, v1.4.5
	PIVX					|PIVX	|v3.1.0.2, v3.1.1
	Polis					|POLIS	|v1.3.1, v1.4.0, v1.4.1, v1.4.2, v1.4.3, v1.4.4, v1.4.5, v1.4.6, v1.4.7
	Pura					|PURA	|v1.0.0.0, v1.3.7
	Qbic					|QBIC	|v1.0
	Qtum					|QTUM	|mainnet-ignition-v0.15.2, mainnet-ignition-v0.15.3, mainnet-ignition-v0.16.0, mainnet-ignition-v0.16.1, mainnet-ignition-v0.16.2
	Ravencoin				|RVN	|v0.15.99.0, v2.0.4, v2.0.4.1, v2.1.0, v2.1.1, v2.1.2, v2.1.3
	Shekel					|JEW	|1.4.0
	Sibcoin					|SIB	|v0.16.1.3, v0.16.2.0, v0.16.3.0
	Social Send				|SEND	|v1.1.0.0, V1.2.0.1
	Solaris					|XLR	|v2.8.0.0, v2.8.1.0
	Sparks					|SPK	|v0.12.3.2
	Stakenet				|XSN	|v1.0.9
	STRAKS					|STAK	|1.14.7.3, 1.14.7.4
	Sucre					|SUCR	|v0.12.2.1
	Syndicate				|SYNX	|v2.0.0, x2.1.0
	Syscoin					|SYS	|3.0.5.0, 3.1.3.0, 3.1.4.0
	Terracoin				|TRC	|v0.12.1.8, v0.12.2.3, v0.12.2.4
	Tribe					|TRB	|v1.0.0
	Ultranatum				|ULTRA	|1.1.0.2
	UnbreakableCoin			|UNB	|v0.10.3.0
	Uniform Fiscal Object	|UFO	|v0.16.1, v0.17.0
	Unobtanium				|UNO	|v0.10.1.1, v0.10.4.0
	Vertcoin				|VTC	|0.12.0, 0.13.0, 0.13.1, 0.13.2, 0.13.3
	Viacoin					|VIA	|v0.15.1, v0.15.2
	Vitae					|VITAE	|v4.1.0.1, 4.2.0, Vitae-4.2.1, 4.3.0
	VIVO					|VIVO	|v0.12.1.8, v0.12.1.9
	Vsync					|VSX	|v3.8.5.0
	Vyigrat					|VYI	|v1.3.0.0
	Wagerr					|WGR	|1.5.0, v2.0.0, v2.0.1
	XCurrency				|XC		|v3.0.05
	ZCoin					|XZC	|v0.13.6.4, v0.13.6.6, v0.13.6.7, v0.13.6.8, v0.13.6.9, v0.13.7.1, v0.13.7.2, v0.13.7.3, v0.13.7.4


??? abstract "Compatible with Blocknet wallet v3.10.5 (deprecated)"
	[View Manifest](https://github.com/BlocknetDX/blockchain-configuration-files/blob/master/manifests/manifest-3.10.5.1.json)

	Digital Asset 			| Ticker| Supported Versions
	------------------------|-------|-------------------
	AeriumX					|AEX	|v2.0
	ALQO					|XLQ	|v4.1
	AmsterdamCoin			|AMS	|v4.6.0.0
	APR Coin				|APR	|v1.0, v2.0
	Banq					|BANQ	|v1.0
	Bitcoin					|BTC	|v0.15.1, v0.15.2, v0.16.0, v0.16.1, v0.16.2, v0.16.3, v0.17.0, v0.17.0.1
	Bitcoin Green			|BITG	|1.1.0, 1.2.2, v1.3.0
	BitcoinZero				|BZX	|5.0.0.5
	BLAST					|BLAST	|v1.2.0.2, v1.3.0.0
	Blocknet				|BLOCK	|3.10.5, 3.10.5-redesign
	Bulwark					|BWK	|1.2.4, 1.3.0, 1.3.1, 2.0.0
	Carebit					|CARE	|v3.0.0.0, v4.0.0.0
	Civitas					|CIV	|v1.2.2
	ColossusXT				|COLX	|v1.0.5, v1.1.1
	Crave					|CRAVE	|v2.5.0.3, v2.5.1
	CrowdCoin				|CRC	|1.1.0
	Crown					|CRW	|v0.12.4.1, v0.12.5.1
	Dash					|DASH	|v0.12.2.3, v0.12.3, v0.12.3.1, v0.12.3.2, v0.12.3.3, v0.13.0.0-rc1, v0.13.0.0-rc2
	Desire					|DSR	|Desire-v.0.12.2.2
	Diamond					|DMD	|v3.0.1.1, v3.0.1.2
	DigiByte				|DGB	|v6.16.2, v6.16.3, v6.16.4, v6.16.5, v6.16.5.1
	Digiwage				|WAGE	|v1.1.0, 1.2.0
	Dinero					|DIN	|v1.0.1.1
	Dogecoin				|DOGE	|v1.10.0, v1.10.0-dogeparty
	Dynamic					|DYN	|v2.3.5.0
	Einsteinium				|EMC2	|v0.13.48.0
	Eternity				|ENT	|v0.12.1.7
	Faircoin				|FAIR	|v2.0.0, v2.0.1
	Flo						|FLO	|v0.15.0.3, v0.15.1.0, v0.15.1.1
	FujiCoin				|FJC	|fujicoin-v0.16.1, fujicoin-v0.16.3
	Galactrum				|ORE	|v1.1.6
	GINcoin					|GIN	|1.1.0.0
	GoByte					|GBX	|v0.12.2.4
	GravityCoin				|GXX	|4.0.5.0
	HTMLCoin				|HTML	|v2.0.3.0, v2.1.0.0, v2.1.1.0, v2.1.2
	Innova					|INN	|12.1.10
	Internet of People		|IOP	|v6.1.0, v6.2.1, v6.2.2, v6.2.3
	Ixcoin					|IXC	|v0.14.1
	Jiyo					|JIYOX	|v.2.1
	Kalkulus				|KLKS	|v2.6.0
	Kreds					|KREDS	|v1.0.0.5.1, v1.0.0.6
	LBRY Credits			|LBC	|v0.12.2.1, v0.12.2.2, v0.12.2.3
	Light Pay Coin			|LPC	|v1.0.0.0, v1.0.0.1
	Litecoin				|LTC	|v0.15.1, v0.16.0, v0.16.2, v0.16.3
	Lynx					|LYNX	|v0.15.1.0
	Machinecoin				|MAC	|v0.16.1.4, v0.16.2.1
	Magna Coin				|MGN	|v1.0.0
	MinexCoin				|MNX	|v1.3.1
	MktCoin					|MLM	|0.14.3, 0.14.3.1
	MonaCoin				|MONA	|monacoin-0.15.1, monacoin-0.16.2, monacoin-0.16.3
	MonetaryUnit			|MUE	|v2.0.2
	Monoeci					|XMCC	|v0.12.2.3
	Myriad					|XMY	|v0.14.2.5, v0.14.3.0, v0.14.4.0, v0.14.4.1
	Namecoin				|NMC	|nc0.13.99-name-tab-beta1
	Nix						|NIX	|v2.0.3, v2.1.0
	Nodium					|XN		|3.0.6
	Noir					|NOR	|v1.0.0.2
	Northern				|NORT	|1.0.0
	NyxCoin					|NYX	|v2.0.0.0
	Odin					|ODIN	|v1.4.2
	Ohmcoin					|OHMC	|2.3.1, 2.3.2
	Phore					|PHR	|v1.3.3.1, v1.4.4, v1.4.5
	PIVX					|PIVX	|v3.1.0.2, v3.1.1
	Polis					|POLIS	|v1.3.1, v1.4.0, v1.4.1, v1.4.2, v1.4.3, v1.4.4, v1.4.5, v1.4.6
	Pura					|PURA	|v1.0.0.0, v1.3.7
	Qbic					|QBIC	|v1.0
	Qtum					|QTUM	|mainnet-ignition-v0.15.2, mainnet-ignition-v0.15.3, mainnet-ignition-v0.16.0, mainnet-ignition-v0.16.1
	Ravencoin				|RVN	|v0.15.99.0, v2.0.4, v2.0.4.1, v2.1.0, v2.1.1, v2.1.2, v2.1.3
	Shekel					|JEW	|1.4.0
	Sibcoin					|SIB	|v0.16.1.3, v0.16.2.0
	Social Send				|SEND	|v1.1.0.0, V1.2.0.1
	Solaris					|XLR	|v2.8.0.0, v2.8.1.0
	Sparks					|SPK	|v0.12.3.2
	Stakenet				|XSN	|v1.0.9
	STRAKS					|STAK	|1.14.7.3, 1.14.7.4
	Sucre					|SUCR	|v0.12.2.1
	Syndicate				|SYNX	|v2.0.0
	Syscoin					|SYS	|3.0.5.0, 3.1.3.0, 3.1.4.0
	Terracoin				|TRC	|v0.12.1.8, v0.12.2.3, v0.12.2.4
	Tribe					|TRB	|v1.0.0
	Ultranatum				|ULTRA	|1.1.0.2
	UnbreakableCoin			|UNB	|v0.10.3.0
	Uniform Fiscal Object	|UFO	|v0.16.1, v0.17.0
	United Crypto Community	|UCOM	|v0.1.8.1, v0.1.8.3
	Unobtanium				|UNO	|v0.10.1.1, v0.10.4.0
	Vertcoin				|VTC	|0.12.0, 0.13.0, 0.13.1, 0.13.2, 0.13.3
	Viacoin					|VIA	|v0.15.1, v0.15.2
	Vitae					|VITAE	|v4.1.0.1, 4.2.0, Vitae-4.2.1
	VIVO					|VIVO	|v0.12.1.8
	Vsync					|VSX	|v3.8.5.0
	Vyigrat					|VYI	|v1.3.0.0
	Wagerr					|WGR	|1.5.0, v2.0.0, v2.0.1
	XCurrency				|XC		|v3.0.05
	ZCoin					|XZC	|v0.13.6.4, v0.13.6.6, v0.13.6.7, v0.13.6.8, v0.13.6.9, v0.13.7.1




<script type="text/javascript">
var manifestURL = "https://raw.githubusercontent.com/BlocknetDX/blockchain-configuration-files/master/manifest-latest.json";

getManifest().then(tabulate);
function getManifest() {
	var manifestPromise = new Promise(function(resolve, reject){
		ajax(manifestURL, true).then(function(manifest) {
			manifestJSON = manifest;
			localStorage.setItem('manifest', JSON.stringify(manifest));
			resolve(manifestJSON);
		}, false);
	});
	return manifestPromise;
}
function ajax(url, json) {
	var ajaxPromise = new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		var status = true;
		xhr.open('GET', url);
		xhr.send();
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4 && xhr.status === 200){
				var response = json ? JSON.parse(this.responseText) : this.responseText
				resolve(response);
			}
		}
	});
	return ajaxPromise;
}
function tabulate(data) {
	var manifest = data;
	var preTable = {};
	var table = "";
	var nameLength = 0;
	var tickerLength = 0;

	for(var asset in manifest) {
		var name = manifest[asset]["ver_name"];
		var ticker = manifest[asset]["ticker"];
		nameLength = (name.length > nameLength) ? name.length : nameLength;
		tickerLength = (ticker.length > tickerLength) ? ticker.length : tickerLength;
	}

	for(var asset in manifest) {
		var name = manifest[asset]["blockchain"];
		var tabs = Math.round((nameLength - name.length)/4);
		name += (tabs < 2) ? "" : (tabs == 2) ? "\t" : (tabs == 3) ? "\t\t" : (tabs == 4) ? "\t\t\t" : (tabs == 5) ? "\t\t\t\t" : (tabs == 6) ?  "\t\t\t\t\t" : "\t\t\t\t\t\t";

		var ticker = manifest[asset]["ticker"];
		ticker += (ticker.length < 3) ? "\t\t" : "\t";

		var versionsRaw = manifest[asset]["versions"];
		var versions = "";
		for (var version in versionsRaw) {
			if (versionsRaw.length < 2) {
				versions += versionsRaw[version];
			} else {
				if (version == versionsRaw.length - 1) {
					versions += versionsRaw[version]
				} else {
					versions += versionsRaw[version] + ", ";
				}
			}
		}

		if (preTable[name]) {
			preTable[name]["versions"] += ", " + versions;
		} else {
			preTable[name] = {"name": name, "ticker": ticker, "versions": versions, "tabs": tabs}
		}
	}
	for (var asset in preTable) {
		// var row = preTable[asset]["name"] + "|" + preTable[asset]["tabs"];
		// var row = preTable[asset]["name"] + "|" + preTable[asset]["ticker"] + "|" + preTable[asset]["versions"];
		var row = "<tr><td>" + preTable[asset]["name"] + "</td><td>" + preTable[asset]["ticker"] + "</td><td>" + preTable[asset]["versions"] + "</td><tr>";
		table += row + "\n";
	}
	// console.log(table);
	document.getElementById("bn-tbody").innerHTML = table;
}


</script>