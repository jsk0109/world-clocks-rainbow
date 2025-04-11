const cities = [
    { name: "New York", lat: 40.7128, lon: -74.0060, offset: -4, flag: "us", continent: "North America" },
    { name: "Sao Paulo", lat: -23.5505, lon: -46.6333, offset: -3, flag: "br", continent: "South America" },
    { name: "London", lat: 51.5074, lon: -0.1278, offset: 1, flag: "gb", continent: "Europe" },
    { name: "Cairo", lat: 30.0444, lon: 31.2357, offset: 2, flag: "eg", continent: "Africa" },
    { name: "Tokyo", lat: 35.6762, lon: 139.6503, offset: 9, flag: "jp", continent: "Asia" },
    { name: "Sydney", lat: -33.8688, lon: 151.2093, offset: 10, flag: "au", continent: "Oceania" },
    { name: "Chicago", lat: 41.8781, lon: -87.6298, offset: -5, flag: "us", continent: "North America" },
    { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729, offset: -3, flag: "br", continent: "South America" },
    { name: "Berlin", lat: 52.5200, lon: 13.4050, offset: 2, flag: "de", continent: "Europe" },
    { name: "Nairobi", lat: -1.2921, lon: 36.8219, offset: 3, flag: "ke", continent: "Africa" },
    { name: "Seoul", lat: 37.5665, lon: 126.9780, offset: 9, flag: "kr", continent: "Asia" },
    { name: "Auckland", lat: -36.8485, lon: 174.7633, offset: 12, flag: "nz", continent: "Oceania" },
    { name: "Los Angeles", lat: 34.0522, lon: -118.2437, offset: -7, flag: "us", continent: "North America" },
    { name: "Buenos Aires", lat: -34.6037, lon: -58.3816, offset: -3, flag: "ar", continent: "South America" },
    { name: "Paris", lat: 48.8566, lon: 2.3522, offset: 2, flag: "fr", continent: "Europe" },
    { name: "Lagos", lat: 6.5244, lon: 3.3792, offset: 1, flag: "ng", continent: "Africa" },
    { name: "Beijing", lat: 39.9042, lon: 116.4074, offset: 8, flag: "cn", continent: "Asia" },
    { name: "Melbourne", lat: -37.8136, lon: 144.9631, offset: 10, flag: "au", continent: "Oceania" },
    { name: "Houston", lat: 29.7604, lon: -95.3698, offset: -5, flag: "us", continent: "North America" },
    { name: "Santiago", lat: -33.4489, lon: -70.6693, offset: -4, flag: "cl", continent: "South America" },
    { name: "Madrid", lat: 40.4168, lon: -3.7038, offset: 2, flag: "es", continent: "Europe" },
    { name: "Johannesburg", lat: -26.2041, lon: 28.0473, offset: 2, flag: "za", continent: "Africa" },
    { name: "Mumbai", lat: 19.0760, lon: 72.8777, offset: 5.5, flag: "in", continent: "Asia" },
    { name: "Perth", lat: -31.9505, lon: 115.8605, offset: 8, flag: "au", continent: "Oceania" },
    { name: "Toronto", lat: 43.6532, lon: -79.3832, offset: -4, flag: "ca", continent: "North America" },
    { name: "Lima", lat: -12.0464, lon: -77.0428, offset: -5, flag: "pe", continent: "South America" },
    { name: "Rome", lat: 41.9028, lon: 12.4964, offset: 2, flag: "it", continent: "Europe" },
    { name: "Cape Town", lat: -33.9249, lon: 18.4241, offset: 2, flag: "za", continent: "Africa" },
    { name: "Delhi", lat: 28.7041, lon: 77.1025, offset: 5.5, flag: "in", continent: "Asia" },
    { name: "Brisbane", lat: -27.4698, lon: 153.0251, offset: 10, flag: "au", continent: "Oceania" },
    { name: "Miami", lat: 25.7617, lon: -80.1918, offset: -4, flag: "us", continent: "North America" },
    { name: "Bogota", lat: 4.7110, lon: -74.0721, offset: -5, flag: "co", continent: "South America" },
    { name: "Amsterdam", lat: 52.3676, lon: 4.9041, offset: 2, flag: "nl", continent: "Europe" },
    { name: "Accra", lat: 5.6037, lon: -0.1870, offset: 0, flag: "gh", continent: "Africa" },
    { name: "Bangkok", lat: 13.7563, lon: 100.5018, offset: 7, flag: "th", continent: "Asia" },
    { name: "Wellington", lat: -41.2865, lon: 174.7762, offset: 12, flag: "nz", continent: "Oceania" },
    { name: "Seattle", lat: 47.6062, lon: -122.3321, offset: -7, flag: "us", continent: "North America" },
    { name: "Caracas", lat: 10.4806, lon: -66.9036, offset: -4, flag: "ve", continent: "South America" },
    { name: "Vienna", lat: 48.2082, lon: 16.3738, offset: 2, flag: "at", continent: "Europe" },
    { name: "Algiers", lat: 36.7372, lon: 3.0860, offset: 1, flag: "dz", continent: "Africa" },
    { name: "Shanghai", lat: 31.2304, lon: 121.4737, offset: 8, flag: "cn", continent: "Asia" },
    { name: "Adelaide", lat: -34.9285, lon: 138.6007, offset: 9.5, flag: "au", continent: "Oceania" },
    { name: "San Francisco", lat: 37.7749, lon: -122.4194, offset: -7, flag: "us", continent: "North America" },
    { name: "Quito", lat: -0.1807, lon: -78.4678, offset: -5, flag: "ec", continent: "South America" },
    { name: "Stockholm", lat: 59.3293, lon: 18.0686, offset: 2, flag: "se", continent: "Europe" },
    { name: "Casablanca", lat: 33.5731, lon: -7.5898, offset: 1, flag: "ma", continent: "Africa" },
    { name: "Jakarta", lat: -6.2088, lon: 106.8456, offset: 7, flag: "id", continent: "Asia" },
    { name: "Christchurch", lat: -43.5320, lon: 172.6306, offset: 12, flag: "nz", continent: "Oceania" },
    { name: "Boston", lat: 42.3601, lon: -71.0589, offset: -4, flag: "us", continent: "North America" },
    { name: "Montevideo", lat: -34.9011, lon: -56.1645, offset: -3, flag: "uy", continent: "South America" },
    { name: "Copenhagen", lat: 55.6761, lon: 12.5683, offset: 2, flag: "dk", continent: "Europe" },
    { name: "Tunis", lat: 36.8065, lon: 10.1815, offset: 1, flag: "tn", continent: "Africa" },
    { name: "Manila", lat: 14.5995, lon: 120.9842, offset: 8, flag: "ph", continent: "Asia" },
    { name: "Hobart", lat: -42.8821, lon: 147.3272, offset: 10, flag: "au", continent: "Oceania" },
    { name: "Denver", lat: 39.7392, lon: -104.9903, offset: -6, flag: "us", continent: "North America" },
    { name: "Asuncion", lat: -25.2637, lon: -57.5759, offset: -4, flag: "py", continent: "South America" },
    { name: "Lisbon", lat: 38.7223, lon: -9.1393, offset: 1, flag: "pt", continent: "Europe" },
    { name: "Dar es Salaam", lat: -6.7924, lon: 39.2083, offset: 3, flag: "tz", continent: "Africa" },
    { name: "Singapore", lat: 1.3521, lon: 103.8198, offset: 8, flag: "sg", continent: "Asia" },
    { name: "Darwin", lat: -12.4634, lon: 130.8456, offset: 9.5, flag: "au", continent: "Oceania" },
    { name: "Phoenix", lat: 33.4484, lon: -112.0740, offset: -7, flag: "us", continent: "North America" },
    { name: "La Paz", lat: -16.4897, lon: -68.1193, offset: -4, flag: "bo", continent: "South America" },
    { name: "Brussels", lat: 50.8503, lon: 4.3517, offset: 2, flag: "be", continent: "Europe" },
    { name: "Kampala", lat: 0.3476, lon: 32.5825, offset: 3, flag: "ug", continent: "Africa" },
    { name: "Kuala Lumpur", lat: 3.1390, lon: 101.6869, offset: 8, flag: "my", continent: "Asia" },
    { name: "Canberra", lat: -35.2809, lon: 149.1300, offset: 10, flag: "au", continent: "Oceania" },
    { name: "Vancouver", lat: 49.2827, lon: -123.1207, offset: -7, flag: "ca", continent: "North America" },
    { name: "Georgetown", lat: 6.8013, lon: -58.1551, offset: -4, flag: "gy", continent: "South America" },
    { name: "Helsinki", lat: 60.1699, lon: 24.9384, offset: 3, flag: "fi", continent: "Europe" },
    { name: "Luanda", lat: -8.8390, lon: 13.2894, offset: 1, flag: "ao", continent: "Africa" },
    { name: "Hong Kong", lat: 22.3193, lon: 114.1694, offset: 8, flag: "hk", continent: "Asia" },
    { name: "Suva", lat: -18.1248, lon: 178.4501, offset: 12, flag: "fj", continent: "Oceania" },
    { name: "Portland", lat: 45.5152, lon: -122.6784, offset: -7, flag: "us", continent: "North America" },
    { name: "Santa Cruz", lat: -17.8146, lon: -63.1561, offset: -4, flag: "bo", continent: "South America" },
    { name: "Oslo", lat: 59.9139, lon: 10.7522, offset: 2, flag: "no", continent: "Europe" },
    { name: "Kinshasa", lat: -4.4419, lon: 15.2663, offset: 1, flag: "cd", continent: "Africa" },
    { name: "Ho Chi Minh City", lat: 10.8231, lon: 106.6297, offset: 7, flag: "vn", continent: "Asia" },
    { name: "Port Moresby", lat: -9.4438, lon: 147.1803, offset: 10, flag: "pg", continent: "Oceania" },
    { name: "San Diego", lat: 32.7157, lon: -117.1611, offset: -7, flag: "us", continent: "North America" },
    { name: "Cordoba", lat: -31.4201, lon: -64.1888, offset: -3, flag: "ar", continent: "South America" },
    { name: "Prague", lat: 50.0755, lon: 14.4378, offset: 2, flag: "cz", continent: "Europe" },
    { name: "Addis Ababa", lat: 9.0240, lon: 38.7469, offset: 3, flag: "et", continent: "Africa" },
    { name: "Taipei", lat: 25.0330, lon: 121.5654, offset: 8, flag: "tw", continent: "Asia" },
    { name: "Nadi", lat: -17.7765, lon: 177.4356, offset: 12, flag: "fj", continent: "Oceania" },
    { name: "Atlanta", lat: 33.7490, lon: -84.3880, offset: -4, flag: "us", continent: "North America" },
    { name: "Belo Horizonte", lat: -19.9167, lon: -43.9345, offset: -3, flag: "br", continent: "South America" },
    { name: "Budapest", lat: 47.4979, lon: 19.0402, offset: 2, flag: "hu", continent: "Europe" },
    { name: "Maputo", lat: -25.9692, lon: 32.5732, offset: 2, flag: "mz", continent: "Africa" },
    { name: "Karachi", lat: 24.8607, lon: 67.0011, offset: 5, flag: "pk", continent: "Asia" },
    { name: "Honiara", lat: -9.4456, lon: 159.9729, offset: 11, flag: "sb", continent: "Oceania" },
    { name: "Austin", lat: 30.2672, lon: -97.7431, offset: -5, flag: "us", continent: "North America" },
    { name: "Porto Alegre", lat: -30.0346, lon: -51.2177, offset: -3, flag: "br", continent: "South America" },
    { name: "Dublin", lat: 53.3498, lon: -6.2603, offset: 1, flag: "ie", continent: "Europe" },
    { name: "Harare", lat: -17.8252, lon: 31.0335, offset: 2, flag: "zw", continent: "Africa" },
    { name: "Dhaka", lat: 23.8103, lon: 90.4125, offset: 6, flag: "bd", continent: "Asia" },
    { name: "Apia", lat: -13.8507, lon: -171.7514, offset: 13, flag: "ws", continent: "Oceania" },
    { name: "Philadelphia", lat: 39.9526, lon: -75.1652, offset: -4, flag: "us", continent: "North America" },
    { name: "Salvador", lat: -12.9714, lon: -38.5014, offset: -3, flag: "br", continent: "South America" },
    { name: "Warsaw", lat: 52.2297, lon: 21.0122, offset: 2, flag: "pl", continent: "Europe" },
    { name: "Lusaka", lat: -15.3875, lon: 28.3228, offset: 2, flag: "zm", continent: "Africa" },
    { name: "Hanoi", lat: 21.0278, lon: 105.8342, offset: 7, flag: "vn", continent: "Asia" },
    { name: "Noumea", lat: -22.2711, lon: 166.4481, offset: 11, flag: "nc", continent: "Oceania" },
    { name: "Dallas", lat: 32.7767, lon: -96.7970, offset: -5, flag: "us", continent: "North America" },
    { name: "Recife", lat: -8.0476, lon: -34.8770, offset: -3, flag: "br", continent: "South America" },
    { name: "Athens", lat: 37.9838, lon: 23.7275, offset: 3, flag: "gr", continent: "Europe" },
    { name: "Kigali", lat: -1.9441, lon: 30.0619, offset: 2, flag: "rw", continent: "Africa" },
    { name: "Colombo", lat: 6.9271, lon: 79.8612, offset: 5.5, flag: "lk", continent: "Asia" },
    { name: "Port Vila", lat: -17.7333, lon: 168.3273, offset: 11, flag: "vu", continent: "Oceania" },
    { name: "San Antonio", lat: 29.4241, lon: -98.4936, offset: -5, flag: "us", continent: "North America" },
    { name: "Fortaleza", lat: -3.7319, lon: -38.5267, offset: -3, flag: "br", continent: "South America" },
    { name: "Zurich", lat: 47.3769, lon: 8.5417, offset: 2, flag: "ch", continent: "Europe" },
    { name: "Lilongwe", lat: -13.9626, lon: 33.7741, offset: 2, flag: "mw", continent: "Africa" },
    { name: "Kathmandu", lat: 27.7172, lon: 85.3240, offset: 5.75, flag: "np", continent: "Asia" },
    { name: "Tongatapu", lat: -21.1393, lon: -175.2049, offset: 13, flag: "to", continent: "Oceania" },
    { name: "Montreal", lat: 45.5017, lon: -73.5673, offset: -4, flag: "ca", continent: "North America" },
    { name: "Mendoza", lat: -32.8895, lon: -68.8458, offset: -3, flag: "ar", continent: "South America" },
    { name: "Geneva", lat: 46.2044, lon: 6.1432, offset: 2, flag: "ch", continent: "Europe" },
    { name: "Banjul", lat: 13.4549, lon: -16.5790, offset: 0, flag: "gm", continent: "Africa" },
    { name: "Yangon", lat: 16.8409, lon: 96.1735, offset: 6.5, flag: "mm", continent: "Asia" },
    { name: "Funafuti", lat: -8.5211, lon: 179.1981, offset: 12, flag: "tv", continent: "Oceania" },
    { name: "Ottawa", lat: 45.4215, lon: -75.6972, offset: -4, flag: "ca", continent: "North America" },
    { name: "Rosario", lat: -32.9468, lon: -60.6393, offset: -3, flag: "ar", continent: "South America" },
    { name: "Barcelona", lat: 41.3851, lon: 2.1734, offset: 2, flag: "es", continent: "Europe" },
    { name: "Freetown", lat: 8.4657, lon: -13.2317, offset: 0, flag: "sl", continent: "Africa" },
    { name: "Islamabad", lat: 33.6844, lon: 73.0479, offset: 5, flag: "pk", continent: "Asia" },
    { name: "Majuro", lat: 7.0897, lon: 171.3803, offset: 12, flag: "mh", continent: "Oceania" },
    { name: "Calgary", lat: 51.0447, lon: -114.0719, offset: -6, flag: "ca", continent: "North America" },
    { name: "Valparaiso", lat: -33.0472, lon: -71.6127, offset: -4, flag: "cl", continent: "South America" },
    { name: "Milan", lat: 45.4642, lon: 9.1900, offset: 2, flag: "it", continent: "Europe" },
    { name: "Monrovia", lat: 6.3156, lon: -10.8074, offset: 0, flag: "lr", continent: "Africa" },
    { name: "Kabul", lat: 34.5553, lon: 69.2075, offset: 4.5, flag: "af", continent: "Asia" },
    { name: "Tarawa", lat: 1.4518, lon: 173.0417, offset: 12, flag: "ki", continent: "Oceania" },
    { name: "Edmonton", lat: 53.5461, lon: -113.4938, offset: -6, flag: "ca", continent: "North America" },
    { name: "San Juan", lat: -24.1858, lon: -65.2995, offset: -3, flag: "ar", continent: "South America" },
    { name: "Turin", lat: 45.0703, lon: 7.6869, offset: 2, flag: "it", continent: "Europe" },
    { name: "Niamey", lat: 13.5116, lon: 2.1254, offset: 1, flag: "ne", continent: "Africa" },
    { name: "Muscat", lat: 23.5859, lon: 58.4059, offset: 4, flag: "om", continent: "Asia" },
    { name: "Adamstown", lat: -25.0660, lon: -130.1015, offset: -8, flag: "pn", continent: "Oceania" },
    { name: "Quebec City", lat: 46.8139, lon: -71.2080, offset: -4, flag: "ca", continent: "North America" },
    { name: "Medellin", lat: 6.2442, lon: -75.5812, offset: -5, flag: "co", continent: "South America" },
    { name: "Venice", lat: 45.4408, lon: 12.3155, offset: 2, flag: "it", continent: "Europe" },
    { name: "Bamako", lat: 12.6392, lon: -8.0029, offset: 0, flag: "ml", continent: "Africa" },
    { name: "Phnom Penh", lat: 11.5564, lon: 104.9282, offset: 7, flag: "kh", continent: "Asia" },
    { name: "Yaren", lat: -0.5472, lon: 166.9209, offset: 12, flag: "nr", continent: "Oceania" },
    { name: "Winnipeg", lat: 49.8951, lon: -97.1384, offset: -5, flag: "ca", continent: "North America" },
    { name: "Cali", lat: 3.4516, lon: -76.5320, offset: -5, flag: "co", continent: "South America" },
    { name: "Naples", lat: 40.8518, lon: 14.2681, offset: 2, flag: "it", continent: "Europe" },
    { name: "Conakry", lat: 9.6412, lon: -13.5784, offset: 0, flag: "gn", continent: "Africa" },
    { name: "Doha", lat: 25.2854, lon: 51.5310, offset: 3, flag: "qa", continent: "Asia" },
    { name: "Mata-Utu", lat: -13.2816, lon: -176.1745, offset: 12, flag: "wf", continent: "Oceania" },
    { name: "Halifax", lat: 44.6488, lon: -63.5752, offset: -3, flag: "ca", continent: "North America" },
    { name: "Barranquilla", lat: 10.9685, lon: -74.7813, offset: -5, flag: "co", continent: "South America" },
    { name: "Florence", lat: 43.7696, lon: 11.2558, offset: 2, flag: "it", continent: "Europe" },
    { name: "Nouakchott", lat: 18.0858, lon: -15.9785, offset: 0, flag: "mr", continent: "Africa" },
    { name: "Riyadh", lat: 24.7136, lon: 46.6753, offset: 3, flag: "sa", continent: "Asia" },
    { name: "Pago Pago", lat: -14.2756, lon: -170.7020, offset: -11, flag: "as", continent: "Oceania" },
    { name: "St. Louis", lat: 38.6270, lon: -90.1994, offset: -5, flag: "us", continent: "North America" },
    { name: "Guayaquil", lat: -2.1700, lon: -79.9224, offset: -5, flag: "ec", continent: "South America" },
    { name: "Marseille", lat: 43.2965, lon: 5.3698, offset: 2, flag: "fr", continent: "Europe" },
    { name: "N’Djamena", lat: 12.1348, lon: 15.0557, offset: 1, flag: "td", continent: "Africa" },
    { name: "Abu Dhabi", lat: 24.4539, lon: 54.3773, offset: 4, flag: "ae", continent: "Asia" },
    { name: "Alofi", lat: -19.0554, lon: -169.9187, offset: -11, flag: "nu", continent: "Oceania" },
    { name: "Kansas City", lat: 39.0997, lon: -94.5786, offset: -5, flag: "us", continent: "North America" },
    { name: "Cuiaba", lat: -15.6014, lon: -56.0979, offset: -4, flag: "br", continent: "South America" },
    { name: "Lyon", lat: 45.7640, lon: 4.8357, offset: 2, flag: "fr", continent: "Europe" },
    { name: "Bangui", lat: 4.3947, lon: 18.5582, offset: 1, flag: "cf", continent: "Africa" },
    { name: "Kuwait City", lat: 29.3759, lon: 47.9774, offset: 3, flag: "kw", continent: "Asia" },
    { name: "Fakaofo", lat: -9.3803, lon: -171.2188, offset: 13, flag: "tk", continent: "Oceania" },
    { name: "Minneapolis", lat: 44.9778, lon: -93.2650, offset: -5, flag: "us", continent: "North America" },
    { name: "Campo Grande", lat: -20.4697, lon: -54.6201, offset: -4, flag: "br", continent: "South America" },
    { name: "Munich", lat: 48.1351, lon: 11.5820, offset: 2, flag: "de", continent: "Europe" },
    { name: "Juba", lat: 4.8594, lon: 31.5713, offset: 2, flag: "ss", continent: "Africa" },
    { name: "Bahrain", lat: 26.0667, lon: 50.5577, offset: 3, flag: "bh", continent: "Asia" },
    { name: "Kingstown", lat: 13.1600, lon: -61.2248, offset: -4, flag: "vc", continent: "North America" },
    { name: "Cleveland", lat: 41.4993, lon: -81.6944, offset: -4, flag: "us", continent: "North America" },
    { name: "Manaus", lat: -3.1190, lon: -60.0217, offset: -4, flag: "br", continent: "South America" },
    { name: "Hamburg", lat: 53.5488, lon: 9.9872, offset: 2, flag: "de", continent: "Europe" },
    { name: "Asmara", lat: 15.3229, lon: 38.9251, offset: 3, flag: "er", continent: "Africa" },
    { name: "Amman", lat: 31.9539, lon: 35.9106, offset: 3, flag: "jo", continent: "Asia" },
    { name: "Kingston", lat: -29.0546, lon: 167.9663, offset: 11.5, flag: "nf", continent: "Oceania" },
    { name: "Columbus", lat: 39.9612, lon: -82.9988, offset: -4, flag: "us", continent: "North America" },
    { name: "Natal", lat: -5.7793, lon: -35.2009, offset: -3, flag: "br", continent: "South America" },
    { name: "Frankfurt", lat: 50.1109, lon: 8.6821, offset: 2, flag: "de", continent: "Europe" },
    { name: "Mogadishu", lat: 2.0469, lon: 45.3182, offset: 3, flag: "so", continent: "Africa" },
    { name: "Damascus", lat: 33.5138, lon: 36.2765, offset: 3, flag: "sy", continent: "Asia" },
    { name: "Bairiki", lat: 1.3291, lon: 172.9791, offset: 12, flag: "ki", continent: "Oceania" },
    { name: "Tampa", lat: 27.9506, lon: -82.4572, offset: -4, flag: "us", continent: "North America" },
    { name: "Vitoria", lat: -20.2976, lon: -40.2958, offset: -3, flag: "br", continent: "South America" },
    { name: "Stuttgart", lat: 48.7758, lon: 9.1829, offset: 2, flag: "de", continent: "Europe" },
    { name: "Djibouti", lat: 11.8251, lon: 42.5903, offset: 3, flag: "dj", continent: "Africa" },
    { name: "Baghdad", lat: 33.3152, lon: 44.3661, offset: 3, flag: "iq", continent: "Asia" },
    { name: "Dili", lat: -8.5569, lon: 125.5736, offset: 9, flag: "tl", continent: "Oceania" },
    { name: "Orlando", lat: 28.5383, lon: -81.3792, offset: -4, flag: "us", continent: "North America" },
    { name: "Brasilia", lat: -15.8267, lon: -47.9218, offset: -3, flag: "br", continent: "South America" },
    { name: "Leipzig", lat: 51.3397, lon: 12.3731, offset: 2, flag: "de", continent: "Europe" },
    { name: "Port Louis", lat: -20.1640, lon: 57.5012, offset: 4, flag: "mu", continent: "Africa" },
    { name: "Tehran", lat: 35.6892, lon: 51.3890, offset: 3.5, flag: "ir", continent: "Asia" },
    { name: "Hilo", lat: 19.7241, lon: -155.0868, offset: -10, flag: "us", continent: "Oceania" },
    { name: "Sacramento", lat: 38.5816, lon: -121.4944, offset: -7, flag: "us", continent: "North America" },
    { name: "Aracaju", lat: -10.9472, lon: -37.0731, offset: -3, flag: "br", continent: "South America" },
    { name: "Bremen", lat: 53.0793, lon: 8.8017, offset: 2, flag: "de", continent: "Europe" },
    { name: "Antananarivo", lat: -18.8792, lon: 47.5079, offset: 3, flag: "mg", continent: "Africa" },
    { name: "Sana’a", lat: 15.3694, lon: 44.1910, offset: 3, flag: "ye", continent: "Asia" },
    { name: "Papeete", lat: -17.5516, lon: -149.5585, offset: -10, flag: "pf", continent: "Oceania" },
    { name: "Raleigh", lat: 35.7796, lon: -78.6382, offset: -4, flag: "us", continent: "North America" },
    { name: "Joao Pessoa", lat: -7.1195, lon: -34.8450, offset: -3, flag: "br", continent: "South America" },
    { name: "Bonn", lat: 50.7374, lon: 7.0982, offset: 2, flag: "de", continent: "Europe" },
    { name: "Maseru", lat: -29.3142, lon: 27.4834, offset: 2, flag: "ls", continent: "Africa" },
    { name: "Tashkent", lat: 41.2995, lon: 69.2401, offset: 5, flag: "uz", continent: "Asia" },
    { name: "Rarotonga", lat: -21.2290, lon: -159.7750, offset: -10, flag: "ck", continent: "Oceania" },
    { name: "Charlotte", lat: 35.2271, lon: -80.8431, offset: -4, flag: "us", continent: "North America" },
    { name: "Maceio", lat: -9.5713, lon: -35.7350, offset: -3, flag: "br", continent: "South America" },
    { name: "Nuremberg", lat: 49.4521, lon: 11.0767, offset: 2, flag: "de", continent: "Europe" },
    { name: "Mbabane", lat: -26.3054, lon: 31.1367, offset: 2, flag: "sz", continent: "Africa" },
    { name: "Ashgabat", lat: 37.9601, lon: 58.3260, offset: 5, flag: "tm", continent: "Asia" },
    { name: "Avarua", lat: -21.2075, lon: -159.7750, offset: -10, flag: "ck", continent: "Oceania" },
    { name: "Nashville", lat: 36.1627, lon: -86.7816, offset: -5, flag: "us", continent: "North America" },
    { name: "Teresina", lat: -5.0919, lon: -42.8038, offset: -3, flag: "br", continent: "South America" },
    { name: "Cologne", lat: 50.9375, lon: 6.9603, offset: 2, flag: "de", continent: "Europe" },
    { name: "Moroni", lat: -11.7172, lon: 43.2473, offset: 3, flag: "km", continent: "Africa" },
    { name: "Bishkek", lat: 42.8746, lon: 74.5698, offset: 6, flag: "kg", continent: "Asia" },
    { name: "Nukualofa", lat: -21.1393, lon: -175.2049, offset: 13, flag: "to", continent: "Oceania" },
    { name: "Indianapolis", lat: 39.7684, lon: -86.1581, offset: -4, flag: "us", continent: "North America" },
    { name: "Belem", lat: -1.4558, lon: -48.4902, offset: -3, flag: "br", continent: "South America" },
    { name: "Dusseldorf", lat: 51.2277, lon: 6.7735, offset: 2, flag: "de", continent: "Europe" },
    { name: "Victoria", lat: -4.6191, lon: 55.4513, offset: 4, flag: "sc", continent: "Africa" },
    { name: "Dushanbe", lat: 38.5598, lon: 68.7870, offset: 5, flag: "tj", continent: "Asia" },
    { name: "Kiritimati", lat: 1.8709, lon: -157.4456, offset: 14, flag: "ki", continent: "Oceania" }
];

let weatherData = {};
const CACHE_DURATION = 30 * 60 * 1000;
const INITIAL_LOAD = 50;
const LOAD_INCREMENT = 25;
let displayedCities = 0;
let allClocks = [];

async function fetchWeatherChunk(citiesChunk) {
    const promises = citiesChunk.map(city => fetchWeather(city));
    return await Promise.all(promises);
}

async function fetchWeather(city) {
    const cached = localStorage.getItem(`weather_${city.name}`);
    let cachedData = cached ? JSON.parse(cached) : null;
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) return cachedData.data;

    const url = `/api/v1/forecast?latitude=${city.lat}&longitude=${city.lon}¤t_weather=true&hourly=relativehumidity_2m&timezone=auto`;
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("API error");
        const data = await response.json();
        const weather = {
            temperature: data.current_weather.temperature,
            humidity: data.hourly.relativehumidity_2m[0],
            weatherIcon: getWeatherIcon(data.current_weather.weathercode)
        };
        localStorage.setItem(`weather_${city.name}`, JSON.stringify({ data: weather, timestamp: Date.now() }));
        return weather;
    } catch (error) {
        console.error(`Weather fetch failed for ${city.name}: ${error}`);
        return { temperature: "20°C", humidity: "50%", weatherIcon: "☀️" };
    }
}

function getWeatherIcon(code) {
    if (code === 0) return "☀️";
    if (code <= 3) return "⛅";
    if (code <= 67) return "🌧️";
    if (code <= 77) return "❄️";
    return "🌩️";
}

function createClock(city) {
    const container = document.getElementById("clocks-container");
    const clockDiv = document.createElement("div");
    clockDiv.className = "clock-container";
    clockDiv.dataset.continent = city.continent;
    clockDiv.dataset.city = city.name;
    clockDiv.innerHTML = `
        <div class="city-header">
            <img class="flag-img" src="https://flagcdn.com/24x18/${city.flag}.png" alt="${city.flag}">
            <div class="city-name">${city.name}</div>
        </div>
        <div class="digital-clock"></div>
        <div class="weather-info loading">Weather: Loading</div>
    `;
    container.appendChild(clockDiv);
    return clockDiv;
}

function updateClock(clock, offset, weather) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (3600000 * offset));
    const hours = localTime.getHours().toString().padStart(2, "0");
    const minutes = localTime.getMinutes().toString().padStart(2, "0");
    const seconds = localTime.getSeconds().toString().padStart(2, "0");
    clock.querySelector(".digital-clock").innerHTML = `${hours}:${minutes}:<span class="seconds">${seconds}</span>`;
    clock.querySelector(".weather-info").classList.remove("loading");
    clock.querySelector(".weather-info").innerHTML = weather.temperature !== "N/A" ?
        `Weather: <span class="weather-icon">${weather.weatherIcon}</span> <span class="temperature">${weather.temperature}</span>, Humidity: <span class="humidity">${weather.humidity}</span>` :
        "Weather: N/A";
}

function createFilterButtons() {
    const continents = ["All", "Asia", "Europe", "N America", "S America", "Africa", "Oceania"];
    const container = document.getElementById("filter-buttons");
    continents.forEach(continent => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.textContent = continent;
        btn.dataset.continent = continent === "All" ? "" : continent.replace("N ", "North ").replace("S ", "South ");
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filterClocks(btn.dataset.continent);
        });
        container.appendChild(btn);
    });
    document.querySelector(".filter-btn").classList.add("active");
}

function filterClocks(continent) {
    const clocks = document.querySelectorAll(".clock-container");
    clocks.forEach(clock => {
        const matchesContinent = continent === "" || clock.dataset.continent === continent;
        const matchesSearch = document.getElementById("search").value.toLowerCase() === "" ||
            clock.dataset.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase());
        clock.style.display = matchesContinent && matchesSearch ? "block" : "none";
    });
}

async function initializeClocks() {
    const initialCities = cities.slice(0, INITIAL_LOAD);
    displayedCities = INITIAL_LOAD;

    allClocks = cities.map(city => ({ clock: createClock(city), city }));

    allClocks.forEach(({ clock }, index) => {
        clock.style.display = index < INITIAL_LOAD ? "block" : "none";
    });

    const chunkSize = 10;
    for (let i = 0; i < initialCities.length; i += chunkSize) {
        const chunk = initialCities.slice(i, i + chunkSize);
        const results = await fetchWeatherChunk(chunk);
        chunk.forEach((city, index) => {
            weatherData[city.name] = results[index];
            const clock = allClocks.find(c => c.city.name === city.name);
            updateClock(clock.clock, clock.city.offset, weatherData[city.name]);
        });
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    return allClocks;
}

async function loadMoreClocks() {
    const nextCities = cities.slice(displayedCities, displayedCities + LOAD_INCREMENT);
    const newClocks = allClocks.slice(displayedCities, displayedCities + LOAD_INCREMENT);
    displayedCities += LOAD_INCREMENT;

    newClocks.forEach(({ clock }) => {
        clock.style.display = "block";
    });

    const chunkSize = 10;
    for (let i = 0; i < nextCities.length; i += chunkSize) {
        const chunk = nextCities.slice(i, i + chunkSize);
        const results = await fetchWeatherChunk(chunk);
        chunk.forEach((city, index) => {
            weatherData[city.name] = results[index];
            const clock = allClocks.find(c => c.city.name === city.name);
            updateClock(clock.clock, clock.city.offset, weatherData[city.name]);
        });
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    document.getElementById("load-more").disabled = displayedCities >= cities.length;
}

function setupSearch() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        allClocks.forEach(({ clock }) => {
            const matchesSearch = query === "" || clock.dataset.city.toLowerCase().includes(query);
            const matchesContinent = document.querySelector(".filter-btn.active").dataset.continent === "" ||
                clock.dataset.continent === document.querySelector(".filter-btn.active").dataset.continent;
            clock.style.display = matchesSearch && matchesContinent ? "block" : "none";
        });
    });

    searchInput.addEventListener("keyup", () => {
        const query = searchInput.value.toLowerCase();
        const suggestions = cities.filter(city => city.name.toLowerCase().startsWith(query)).slice(0, 5);
        console.log("Suggestions:", suggestions.map(c => c.name));
    });
}

const continentColors = {
    "North America": "#388E3C",
    "Europe": "#FBC02D",
    "Asia": "#F57C00",
    "South America": "#1976D2",
    "Africa": "#303F9F",
    "Oceania": "#7B1FA2"
};

initializeClocks().then(clocks => {
    allClocks = clocks;
    createFilterButtons();
    setupSearch();

    document.querySelectorAll(".clock-container").forEach(clock => {
        const continent = clock.dataset.continent;
        clock.querySelector(".digital-clock").style.color = continentColors[continent] || "#000000";
    });

    setInterval(() => allClocks.forEach(({ clock, city }) => 
        updateClock(clock, city.offset, weatherData[city.name] || { temperature: "20°C", humidity: "50%", weatherIcon: "☀️" })
    ), 1000);

    document.getElementById("load-more").addEventListener("click", () => {
        console.log("Load more clicked, displayedCities:", displayedCities);
        loadMoreClocks();
    });
});
