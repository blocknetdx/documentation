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

!!! warning "**DO NOT** use a wallet version not listed here, it is either not compatible or hasn't been tested."

???+ abstract "Compatible with Blocknet wallet v4.1.x"
	[View Manifest](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifest-latest.json)

	<table id="bn-table">
		<thead>
			<tr>
				<th>Digital Asset</th>
				<th>Ticker</th>
				<th>Supported Wallet Versions</th>
			</tr>
		</thead>
		<tbody id="bn-tbody">
			<tr><td>AeriumX         </td><td>AEX    </td><td>[v2.2](https://github.com/aeriumcoin/AeriumX/releases/tag/v2.2)</td><tr>
			<tr><td>APR Coin        </td><td>APR    </td><td>[V3.1.0](https://github.com/APRCoin/zenith-repository/releases/tag/V3.1.0)</td><tr>
			<tr><td>Argoneum        </td><td>AGM    </td><td>[v1.4.0.0](https://github.com/Argoneum/argoneum/releases/tag/v1.4.0.0), [v1.4.1.0](https://github.com/Argoneum/argoneum/releases/tag/v1.4.1.0)</td><tr>
			<tr><td>ATBCoin         </td><td>ATB    </td><td>[v1.1.0](https://github.com/segwit/atbcoin/releases/tag/v1.1.0)</td><tr>
			<tr><td>AustraliaCash   </td><td>AUS    </td><td>[v0.17.4.1](https://github.com/AustraliaCash/AustraliaCash-Core/releases/tag/v0.17.4.1)</td><tr>
			<tr><td>Badcoin         </td><td>BAD    </td><td>[v0.16.3-2](https://github.com/badcoin-net/Badcoin/releases/tag/v0.16.3-2)</td><tr>
			<tr><td>Bitcloud        </td><td>BTDX   </td><td>[2.1.0.1.1](https://github.com/LIMXTEC/Bitcloud/releases/tag/2.1.0.1.1)</td><tr>
			<tr><td>Bitcoin         </td><td>BTC    </td><td>[v0.15.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.15.1), [v0.15.2](https://github.com/bitcoin/bitcoin/releases/tag/v0.15.2), [v0.16.0](https://github.com/bitcoin/bitcoin/releases/tag/v0.16.0), [v0.16.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.16.1), [v0.16.2](https://github.com/bitcoin/bitcoin/releases/tag/v0.16.2), [v0.16.3](https://github.com/bitcoin/bitcoin/releases/tag/v0.16.3), [v0.17.0](https://github.com/bitcoin/bitcoin/releases/tag/v0.17.0), [v0.17.0.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.17.0.1), [v0.17.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.17.1), [v0.18.0](https://github.com/bitcoin/bitcoin/releases/tag/v0.18.0), [v0.18.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.18.1), [v0.19.0](https://github.com/bitcoin/bitcoin/releases/tag/v0.19.0), [v0.19.0.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.19.0.1), [v0.19.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.19.1)</td><tr>
			<tr><td>Bitcoin CZ      </td><td>BCZ    </td><td>[6.0.2.1](https://github.com/SpecialCoins/bitcoincz/releases/tag/6.0.2.1)</td><tr>
			<tr><td>BitGreen        </td><td>BITG   </td><td>[v1.4.0.8](https://github.com/bitgreen/bitgreen/releases/tag/v1.4.0.8), [v1.4.0.9](https://github.com/bitgreen/bitgreen/releases/tag/v1.4.0.9)</td><tr>
			<tr><td>BitCore         </td><td>BTX    </td><td>[0.90.8.8.1](https://github.com/LIMXTEC/BitCore/releases/tag/0.90.8.8.1), [0.90.8.9](https://github.com/LIMXTEC/BitCore/releases/tag/0.90.8.9), [0.90.8.10](https://github.com/LIMXTEC/BitCore/releases/tag/0.90.8.10), [0.90.8.11](https://github.com/LIMXTEC/BitCore/releases/tag/0.90.8.11)</td><tr>
			<tr><td>BitcoinZero     </td><td>BZX    </td><td>[5.0.7.8](https://github.com/SpecialCoins/BitcoinZero/releases/tag/5.0.7.8)</td><tr>
			<tr><td>BitMoney        </td><td>BIT    </td><td>[2.2.0.2](https://github.com/CryptVenture/BitMoneyV22/releases/tag/2.2.0.2)</td><tr>
			<tr><td>BitSend         </td><td>BSD    </td><td>[0.14.2.0.1](https://github.com/LIMXTEC/BitSend/releases/tag/0.14.2.0.1)</td><tr>
			<tr><td>BLAST           </td><td>BLAST  </td><td>[v2.2.0](https://github.com/blastdev/blast-core-v2/releases/tag/v2.2.0)</td><tr>
			<tr><td>Blocknet        </td><td>BLOCK  </td><td>[v4.1.0](https://github.com/blocknetdx/blocknet/releases/tag/v4.1.0)</td><tr>
			<tr><td>Bulwark         </td><td>BWK    </td><td>[2.2.0](https://github.com/bulwark-crypto/Bulwark/releases/tag/2.2.0)</td><tr>
			<tr><td>Carebit         </td><td>CARE   </td><td>[v5.0.0](https://github.com/carebitcoin/carebitcoin/releases/tag/v5.0.0)</td><tr>
			<tr><td>CbdHealthNetwork </td><td>CHN </td><td>[wallets-source-daemon](https://github.com/CHN-portal/CHN-Portal/releases/tag/wallets-source-daemon)</td><tr>
			<tr><td>Chaincoin       </td><td>CHC    </td><td>[v0.18](https://github.com/chaincoin/chaincoin/releases/tag/v0.18)</td><tr>
			<tr><td>Civitas         </td><td>CIV    </td><td>[v1.2.2](https://github.com/eastcoastcrypto/Civitas/releases/tag/v1.2.2)</td><tr>
			<tr><td>ColossusXT      </td><td>COLX   </td><td>[v1.2.3](https://github.com/ColossusCoinXT/ColossusCoinXT/releases/tag/v1.2.3), [v1.2.4](https://github.com/ColossusCoinXT/ColossusCoinXT/releases/tag/v1.2.4)</td><tr>
			<tr><td>Crave           </td><td>CRAVE  </td><td>[v2.5.2](https://github.com/Crave-Community-Project/Crave-Project/releases/tag/v2.5.2)</td><tr>
			<tr><td>CryptoCashBack  </td><td>CCBC   </td><td>[v1.2.1.1](https://github.com/CryptoCashBack-Hub/CCBC/releases/tag/v1.2.1.1)</td><tr>
			<tr><td>Crypto Dezire Cash </td><td>CDZC </td><td>[v2.1.2](https://github.com/cryptodezire/CryptoDezireCash/releases/tag/v2.1.2)</td><tr>
			<tr><td>Cryptonodes     </td><td>CNMC   </td><td>[v1.4.4.1](https://github.com/cryptonodes-core/cryptonodes-core/releases/tag/v1.4.4.1)</td><tr>
			<tr><td>Dash            </td><td>DASH   </td><td>[v0.14.0.2](https://github.com/dashpay/dash/releases/tag/v0.14.0.2), [v0.14.0.3](https://github.com/dashpay/dash/releases/tag/v0.14.0.3), [v0.14.0.4](https://github.com/dashpay/dash/releases/tag/v0.14.0.4), [v0.14.0.5](https://github.com/dashpay/dash/releases/tag/v0.14.0.5), [v0.15.0.0](https://github.com/dashpay/dash/releases/tag/v0.15.0.0)</td><tr>
			<tr><td>Denarius        </td><td>D      </td><td>[v3.3.9.3](https://github.com/carsenk/denarius/releases/tag/v3.3.9.3), [v3.3.9.4](https://github.com/carsenk/denarius/releases/tag/v3.3.9.4), [v3.3.9.5](https://github.com/carsenk/denarius/releases/tag/v3.3.9.5), [v3.3.9.6](https://github.com/carsenk/denarius/releases/tag/v3.3.9.6), [v3.3.9.7](https://github.com/carsenk/denarius/releases/tag/v3.3.9.7)</td><tr>
			<tr><td>Desire          </td><td>DSR    </td><td>[Desire-v.0.12.2.2](https://github.com/lazyboozer/Desire/releases/tag/Desire-v.0.12.2.2)</td><tr>
			<tr><td>Diamond         </td><td>DMD    </td><td>[3.0.1.3](https://github.com/DMDcoin/Diamond/releases/tag/3.0.1.3)</td><tr>
			<tr><td>DigiByte        </td><td>DGB    </td><td>[v7.17.2](https://github.com/digibyte/digibyte/releases/tag/v7.17.2)</td><tr>
			<tr><td>Digiwage        </td><td>WAGE   </td><td>[1.2.1](https://github.com/digiwage/digiwage/releases/tag/1.2.1)</td><tr>
			<tr><td>Dinero          </td><td>DIN    </td><td>[v1.0.1.1](https://github.com/dinerocoin/dinero/releases/tag/v1.0.1.1)</td><tr>
			<tr><td>Divi            </td><td>DIVI   </td><td>[v1.0.8](https://github.com/DiviProject/Divi/releases/tag/v1.0.8), [DESK-1.6.6](https://github.com/DiviProject/Divi/releases/tag/DESK-1.6.6)</td><tr>
			<tr><td>DogeCash        </td><td>DOGEC  </td><td>[5.1.1.6](https://github.com/dogecash/dogecash/releases/tag/5.1.1.6)</td><tr>
			<tr><td>Dogecoin        </td><td>DOGE   </td><td>[v1.14.2](https://github.com/dogecoin/dogecoin/releases/tag/v1.14.2)</td><tr>
			<tr><td>Dynamic         </td><td>DYN    </td><td>[v2.4.3.0](https://github.com/duality-solutions/Dynamic/releases/tag/v2.4.3.0), [v2.4.4.0](https://github.com/duality-solutions/Dynamic/releases/tag/v2.4.4.0)</td><tr>
			<tr><td>Einsteinium     </td><td>EMC2   </td><td>[v0.13.5.0](https://github.com/emc2foundation/einsteinium/releases/tag/v0.13.5.0)</td><tr>
			<tr><td>Electra         </td><td>ECA    </td><td>[2.1.1](https://github.com/Electra-project/electra-core/releases/tag/2.1.1)</td><tr>
			<tr><td>Emercoin        </td><td>EMC    </td><td>[v0.7.10emc](https://github.com/emercoin/emercoin/releases/tag/v0.7.10emc)</td><tr>
			<tr><td>Eternity        </td><td>ENT    </td><td>[v0.12.1.7](https://github.com/eternity-group/eternity/releases/tag/v0.12.1.7)</td><tr>
			<tr><td>Faircoin        </td><td>FAIR   </td><td>[v2.0.1](https://github.com/faircoin/faircoin/releases/tag/v2.0.1)</td><tr>
			<tr><td>FantasyGold     </td><td>FGC    </td><td>[2.19.1](https://github.com/FantasyGold/FantasyGold-Core/releases/tag/2.19.1)</td><tr>
			<tr><td>Flo             </td><td>FLO    </td><td>[v0.15.2.0](https://github.com/floblockchain/flo/releases/tag/v0.15.2.0), [v0.15.2.1](https://github.com/floblockchain/flo/releases/tag/v0.15.2.1)</td><tr>
			<tr><td>FujiCoin        </td><td>FJC    </td><td>[fujicoin-v0.18.0](https://github.com/fujicoin/fujicoin/releases/tag/fujicoin-v0.18.0)</td><tr>
			<tr><td>Galactrum       </td><td>ORE    </td><td>[v1.4.0](https://github.com/galactrum/galactrum/releases/tag/v1.4.0)</td><tr>
			<tr><td>Galilel         </td><td>GALI   </td><td>[v3.4.0](https://github.com/Galilel-Project/galilel/releases/tag/v3.4.0)</td><tr>
			<tr><td>GambleCoin      </td><td>GMCN   </td><td>[1.1.4](https://github.com/GambleCoin-Project/GambleCoin/releases/tag/1.1.4)</td><tr>
			<tr><td>GeekCash        </td><td>GEEK   </td><td>[v1.3.0.1](https://github.com/GeekCash/geek/releases/tag/v1.3.0.1)</td><tr>
			<tr><td>GINcoin         </td><td>GIN    </td><td>[v1.3.0.0](https://github.com/GIN-coin/gincoin-core/releases/tag/v1.3.0.0)</td><tr>
			<tr><td>GoByte          </td><td>GBX    </td><td>[v0.12.2.4](https://github.com/gobytecoin/gobyte/releases/tag/v0.12.2.4)</td><tr>
			<tr><td>GravityCoin     </td><td>GXX    </td><td>[4.0.7.8](https://github.com/SpecialCoins/GravityCoin/releases/tag/4.0.7.8)</td><tr>
			<tr><td>HASH            </td><td>HASH   </td><td>[v1.5.1](https://github.com/hashplatform/hash/releases/tag/v1.5.1)</td><tr>
			<tr><td>Hatch           </td><td>HATCH  </td><td>[v0.14.0.3](https://github.com/hatchpay/hatch/releases/tag/v0.14.0.3)</td><tr>
			<tr><td>Helium          </td><td>HLM    </td><td>[v0.16.0](https://github.com/heliumchain/helium/releases/tag/v0.16.0)</td><tr>
			<tr><td>HTMLCoin        </td><td>HTML   </td><td>[v2.4.1](https://github.com/HTMLCOIN/HTMLCOIN/releases/tag/v2.4.1), [v2.4.2](https://github.com/HTMLCOIN/HTMLCOIN/releases/tag/v2.4.2)</td><tr>
			<tr><td>Innova          </td><td>INN    </td><td>[v4.3.8.6](https://github.com/innova-foundation/innova/releases/tag/v4.3.8.6)</td><tr>
			<tr><td>Internet of People </td><td>IOP </td><td>[v6.3.0](https://github.com/Internet-of-People/iop-core/releases/tag/v6.3.0)</td><tr>
			<tr><td>Ixcoin          </td><td>IXC    </td><td>[v0.14.1](https://github.com/IXCore/IXCoin/releases/tag/v0.14.1)</td><tr>
			<tr><td>Jiyo            </td><td>JIYOX  </td><td>[v.2.1](https://github.com/jiyocoin/jiyox/releases/tag/v.2.1)</td><tr>
			<tr><td>Kalkulus        </td><td>KLKS   </td><td>[v2.8.0](https://github.com/kalkulusteam/klks/releases/tag/v2.8.0)</td><tr>
			<tr><td>Know Your Developer </td><td>KYDC </td><td>[3.2.1](https://github.com/kydcoin/KYD3/releases/tag/3.2.1), [3.3.1](https://github.com/kydcoin/KYD3/releases/tag/3.3.1)</td><tr>
			<tr><td>Kreds           </td><td>KREDS  </td><td>[v1.0.0.6](https://github.com/KredsBlockchain/kreds-core/releases/tag/v1.0.0.6)</td><tr>
			<tr><td>KZCash          </td><td>KZC    </td><td>[v0.1.9.1](https://github.com/kzcashteam/kzcash/releases/tag/v0.1.9.1)</td><tr>
			<tr><td>LBRY Credits    </td><td>LBC    </td><td>[v0.17.3.1](https://github.com/lbryio/lbrycrd/releases/tag/v0.17.3.1), [v0.17.3.2](https://github.com/lbryio/lbrycrd/releases/tag/v0.17.3.2), [v0.17.4.5](https://github.com/lbryio/lbrycrd/releases/tag/v0.17.4.5)</td><tr>
			<tr><td>Light Pay Coin  </td><td>LPC    </td><td>[v1.0.1.0](https://github.com/lpcproject/LightPayCoin/releases/tag/v1.0.1.0)</td><tr>
			<tr><td>Litecoin        </td><td>LTC    </td><td>[v0.15.1](https://github.com/litecoin-project/litecoin/releases/tag/v0.15.1), [v0.16.0](https://github.com/litecoin-project/litecoin/releases/tag/v0.16.0), [v0.16.2](https://github.com/litecoin-project/litecoin/releases/tag/v0.16.2), [v0.16.3](https://github.com/litecoin-project/litecoin/releases/tag/v0.16.3), [v0.17.1](https://github.com/litecoin-project/litecoin/releases/tag/v0.17.1)</td><tr>
			<tr><td>LogisCoin       </td><td>LGS    </td><td>[v2.0.3.0](https://github.com/lgsproject/LogisCoin/releases/tag/v2.0.3.0)</td><tr>
			<tr><td>Luxcore         </td><td>LUX    </td><td>[v5.3.3](https://github.com/LUX-Core/lux/releases/tag/v5.3.3)</td><tr>
			<tr><td>Lynx            </td><td>LYNX   </td><td>[v0.16.3.9](https://github.com/getlynx/Lynx/releases/tag/v0.16.3.9)</td><tr>
			<tr><td>Machinecoin     </td><td>MAC    </td><td>[v0.16.3](https://github.com/machinecoin-project/machinecoin-core/releases/tag/v0.16.3)</td><tr>
			<tr><td>Magna Coin      </td><td>MGN    </td><td>[v1.0.0](https://github.com/MagnaCoinProject/MagnaCoin/releases/tag/v1.0.0)</td><tr>
			<tr><td>MNPCoin         </td><td>MNP    </td><td>[v1.2.5](https://github.com/MasterNodesPro/MNPCoin/releases/tag/v1.2.5)</td><tr>
			<tr><td>MinexCoin       </td><td>MNX    </td><td>[v1.3.2](https://github.com/minexcoin/minexcoin/releases/tag/v1.3.2)</td><tr>
			<tr><td>MktCoin         </td><td>MLM    </td><td>[0.15.0.3](https://github.com/Mktcoin-official/Mktcoin/releases/tag/0.15.0.3)</td><tr>
			<tr><td>MonaCoin        </td><td>MONA   </td><td>[monacoin-0.17.1](https://github.com/monacoinproject/monacoin/releases/tag/monacoin-0.17.1)</td><tr>
			<tr><td>MonetaryUnit    </td><td>MUE    </td><td>[v2.1.4](https://github.com/muecoin/MUE/releases/tag/v2.1.4)</td><tr>
			<tr><td>Monoeci         </td><td>XMCC   </td><td>[v0.12.2.3](https://github.com/monacocoin-net/monoeci-core/releases/tag/v0.12.2.3)</td><tr>
			<tr><td>Myriad          </td><td>XMY    </td><td>[v0.16.4.1](https://github.com/myriadteam/myriadcoin/releases/tag/v0.16.4.1), [v0.18.1.0](https://github.com/myriadteam/myriadcoin/releases/tag/v0.18.1.0)</td><tr>
			<tr><td>Namecoin        </td><td>NMC    </td><td>[nc0.13.99-name-tab-beta1](https://github.com/namecoin/namecoin-core/releases/tag/nc0.13.99-name-tab-beta1), [nc0.16.1](https://github.com/namecoin/namecoin-core/releases/tag/nc0.16.1), [nc0.16.2](https://github.com/namecoin/namecoin-core/releases/tag/nc0.16.2), [nc0.17.0](https://github.com/namecoin/namecoin-core/releases/tag/nc0.17.0), [nc0.18.0](https://github.com/namecoin/namecoin-core/releases/tag/nc0.18.0), [nc0.18.1](https://github.com/namecoin/namecoin-core/releases/tag/nc0.18.1), [nc0.19.0](https://github.com/namecoin/namecoin-core/releases/tag/nc0.19.0), [nc0.19.0.1](https://github.com/namecoin/namecoin-core/releases/tag/nc0.19.0.1), [nc0.19.1](https://github.com/namecoin/namecoin-core/releases/tag/nc0.19.1)</td><tr>
			<tr><td>NativeCoin      </td><td>N8V    </td><td>[v1.0.0](https://github.com/N8VCoin/nativecoin/releases/tag/v1.0.0)</td><tr>
			<tr><td>Nix             </td><td>NIX    </td><td>[v3.0.7](https://github.com/NixPlatform/NixCore/releases/tag/v3.0.7), [v3.0.8](https://github.com/NixPlatform/NixCore/releases/tag/v3.0.8)</td><tr>
			<tr><td>Nodium          </td><td>XN     </td><td>[3.0.6](https://github.com/nodiumproject/zNodium/releases/tag/3.0.6)</td><tr>
			<tr><td>Noir            </td><td>NOR    </td><td>[v2.1.0.5](https://github.com/noirofficial/noir/releases/tag/v2.1.0.5), [v2.1.0.6](https://github.com/noirofficial/noir/releases/tag/v2.1.0.6)</td><tr>
			<tr><td>Northern        </td><td>NORT   </td><td>[3.2.0](https://github.com/northern-community/Northern/releases/tag/3.2.0), [3.2.1](https://github.com/northern-community/Northern/releases/tag/3.2.1)</td><tr>
			<tr><td>Nyerium         </td><td>NYEX   </td><td>[v1.0.3](https://github.com/nyerium-core/nyerium/releases/tag/v1.0.3)</td><tr>
			<tr><td>NyxCoin         </td><td>NYX    </td><td>[v2.0.0.0](https://github.com/nyxpay/nyx/releases/tag/v2.0.0.0)</td><tr>
			<tr><td>Odin            </td><td>ODIN   </td><td>[v1.6.6](https://github.com/odinblockchain/Odin/releases/tag/v1.6.6)</td><tr>
			<tr><td>Ohmcoin         </td><td>OHMC   </td><td>[2.4.0.0](https://github.com/theohmproject/OhmCoin/releases/tag/2.4.0.0)</td><tr>
			<tr><td>OPCoinX         </td><td>OPCX   </td><td>[v2.0.0](https://github.com/opcoinx/OPCoinX/releases/tag/v2.0.0)</td><tr>
			<tr><td>PACGlobal       </td><td>PAC    </td><td>[v0.15-da839021c](https://github.com/pacglobalofficial/pac/releases/tag/v0.15-da839021c)</td><tr>
			<tr><td>Phore           </td><td>PHR    </td><td>[v1.6.3](https://github.com/phoreproject/Phore/releases/tag/v1.6.3)</td><tr>
			<tr><td>PIVX            </td><td>PIVX   </td><td>[v4.0.0](https://github.com/PIVX-Project/PIVX/releases/tag/v4.0.0), [v4.0.1](https://github.com/PIVX-Project/PIVX/releases/tag/v4.0.1), [v4.0.2](https://github.com/PIVX-Project/PIVX/releases/tag/v4.0.2)</td><tr>
			<tr><td>Placeholders    </td><td>PHL    </td><td>[2.0.30.5](https://github.com/xagau/Placeholders-X16R/releases/tag/2.0.30.5)</td><tr>
			<tr><td>Polis           </td><td>POLIS  </td><td>[v1.6.0](https://github.com/polispay/polis/releases/tag/v1.6.0), [v1.6.1](https://github.com/polispay/polis/releases/tag/v1.6.1), [v1.6.2](https://github.com/polispay/polis/releases/tag/v1.6.2)</td><tr>
			<tr><td>Pura            </td><td>PURA   </td><td>[v1.3.7](https://github.com/puracore/pura/releases/tag/v1.3.7)</td><tr>
			<tr><td>Qbic            </td><td>QBIC   </td><td>[v1.1](https://github.com/qbic-platform/qbic_v2.0/releases/tag/v1.1)</td><tr>
			<tr><td>Qtum            </td><td>QTUM   </td><td>[mainnet-ignition-v0.18.3](https://github.com/qtumproject/qtum/releases/tag/mainnet-ignition-v0.18.3), [mainnet-ignition-v0.19.0](https://github.com/qtumproject/qtum/releases/tag/mainnet-ignition-v0.19.0)</td><tr>
			<tr><td>Rapids          </td><td>RPD    </td><td>[v1.0.0.1](https://github.com/RapidsOfficial/Rapids/releases/tag/v1.0.0.1)</td><tr>
			<tr><td>Rapture         </td><td>RAP    </td><td>[v1.1.2.2](https://github.com/RaptureCore/Rapture/releases/tag/v1.1.2.2)</td><tr>
			<tr><td>Ravencoin       </td><td>RVN    </td><td>[v4.1.0](https://github.com/RavenProject/Ravencoin/releases/tag/v4.1.0)</td><tr>
			<tr><td>Scribe          </td><td>SCRIBE </td><td>[v0.2](https://github.com/scribenetwork/scribe/releases/tag/v0.2)</td><tr>
			<tr><td>Secure Cloud Net </td><td>SCN </td><td>[v2.5.1.1](https://github.com/securecloudnet/SecureCloud/releases/tag/v2.5.1.1), [v2.5.1.2](https://github.com/securecloudnet/SecureCloud/releases/tag/v2.5.1.2)</td><tr>
			<tr><td>Sequence        </td><td>SEQ    </td><td>[v1.3.3.0](https://github.com/duality-solutions/Sequence/releases/tag/v1.3.3.0)</td><tr>
			<tr><td>Shekel          </td><td>JEW    </td><td>[1.5.0](https://github.com/shekeltechnologies/JewNew/releases/tag/1.5.0)</td><tr>
			<tr><td>Sibcoin         </td><td>SIB    </td><td>[v0.16.4.0](https://github.com/ivansib/sibcoin/releases/tag/v0.16.4.0)</td><tr>
			<tr><td>Social Send     </td><td>SEND   </td><td>[1.2.0.5](https://github.com/SocialSend/SocialSend/releases/tag/1.2.0.5)</td><tr>
			<tr><td>SparksPay       </td><td>SPK    </td><td>[v0.12.4.3](https://github.com/sparkspay/sparks/releases/tag/v0.12.4.3)</td><tr>
			<tr><td>STRAKS          </td><td>STAK   </td><td>[1.14.7.5](https://github.com/straks/straks/releases/tag/1.14.7.5)</td><tr>
			<tr><td>SUB1X           </td><td>SUB1X  </td><td>[1.4.0](https://github.com/SuB1X-Coin/zSub1x/releases/tag/1.4.0)</td><tr>
			<tr><td>Syndicate       </td><td>SYNX   </td><td>[v2.2.0](https://github.com/SyndicateLtd/SyndicateQT/releases/tag/v2.2.0)</td><tr>
			<tr><td>Syscoin         </td><td>SYS    </td><td>[v4.1.3](https://github.com/syscoin/syscoin/releases/tag/v4.1.3)</td><tr>
			<tr><td>Terracoin       </td><td>TRC    </td><td>[v0.12.2.4](https://github.com/terracoin/terracoin/releases/tag/v0.12.2.4), [v0.12.2.5](https://github.com/terracoin/terracoin/releases/tag/v0.12.2.5)</td><tr>
			<tr><td>Tribe           </td><td>TRB    </td><td>[1.0.2](https://github.com/TribeCrypto/tribe/releases/tag/1.0.2)</td><tr>
			<tr><td>Uniform Fiscal Object </td><td>UFO </td><td>[v0.18.0](https://github.com/fiscalobject/ufo/releases/tag/v0.18.0)</td><tr>
			<tr><td>Unobtanium      </td><td>UNO    </td><td>[v0.10.5](https://github.com/unobtanium-official/Unobtanium/releases/tag/v0.10.5), [v0.11.0](https://github.com/unobtanium-official/Unobtanium/releases/tag/v0.11.0)</td><tr>
			<tr><td>Vertcoin        </td><td>VTC    </td><td>[0.14.0](https://github.com/vertcoin-project/vertcoin-core/releases/tag/0.14.0), [0.15.0](https://github.com/vertcoin-project/vertcoin-core/releases/tag/0.15.0), [0.15.0.1](https://github.com/vertcoin-project/vertcoin-core/releases/tag/0.15.0.1)</td><tr>
			<tr><td>Viacoin         </td><td>VIA    </td><td>[v0.16.3](https://github.com/viacoin/viacoin/releases/tag/v0.16.3)</td><tr>
			<tr><td>Vitae           </td><td>VITAE  </td><td>[v4.4.0.3](https://github.com/VitaeTeam/Vitae/releases/tag/v4.4.0.3)</td><tr>
			<tr><td>VIVO            </td><td>VIVO   </td><td>[v0.12.1.17](https://github.com/vivocoin/vivo/releases/tag/v0.12.1.17)</td><tr>
			<tr><td>Vsync           </td><td>VSX    </td><td>[v3.8.7.6](https://github.com/VsyncCrypto/VSX/releases/tag/v3.8.7.6), [v3.8.7.7](https://github.com/VsyncCrypto/VSX/releases/tag/v3.8.7.7)</td><tr>
			<tr><td>Wagerr          </td><td>WGR    </td><td>[v3.1.0](https://github.com/wagerr/wagerr/releases/tag/v3.1.0)</td><tr>
			<tr><td>XCurrency       </td><td>XC     </td><td>[v3.0.05](https://github.com/XCurrency/xc/releases/tag/v3.0.05)</td><tr>
			<tr><td>ZCoin           </td><td>XZC    </td><td>[v0.13.8.9](https://github.com/zcoinofficial/zcoin/releases/tag/v0.13.8.9), [v0.13.8.10](https://github.com/zcoinofficial/zcoin/releases/tag/v0.13.8.10)</td><tr>
		</tbody>
	</table>

??? abstract "Compatible with Blocknet wallet v4.0.x (deprecated)"
	[View Manifest](https://github.com/blocknetdx/blockchain-configuration-files/blob/master/manifests/manifest-4.0.2.0.json)

	AeriumX         |AEX    |[v2.2](https://github.com/aeriumcoin/AeriumX/releases/tag/v2.2)
	AmsterdamCoin   |AMS    |[v4.6.0.0](https://github.com/CoinProjects/AmsterdamCoin-v4/releases/tag/v4.6.0.0)
	APR Coin        |APR    |[V3.1.0](https://github.com/APRCoin/zenith-repository/releases/tag/V3.1.0)
	Argoneum        |AGM    |[v1.2.3.4](https://github.com/Argoneum/argoneum/releases/tag/v1.2.3.4)
	ATBCoin         |ATB    |[v1.1.0](https://github.com/segwit/atbcoin/releases/tag/v1.1.0)
	AustraliaCash   |AUS    |[v0.17.4.1](https://github.com/AustraliaCash/AustraliaCash-Core/releases/tag/v0.17.4.1)
	Badcoin         |BAD    |[v0.16.3-2](https://github.com/badcoin-net/Badcoin/releases/tag/v0.16.3-2)
	BiFrost         |FROST  |[v1.2.1](https://github.com/bifrost-actual/bifrost-coin/releases/tag/v1.2.1)
	BitBay          |BAY    |[v2.1.2a](https://github.com/bitbaymarket/bitbay-core/releases/tag/v2.1.2a)
	Bitcloud        |BTDX   |[2.1.0.1.1](https://github.com/LIMXTEC/Bitcloud/releases/tag/2.1.0.1.1)
	Bitcoin         |BTC    |[v0.15.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.15.1), [v0.15.2](https://github.com/bitcoin/bitcoin/releases/tag/v0.15.2), [v0.16.0](https://github.com/bitcoin/bitcoin/releases/tag/v0.16.0), [v0.16.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.16.1), [v0.16.2](https://github.com/bitcoin/bitcoin/releases/tag/v0.16.2), [v0.16.3](https://github.com/bitcoin/bitcoin/releases/tag/v0.16.3), [v0.17.0](https://github.com/bitcoin/bitcoin/releases/tag/v0.17.0), [v0.17.0.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.17.0.1), [v0.17.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.17.1), [v0.18.0](https://github.com/bitcoin/bitcoin/releases/tag/v0.18.0), [v0.18.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.18.1), [v0.19.0](https://github.com/bitcoin/bitcoin/releases/tag/v0.19.0), [v0.19.0.1](https://github.com/bitcoin/bitcoin/releases/tag/v0.19.0.1)
	Bitcoin CZ      |BCZ    |[6.0.1.5](https://github.com/SpecialCoins/bitcoincz/releases/tag/6.0.1.5)
	BitGreen        |BITG   |[v1.3.1](https://github.com/bitgreen/bitgreen/releases/tag/v1.3.1), [v1.3.2](https://github.com/bitgreen/bitgreen/releases/tag/v1.3.2)
	BitCore         |BTX    |[0.15.2.2](https://github.com/LIMXTEC/BitCore/releases/tag/0.15.2.2)
	BitcoinZero     |BZX    |[5.0.3.5](https://github.com/SpecialCoins/BitcoinZero/releases/tag/5.0.3.5)
	BitMoney        |BIT    |[2.2.0.2](https://github.com/CryptVenture/BitMoneyV22/releases/tag/2.2.0.2)
	BitSend         |BSD    |[0.14.2.0.1](https://github.com/LIMXTEC/BitSend/releases/tag/0.14.2.0.1)
	BLAST           |BLAST  |[v1.3.0.0](https://github.com/blastdev/blast-core/releases/tag/v1.3.0.0)
	Blocknet        |BLOCK  |[v4.0.2](https://github.com/blocknetdx/blocknet/releases/tag/v4.0.2)
	Bulwark         |BWK    |[2.2.0](https://github.com/bulwark-crypto/Bulwark/releases/tag/2.2.0)
	Carebit         |CARE   |[v5.0.0](https://github.com/carebitcoin/carebitcoin/releases/tag/v5.0.0)
	Chaincoin       |CHC    |[v0.18.1](https://github.com/chaincoin/chaincoin/releases/tag/v0.18.1)
	Civitas         |CIV    |[v1.2.2](https://github.com/eastcoastcrypto/Civitas/releases/tag/v1.2.2)
	ColossusXT      |COLX   |[v1.2.2](https://github.com/ColossusCoinXT/ColossusCoinXT/releases/tag/v1.2.2)
	Crave           |CRAVE  |[v2.5.2](https://github.com/Crave-Community-Project/Crave-Project/releases/tag/v2.5.2)
	CryptoCashBack  |CCBC   |[v1.2.1.1](https://github.com/CryptoCashBack-Hub/CCBC/releases/tag/v1.2.1.1)
	Crypto Dezire Cash |CDZC |[v2.1.1](https://github.com/cryptodezire/CryptoDezireCash/releases/tag/v2.1.1)
	Cryptonodes     |CNMC   |[v1.4.4.1](https://github.com/cryptonodes-core/cryptonodes-core/releases/tag/v1.4.4.1)
	Dash            |DASH   |[v0.14.0.2](https://github.com/dashpay/dash/releases/tag/v0.14.0.2), [v0.14.0.3](https://github.com/dashpay/dash/releases/tag/v0.14.0.3), [v0.14.0.4](https://github.com/dashpay/dash/releases/tag/v0.14.0.4), [v0.14.0.5](https://github.com/dashpay/dash/releases/tag/v0.14.0.5)
	Denarius        |D      |[v3.3.9.3](https://github.com/carsenk/denarius/releases/tag/v3.3.9.3), [v3.3.9.4](https://github.com/carsenk/denarius/releases/tag/v3.3.9.4), [v3.3.9.5](https://github.com/carsenk/denarius/releases/tag/v3.3.9.5), [v3.3.9.6](https://github.com/carsenk/denarius/releases/tag/v3.3.9.6), [v3.3.9.7](https://github.com/carsenk/denarius/releases/tag/v3.3.9.7)
	Desire          |DSR    |[Desire-v.0.12.2.2](https://github.com/lazyboozer/Desire/releases/tag/Desire-v.0.12.2.2)
	Diamond         |DMD    |[3.0.1.3](https://github.com/DMDcoin/Diamond/releases/tag/3.0.1.3)
	DigiByte        |DGB    |[v7.17.2](https://github.com/digibyte/digibyte/releases/tag/v7.17.2)
	Digiwage        |WAGE   |[1.2.1](https://github.com/digiwage/digiwage/releases/tag/1.2.1)
	Dinero          |DIN    |[v1.0.1.1](https://github.com/dinerocoin/dinero/releases/tag/v1.0.1.1)
	Divi            |DIVI   |[DESK-1.2.2](https://github.com/DiviProject/Divi/releases/tag/DESK-1.2.2), [v1.0.4-core](https://github.com/DiviProject/Divi/releases/tag/v1.0.4-core), [v1.0.7](https://github.com/DiviProject/Divi/releases/tag/v1.0.7)
	DogeCash        |DOGEC  |[v5.1.1.3](https://github.com/dogecash/dogecash/releases/tag/v5.1.1.3)
	Dogecoin        |DOGE   |[v1.14.2](https://github.com/dogecoin/dogecoin/releases/tag/v1.14.2)
	Dynamic         |DYN    |[v2.4.3.0](https://github.com/duality-solutions/Dynamic/releases/tag/v2.4.3.0), [v2.4.4.0](https://github.com/duality-solutions/Dynamic/releases/tag/v2.4.4.0)
	Einsteinium     |EMC2   |[v0.13.5.0](https://github.com/emc2foundation/einsteinium/releases/tag/v0.13.5.0)
	Electra         |ECA    |[2.1.1](https://github.com/Electra-project/electra-core/releases/tag/2.1.1)
	Emercoin        |EMC    |[v0.7.10emc](https://github.com/emercoin/emercoin/releases/tag/v0.7.10emc)
	Eternity        |ENT    |[v0.12.1.7](https://github.com/eternity-group/eternity/releases/tag/v0.12.1.7)
	Faircoin        |FAIR   |[v2.0.1](https://github.com/faircoin/faircoin/releases/tag/v2.0.1)
	FantasyGold     |FGC    |[2.0.0](https://github.com/FantasyGold/FantasyGold-Core/releases/tag/2.0.0)
	Flo             |FLO    |[v0.15.2.0](https://github.com/floblockchain/flo/releases/tag/v0.15.2.0), [v0.15.2.1](https://github.com/floblockchain/flo/releases/tag/v0.15.2.1)
	FujiCoin        |FJC    |[fujicoin-v0.18.0](https://github.com/fujicoin/fujicoin/releases/tag/fujicoin-v0.18.0)
	Galactrum       |ORE    |[v1.4.0](https://github.com/galactrum/galactrum/releases/tag/v1.4.0)
	Galilel         |GALI   |[v3.4.0](https://github.com/Galilel-Project/galilel/releases/tag/v3.4.0)
	GambleCoin      |GMCN   |[1.1.4](https://github.com/GambleCoin-Project/GambleCoin/releases/tag/1.1.4)
	GeekCash        |GEEK   |[v1.3.0.1](https://github.com/GeekCash/geek/releases/tag/v1.3.0.1)
	GINcoin         |GIN    |[v1.3.0.0](https://github.com/GIN-coin/gincoin-core/releases/tag/v1.3.0.0)
	GoByte          |GBX    |[v0.12.2.4](https://github.com/gobytecoin/gobyte/releases/tag/v0.12.2.4)
	GravityCoin     |GXX    |[4.0.7.5](https://github.com/SpecialCoins/GravityCoin/releases/tag/4.0.7.5)
	HASH            |HASH   |[v1.5.1](https://github.com/hashplatform/hash/releases/tag/v1.5.1)
	Hatch           |HATCH  |[v0.14.0.3](https://github.com/hatchpay/hatch/releases/tag/v0.14.0.3)
	Helium          |HLM    |[v0.16.0](https://github.com/heliumchain/helium/releases/tag/v0.16.0)
	HTMLCoin        |HTML   |[v2.4.1](https://github.com/HTMLCOIN/HTMLCOIN/releases/tag/v2.4.1), [v2.4.2](https://github.com/HTMLCOIN/HTMLCOIN/releases/tag/v2.4.2)
	Innova          |INN    |[v4.3.8.6](https://github.com/innova-foundation/innova/releases/tag/v4.3.8.6)
	Internet of People |IOP |[v6.3.0](https://github.com/Internet-of-People/iop-core/releases/tag/v6.3.0)
	Ixcoin          |IXC    |[v0.14.1](https://github.com/IXCore/IXCoin/releases/tag/v0.14.1)
	Jiyo            |JIYOX  |[v.2.1](https://github.com/jiyocoin/jiyox/releases/tag/v.2.1)
	Kalkulus        |KLKS   |[v2.8.0](https://github.com/kalkulusteam/klks/releases/tag/v2.8.0)
	Know Your Developer |KYD |[3.2.1](https://github.com/kydcoin/KYD3/releases/tag/3.2.1), [3.3.1](https://github.com/kydcoin/KYD3/releases/tag/3.3.1)
	Kreds           |KREDS  |[v1.0.0.6](https://github.com/KredsBlockchain/kreds-core/releases/tag/v1.0.0.6)
	KZCash          |KZC    |[v0.1.9.1](https://github.com/kzcashteam/kzcash/releases/tag/v0.1.9.1)
	LBRY Credits    |LBC    |[v0.17.3.1](https://github.com/lbryio/lbrycrd/releases/tag/v0.17.3.1), [v0.17.3.2](https://github.com/lbryio/lbrycrd/releases/tag/v0.17.3.2), [v0.17.4.1](https://github.com/lbryio/lbrycrd/releases/tag/v0.17.4.1), [v0.17.4.2](https://github.com/lbryio/lbrycrd/releases/tag/v0.17.4.2)
	Light Pay Coin  |LPC    |[v1.0.1.0](https://github.com/lpcproject/LightPayCoin/releases/tag/v1.0.1.0)
	Litecoin        |LTC    |[v0.15.1](https://github.com/litecoin-project/litecoin/releases/tag/v0.15.1), [v0.16.0](https://github.com/litecoin-project/litecoin/releases/tag/v0.16.0), [v0.16.2](https://github.com/litecoin-project/litecoin/releases/tag/v0.16.2), [v0.16.3](https://github.com/litecoin-project/litecoin/releases/tag/v0.16.3), [v0.17.1](https://github.com/litecoin-project/litecoin/releases/tag/v0.17.1)
	LogisCoin       |LGS    |[v2.0.3.0](https://github.com/lgsproject/LogisCoin/releases/tag/v2.0.3.0)
	Luxcore         |LUX    |[v5.3.3](https://github.com/LUX-Core/lux/releases/tag/v5.3.3)
	Lynx            |LYNX   |[v0.16.3.9](https://github.com/getlynx/Lynx/releases/tag/v0.16.3.9)
	Machinecoin     |MAC    |[v0.16.2.1](https://github.com/machinecoin-project/machinecoin-core/releases/tag/v0.16.2.1)
	Magna Coin      |MGN    |[v1.0.0](https://github.com/MagnaCoinProject/MagnaCoin/releases/tag/v1.0.0)
	MNPCoin         |MNP    |[v1.2.5](https://github.com/MasterNodesPro/MNPCoin/releases/tag/v1.2.5)
	MinexCoin       |MNX    |[v1.3.2](https://github.com/minexcoin/minexcoin/releases/tag/v1.3.2)
	MktCoin         |MLM    |[0.15.0.3](https://github.com/Mktcoin-official/Mktcoin/releases/tag/0.15.0.3)
	MonaCoin        |MONA   |[monacoin-0.17.1](https://github.com/monacoinproject/monacoin/releases/tag/monacoin-0.17.1)
	MonetaryUnit    |MUE    |[v2.1.4](https://github.com/muecoin/MUE/releases/tag/v2.1.4)
	Monoeci         |XMCC   |[v0.12.2.3](https://github.com/monacocoin-net/monoeci-core/releases/tag/v0.12.2.3)
	Myriad          |XMY    |[v0.16.4.1](https://github.com/myriadteam/myriadcoin/releases/tag/v0.16.4.1)
	Namecoin        |NMC    |[nc0.13.99-name-tab-beta1](https://github.com/namecoin/namecoin-core/releases/tag/nc0.13.99-name-tab-beta1)
	NativeCoin      |N8V    |[v1.0.0](https://github.com/N8VCoin/nativecoin/releases/tag/v1.0.0)
	Nix             |NIX    |[v3.0.7](https://github.com/NixPlatform/NixCore/releases/tag/v3.0.7)
	Nodium          |XN     |[3.0.6](https://github.com/nodiumproject/zNodium/releases/tag/3.0.6)
	Noir            |NOR    |[v2.1.0.3](https://github.com/noirofficial/noir/releases/tag/v2.1.0.3)
	Northern        |NORT   |[3.0.0](https://github.com/northern-community/Northern/releases/tag/3.0.0)
	Nyerium         |NYEX   |[v1.0.3](https://github.com/nyerium-core/nyerium/releases/tag/v1.0.3)
	NyxCoin         |NYX    |[v2.0.0.0](https://github.com/nyxpay/nyx/releases/tag/v2.0.0.0)
	Odin            |ODIN   |[v1.6.6](https://github.com/odinblockchain/Odin/releases/tag/v1.6.6)
	Ohmcoin         |OHMC   |[2.4.0.0](https://github.com/theohmproject/OhmCoin/releases/tag/2.4.0.0)
	OPCoinX         |OPCX   |[v2.0.0](https://github.com/opcoinx/OPCoinX/releases/tag/v2.0.0)
	PACcoin         |$PAC   |[v0.12.6.2](https://github.com/PACCommunity/PAC/releases/tag/v0.12.6.2)
	Phore           |PHR    |[v1.6.3](https://github.com/phoreproject/Phore/releases/tag/v1.6.3)
	PIVX            |PIVX   |[v4.0.0](https://github.com/PIVX-Project/PIVX/releases/tag/v4.0.0), [v4.0.1](https://github.com/PIVX-Project/PIVX/releases/tag/v4.0.1), [v4.0.2](https://github.com/PIVX-Project/PIVX/releases/tag/v4.0.2)
	Polis           |POLIS  |[v1.6.0](https://github.com/polispay/polis/releases/tag/v1.6.0)
	Pura            |PURA   |[v1.3.7](https://github.com/puracore/pura/releases/tag/v1.3.7)
	Qbic            |QBIC   |[v1.1](https://github.com/qbic-platform/qbic_v2.0/releases/tag/v1.1)
	Qtum            |QTUM   |[mainnet-ignition-v0.18.3](https://github.com/qtumproject/qtum/releases/tag/mainnet-ignition-v0.18.3)
	Rapids          |RPD    |[v1.0.0.1](https://github.com/RapidsOfficial/Rapids/releases/tag/v1.0.0.1)
	Rapture         |RAP    |[v1.1.2.2](https://github.com/RaptureCore/Rapture/releases/tag/v1.1.2.2)
	Ravencoin       |RVN    |[v3.3.2](https://github.com/RavenProject/Ravencoin/releases/tag/v3.3.2)
	Rupaya          |RUPX   |[5.3.1.1](https://github.com/rupaya-project/rupx/releases/tag/5.3.1.1)
	Secure Cloud Net |SCN |[v2.5.1.1](https://github.com/securecloudnet/SecureCloud/releases/tag/v2.5.1.1), [v2.5.1.2](https://github.com/securecloudnet/SecureCloud/releases/tag/v2.5.1.2)
	Sequence        |SEQ    |[v1.3.3.0](https://github.com/duality-solutions/Sequence/releases/tag/v1.3.3.0)
	Shekel          |JEW    |[1.5.0](https://github.com/shekeltechnologies/JewNew/releases/tag/1.5.0)
	Sibcoin         |SIB    |[v0.16.4.0](https://github.com/ivansib/sibcoin/releases/tag/v0.16.4.0)
	Social Send     |SEND   |[1.2.0.5](https://github.com/SocialSend/SocialSend/releases/tag/1.2.0.5)
	Solaris         |XLR    |[v2.8.1.0](https://github.com/Solaris-Project/Solaris/releases/tag/v2.8.1.0)
	SparksPay       |SPK    |[v0.12.4.3](https://github.com/sparkspay/sparks/releases/tag/v0.12.4.3)
	STRAKS          |STAK   |[1.14.7.5](https://github.com/straks/straks/releases/tag/1.14.7.5)
	SUB1X           |SUB1X  |[1.4.0](https://github.com/SuB1X-Coin/zSub1x/releases/tag/1.4.0)
	Syndicate       |SYNX   |[v2.2.0](https://github.com/SyndicateLtd/SyndicateQT/releases/tag/v2.2.0)
	Syscoin         |SYS    |[v4.0.3](https://github.com/syscoin/syscoin/releases/tag/v4.0.3), [v4.1.0](https://github.com/syscoin/syscoin/releases/tag/v4.1.0), [v4.1.1](https://github.com/syscoin/syscoin/releases/tag/v4.1.1), [v4.1.2](https://github.com/syscoin/syscoin/releases/tag/v4.1.2), [v4.1.2.1](https://github.com/syscoin/syscoin/releases/tag/v4.1.2.1)
	Terracoin       |TRC    |[v0.12.2.4](https://github.com/terracoin/terracoin/releases/tag/v0.12.2.4)
	Tribe           |TRB    |[1.0.2](https://github.com/TribeCrypto/tribe/releases/tag/1.0.2)
	Uniform Fiscal Object |UFO |[v0.18.0](https://github.com/fiscalobject/ufo/releases/tag/v0.18.0)
	Unobtanium      |UNO    |[v0.10.5](https://github.com/unobtanium-official/Unobtanium/releases/tag/v0.10.5), [v0.11.0](https://github.com/unobtanium-official/Unobtanium/releases/tag/v0.11.0)
	Vertcoin        |VTC    |[0.14.0](https://github.com/vertcoin-project/vertcoin-core/releases/tag/0.14.0), [0.15.0](https://github.com/vertcoin-project/vertcoin-core/releases/tag/0.15.0)
	Viacoin         |VIA    |[v0.16.3](https://github.com/viacoin/viacoin/releases/tag/v0.16.3)
	Vitae           |VITAE  |[v4.4.0.3](https://github.com/VitaeTeam/Vitae/releases/tag/v4.4.0.3)
	VIVO            |VIVO   |[v0.12.1.17](https://github.com/vivocoin/vivo/releases/tag/v0.12.1.17)
	Vsync           |VSX    |[v3.8.7.6](https://github.com/VsyncCrypto/VSX/releases/tag/v3.8.7.6), [v3.8.7.7](https://github.com/VsyncCrypto/VSX/releases/tag/v3.8.7.7)
	Wagerr          |WGR    |[v3.1.0](https://github.com/wagerr/wagerr/releases/tag/v3.1.0)
	XCurrency       |XC     |[v3.0.05](https://github.com/XCurrency/xc/releases/tag/v3.0.05)
	ZCoin           |XZC    |[v0.13.8.9](https://github.com/zcoinofficial/zcoin/releases/tag/v0.13.8.9), [v0.13.8.10](https://github.com/zcoinofficial/zcoin/releases/tag/v0.13.8.10)



<script type="text/javascript">
var manifestURL = "https://raw.githubusercontent.com/blocknetdx/blockchain-configuration-files/master/manifest-latest.json";
// var manifestURL = "https://raw.githubusercontent.com/blocknetdx/blockchain-configuration-files/master/manifests/manifest-4.0.2.0.json";
var dumpTable = false;

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
	// max lengths based off the markdown header character column widths
	var maxNameLength = 16;
	var maxTickerLength = 7;

	for(var asset in manifest) {
		var name = manifest[asset]["blockchain"];
		var ticker = manifest[asset]["ticker"];
		var nameSpaces = 0;
		var tickerSpaces = 0;
		if (dumpTable) {
			nameSpaces = (name.length < maxNameLength) ? (maxNameLength - name.length) : 0;
			name += (nameSpaces == 1)  ? " " : 
							(nameSpaces == 2)  ? "  " : 
							(nameSpaces == 3)  ? "   " : 
							(nameSpaces == 4)  ? "    " : 
							(nameSpaces == 5)  ? "     " : 
							(nameSpaces == 6)  ? "      " :
							(nameSpaces == 7)  ? "       " :
							(nameSpaces == 8)  ? "        " :
							(nameSpaces == 9)  ? "         " :
							(nameSpaces == 10) ? "          " :
							(nameSpaces == 11) ? "           " :
							(nameSpaces == 12) ? "            " :
							(nameSpaces == 13) ? "             " :
							(nameSpaces == 14) ? "              " :
							(nameSpaces == 15) ? "               " :
							" ";
			tickerSpaces = (ticker.length < maxTickerLength) ? (maxTickerLength - ticker.length) : 0;
			if (nameSpaces == 0) { tickerSpaces = 0 }
			ticker += (tickerSpaces == 1)  ? " " : 
								(tickerSpaces == 2)  ? "  " : 
								(tickerSpaces == 3)  ? "   " : 
								(tickerSpaces == 4)  ? "    " : 
								(tickerSpaces == 5)  ? "     " : 
								(tickerSpaces == 6)  ? "      " : 
								" ";
		}

		var repo = manifest[asset]["repo_url"];
		if (repo.substr(-1) === "/") {
			repo = repo.slice(0, -1);
		}
		repo += "/releases/tag/";

		var versionsArray = manifest[asset]["versions"];
		var versionLinks = "";
		for (var version in versionsArray) {
			var versionLink;
			if (dumpTable) {
				// html linked version text <a href="repo url">version</a>
				// versionLink = '<a href="' + repo + versionsArray[version] + '">' + versionsArray[version] + '</a>';
				// markdown linked version text
				versionLink = '[' + versionsArray[version] + '](' + repo + versionsArray[version] + ')';
			} else {
				// html linked version text <a href="repo url">version</a>
				versionLink = '<a href="' + repo + versionsArray[version] + '">' + versionsArray[version] + '</a>';
			}
			// if only 1 version
			if (versionsArray.length < 2) {
				versionLinks += versionLink;
			} else {
				// if last version in array (no comma)
				if (version == versionsArray.length - 1) {
					versionLinks += versionLink;
				// if not the last version (add comma)
				} else {
					versionLinks += versionLink + ", ";
				}
			}
		}

		// if multiple version groups of same blockchain then combine versionLinks (e.g. btc v15-v18)
		if (preTable[name]) {
			preTable[name]["versions"] += ", " + versionLinks;
		} else {
			preTable[name] = {"name": name, "ticker": ticker, "versions": versionLinks};
		}
	}

	for (var asset in preTable) {
		var row;
		if (dumpTable) {
			// use for older deprecated versions
			// row = preTable[asset]["name"] + "|" + preTable[asset]["ticker"] + "|" + preTable[asset]["versions"];
			// use for newest version
			row = "<tr><td>" + preTable[asset]["name"] + "</td><td>" + preTable[asset]["ticker"] + "</td><td>" + preTable[asset]["versions"] + "</td><tr>";
			table += row + "\n";
		} else {
			row = "<tr><td>" + preTable[asset]["name"] + "</td><td>" + preTable[asset]["ticker"] + "</td><td>" + preTable[asset]["versions"] + "</td><tr>";
			table += row;
		}
	}
	if (dumpTable) {
		console.log(table);
	} else {
		document.getElementById("bn-tbody").innerHTML = table;
	}
}


</script>