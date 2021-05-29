<script type="text/javascript">
	
	const MillisecondsPerDay = 1000 * 60 * 60 * 24;
	const HoursPerDay = 24;
	const MinutesPerHour = 60;
	var CurDate = new Date();

	// These reference values (BlockHeightAtDate & RefDate) correspond to a block height & date which coincided
	var RefDate = new Date("2021-05-25T16:00:00+05:30"); 
	var MsSinceBaseTimeToRefDate = RefDate.getTime(); // number of milliseconds since 1970/01/01 till date RefDate 
	const BlockHeightAtRefDate = 1990177;

	// RefPrevSuperblock is the block height at previous Superblock - used as a reference for calculated future Superblock heights
	const RefPrevSuperblock = 1944000;

	// Number of blocks between Superblocks
	const BlocksBetweenSuperblocks = 43200;

	// Number of blocks before the Superblock when deadline for new proposals happens
	const BlocksBeforeSuperblockProposalDeadline = 2880;

    // Number of blocks before Superblock when voting stops
	const BlocksBeforeSBVoteStops = 60;
	
	// Emperically derived measurement of MillisecondsPerBlock
	var RefDate1 = new Date("2020-12-01T17:04:00+05:30");
	var RefDate2 = new Date("2021-05-27T16:53:00+05:30");
	const BlocksDiff = 254435; // # of blocks (counted as Tx confirmations) from RefDate1 to RefDate2
	var MillisecondsPerBlock = (RefDate2.getTime() - RefDate1.getTime()) / BlocksDiff;


	// Returns the date object that correspends to BlockNumber block height
    function DateOfBlock(BlockNumber){
		var BlocksSinceRefBlock = BlockNumber - BlockHeightAtRefDate;
		var MsFromRefToBlockNum = BlocksSinceRefBlock * MillisecondsPerBlock;
		var d = new Date(); 
		return d.setTime(RefDate.getTime() + MsFromRefToBlockNum);
    }

	// Returns the block height at the next (upcoming) Superblock
	function NextSuperblock(){
		var NextSB = RefPrevSuperblock;
		while (DateOfBlock(NextSB) < CurDate) {
			NextSB = NextSB + BlocksBetweenSuperblocks;
		}
	    return NextSB;
	}

	// Returns the current block height
	function CurrentBlock(){
		var CurMsSinceBaseTime = Date.now(); // number of milliseconds since 1970/01/01 to Now
		var MsFromRefDateToNow = CurMsSinceBaseTime - MsSinceBaseTimeToRefDate; // milliseconds from RefDate to Now
		return BlockHeightAtRefDate + (MsFromRefDateToNow / MillisecondsPerBlock);
	}

	// Returns Days, Hours & Minutes from Current Date to EndDate param
	function DaysHoursMins(EndDate){
		var MsRemaining = EndDate.getTime() - Date.now();
		var DaysRemaining = MsRemaining / MillisecondsPerDay;
		var Days = Math.trunc(DaysRemaining);
		var HoursRemaining = (DaysRemaining - Days) * HoursPerDay;
		var Hours = Math.trunc(HoursRemaining);
		var Mins = Math.trunc((HoursRemaining - Hours) * MinutesPerHour);
		return { d: Days, h: Hours, m: Mins};
	}
</script>
