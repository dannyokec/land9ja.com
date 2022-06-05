$(document).ready(
    function () {
        
       let searchReq = $(".home_adv_srch_opt .nav .nav-item .nav-link.active").text();

       if( searchReq == "Service's") {
            $("#serviceTick").show()
       } else { $("#serviceTick").hide() }
       if( searchReq == "Rent") {
            $("#rentTick").show()
       } else { $("#rentTick").hide() }
       if( searchReq == "Buy") {
            $("#buyTick").show()
       } else { $("#buyTick").hide() }

       $(".home_adv_srch_opt .nav .nav-item .nav-link").click(function () {
           let searchReq = $(this).text();

           $(".home_adv_srch_opt .nav .nav-item .nav-link").removeClass("active")
           $(this).addClass('active')

                if( searchReq == "Service's") {
                    $("#serviceTick").show()
            } else { $("#serviceTick").hide() }
            if( searchReq == "Rent") {
                    $("#rentTick").show()
            } else { $("#rentTick").hide() }
            if( searchReq == "Buy") {
                    $("#buyTick").show()
            } else { $("#buyTick").hide() }
            
       })


    }
)