import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { StatusBar } from 'react-native';
import { RecoilRoot } from 'recoil';
import { Colors } from 'src/constants/theme/colors';
import { RootNavigation } from 'src/navigations/root_navigation';

const queryClient = new QueryClient();

export function App() {
	return (
		<RecoilRoot>
			<QueryClientProvider client={queryClient}>
				<NavigationContainer>
					<StatusBar barStyle={'light-content'} backgroundColor={Colors.BLACK} />
					<RootNavigation />
				</NavigationContainer>
			</QueryClientProvider>
		</RecoilRoot>
	);
}