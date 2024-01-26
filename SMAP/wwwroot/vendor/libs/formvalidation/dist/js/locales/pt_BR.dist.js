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

/***/ "./wwwroot/vendor/libs/formvalidation/dist/js/locales/pt_BR.js":
/*!*********************************************************************!*\
  !*** ./wwwroot/vendor/libs/formvalidation/dist/js/locales/pt_BR.js ***!
  \*********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\n(function (global, factory) {\n  ( false ? 0 : _typeof(exports)) === 'object' && \"object\" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);\n})(this, function () {\n  'use strict';\n\n  /**\n   * Portuguese (Brazil) language package\n   * Translated by @marcuscarvalho6. Improved by @dgmike\n   */\n  var pt_BR = {\n    base64: {\n      default: 'Por favor insira um código base 64 válido'\n    },\n    between: {\n      default: 'Por favor insira um valor entre %s e %s',\n      notInclusive: 'Por favor insira um valor estritamente entre %s e %s'\n    },\n    bic: {\n      default: 'Por favor insira um número BIC válido'\n    },\n    callback: {\n      default: 'Por favor insira um valor válido'\n    },\n    choice: {\n      between: 'Por favor escolha de %s a %s opções',\n      default: 'Por favor insira um valor válido',\n      less: 'Por favor escolha %s opções no mínimo',\n      more: 'Por favor escolha %s opções no máximo'\n    },\n    color: {\n      default: 'Por favor insira uma cor válida'\n    },\n    creditCard: {\n      default: 'Por favor insira um número de cartão de crédito válido'\n    },\n    cusip: {\n      default: 'Por favor insira um número CUSIP válido'\n    },\n    date: {\n      default: 'Por favor insira uma data válida',\n      max: 'Por favor insira uma data anterior a %s',\n      min: 'Por favor insira uma data posterior a %s',\n      range: 'Por favor insira uma data entre %s e %s'\n    },\n    different: {\n      default: 'Por favor insira valores diferentes'\n    },\n    digits: {\n      default: 'Por favor insira somente dígitos'\n    },\n    ean: {\n      default: 'Por favor insira um número EAN válido'\n    },\n    ein: {\n      default: 'Por favor insira um número EIN válido'\n    },\n    emailAddress: {\n      default: 'Por favor insira um email válido'\n    },\n    file: {\n      default: 'Por favor escolha um arquivo válido'\n    },\n    greaterThan: {\n      default: 'Por favor insira um valor maior ou igual a %s',\n      notInclusive: 'Por favor insira um valor maior do que %s'\n    },\n    grid: {\n      default: 'Por favor insira uma GRID válida'\n    },\n    hex: {\n      default: 'Por favor insira um hexadecimal válido'\n    },\n    iban: {\n      countries: {\n        AD: 'Andorra',\n        AE: 'Emirados Árabes',\n        AL: 'Albânia',\n        AO: 'Angola',\n        AT: 'Áustria',\n        AZ: 'Azerbaijão',\n        BA: 'Bósnia-Herzegovina',\n        BE: 'Bélgica',\n        BF: 'Burkina Faso',\n        BG: 'Bulgária',\n        BH: 'Bahrain',\n        BI: 'Burundi',\n        BJ: 'Benin',\n        BR: 'Brasil',\n        CH: 'Suíça',\n        CM: 'Camarões',\n        CR: 'Costa Rica',\n        CV: 'Cabo Verde',\n        CY: 'Chipre',\n        CZ: 'República Checa',\n        DE: 'Alemanha',\n        DK: 'Dinamarca',\n        DO: 'República Dominicana',\n        DZ: 'Argélia',\n        EE: 'Estónia',\n        ES: 'Espanha',\n        FI: 'Finlândia',\n        FO: 'Ilhas Faroé',\n        FR: 'França',\n        GB: 'Reino Unido',\n        GE: 'Georgia',\n        GI: 'Gibraltar',\n        GL: 'Groenlândia',\n        GR: 'Grécia',\n        GT: 'Guatemala',\n        HR: 'Croácia',\n        HU: 'Hungria',\n        IC: 'Costa do Marfim',\n        IE: 'Ireland',\n        IL: 'Israel',\n        IR: 'Irão',\n        IS: 'Islândia',\n        JO: 'Jordan',\n        KW: 'Kuwait',\n        KZ: 'Cazaquistão',\n        LB: 'Líbano',\n        LI: 'Liechtenstein',\n        LT: 'Lituânia',\n        LU: 'Luxemburgo',\n        LV: 'Letónia',\n        MC: 'Mônaco',\n        MD: 'Moldávia',\n        ME: 'Montenegro',\n        MG: 'Madagascar',\n        MK: 'Macedónia',\n        ML: 'Mali',\n        MR: 'Mauritânia',\n        MT: 'Malta',\n        MU: 'Maurício',\n        MZ: 'Moçambique',\n        NL: 'Países Baixos',\n        NO: 'Noruega',\n        PK: 'Paquistão',\n        PL: 'Polônia',\n        PS: 'Palestino',\n        PT: 'Portugal',\n        QA: 'Qatar',\n        RO: 'Roménia',\n        RS: 'Sérvia',\n        SA: 'Arábia Saudita',\n        SE: 'Suécia',\n        SI: 'Eslovénia',\n        SK: 'Eslováquia',\n        SM: 'San Marino',\n        SN: 'Senegal',\n        TI: 'Itália',\n        TL: 'Timor Leste',\n        TN: 'Tunísia',\n        TR: 'Turquia',\n        VG: 'Ilhas Virgens Britânicas',\n        XK: 'República do Kosovo'\n      },\n      country: 'Por favor insira um número IBAN válido em %s',\n      default: 'Por favor insira um número IBAN válido'\n    },\n    id: {\n      countries: {\n        BA: 'Bósnia e Herzegovina',\n        BG: 'Bulgária',\n        BR: 'Brasil',\n        CH: 'Suíça',\n        CL: 'Chile',\n        CN: 'China',\n        CZ: 'República Checa',\n        DK: 'Dinamarca',\n        EE: 'Estônia',\n        ES: 'Espanha',\n        FI: 'Finlândia',\n        HR: 'Croácia',\n        IE: 'Irlanda',\n        IS: 'Islândia',\n        LT: 'Lituânia',\n        LV: 'Letónia',\n        ME: 'Montenegro',\n        MK: 'Macedónia',\n        NL: 'Holanda',\n        PL: 'Polônia',\n        RO: 'Roménia',\n        RS: 'Sérvia',\n        SE: 'Suécia',\n        SI: 'Eslovênia',\n        SK: 'Eslováquia',\n        SM: 'San Marino',\n        TH: 'Tailândia',\n        TR: 'Turquia',\n        ZA: 'África do Sul'\n      },\n      country: 'Por favor insira um número de indentificação válido em %s',\n      default: 'Por favor insira um código de identificação válido'\n    },\n    identical: {\n      default: 'Por favor, insira o mesmo valor'\n    },\n    imei: {\n      default: 'Por favor insira um IMEI válido'\n    },\n    imo: {\n      default: 'Por favor insira um IMO válido'\n    },\n    integer: {\n      default: 'Por favor insira um número inteiro válido'\n    },\n    ip: {\n      default: 'Por favor insira um IP válido',\n      ipv4: 'Por favor insira um endereço de IPv4 válido',\n      ipv6: 'Por favor insira um endereço de IPv6 válido'\n    },\n    isbn: {\n      default: 'Por favor insira um ISBN válido'\n    },\n    isin: {\n      default: 'Por favor insira um ISIN válido'\n    },\n    ismn: {\n      default: 'Por favor insira um ISMN válido'\n    },\n    issn: {\n      default: 'Por favor insira um ISSN válido'\n    },\n    lessThan: {\n      default: 'Por favor insira um valor menor ou igual a %s',\n      notInclusive: 'Por favor insira um valor menor do que %s'\n    },\n    mac: {\n      default: 'Por favor insira um endereço MAC válido'\n    },\n    meid: {\n      default: 'Por favor insira um MEID válido'\n    },\n    notEmpty: {\n      default: 'Por favor insira um valor'\n    },\n    numeric: {\n      default: 'Por favor insira um número real válido'\n    },\n    phone: {\n      countries: {\n        AE: 'Emirados Árabes',\n        BG: 'Bulgária',\n        BR: 'Brasil',\n        CN: 'China',\n        CZ: 'República Checa',\n        DE: 'Alemanha',\n        DK: 'Dinamarca',\n        ES: 'Espanha',\n        FR: 'França',\n        GB: 'Reino Unido',\n        IN: 'Índia',\n        MA: 'Marrocos',\n        NL: 'Países Baixos',\n        PK: 'Paquistão',\n        RO: 'Roménia',\n        RU: 'Rússia',\n        SK: 'Eslováquia',\n        TH: 'Tailândia',\n        US: 'EUA',\n        VE: 'Venezuela'\n      },\n      country: 'Por favor insira um número de telefone válido em %s',\n      default: 'Por favor insira um número de telefone válido'\n    },\n    promise: {\n      default: 'Por favor insira um valor válido'\n    },\n    regexp: {\n      default: 'Por favor insira um valor correspondente ao padrão'\n    },\n    remote: {\n      default: 'Por favor insira um valor válido'\n    },\n    rtn: {\n      default: 'Por favor insira um número válido RTN'\n    },\n    sedol: {\n      default: 'Por favor insira um número válido SEDOL'\n    },\n    siren: {\n      default: 'Por favor insira um número válido SIREN'\n    },\n    siret: {\n      default: 'Por favor insira um número válido SIRET'\n    },\n    step: {\n      default: 'Por favor insira um passo válido %s'\n    },\n    stringCase: {\n      default: 'Por favor, digite apenas caracteres minúsculos',\n      upper: 'Por favor, digite apenas caracteres maiúsculos'\n    },\n    stringLength: {\n      between: 'Por favor insira um valor entre %s e %s caracteres',\n      default: 'Por favor insira um valor com comprimento válido',\n      less: 'Por favor insira menos de %s caracteres',\n      more: 'Por favor insira mais de %s caracteres'\n    },\n    uri: {\n      default: 'Por favor insira um URI válido'\n    },\n    uuid: {\n      default: 'Por favor insira um número válido UUID',\n      version: 'Por favor insira uma versão %s  UUID válida'\n    },\n    vat: {\n      countries: {\n        AT: 'Áustria',\n        BE: 'Bélgica',\n        BG: 'Bulgária',\n        BR: 'Brasil',\n        CH: 'Suíça',\n        CY: 'Chipre',\n        CZ: 'República Checa',\n        DE: 'Alemanha',\n        DK: 'Dinamarca',\n        EE: 'Estônia',\n        EL: 'Grécia',\n        ES: 'Espanha',\n        FI: 'Finlândia',\n        FR: 'França',\n        GB: 'Reino Unido',\n        GR: 'Grécia',\n        HR: 'Croácia',\n        HU: 'Hungria',\n        IE: 'Irlanda',\n        IS: 'Islândia',\n        IT: 'Itália',\n        LT: 'Lituânia',\n        LU: 'Luxemburgo',\n        LV: 'Letónia',\n        MT: 'Malta',\n        NL: 'Holanda',\n        NO: 'Norway',\n        PL: 'Polônia',\n        PT: 'Portugal',\n        RO: 'Roménia',\n        RS: 'Sérvia',\n        RU: 'Rússia',\n        SE: 'Suécia',\n        SI: 'Eslovênia',\n        SK: 'Eslováquia',\n        VE: 'Venezuela',\n        ZA: 'África do Sul'\n      },\n      country: 'Por favor insira um número VAT válido em %s',\n      default: 'Por favor insira um VAT válido'\n    },\n    vin: {\n      default: 'Por favor insira um VIN válido'\n    },\n    zipCode: {\n      countries: {\n        AT: 'Áustria',\n        BG: 'Bulgária',\n        BR: 'Brasil',\n        CA: 'Canadá',\n        CH: 'Suíça',\n        CZ: 'República Checa',\n        DE: 'Alemanha',\n        DK: 'Dinamarca',\n        ES: 'Espanha',\n        FR: 'França',\n        GB: 'Reino Unido',\n        IE: 'Irlanda',\n        IN: 'Índia',\n        IT: 'Itália',\n        MA: 'Marrocos',\n        NL: 'Holanda',\n        PL: 'Polônia',\n        PT: 'Portugal',\n        RO: 'Roménia',\n        RU: 'Rússia',\n        SE: 'Suécia',\n        SG: 'Cingapura',\n        SK: 'Eslováquia',\n        US: 'EUA'\n      },\n      country: 'Por favor insira um código postal válido em %s',\n      default: 'Por favor insira um código postal válido'\n    }\n  };\n  return pt_BR;\n});\n\n//# sourceURL=webpack://Materialize/./wwwroot/vendor/libs/formvalidation/dist/js/locales/pt_BR.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./wwwroot/vendor/libs/formvalidation/dist/js/locales/pt_BR.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});