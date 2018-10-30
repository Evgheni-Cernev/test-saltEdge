$ (function() {
      let windowsize;
      $(window).resize(function() {
        windowsize = $(window).width();
      });

      $('.feature button').click((e) => {
        $('.feature button').removeClass("active");
        $(e.target).addClass('active');

        const desctopContainerPrefix = 'ipad';
        const mobileContainerPrefix = 'iphone';
        var get_id = e.target.id;

        let get_current;
        if(windowsize < 1000 || !windowsize) {
          get_current = $('.images-' + mobileContainerPrefix + '-slide .' + get_id);
        } else {
          get_current = $('.images-' + desctopContainerPrefix + '-slide .' + get_id);
        }
        
        $('.slide').not(get_current).hide();
        get_current.show();
    });
});
