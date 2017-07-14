// carga de contenido comun, funcion que carga en todas mis secciones
function cargarContenidoComun()
{
	$("header").load("html/header.html");
	$("footer").load("html/footer.html");
	$("#contenido").css({display:"none"}).fadeIn("slow");
	$("header").before("<input type='checkbox' id='menu-movil' /><label for='menu-movil'></label>");


// ---------- CARGA DE SECC-SERVICIOS -------------
	$("#serv_semi_contenido").load("html/sec_cctv.html");
	$("#serv_cctv").addClass("menu_serv_prod_actual");
	
	$(".serv_menu").click(function(){
		$(".serv_menu").removeClass("menu_serv_prod_actual")
		$(this).addClass("menu_serv_prod_actual")
	});

	$("#serv_cctv").on("click",function(){		
		$("#serv_semi_contenido").load("html/sec_cctv.html");
		$("#serv_semi_contenido").css({display:"none"}).fadeIn(1000);
	});

	$("#serv_alarmas").on("click",function(){		
		$("#serv_semi_contenido").load("html/sec_sist_alarmas.html");
		$("#serv_semi_contenido").css({display:"none"}).fadeIn(1000);
	});

	$("#serv_telefonia").on("click",function(){		
		$("#serv_semi_contenido").load("html/sec_telef.html");
		$("#serv_semi_contenido").css({display:"none"}).fadeIn(1000);
	});

	$("#serv_Estructurado").on("click",function(){		
		$("#serv_semi_contenido").load("html/sec_redes.html");
		$("#serv_semi_contenido").css({display:"none"}).fadeIn(1000);
	});

	$("#serv_inalambricos").on("click",function(){		
		$("#serv_semi_contenido").load("html/sec_inalambricos.html");
		$("#serv_semi_contenido").css({display:"none"}).fadeIn(1000);
	});


// ---------- CARGA DE SECC-PRODUCTOS -------------
	$("#semi_contenido_produc").load("html/productos/c_analogicas.html");
	$("#c_analogicas").addClass("prod_submenu_actual");

	$(".prod_submenu_aside").click(function(){
		$(".prod_submenu_aside").removeClass("prod_submenu_actual");
		$(this).addClass("prod_submenu_actual");
	});

	$("#c_analogicas").on("click",function(){		
		$("#semi_contenido_produc").load("html/productos/c_analogicas.html");
		$("#semi_contenido_produc").css({display:"none"}).fadeIn(1000);
	});

	$("#c_ip").on("click",function(){		
		$("#semi_contenido_produc").load("html/productos/c_ip.html");
		$("#semi_contenido_produc").css({display:"none"}).fadeIn(1000);
	});

	$("#c_turbohd").on("click",function(){		
		$("#semi_contenido_produc").load("html/productos/c_turbohd.html");
		$("#semi_contenido_produc").css({display:"none"}).fadeIn(1000);
	});

	$("#c_hd_sdi").on("click",function(){		
		$("#semi_contenido_produc").load("html/productos/c_hd_sdi.html");
		$("#semi_contenido_produc").css({display:"none"}).fadeIn(1000);
	});

	$("#r_cables_parcheo").on("click",function(){		
		$("#semi_contenido_produc").load("html/productos/r_cables_parcheo.html");
		$("#semi_contenido_produc").css({display:"none"}).fadeIn(1000);
	});

	$("#r_cableado").on("click",function(){		
		$("#semi_contenido_produc").load("html/productos/r_cableado.html");
		$("#semi_contenido_produc").css({display:"none"}).fadeIn(1000);
	});

	$("#r_inalambricas").on("click",function(){		
		$("#semi_contenido_produc").load("html/productos/r_inalambricas.html");
		$("#semi_contenido_produc").css({display:"none"}).fadeIn(1000);
	});
}

function menu()
{
	$(document).ready(function(){
		$("#menu_inicio").addClass("menu_inicial");
	});
}

function slider()
{
	$("#slider").flexslider({
		animation:"slide",
		controlNav:false
	});
}



function efectos()
{
	$(".btn1").on("mouseover",function(){
		$("#sec2_img1").removeClass("giros2");
		$("#sec2_img1").addClass("giros");
	});
	$(".btn1").on("mouseout",function(){
		$("#sec2_img1").removeClass("giros");
		$("#sec2_img1").addClass("giros2");
	});

	$(".btn2").on("mouseover",function(){
		$("#sec2_img2").removeClass("giros2");
		$("#sec2_img2").addClass("giros");
	});
	$(".btn2").on("mouseout",function(){
		$("#sec2_img2").removeClass("giros");
		$("#sec2_img2").addClass("giros2");
	});


// EFECTOS PARA "ACERCA DE"
	$(document).ready(function(){
		$(".quienes_somos").css("background","#0087e0");
		$(".quienes_somos_oculto").show("slow");
	});

	$(".quienes_somos").on("click",function(){
		$(".quienes_somos").css("background","#0087e0");
		$(".hacemos").css("background","#34495e");
		$(".porque_hacemos").css("background","#34495e");
		$(".quienes_somos_oculto").show("slow");
		$(".hacemos_oculto").hide(1000);
		$(".porque_hacemos_oculto").hide(1000);
	});

	$(".hacemos").on("click",function(){
		$(".hacemos").css("background","#0087e0");
		$(".quienes_somos").css("background","#34495e");
		$(".porque_hacemos").css("background","#34495e");
		$(".hacemos_oculto").show("slow");
		$(".quienes_somos_oculto").hide(1000);
		$(".porque_hacemos_oculto").hide(1000);
	});

	$(".porque_hacemos").on("click",function(){
		$(".porque_hacemos").css("background","#0087e0");
		$(".quienes_somos").css("background","#34495e");
		$(".hacemos").css("background","#34495e");
		$(".porque_hacemos_oculto").show("slow");
		$(".quienes_somos_oculto").hide(1000);
		$(".hacemos_oculto").hide(1000);
	});

 $("#owl-demo").owlCarousel({
            autoPlay: 2500,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
          });


// EFECTOS PARA "CASOS DE EXITO"
	$(document).ready(function(){
		$(".exito_sec2_img").css("display","none");
		$(".exito_sec2_img").show(3000);
	});

// EFECTOS PARA "SCROLL"
	$(window).on("scroll",scrollArriba);

		$(".up").on("click",function(){
			$("body,html").animate({
				scrollTop:0
			},800)
		});

	};


// function fancybox()
// {
// 	$(".mostrar_cliente").fancybox();
// };

function scrollArriba()
{
	return ($(window).scrollTop()>100)?$(".up").fadeIn():$(".up").fadeOut();
}

function cargarEfectos()
{
	cargarContenidoComun();
	slider();
	menu();
	efectos();
	// fancybox();

}

