function drawStackedPercentPlot(id, title, years){
	$(function () {
    $(id).highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: title
        },
        xAxis: {
					categories: years,
          tickmarkPlacement: 'on',
          title: {
              enabled: false
          }
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
	          name: 'favoriteIsHome',
	          data: [
	          	0.03544177,
	          	0.03593608,
	          	0.03409113,
	          	0.03634523,
	          	0.03898551,
	          	0.0351043,
	          	0.03776337,
	          ]
		      }, {
	          name: 'attendance/capacity',
	          data: [
	          	0.12289221,
	          	0.12597458,
	          	0.12176127,
	          	0.11578766,
	          	0.12148938,
	          	0.12482545,
	          	0.12378533,
	          ]
		      }, {
		      	name: 'ticketPrice',
		      	data: [
		      		0.12289221,
		      		0.12597458,
		      		0.12176127,
		      		0.11578766,
		      		0.12148938,
		      		0.12482545,
		      		0.12378533,
		      	]
		      },
		      {
		      	name: 'averageHomeAttendance',
		      	data: [
		      		0.12488685,
		      		0.12845233,
		      		0.11433031,
		      		0.11960053,
		      		0.12099072,
		      		0.1261068,
		      		0.12409796,
		      	]
		      },
		      {
		      	name: 'population',
		      	data: [
		      		0.12367949,
		      		0.12120154,
		      		0.13610216,
		      		0.12111693,
		      		0.11980726,
		      		0.12899117,
		      		0.12000157,
		      	]
		      },
		      {
		      	name: 'favoriteWinStreak',
		      	data: [
		      		0.1022061,     
		      		0.10776165,      
		      		0.10373131,     
		      		0.11862136,     
		      		0.10527462,     
		      		0.10514634,     
		      		0.1097675, 
		      	]
		      },
		      {
		      	name: 'underdogWinStreak',
		      	data: [
		      		0.10331599,
		      		0.1021323,
		      		0.09394376,
		      		0.10655944,
		      		0.10813164,
		      		0.10864912,
		      		0.11728059,
		      	]
		      },
		      {
		      	name: 'powerRanking',
		      	data: [
		      		0.13286107,
		      		0.12854074,
		      		0.13572969,
		      		0.13478452,
		      		0.14140494,
		      		0.13297465,
		      		0.13419817,
		      	]
		      },
		      {
		      	name: 'valueOfTeam',
		      	data: [
		      		0.13383122,
		      		0.13322094,
		      		0.13967848,
		      		0.12199328,
		      		0.12421476,
		      		0.12701442,
		      		0.11970687,
		      	]
		      }    
        ]
    });
});
}