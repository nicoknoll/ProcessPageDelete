$(document).ready(function() {
    $("li.PageListActiondelete a").on("click", function(el){
        if(!confirm(config.ProcessPageDelete.sure)) { return false; }
    });
});
