import AsyncStorage from '@react-native-async-storage/async-storage';
import { AtomEffect } from 'recoil';

type PersistedEffectOptions<T> = {
	storageKey: string;
	customStorageValueFallback?: string;
	customDeserializer?: (persistedValue: string) => T;
	customSerializer?: (persistedValue: T) => string;
};

export const persistedEffect = <T>(options: PersistedEffectOptions<T>): AtomEffect<T> => {
	const {
		storageKey,
		customStorageValueFallback = '',
		customDeserializer = (val: string) => val as T,
		customSerializer = (val: T) => val as string,
	} = options;

	return ({ setSelf, onSet, trigger }) => {
		// If there's a persisted value - set it on load
		const loadPersisted = async () => {
			const storageValueFallback = customStorageValueFallback ?? '';
			const savedValue = await AsyncStorage.getItem(storageKey) ?? storageValueFallback;

			setSelf(customDeserializer(savedValue));
		};

		// Asynchronously set the persisted data
		if (trigger === 'get') {
			loadPersisted();
		}

		// Subscribe to state changes and persist them to localForage
		onSet((newValue, _, isReset) => {
			if (isReset) {
				AsyncStorage.removeItem(storageKey);
			} else {
				AsyncStorage.setItem(storageKey, customSerializer(newValue));
			}
		});
	};
};