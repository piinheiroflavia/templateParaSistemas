/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./wwwroot/vendor/libs/formvalidation/dist/js/locales/tr_TR.js":
/*!*********************************************************************!*\
  !*** ./wwwroot/vendor/libs/formvalidation/dist/js/locales/tr_TR.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);\n})(this, function () {\n  'use strict';\n\n  /**\n   * Turkish language package\n   * Translated By @CeRBeR666\n   */\n  var tr_TR = {\n    base64: {\n      default: 'Lütfen 64 bit tabanına uygun bir giriş yapınız'\n    },\n    between: {\n      default: 'Lütfen %s ile %s arasında bir değer giriniz',\n      notInclusive: 'Lütfen sadece %s ile %s arasında bir değer giriniz'\n    },\n    bic: {\n      default: 'Lütfen geçerli bir BIC numarası giriniz'\n    },\n    callback: {\n      default: 'Lütfen geçerli bir değer giriniz'\n    },\n    choice: {\n      between: 'Lütfen %s - %s arası seçiniz',\n      default: 'Lütfen geçerli bir değer giriniz',\n      less: 'Lütfen minimum %s kadar değer giriniz',\n      more: 'Lütfen maksimum %s kadar değer giriniz'\n    },\n    color: {\n      default: 'Lütfen geçerli bir codu giriniz'\n    },\n    creditCard: {\n      default: 'Lütfen geçerli bir kredi kartı numarası giriniz'\n    },\n    cusip: {\n      default: 'Lütfen geçerli bir CUSIP numarası giriniz'\n    },\n    date: {\n      default: 'Lütfen geçerli bir tarih giriniz',\n      max: 'Lütfen %s tarihinden önce bir tarih giriniz',\n      min: 'Lütfen %s tarihinden sonra bir tarih giriniz',\n      range: 'Lütfen %s - %s aralığında bir tarih giriniz'\n    },\n    different: {\n      default: 'Lütfen farklı bir değer giriniz'\n    },\n    digits: {\n      default: 'Lütfen sadece sayı giriniz'\n    },\n    ean: {\n      default: 'Lütfen geçerli bir EAN numarası giriniz'\n    },\n    ein: {\n      default: 'Lütfen geçerli bir EIN numarası giriniz'\n    },\n    emailAddress: {\n      default: 'Lütfen geçerli bir E-Mail adresi giriniz'\n    },\n    file: {\n      default: 'Lütfen geçerli bir dosya seçiniz'\n    },\n    greaterThan: {\n      default: 'Lütfen %s ye eşit veya daha büyük bir değer giriniz',\n      notInclusive: 'Lütfen %s den büyük bir değer giriniz'\n    },\n    grid: {\n      default: 'Lütfen geçerli bir GRId numarası giriniz'\n    },\n    hex: {\n      default: 'Lütfen geçerli bir Hexadecimal sayı giriniz'\n    },\n    iban: {\n      countries: {\n        AD: 'Andorra',\n        AE: 'Birleşik Arap Emirlikleri',\n        AL: 'Arnavutluk',\n        AO: 'Angola',\n        AT: 'Avusturya',\n        AZ: 'Azerbaycan',\n        BA: 'Bosna Hersek',\n        BE: 'Belçika',\n        BF: 'Burkina Faso',\n        BG: 'Bulgaristan',\n        BH: 'Bahreyn',\n        BI: 'Burundi',\n        BJ: 'Benin',\n        BR: 'Brezilya',\n        CH: 'İsviçre',\n        CI: 'Fildişi Sahili',\n        CM: 'Kamerun',\n        CR: 'Kosta Rika',\n        CV: 'Cape Verde',\n        CY: 'Kıbrıs',\n        CZ: 'Çek Cumhuriyeti',\n        DE: 'Almanya',\n        DK: 'Danimarka',\n        DO: 'Dominik Cumhuriyeti',\n        DZ: 'Cezayir',\n        EE: 'Estonya',\n        ES: 'İspanya',\n        FI: 'Finlandiya',\n        FO: 'Faroe Adaları',\n        FR: 'Fransa',\n        GB: 'İngiltere',\n        GE: 'Georgia',\n        GI: 'Cebelitarık',\n        GL: 'Grönland',\n        GR: 'Yunansitan',\n        GT: 'Guatemala',\n        HR: 'Hırvatistan',\n        HU: 'Macaristan',\n        IE: 'İrlanda',\n        IL: 'İsrail',\n        IR: 'İran',\n        IS: 'İzlanda',\n        IT: 'İtalya',\n        JO: 'Ürdün',\n        KW: 'Kuveit',\n        KZ: 'Kazakistan',\n        LB: 'Lübnan',\n        LI: 'Lihtenştayn',\n        LT: 'Litvanya',\n        LU: 'Lüksemburg',\n        LV: 'Letonya',\n        MC: 'Monako',\n        MD: 'Moldova',\n        ME: 'Karadağ',\n        MG: 'Madagaskar',\n        MK: 'Makedonya',\n        ML: 'Mali',\n        MR: 'Moritanya',\n        MT: 'Malta',\n        MU: 'Mauritius',\n        MZ: 'Mozambik',\n        NL: 'Hollanda',\n        NO: 'Norveç',\n        PK: 'Pakistan',\n        PL: 'Polanya',\n        PS: 'Filistin',\n        PT: 'Portekiz',\n        QA: 'Katar',\n        RO: 'Romanya',\n        RS: 'Serbistan',\n        SA: 'Suudi Arabistan',\n        SE: 'İsveç',\n        SI: 'Slovenya',\n        SK: 'Slovakya',\n        SM: 'San Marino',\n        SN: 'Senegal',\n        TL: 'Doğu Timor',\n        TN: 'Tunus',\n        TR: 'Turkiye',\n        VG: 'Virgin Adaları, İngiliz',\n        XK: 'Kosova Cumhuriyeti'\n      },\n      country: 'Lütfen geçerli bir IBAN numarası giriniz içinde %s',\n      default: 'Lütfen geçerli bir IBAN numarası giriniz'\n    },\n    id: {\n      countries: {\n        BA: 'Bosna Hersek',\n        BG: 'Bulgaristan',\n        BR: 'Brezilya',\n        CH: 'İsviçre',\n        CL: 'Şili',\n        CN: 'Çin',\n        CZ: 'Çek Cumhuriyeti',\n        DK: 'Danimarka',\n        EE: 'Estonya',\n        ES: 'İspanya',\n        FI: 'Finlandiya',\n        HR: 'Hırvatistan',\n        IE: 'İrlanda',\n        IS: 'İzlanda',\n        LT: 'Litvanya',\n        LV: 'Letonya',\n        ME: 'Karadağ',\n        MK: 'Makedonya',\n        NL: 'Hollanda',\n        PL: 'Polanya',\n        RO: 'Romanya',\n        RS: 'Sırbistan',\n        SE: 'İsveç',\n        SI: 'Slovenya',\n        SK: 'Slovakya',\n        SM: 'San Marino',\n        TH: 'Tayland',\n        TR: 'Turkiye',\n        ZA: 'Güney Afrika'\n      },\n      country: 'Lütfen geçerli bir kimlik numarası giriniz içinde %s',\n      default: 'Lütfen geçerli bir tanımlama numarası giriniz'\n    },\n    identical: {\n      default: 'Lütfen aynı değeri giriniz'\n    },\n    imei: {\n      default: 'Lütfen geçerli bir IMEI numarası giriniz'\n    },\n    imo: {\n      default: 'Lütfen geçerli bir IMO numarası giriniz'\n    },\n    integer: {\n      default: 'Lütfen geçerli bir numara giriniz'\n    },\n    ip: {\n      default: 'Lütfen geçerli bir IP adresi giriniz',\n      ipv4: 'Lütfen geçerli bir IPv4 adresi giriniz',\n      ipv6: 'Lütfen geçerli bri IPv6 adresi giriniz'\n    },\n    isbn: {\n      default: 'Lütfen geçerli bir ISBN numarası giriniz'\n    },\n    isin: {\n      default: 'Lütfen geçerli bir ISIN numarası giriniz'\n    },\n    ismn: {\n      default: 'Lütfen geçerli bir ISMN numarası giriniz'\n    },\n    issn: {\n      default: 'Lütfen geçerli bir ISSN numarası giriniz'\n    },\n    lessThan: {\n      default: 'Lütfen %s den düşük veya eşit bir değer giriniz',\n      notInclusive: 'Lütfen %s den büyük bir değer giriniz'\n    },\n    mac: {\n      default: 'Lütfen geçerli bir MAC Adresi giriniz'\n    },\n    meid: {\n      default: 'Lütfen geçerli bir MEID numarası giriniz'\n    },\n    notEmpty: {\n      default: 'Bir değer giriniz'\n    },\n    numeric: {\n      default: 'Lütfen geçerli bir float değer giriniz'\n    },\n    phone: {\n      countries: {\n        AE: 'Birleşik Arap Emirlikleri',\n        BG: 'Bulgaristan',\n        BR: 'Brezilya',\n        CN: 'Çin',\n        CZ: 'Çek Cumhuriyeti',\n        DE: 'Almanya',\n        DK: 'Danimarka',\n        ES: 'İspanya',\n        FR: 'Fransa',\n        GB: 'İngiltere',\n        IN: 'Hindistan',\n        MA: 'Fas',\n        NL: 'Hollanda',\n        PK: 'Pakistan',\n        RO: 'Romanya',\n        RU: 'Rusya',\n        SK: 'Slovakya',\n        TH: 'Tayland',\n        US: 'Amerika',\n        VE: 'Venezüella'\n      },\n      country: 'Lütfen geçerli bir telefon numarası giriniz içinde %s',\n      default: 'Lütfen geçerli bir telefon numarası giriniz'\n    },\n    promise: {\n      default: 'Lütfen geçerli bir değer giriniz'\n    },\n    regexp: {\n      default: 'Lütfen uyumlu bir değer giriniz'\n    },\n    remote: {\n      default: 'Lütfen geçerli bir numara giriniz'\n    },\n    rtn: {\n      default: 'Lütfen geçerli bir RTN numarası giriniz'\n    },\n    sedol: {\n      default: 'Lütfen geçerli bir SEDOL numarası giriniz'\n    },\n    siren: {\n      default: 'Lütfen geçerli bir SIREN numarası giriniz'\n    },\n    siret: {\n      default: 'Lütfen geçerli bir SIRET numarası giriniz'\n    },\n    step: {\n      default: 'Lütfen geçerli bir %s adımı giriniz'\n    },\n    stringCase: {\n      default: 'Lütfen sadece küçük harf giriniz',\n      upper: 'Lütfen sadece büyük harf giriniz'\n    },\n    stringLength: {\n      between: 'Lütfen %s ile %s arası uzunlukta bir değer giriniz',\n      default: 'Lütfen geçerli uzunluktaki bir değer giriniz',\n      less: 'Lütfen %s karakterden az değer giriniz',\n      more: 'Lütfen %s karakterden fazla değer giriniz'\n    },\n    uri: {\n      default: 'Lütfen geçerli bir URL giriniz'\n    },\n    uuid: {\n      default: 'Lütfen geçerli bir UUID numarası giriniz',\n      version: 'Lütfen geçerli bir UUID versiyon %s numarası giriniz'\n    },\n    vat: {\n      countries: {\n        AT: 'Avustralya',\n        BE: 'Belçika',\n        BG: 'Bulgaristan',\n        BR: 'Brezilya',\n        CH: 'İsviçre',\n        CY: 'Kıbrıs',\n        CZ: 'Çek Cumhuriyeti',\n        DE: 'Almanya',\n        DK: 'Danimarka',\n        EE: 'Estonya',\n        EL: 'Yunanistan',\n        ES: 'İspanya',\n        FI: 'Finlandiya',\n        FR: 'Fransa',\n        GB: 'İngiltere',\n        GR: 'Yunanistan',\n        HR: 'Hırvatistan',\n        HU: 'Macaristan',\n        IE: 'Irlanda',\n        IS: 'İzlanda',\n        IT: 'Italya',\n        LT: 'Litvanya',\n        LU: 'Lüksemburg',\n        LV: 'Letonya',\n        MT: 'Malta',\n        NL: 'Hollanda',\n        NO: 'Norveç',\n        PL: 'Polonya',\n        PT: 'Portekiz',\n        RO: 'Romanya',\n        RS: 'Sırbistan',\n        RU: 'Rusya',\n        SE: 'İsveç',\n        SI: 'Slovenya',\n        SK: 'Slovakya',\n        VE: 'Venezüella',\n        ZA: 'Güney Afrika'\n      },\n      country: 'Lütfen geçerli bir vergi numarası giriniz içinde %s',\n      default: 'Lütfen geçerli bir VAT kodu giriniz'\n    },\n    vin: {\n      default: 'Lütfen geçerli bir VIN numarası giriniz'\n    },\n    zipCode: {\n      countries: {\n        AT: 'Avustralya',\n        BG: 'Bulgaristan',\n        BR: 'Brezilya',\n        CA: 'Kanada',\n        CH: 'İsviçre',\n        CZ: 'Çek Cumhuriyeti',\n        DE: 'Almanya',\n        DK: 'Danimarka',\n        ES: 'İspanya',\n        FR: 'Fransa',\n        GB: 'İngiltere',\n        IE: 'Irlanda',\n        IN: 'Hindistan',\n        IT: 'İtalya',\n        MA: 'Fas',\n        NL: 'Hollanda',\n        PL: 'Polanya',\n        PT: 'Portekiz',\n        RO: 'Romanya',\n        RU: 'Rusya',\n        SE: 'İsveç',\n        SG: 'Singapur',\n        SK: 'Slovakya',\n        US: 'Amerika Birleşik Devletleri'\n      },\n      country: 'Lütfen geçerli bir posta kodu giriniz içinde %s',\n      default: 'Lütfen geçerli bir posta kodu giriniz'\n    }\n  };\n  return tr_TR;\n});\n\n//# sourceURL=webpack://Materialize/./wwwroot/vendor/libs/formvalidation/dist/js/locales/tr_TR.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./wwwroot/vendor/libs/formvalidation/dist/js/locales/tr_TR.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});