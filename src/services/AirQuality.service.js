import { config } from '@/config/config.js';
import axios from 'axios'

const baseUrl = "http://api.waqi.info/feed"

export const AirQualityService = {
    async getAirQuality(cityName) {
        const url = `${baseUrl}/${cityName}/?token=${config.token}`
        const result = await axios.get(url);
        // console.log(result)
        return result.data.data;
    }
}