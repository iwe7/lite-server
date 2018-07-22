(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define('@iwe8/animations', ['exports', '@angular/core'], factory) :
	(factory((global.iwe8 = global.iwe8 || {}, global.iwe8.animations = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

	const VERSION = new core.Version('0.0.0-PLACEHOLDER');

	exports.VERSION = VERSION;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
