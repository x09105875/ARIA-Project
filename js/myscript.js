$(document).ready(function(){	
	//build dropdown
	$("<select />").appendTo("nav#main_menu div");
	
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "Please choose page"
	}).appendTo("nav#main_menu select");	
	
	// Populate dropdowns with the first menu items
	$("nav#main_menu li a").each(function() {
	 	var el = $(this);
	 	$("<option />", {
	     	"value"   : el.attr("href"),
	    	"text"    : el.text()
	 	}).appendTo("nav#main_menu select");
	});
	
	//make responsive dropdown menu actually work			
  	$("nav#main_menu select").change(function() {
    	window.location = $(this).find("option:selected").val();
  	});
	
	//Iframe transparent
	$("iframe").each(function(){
		var ifr_source = $(this).attr('src');
		var wmode = "wmode=transparent";
		if(ifr_source.indexOf('?') != -1) {
		var getQString = ifr_source.split('?');
		var oldString = getQString[1];
		var newString = getQString[0];
		$(this).attr('src',newString+'?'+wmode+'&'+oldString);
		}
		else $(this).attr('src',ifr_source+'?'+wmode);
	});
			
	//Twitter Setup
	$(".tweet_block").tweet({
	  join_text: "auto",
	  username: "envato",
	  avatar_size: 0,
	  count: 3,
	  auto_join_text_default: "",
	  auto_join_text_ed: "",
	  auto_join_text_ing: "",
	  auto_join_text_reply: "",
	  auto_join_text_url: "",
	  loading_text: "loading tweets..."
	});	
	
	//Flickr Integration
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id=99148474@N03&lang=en-us&format=json&jsoncallback=?", function(data){
		$.each(data.items, function(i,item){
			if(i<=11){ // <— change this number to display more or less images
				$("<img/>").attr("src", item.media.m.replace('_m', '_s')).appendTo(".FlickrImages ul")
				.wrap("<li><a href='" + item.link + "' target='_blank' title='Flickr'></a></li>");
			}
		});			
    });	
	
	//Tooltip
	$('.follow_us a').tooltip();
	
	//PrettyPhoto
	$("a[rel^='prettyPhoto']").prettyPhoto();
	
	//Image hover
	$(".hover_img").live('mouseover',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:0.2},300);
			$(".preloader").css({'background':'none'});
		}
	);
	$(".hover_img").live('mouseout',function(){
			var info=$(this).find("img");
			info.stop().animate({opacity:1},300);
			$(".preloader").css({'background':'none'});
		}
	);						
});	

	
//Stats Results script
		
			var results = new StatsFC_Results('afiq5mPwsNk9BK9Veqll37TOBumlSifkVbEW_mN6');
			results.competition = 'EPL';
			results.team = 'Liverpool';
			results.from = '-10 weeks';
			results.showBadges = true;
			results.highlight = 'Liverpool';
			results.display('statsfc-results');
		


//Stats Fixtures script
<script>
    var fixtures = new StatsFC_Fixtures('afiq5mPwsNk9BK9Veqll37TOBumlSifkVbEW_mN6');
    fixtures.competition = 'EPL';
	fixtures.team = 'Liverpool';
    fixtures.showBadges = true;
    fixtures.to = 'next Monday + 8 week';
	fixtures.highlight = 'Liverpool';
    fixtures.display('statsfc-fixtures');
</script>

//Stats League Table script
<script>
    var table = new StatsFC_Table('afiq5mPwsNk9BK9Veqll37TOBumlSifkVbEW_mN6');
    table.competition = 'EPL';
    table.tableType = 'full';
	table.highlight = 'Liverpool';
    table.showBadges = true;
    //table.showForm = true;
    table.display('statsfc-table');
</script>

//Stats Team Form script
<script>
    var form = new StatsFC_Form('afiq5mPwsNk9BK9Veqll37TOBumlSifkVbEW_mN6');
    form.competition = 'EPL';
	form.highlight = 'Liverpool';
    form.showBadges = true;
    form.showScore = true;
    form.display('statsfc-form');
</script>

//Stats Top Scorers
<script>
    var topScorers = new StatsFC_TopScorers('afiq5mPwsNk9BK9Veqll37TOBumlSifkVbEW_mN6');
    topScorers.competition = 'EPL';
	topScorers.limit = 10;
	topScorers.highlight = 'Liverpool';
    topScorers.showBadges = true;
    topScorers.display('statsfc-top-scorers');
</script>