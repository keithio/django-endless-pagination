(function($) {
    $(document).ready(function(){
        $("a.endless_more").on("click", function() {
            var container = $(this).closest(".endless_container");
            var loading = container.find(".endless_loading");
            $(this).hide();
            loading.show();
            var data = "querystring_key=" + $(this).attr("rel").split(" ")[0];
            $.get($(this).attr("href"), data, function(data) {
                container.before(data);
                container.remove();
            });
            return false;
        });
        $("a.endless_page_link").on("click", function() {
            var page_template = $(this).closest(".endless_page_template");
            if (!page_template.hasClass("endless_page_skip")) {
                var data = "querystring_key=" + $(this).attr("rel").split(" ")[0];
                page_template.load($(this).attr("href"), data);
                return false;
            };
        }); 
    });
})(jQuery);
