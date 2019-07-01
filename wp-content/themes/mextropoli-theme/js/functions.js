/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(1);
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	__webpack_require__(4);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	_constants.w.load(function () {});
	// import './masonry'
	
	
	document.addEventListener('click', function (e) {
	
	    if (document.getElementsByClassName("programa").length > 0) {
	
	        if (e.target.className == 'card-day__fecha toggable') {
	            e.target.className = 'card-day__fecha toggable openToogle';
	        } else if (e.target.className == 'card-day__fecha toggable openToogle') {
	            e.target.className = 'card-day__fecha toggable';
	        }
	    };
	});
	
	(0, _constants.$)(document).ready(function () {
	    console.log('Hello world from El Cultivo!');
	    console.log('Hello world desde micorriza actualizado sin masonry');
	
	    // Botón Biografía
	    function menuFixed() {
	        var $fixed = (0, _constants.$)('#boton-fixed');
	        var $submenu = (0, _constants.$)('.submenu-hover');
	
	        if ((0, _constants.$)(window).scrollTop() > 430) $fixed.css({
	            'position': 'fixed',
	            'top': '0px'
	        });else $fixed.css({
	            'position': 'relative',
	            'top': 'auto'
	        });
	    }
	
	    (0, _constants.$)(window).scroll(menuFixed);
	
	    // Prueba Zoom Arbol
	
	    //CRONOLOGIA
	    var dropdown = (0, _constants.$)(".boton");
	    var lista = (0, _constants.$)(".listado-hover");
	    var open = false;
	
	    dropdown.on("click", function () {
	
	        // Si está abierto hay que cerrarlo.
	        if (open) {
	            lista.removeClass('opacidad');
	            console.log('REMOVE OPACCITY');
	            open = false;
	        } else {
	            lista.addClass('opacidad');
	            console.log('ADD OPACCITY');
	            open = true;
	        }
	    });
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $ = exports.$ = jQuery;
	var w = exports.w = $(window);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(1);
	
	_constants.w.load(function () {
	
							(0, _constants.$)('.banner-home__slider--desktop').slick({
													autoplay: true,
													dots: true,
													prevArrow: (0, _constants.$)('.galeria-anterior'),
													nextArrow: (0, _constants.$)('.galeria-siguiente')
							});
	
							(0, _constants.$)('.banner-home__slider--mobile').slick({
													autoplay: false,
													dots: true,
													prevArrow: (0, _constants.$)('.galeria-prev'),
													nextArrow: (0, _constants.$)('.galeria-next')
							});
	
							(0, _constants.$)('.galeria-expositores-slider').slick({
													autoplay: false,
													dots: false,
													prevArrow: (0, _constants.$)('.galeria-prev'),
													nextArrow: (0, _constants.$)('.galeria-next')
							});
	});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _constants = __webpack_require__(1);
	
	(0, _constants.$)(document).ready(function () {
	
		// - - - M e n ú   r e s p o n s i v e - - -
		var btnAbrir = (0, _constants.$)(".botones-responsive.open");
		var btnCerrar = (0, _constants.$)(".botones-responsive.close");
		var menuMobile = (0, _constants.$)(".menu-mobile");
	
		// Abrir menu lateral
		btnAbrir.click(function () {
			btnAbrir.hide();
			btnCerrar.show();
			menuMobile.show();
		});
	
		// Cerrar menu lateral
		btnCerrar.click(function () {
			btnCerrar.hide();
			btnAbrir.show();
			menuMobile.hide();
		});
	});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(1);
	
	_constants.w.load(function () {
	
	    // Modal que abre una galería
	    var modalGallery = (0, _constants.$)('.modal-gallery');
	
	    if (modalGallery.length) {
	
	        modalGallery.slick({
	            autoplay: true,
	            arrows: true,
	            dots: false,
	            prevArrow: (0, _constants.$)('.galeria-prev'),
	            nextArrow: (0, _constants.$)('.galeria-next')
	        });
	
	        var _modal = (0, _constants.$)('#modal');
	
	        (0, _constants.$)('.modalOpen').click(function () {
	            _modal.css('display', 'flex');
	            modalGallery.slick('setPosition', 0);
	        });
	
	        (0, _constants.$)('.close').click(function () {
	            _modal.css('display', 'none');
	        });
	
	        modalGallery.click(function () {
	            _modal.css('display', 'none');
	        });
	    }
	
	    //Modal de Iframe de Single  -- No se ocupa aquí --
	    var modalCont = (0, _constants.$)('.modal-iframe');
	    var modalIframe = (0, _constants.$)('#modalIframe');
	    var video = (0, _constants.$)('.galeria__video');
	
	    video.click(function () {
	        modalIframe.css('display', 'flex');
	        modalCont.slick('setPosition', 0);
	    });
	
	    (0, _constants.$)('.close').click(function () {
	        modalIframe.css('display', 'none');
	    });
	
	    modalIframe.click(function () {
	        modalIframe.css('display', 'none');
	    });
	
	    //Modal que abre el order de Search -- No se ocupa aquí --
	    var abrirSearch = (0, _constants.$)('#search-order');
	    var close = (0, _constants.$)('.search__close');
	    var modalSearch = (0, _constants.$)('.search');
	    var abrirFilter = (0, _constants.$)('#search-filter');
	    var modalFilter = (0, _constants.$)('.filter');
	
	    abrirSearch.click(function () {
	        modalSearch.addClass('view');
	    });
	
	    close.click(function () {
	        modalSearch.removeClass('view');
	    });
	
	    abrirFilter.click(function () {
	        modalFilter.addClass('view');
	    });
	
	    close.click(function () {
	        modalFilter.removeClass('view');
	    });
	
	    var modal = (0, _constants.$)('.modal');
	
	    (0, _constants.$)('.modalOpen').click(function () {
	        // console.log(this)
	        var dataIndex = (0, _constants.$)(this).attr('data-index');
	        (0, _constants.$)('#' + dataIndex).css('display', 'flex');
	
	        (0, _constants.$)('.galeria-expositores-slider').slick('unslick');
	        var modal = (0, _constants.$)(this).data("index");
	
	        var prev = (0, _constants.$)("#" + modal).find(".galeria-prev");
	        var next = (0, _constants.$)("#" + modal).find(".galeria-next");
	        var slider = (0, _constants.$)("#" + modal).find(".galeria-expositores-slider").attr("id");
	        console.log((0, _constants.$)(this).data("index"));
	        console.log(slider);
	
	        (0, _constants.$)('#' + slider).slick({
	            autoplay: false,
	            dots: false,
	            prevArrow: (0, _constants.$)("#" + (0, _constants.$)(prev).attr("id")),
	            nextArrow: (0, _constants.$)("#" + (0, _constants.$)(next).attr("id"))
	        });
	    });
	
	    (0, _constants.$)('.close').click(function () {
	        modal.css('display', 'none');
	    });
	
	    (0, _constants.$)('.modalOpenSedes').click(function () {
	        console.log(this);
	        var dataIndex = (0, _constants.$)(this).attr('data-index');
	
	        console.log(dataIndex);
	        // console.log($(this).data("index"));
	
	        (0, _constants.$)('#' + dataIndex).css('display', 'flex');
	        (0, _constants.$)('#' + dataIndex).css('width', '100%');
	
	        console.log((0, _constants.$)('#' + dataIndex));
	    });
	});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(1);
	
	_constants.w.load(function () {
	
	    // Botón top
	    (0, _constants.$)('#nav_up').click(function (e) {
	        (0, _constants.$)('html, body').animate({ scrollTop: '0px' }, 2000);
	    });
	});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _constants = __webpack_require__(1);
	
	_constants.w.load(function () {});
	
	(0, _constants.$)(document).ready(function () {
	
	    function findDupes() {
	        var all = (0, _constants.$)(".loop-expositores__card");
	        var temp = [];
	
	        for (var i = 0; i < all.length; i++) {
	            if (all[i].id.length > 0 && (0, _constants.$)("[id='" + all[i].id + "']").length > 1) {
	                // console.log(all[i].id);
	                if (temp.indexOf(all[i].id) > -1) {
	                    (0, _constants.$)(all[i]).css('display', 'none');
	                } else {
	                    temp.push(all[i].id);
	                }
	            }
	            // console.log(all[i].id);
	        }
	        // console.log(temp);
	    }
	    findDupes();
	});

/***/ })
/******/ ]);
//# sourceMappingURL=functions.js.map