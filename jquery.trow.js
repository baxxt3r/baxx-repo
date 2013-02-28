/* 
* author: Catalin Anghel
* email: catalin.anghel@gmail.com
* */
(function($) {
  $.fn.trow = function(options) {
  var settings = $.extend({}, {calculate : [], precision : 2}, options);
    return this.each(function() {
	  var myTbody = $(this).children('tbody');
      var trs = $(myTbody).children('tr');
	  trs.each(addCls);
	  if(settings.calculate.length > 0) {
		calculator($(this), settings.calculate, settings.precision);
	  }
    });

	function addCls() {
		var i = 0;
		$(this).children('td').each(function() {
			$(this).addClass("trow-td-"+i++);
		});
	}
	function calculator(table, calculate, precision) {

		var myTbody = $(table).children('tbody');
		var rows = $(myTbody).children('tr');
		var cols = $(myTbody).children('tr:first').children('td').length;
		if($(table).children('tfoot').length < 1) { $(table).append('<tfoot></tfoot>'); }
		$(table).children('tfoot').append('<tr id="plugin-trow">');
		for (i=0; i<cols; i++) { $('#plugin-trow').append('<td id="total-'+i+'">&nbsp;</td>'); }
		
		for (j=0; j<calculate.length; j++) {
			total = 0.00; 
			rows.children('td.trow-td-'+calculate[j]).each(function(){ 
				if(!isNaN(parseFloat($(this).html()))) {
					total += parseFloat($(this).html());
				}
			});	
			$('#total-'+calculate[j]).html(total.toFixed(precision));
		}
	}
  }
})(jQuery);
