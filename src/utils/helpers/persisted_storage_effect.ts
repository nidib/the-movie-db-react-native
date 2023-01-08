import AsyncStorage from '@react-native-async-storage/async-storage';
import { AtomEffect } from 'recoil';

type PersistedEffectOptions<T> = {
	storageKey: string;
	storageValueFallback: string;
	deserializer: (persistedValue: string) => T;
	serializer: (persistedValue: T) => string;
};

export const persistedEffect = <T>(options: PersistedEffectOptions<T>): AtomEffect<T> => {
	const {
		storageKey,
		storageValueFallback,
		deserializer,
		serializer,
	} = options;

	return ({ setSelf, onSet, trigger }) => {
		// If there's a persisted value - set it on load
		const loadPersisted = async () => {
			const savedValue = await AsyncStorage.getItem(storageKey) ?? storageValueFallback;

			setSelf(deserializer(savedValue));
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
				AsyncStorage.setItem(storageKey, serializer(newValue));
			}
		});
	};
};