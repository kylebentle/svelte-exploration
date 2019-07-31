<script>
	let headline = 'Largest Democratic vote decreases, 2012-2016';
	let map_explainer = 'Counties with the largest decreases in votes for Democratic presidential candidate between 2012 and 2016';
	let data = [{"rank":1,"state":"Michigan","county":"Wayne","obama":"595,846","clinton":"519,444","raw_diff":"-76,402","pct_diff":"-12.82%"},{"rank":2,"state":"Ohio","county":"Cuyahoga","obama":"447,232","clinton":"398,271","raw_diff":"-48,961","pct_diff":"-10.95%"},{"rank":3,"state":"Wisconsin","county":"Milwaukee","obama":"332,438","clinton":"288,797","raw_diff":"-43,641","pct_diff":"-13.13%"},{"rank":4,"state":"Michigan","county":"Macomb","obama":"208,016","clinton":"176,317","raw_diff":"-31,699","pct_diff":"-15.24%"},{"rank":5,"state":"Hawaii","county":"Honolulu","obama":"204,349","clinton":"175,696","raw_diff":"-28,653","pct_diff":"-14.02%"},{"rank":6,"state":"Michigan","county":"Genesee","obama":"128,978","clinton":"102,751","raw_diff":"-26,227","pct_diff":"-20.33%"},{"rank":7,"state":"Ohio","county":"Lucas","obama":"136,616","clinton":"110,833","raw_diff":"-25,783","pct_diff":"-18.87%"},{"rank":8,"state":"Tennessee","county":"Shelby","obama":"232,443","clinton":"208,992","raw_diff":"-23,451","pct_diff":"-10.09%"},{"rank":9,"state":"Ohio","county":"Stark","obama":"89,432","clinton":"68,146","raw_diff":"-21,286","pct_diff":"-23.80%"},{"rank":10,"state":"Ohio","county":"Mahoning","obama":"77,059","clinton":"57,381","raw_diff":"-19,678","pct_diff":"-25.54%"}]

  import Ai2html from './Ai2html.svelte';
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap");@import url("https://fonts.googleapis.com/css?family=Spectral:300,400,700&display=swap");.dataviz-wrapper p{margin:1.3em 0}.trib-table{width:100%;margin:0 0 25px 0;border-collapse:collapse}.trib-table thead{padding-bottom:5px}.trib-table tbody tr{vertical-align:top}.trib-table tbody tr:first-child td{padding-top:12px}.trib-table td,.trib-table th{padding:7px 3px}.trib-table td:first-child,.trib-table th:first-child{padding-left:0}.trib-table td:last-child,.trib-table th:last-child{padding-right:0}.trib-table th{padding:0 3px 3px 3px;font-weight:bold;text-align:left;color:black}.trib-table th.align-right,.trib-table td.align-right{text-align:right}.trib-table thead{border-bottom:2px solid black}.trib-table th{font:16px/1.4em Open Sans,sans-serif;font-weight:bold;letter-spacing:0}.trib-table td{font:16px/1.4em Open Sans,sans-serif;font-weight:normal;letter-spacing:0}.trib-table td,.trib-table th{padding:7px 3px}.trib-table tr{border-bottom:1px solid #ccc}.trib-table tr:last-child{border-bottom:2px solid black}.trib-table--zebra td,.trib-table--zebra th{padding:7px}.trib-table--zebra td:first-child,.trib-table--zebra th:first-child{padding-left:7px}.trib-table--zebra td:last-child,.trib-table--zebra th:last-child{padding-right:7px}.trib-table--zebra tbody tr:nth-child(even){background-color:#cbdded}.trib-table--zebra tbody tr:nth-child(odd){background-color:rgba(0,0,0,0)}.trib-table--compressed{width:100%;margin:0 0 25px 0;border-collapse:collapse}.trib-table--compressed thead{padding-bottom:5px}.trib-table--compressed tbody tr{vertical-align:top}.trib-table--compressed tbody tr:first-child td{padding-top:12px}.trib-table--compressed td,.trib-table--compressed th{padding:7px 3px}.trib-table--compressed td:first-child,.trib-table--compressed th:first-child{padding-left:0}.trib-table--compressed td:last-child,.trib-table--compressed th:last-child{padding-right:0}.trib-table--compressed th{padding:0 3px 3px 3px;font-weight:bold;text-align:left;color:black}.trib-table--compressed th.align-right,.trib-table--compressed td.align-right{text-align:right}.trib-table--compressed thead{border-bottom:1px solid black}.trib-table--compressed th{font:14px/1.4em Open Sans,sans-serif;font-weight:bold;letter-spacing:0}.trib-table--compressed td{font:14px/1.4em Open Sans,sans-serif;font-weight:normal;letter-spacing:0}.trib-table--compressed td,.trib-table--compressed th{padding:4px 3px}.trib-table--compressed tr{border-bottom:none}.trib-table--compressed tr:last-child{border-bottom:none}.dataviz-wrapper h1{font:18px/1.4em Open Sans,sans-serif;font-weight:bold;letter-spacing:0;margin:0}.dataviz-wrapper .map-explainer{font:14px/1.4em Open Sans,sans-serif;font-weight:normal;letter-spacing:0;margin:0 0 15px 0}#g-counties-box .g-artboard{margin:0 !important}.dataviz-wrapper .g-artboard .g-state-names p.g-pstyle2{color:#888 !important}.trib-table .table__rank{margin-right:10px}.trib-table td.table__rank{width:12px;background-color:black;color:white;text-align:center;font-weight:bold;border-bottom:1px solid white}.trib-table .table__totals{text-align:right}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.credits p,.trb_mainContent .credits p{font:13px/1.3em Open Sans,sans-serif;font-weight:normal;letter-spacing:0}.dataviz-wrapper{max-width:580px}@media all and (min-width: 450px){p{font-size:18px;line-height:1.5em}}
</style>

<div class='dataviz-wrapper'>

  <h1>{headline}</h1>
  <p class='map-explainer'>{map_explainer}</p>

  <Ai2html/>

	<table class='trib-table trib-table--compressed'>
	  <thead>
	    <th class='table__rank'>Rank</th>
	    <th class='table__county'>County, State</th>
	    <th class='table__totals'>Total change (Percent)</th>
	  </thead>
	  <tbody>
	    {#each data as county }
	      <tr>
	        <td class='table__rank'>{county.rank}</td>
	        <td class='table__county'>{county.county} County, {county.state}</td>
	        <td class='table__totals'><strong>{county.raw_diff}</strong> ({county.pct_diff})</td>
	      </tr>
	    {/each}
	  </tbody>
	</table>
</div>