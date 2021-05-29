<form>
<p>Est. current Block Height: <span id="estB"></span></p>
<p>Block Height at next Superblock: <span id="NextSB"></span></p>
<p>Block Height at next SB voting deadline: <span id="SBVD"></span></p>
<p>Est. date of next SB voting deadline: <span id="VDate"></span></p>
<p>Est. time till next SB voting deadline: <span id="Vdays"></span> days, <span 
id="Vhours"></span> hours, and <span id="Vmins"></span> minutes</p>
</form>

--8<-- "superblock-java-core.md"

<script type="text/javascript">

    function FillSBValues(){

	var CurBlockHeight = CurrentBlock();
	var BlockHeightNextSB = NextSuperblock();

	document.getElementById('estB').innerHTML = Math.round(CurBlockHeight); 
	document.getElementById('NextSB').innerHTML = BlockHeightNextSB;

	var BlockHeightNextSBVotingDeadline = BlockHeightNextSB - BlocksBeforeSBVoteStops; 
	var VDeadlinePassed = (CurBlockHeight > BlockHeightNextSBVotingDeadline  && CurBlockHeight <= BlockHeightNextSB);

	document.getElementById('SBVD').innerHTML = BlockHeightNextSBVotingDeadline + (VDeadlinePassed ? " (Deadline Passed)" : "");

	var DateOfNextVDeadline = new Date(DateOfBlock(BlockHeightNextSBVotingDeadline)); 
	document.getElementById('VDate').innerHTML = DateOfNextVDeadline + (VDeadlinePassed ? " (Deadline Passed)" : "");
	var VDHM = DaysHoursMins(DateOfNextVDeadline);
    document.getElementById('Vdays').innerHTML = VDeadlinePassed ? "N/A" : VDHM.d;
    document.getElementById('Vhours').innerHTML = VDeadlinePassed ? "N/A" : VDHM.h;
    document.getElementById('Vmins').innerHTML = VDeadlinePassed ? "N/A" : VDHM.m;
     }

    FillSBValues();
</script>
