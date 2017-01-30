	return {
		from_base64: from_base64,
		from_hex: from_hex,
		from_string: from_string,
		memcmp: memcmp,
		memzero: memzero,
		to_base64: to_base64,
		to_hex: to_hex,
		to_string: to_string
	};
}());


if (typeof module !== 'undefined' && module.exports) {
	sodiumUtil.sodiumUtil	= sodiumUtil;
	module.exports			= sodiumUtil;
}
else {
	self.sodiumUtil			= sodiumUtil;
}
