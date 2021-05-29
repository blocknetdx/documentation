<form>
<p>Est. current Block Height: <span id="estB"></span></p>
<p>Block Height at next Superblock: <span id="NextSB"></span></p>
<p>Block Height at next SB proposal deadline: <span id="SBPD"></span></p>
<p>Est. date of next SB proposal deadline: <span id="PDate"></span></p>
<p>Est. time till next SB proposal deadline: <span id="Pdays"></span> days, <span id="Phours"></span> hours, and <span id="Pmins"></span> minutes</p>
</form>

--8<-- "superblock-java-core.md"

<script type="text/javascript">

    function FillSBValues(){

	var CurBlockHeight = CurrentBlock();
	var BlockHeightNextSB = NextSuperblock();

	document.getElementById('estB').innerHTML = Math.round(CurBlockHeight); 
	document.getElementById('NextSB').innerHTML = BlockHeightNextSB;

	var BlockHeightNextSBProposalDeadline = BlockHeightNextSB - BlocksBeforeSuperblockProposalDeadline; 
	var PDeadlinePassed = (CurBlockHeight > BlockHeightNextSBProposalDeadline  && CurBlockHeight <= BlockHeightNextSB);

	document.getElementById('SBPD').innerHTML = BlockHeightNextSBProposalDeadline + (PDeadlinePassed ? " (Deadline Passed)" : "");

	var DateOfNextPDeadline = new Date(DateOfBlock(BlockHeightNextSBProposalDeadline)); 
	document.getElementById('PDate').innerHTML = DateOfNextPDeadline + (PDeadlinePassed ? " (Deadline Passed)" : "");
	var PDHM = DaysHoursMins(DateOfNextPDeadline);
    document.getElementById('Pdays').innerHTML = PDeadlinePassed ? "N/A" : PDHM.d;
    document.getElementById('Phours').innerHTML = PDeadlinePassed ? "N/A" : PDHM.h;
    document.getElementById('Pmins').innerHTML = PDeadlinePassed ? "N/A" : PDHM.m;
     }

    FillSBValues();
</script>
