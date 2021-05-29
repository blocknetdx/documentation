<p>Estimated date of next Superblock deadline: <span id="date"></span></p>
<br>*******
<p>Estimated time until next Superblock deadline: <span id="days"></span> days, <span id="hours"></span> hours, and <span id="mins"></span> minutes
</p>

<script type="text/javascript">
	const api_url = 'https://chainz.cryptoid.info/block/api.dws?q=getblockcount&key=d67c0cc2d752';

	async function getBlocks(){
        const response = await fetch(api_url);
            var blocks = await response.json();
                return blocks
//	               return 1954220
	}

	async function checkBlock(){
		superB = 1987200;
		const nextB = 43200;
		cur = await getBlocks();

	    if (superB>=cur){
            return cur
		}
        else if (superB<cur){
			superB = superB + nextB
				return cur
			};
		}

	async function calculateBlocks(){
        const theBlocks = await checkBlock();
		const supDif = 2880;
		var blocksLeft = (superB - supDif) - theBlocks;
		var timeByBlocks = blocksLeft * 60.097;
		return timeByBlocks
	}

	async function calcDate(){
        var blockTime = await calculateBlocks();
		var d = parseInt(blockTime / (3600 * 24));
		document.getElementById('days').innerHTML = d;
		nd = blockTime % (24 * 3600);
		var h = parseInt(nd/3600);
		document.getElementById('hours').innerHTML = h;
		blockTime %= 3600;
		var m = parseInt((blockTime/60));
		document.getElementById('mins').innerHTML = m;
		const longEnUSFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' });
		var date = new Date();
		date.setMinutes(date.getMinutes() + (d * 24 * 60) + (h * 60) + m);
		document.getElementById('date').innerHTML = longEnUSFormatter.format(date);
	}

	calcDate();
</script>
