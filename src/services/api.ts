import Axios from 'axios';
import { Env } from 'root/env';
import ApiUrls from 'src/constants/api_urls';

export default Axios.create({
	baseURL: ApiUrls.API_BASE_URL,
	params: { api_key: Env.API_KEY },
});