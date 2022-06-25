/* eslint-disable no-console */

export default class Logger {
	static debug(args: any): void {
		console.debug(...args);
	}

	static info(args: any): void {
		console.info(...args);
	}

	static error(args: any): void {
		console.error(...args);
	}
}