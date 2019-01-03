$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function() {
	$('.collapse:has(.card-body)').prev('.card-header').prepend('<i class="fa fa-1x fa-plus pull-right"></i> ');
	$('.card-header').click(function() {
		$(this).children('i').toggleClass('fa-plus').toggleClass('fa-minus');
	});
});

$(document).ready(function() {
	$('#toggle').click(function() {
		if ($('.collapse').hasClass('show')) {
			$('.collapse').removeClass('show');
			$('#toggle').html('+ Expand All Panels');
			$('.card-header').children('i').removeClass('fa-minus').addClass('fa-plus');
			$('div').attr('style', '');
		} else {
			$('.collapse').addClass('show');
			$('#toggle').html('- Collapse All Panels');
			$('.card-header').children('i').removeClass('fa-plus').addClass('fa-minus');
			$('div').attr('style', '');
		}
	});
});

$(document).ready(function() {
    $('input[type=radio][name=group1]').change(function() {
        if (this.value == 'dangerButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-danger").parent().parent().removeAttr('hidden');
        }
        if (this.value == 'primaryButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-primary").parent().parent().removeAttr('hidden');
        }
        if (this.value == 'warningButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-warning").parent().parent().removeAttr('hidden');
        }
        if (this.value == 'successButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-success").parent().parent().removeAttr('hidden');
        }
        if (this.value == 'infoButton') {
			$(".card").parent().parent().attr('hidden',true);
			$(".card.bg-info").parent().parent().removeAttr('hidden');
        }
    });
});

$('#clearAllButton').click(function() {
	$('input[type=radio]').prop('checked', false);
	$(".card").parent().parent().attr('hidden',false);
});
 
$(document).ready(function() {
	$(".search").keyup(function() {
		var str = $(".search").val();
		$(".accordion").each(function(index) {
			if ($(this).attr("data-title")) {
				if (!$(this).attr("data-title").match(new RegExp(str, "i"))) {
					$(this).attr('hidden',true);
				} else {
					$(this).removeAttr('hidden');
				}
			}
		});
	});
});
 