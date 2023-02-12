export function classNames(...args) {
	const classes = [];
	args.forEach((arg) => {
		if (typeof arg === 'object' && arg.constructor === Object) {
			Object.keys(arg).forEach((key) => {
				if (arg[key]) classes.push(key);
			});
		} else if (arg) classes.push(arg);
	});
	const uniqueClasses = [];
	classes.forEach((c) => {
		if (uniqueClasses.indexOf(c) < 0) uniqueClasses.push(c);
	});
	return uniqueClasses.join(' ');
}

export function hasSlots(args, name) {
	return args && args[1] && args[1].$$slots && args[1].$$slots[name] && args[1].$$slots[name].length > 0;
}

export function colorClasses(props) {
	let _ref;

	let color = props.color,
		colorTheme = props.colorTheme,
		textColor = props.textColor,
		bgColor = props.bgColor,
		borderColor = props.borderColor,
		rippleColor = props.rippleColor,
		themeDark = props.themeDark;
	return (
		(_ref = {
			'theme-dark': themeDark
		}),
		(_ref['color-' + color] = color),
		(_ref['color-theme-' + colorTheme] = colorTheme),
		(_ref['text-color-' + textColor] = textColor),
		(_ref['bg-color-' + bgColor] = bgColor),
		(_ref['border-color-' + borderColor] = borderColor),
		(_ref['ripple-color-' + rippleColor] = rippleColor),
		_ref
	);
}

export function restProps(rest) {
	if (rest === void 0) {
		rest = {};
	}

	let props = {};
	Object.keys(rest).forEach(function (key) {
		if (key.indexOf('on') !== 0) {
			props[key] = rest[key];
		}
	});
	return props;
}
