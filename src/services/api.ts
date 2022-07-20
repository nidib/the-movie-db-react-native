import Axios from 'axios';
import { API_KEY } from 'react-native-dotenv';
import { ApiUrls } from 'src/constants/api_urls';

export const api = Axios.create({
	baseURL: ApiUrls.API_BASE_URL,
	params: { api_key: API_KEY },
});