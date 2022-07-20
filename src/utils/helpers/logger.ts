/* eslint-disable no-console */

export class Logger {
	public static debug(...args: any): void {
		console.debug(...args);
	}

	public static info(...args: any): void {
		console.info(...args);
	}

	public static error(...args: any): void {
		console.error(...args);
	}
}