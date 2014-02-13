$(document).ready(function() {
    $("li.PageListActiondelete a").live("click", function(el){
        if(!confirm(config.ProcessPageDelete.sure)) { return false; }
    });
});
