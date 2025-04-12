const cities = [
    // North America (1)
    { name: "New York", lat: 40.7128, lon: -74.0060, offset: -4, flag: "us", continent: "N America" },
    // South America (2)
    { name: "Sao Paulo", lat: -23.5505, lon: -46.6333, offset: -3, flag: "br", continent: "S America" },
    // Europe (3)
    { name: "London", lat: 51.5074, lon: -0.1278, offset: 1, flag: "gb", continent: "Europe" },
    // Africa (4)
    { name: "Cairo", lat: 30.0444, lon: 31.2357, offset: 2, flag: "eg", continent: "Africa" },
    // Asia (5)
    { name: "Seoul", lat: 37.5665, lon: 126.9780, offset: 9, flag: "kr", continent: "Asia" },
    // Oceania (6)
    { name: "Auckland", lat: -36.8485, lon: 174.7633, offset: 12, flag: "nz", continent: "Oceania" },
    // North America (7)
    { name: "Los Angeles", lat: 34.0522, lon: -118.2437, offset: -7, flag: "us", continent: "N America" },
    // South America (8)
    { name: "Buenos Aires", lat: -34.6037, lon: -58.3816, offset: -3, flag: "ar", continent: "S America" },
    // Europe (9)
    { name: "Madrid", lat: 40.4168, lon: -3.7038, offset: 2, flag: "es", continent: "Europe" },
    // Africa (10)
    { name: "Johannesburg", lat: -26.2041, lon: 28.0473, offset: 2, flag: "za", continent: "Africa" },
    // Asia (11)
    { name: "Mumbai", lat: 19.0760, lon: 72.8777, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (12)
    { name: "Perth", lat: -31.9505, lon: 115.8605, offset: 8, flag: "au", continent: "Oceania" },
    // North America (13)
    { name: "Miami", lat: 25.7617, lon: -80.1918, offset: -4, flag: "us", continent: "N America" },
    // South America (14)
    { name: "Bogota", lat: 4.7110, lon: -74.0721, offset: -5, flag: "co", continent: "S America" },
    // Europe (15)
    { name: "Amsterdam", lat: 52.3676, lon: 4.9041, offset: 2, flag: "nl", continent: "Europe" },
    // Africa (16)
    { name: "Accra", lat: 5.6037, lon: -0.1870, offset: 0, flag: "gh", continent: "Africa" },
    // Asia (17)
    { name: "Shanghai", lat: 31.2304, lon: 121.4737, offset: 8, flag: "cn", continent: "Asia" },
    // Oceania (18)
    { name: "Adelaide", lat: -34.9285, lon: 138.6007, offset: 9.5, flag: "au", continent: "Oceania" },
    // North America (19)
    { name: "San Francisco", lat: 37.7749, lon: -122.4194, offset: -7, flag: "us", continent: "N America" },
    // South America (20)
    { name: "Quito", lat: -0.1807, lon: -78.4678, offset: -5, flag: "ec", continent: "S America" },
    // Europe (21)
    { name: "Paris", lat: 48.8566, lon: 2.3522, offset: 2, flag: "fr", continent: "Europe" },
    // Africa (22)
    { name: "Nairobi", lat: -1.2921, lon: 36.8219, offset: 3, flag: "ke", continent: "Africa" },
    // Asia (23)
    { name: "Bangkok", lat: 13.7563, lon: 100.5018, offset: 7, flag: "th", continent: "Asia" },
    // Oceania (24)
    { name: "Melbourne", lat: -37.8136, lon: 144.9631, offset: 10, flag: "au", continent: "Oceania" },
    // North America (25)
    { name: "Chicago", lat: 41.8781, lon: -87.6298, offset: -5, flag: "us", continent: "N America" },
    // South America (26)
    { name: "Lima", lat: -12.0464, lon: -77.0428, offset: -5, flag: "pe", continent: "S America" },
    // Europe (27)
    { name: "Berlin", lat: 52.5200, lon: 13.4050, offset: 2, flag: "de", continent: "Europe" },
    // Africa (28)
    { name: "Lagos", lat: 6.5244, lon: 3.3792, offset: 1, flag: "ng", continent: "Africa" },
    // Asia (29)
    { name: "Singapore", lat: 1.3521, lon: 103.8198, offset: 8, flag: "sg", continent: "Asia" },
    // Oceania (30)
    { name: "Brisbane", lat: -27.4698, lon: 153.0251, offset: 10, flag: "au", continent: "Oceania" },
    // North America (31)
    { name: "Toronto", lat: 43.6532, lon: -79.3832, offset: -4, flag: "ca", continent: "N America" },
    // South America (32)
    { name: "Santiago", lat: -33.4489, lon: -70.6693, offset: -4, flag: "cl", continent: "S America" },
    // Europe (33)
    { name: "Rome", lat: 41.9028, lon: 12.4964, offset: 2, flag: "it", continent: "Europe" },
    // Africa (34)
    { name: "Addis Ababa", lat: 9.0300, lon: 38.7400, offset: 3, flag: "et", continent: "Africa" },
    // Asia (35)
    { name: "Hong Kong", lat: 22.3193, lon: 114.1694, offset: 8, flag: "hk", continent: "Asia" },
    // Oceania (36)
    { name: "Hobart", lat: -42.8821, lon: 147.3272, offset: 10, flag: "au", continent: "Oceania" },
    // North America (37)
    { name: "Vancouver", lat: 49.2827, lon: -123.1207, offset: -7, flag: "ca", continent: "N America" },
    // South America (38)
    { name: "Caracas", lat: 10.4806, lon: -66.9036, offset: -4, flag: "ve", continent: "S America" },
    // Europe (39)
    { name: "Vienna", lat: 48.2082, lon: 16.3738, offset: 2, flag: "at", continent: "Europe" },
    // Africa (40)
    { name: "Kampala", lat: 0.3476, lon: 32.5825, offset: 3, flag: "ug", continent: "Africa" },
    // Asia (41)
    { name: "Jakarta", lat: -6.2088, lon: 106.8456, offset: 7, flag: "id", continent: "Asia" },
    // Oceania (42)
    { name: "Darwin", lat: -12.4634, lon: 130.8456, offset: 9.5, flag: "au", continent: "Oceania" },
    // North America (43)
    { name: "Montreal", lat: 45.5017, lon: -73.5673, offset: -4, flag: "ca", continent: "N America" },
    // South America (44)
    { name: "Montevideo", lat: -34.9011, lon: -56.1645, offset: -3, flag: "uy", continent: "S America" },
    // Europe (45)
    { name: "Stockholm", lat: 59.3293, lon: 18.0686, offset: 2, flag: "se", continent: "Europe" },
    // Africa (46)
    { name: "Algiers", lat: 36.7372, lon: 3.0870, offset: 1, flag: "dz", continent: "Africa" },
    // Asia (47)
    { name: "Kuala Lumpur", lat: 3.1390, lon: 101.6869, offset: 8, flag: "my", continent: "Asia" },
    // Oceania (48)
    { name: "Wellington", lat: -41.2865, lon: 174.7762, offset: 12, flag: "nz", continent: "Oceania" },
    // North America (49)
    { name: "Houston", lat: 29.7604, lon: -95.3698, offset: -5, flag: "us", continent: "N America" },
    // South America (50)
    { name: "Asuncion", lat: -25.2637, lon: -57.5759, offset: -4, flag: "py", continent: "S America" },
    // Europe (51)
    { name: "Zurich", lat: 47.3769, lon: 8.5417, offset: 2, flag: "ch", continent: "Europe" },
    // Africa (52)
    { name: "Dar es Salaam", lat: -6.7924, lon: 39.2083, offset: 3, flag: "tz", continent: "Africa" },
    // Asia (53)
    { name: "Manila", lat: 14.5995, lon: 120.9842, offset: 8, flag: "ph", continent: "Asia" },
    // Oceania (54)
    { name: "Canberra", lat: -35.2809, lon: 149.1300, offset: 10, flag: "au", continent: "Oceania" },
    // North America (55)
    { name: "Dallas", lat: 32.7767, lon: -96.7970, offset: -5, flag: "us", continent: "N America" },
    // South America (56)
    { name: "La Paz", lat: -16.4897, lon: -68.1193, offset: -4, flag: "bo", continent: "S America" },
    // Europe (57)
    { name: "Prague", lat: 50.0755, lon: 14.4378, offset: 2, flag: "cz", continent: "Europe" },
    // Africa (58)
    { name: "Tunis", lat: 36.8065, lon: 10.1815, offset: 1, flag: "tn", continent: "Africa" },
    // Asia (59)
    { name: "Hanoi", lat: 21.0285, lon: 105.8542, offset: 7, flag: "vn", continent: "Asia" },
    // Oceania (60)
    { name: "Christchurch", lat: -43.5320, lon: 172.6362, offset: 12, flag: "nz", continent: "Oceania" },
    // North America (61)
    { name: "Phoenix", lat: 33.4484, lon: -112.0740, offset: -7, flag: "us", continent: "N America" },
    // South America (62)
    { name: "Medellin", lat: 6.2442, lon: -75.5812, offset: -5, flag: "co", continent: "S America" },
    // Europe (63)
    { name: "Warsaw", lat: 52.2297, lon: 21.0122, offset: 2, flag: "pl", continent: "Europe" },
    // Africa (64)
    { name: "Casablanca", lat: 33.5731, lon: -7.5898, offset: 1, flag: "ma", continent: "Africa" },
    // Asia (65)
    { name: "Taipei", lat: 25.0330, lon: 121.5654, offset: 8, flag: "tw", continent: "Asia" },
    // Oceania (66)
    { name: "Sydney", lat: -33.8688, lon: 151.2093, offset: 10, flag: "au", continent: "Oceania" },
    // North America (67)
    { name: "Seattle", lat: 47.6062, lon: -122.3321, offset: -7, flag: "us", continent: "N America" },
    // South America (68)
    { name: "Brasilia", lat: -15.8267, lon: -47.9218, offset: -3, flag: "br", continent: "S America" },
    // Europe (69)
    { name: "Budapest", lat: 47.4979, lon: 19.0402, offset: 2, flag: "hu", continent: "Europe" },
    // Africa (70)
    { name: "Luanda", lat: -8.8390, lon: 13.2894, offset: 1, flag: "ao", continent: "Africa" },
    // Asia (71)
    { name: "Dhaka", lat: 23.8103, lon: 90.4125, offset: 6, flag: "bd", continent: "Asia" },
    // Oceania (72)
    { name: "Fiji", lat: -18.1248, lon: 178.4501, offset: 12, flag: "fj", continent: "Oceania" },
    // North America (73)
    { name: "Boston", lat: 42.3601, lon: -71.0589, offset: -4, flag: "us", continent: "N America" },
    // South America (74)
    { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729, offset: -3, flag: "br", continent: "S America" },
    // Europe (75)
    { name: "Copenhagen", lat: 55.6761, lon: 12.5683, offset: 2, flag: "dk", continent: "Europe" },
    // Africa (76)
    { name: "Khartoum", lat: 15.5007, lon: 32.5599, offset: 2, flag: "sd", continent: "Africa" },
    // Asia (77)
    { name: "Colombo", lat: 6.9271, lon: 79.8612, offset: 5.5, flag: "lk", continent: "Asia" },
    // Oceania (78)
    { name: "Port Moresby", lat: -9.4438, lon: 147.1803, offset: 10, flag: "pg", continent: "Oceania" },
    // North America (79)
    { name: "Denver", lat: 39.7392, lon: -104.9903, offset: -6, flag: "us", continent: "N America" },
    // South America (80)
    { name: "Guayaquil", lat: -2.1700, lon: -79.9224, offset: -5, flag: "ec", continent: "S America" },
    // Europe (81)
    { name: "Lisbon", lat: 38.7223, lon: -9.1393, offset: 1, flag: "pt", continent: "Europe" },
    // Africa (82)
    { name: "Pretoria", lat: -25.7479, lon: 28.2293, offset: 2, flag: "za", continent: "Africa" },
    // Asia (83)
    { name: "Kathmandu", lat: 27.7172, lon: 85.3240, offset: 5.75, flag: "np", continent: "Asia" },
    // Oceania (84)
    { name: "Nauru", lat: -0.5228, lon: 166.9315, offset: 12, flag: "nr", continent: "Oceania" },
    // North America (85)
    { name: "Atlanta", lat: 33.7490, lon: -84.3880, offset: -4, flag: "us", continent: "N America" },
    // South America (86)
    { name: "Salvador", lat: -12.9714, lon: -38.5014, offset: -3, flag: "br", continent: "S America" },
    // Europe (87)
    { name: "Athens", lat: 37.9838, lon: 23.7275, offset: 3, flag: "gr", continent: "Europe" },
    // Africa (88)
    { name: "Abidjan", lat: 5.3599, lon: -4.0083, offset: 0, flag: "ci", continent: "Africa" },
    // Asia (89)
    { name: "Islamabad", lat: 33.6844, lon: 73.0479, offset: 5, flag: "pk", continent: "Asia" },
    // Oceania (90)
    { name: "Tonga", lat: -21.1393, lon: -175.2049, offset: 13, flag: "to", continent: "Oceania" },
    // North America (91)
    { name: "Philadelphia", lat: 39.9526, lon: -75.1652, offset: -4, flag: "us", continent: "N America" },
    // South America (92)
    { name: "Recife", lat: -8.0476, lon: -34.8770, offset: -3, flag: "br", continent: "S America" },
    // Europe (93)
    { name: "Dublin", lat: 53.3498, lon: -6.2603, offset: 1, flag: "ie", continent: "Europe" },
    // Africa (94)
    { name: "Kinshasa", lat: -4.4419, lon: 15.2663, offset: 1, flag: "cd", continent: "Africa" },
    // Asia (95)
    { name: "Karachi", lat: 24.8607, lon: 67.0011, offset: 5, flag: "pk", continent: "Asia" },
    // Oceania (96)
    { name: "Samoa", lat: -13.7590, lon: -172.1046, offset: 13, flag: "ws", continent: "Oceania" },
    // North America (97)
    { name: "Detroit", lat: 42.3314, lon: -83.0458, offset: -4, flag: "us", continent: "N America" },
    // South America (98)
    { name: "Fortaleza", lat: -3.7172, lon: -38.5434, offset: -3, flag: "br", continent: "S America" },
    // Europe (99)
    { name: "Helsinki", lat: 60.1699, lon: 24.9384, offset: 3, flag: "fi", continent: "Europe" },
    // Africa (100)
    { name: "Bamako", lat: 12.6392, lon: -8.0029, offset: 0, flag: "ml", continent: "Africa" },
    // Asia (101)
    { name: "Lahore", lat: 31.5497, lon: 74.3436, offset: 5, flag: "pk", continent: "Asia" },
    // Oceania (102)
    { name: "Vanuatu", lat: -17.7333, lon: 168.3273, offset: 11, flag: "vu", continent: "Oceania" },
    // North America (103)
    { name: "San Diego", lat: 32.7157, lon: -117.1611, offset: -7, flag: "us", continent: "N America" },
    // South America (104)
    { name: "Manaus", lat: -3.1190, lon: -60.0217, offset: -4, flag: "br", continent: "S America" },
    // Europe (105)
    { name: "Brussels", lat: 50.8503, lon: 4.3517, offset: 2, flag: "be", continent: "Europe" },
    // Africa (106)
    { name: "Dakar", lat: 14.6928, lon: -17.4467, offset: 0, flag: "sn", continent: "Africa" },
    // Asia (107)
    { name: "Chennai", lat: 13.0827, lon: 80.2707, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (108)
    { name: "Solomon Islands", lat: -9.6457, lon: 160.1562, offset: 11, flag: "sb", continent: "Oceania" },
    // North America (109)
    { name: "Portland", lat: 45.5152, lon: -122.6784, offset: -7, flag: "us", continent: "N America" },
    // South America (110)
    { name: "Porto Alegre", lat: -30.0346, lon: -51.2177, offset: -3, flag: "br", continent: "S America" },
    // Europe (111)
    { name: "Oslo", lat: 59.9139, lon: 10.7522, offset: 2, flag: "no", continent: "Europe" },
    // Africa (112)
    { name: "Harare", lat: -17.8252, lon: 31.0534, offset: 2, flag: "zw", continent: "Africa" },
    // Asia (113)
    { name: "Hyderabad", lat: 17.3850, lon: 78.4867, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (114)
    { name: "Kiribati", lat: 1.8709, lon: -157.3626, offset: 14, flag: "ki", continent: "Oceania" },
    // North America (115)
    { name: "Austin", lat: 30.2672, lon: -97.7431, offset: -5, flag: "us", continent: "N America" },
    // South America (116)
    { name: "Belo Horizonte", lat: -19.9167, lon: -43.9345, offset: -3, flag: "br", continent: "S America" },
    // Europe (117)
    { name: "Bucharest", lat: 44.4268, lon: 26.1025, offset: 3, flag: "ro", continent: "Europe" },
    // Africa (118)
    { name: "Maputo", lat: -25.9655, lon: 32.5832, offset: 2, flag: "mz", continent: "Africa" },
    // Asia (119)
    { name: "Delhi", lat: 28.7041, lon: 77.1025, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (120)
    { name: "Tuvalu", lat: -8.5211, lon: 179.1981, offset: 12, flag: "tv", continent: "Oceania" },
    // North America (121)
    { name: "San Antonio", lat: 29.4241, lon: -98.4936, offset: -5, flag: "us", continent: "N America" },
    // South America (122)
    { name: "Curitiba", lat: -25.4290, lon: -49.2671, offset: -3, flag: "br", continent: "S America" },
    // Europe (123)
    { name: "Sofia", lat: 42.6977, lon: 23.3219, offset: 3, flag: "bg", continent: "Europe" },
    // Africa (124)
    { name: "Lusaka", lat: -15.3875, lon: 28.3228, offset: 2, flag: "zm", continent: "Africa" },
    // Asia (125)
    { name: "Kolkata", lat: 22.5726, lon: 88.3639, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (126)
    { name: "Palau", lat: 7.5150, lon: 134.5825, offset: 9, flag: "pw", continent: "Oceania" },
    // North America (127)
    { name: "Ottawa", lat: 45.4215, lon: -75.6972, offset: -4, flag: "ca", continent: "N America" },
    // South America (128)
    { name: "Goiania", lat: -16.6869, lon: -49.2648, offset: -3, flag: "br", continent: "S America" },
    // Europe (129)
    { name: "Belgrade", lat: 44.7866, lon: 20.4489, offset: 2, flag: "rs", continent: "Europe" },
    // Africa (130)
    { name: "Antananarivo", lat: -18.8792, lon: 47.5079, offset: 3, flag: "mg", continent: "Africa" },
    // Asia (131)
    { name: "Bangalore", lat: 12.9716, lon: 77.5946, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (132)
    { name: "Marshall Islands", lat: 7.1315, lon: 171.1845, offset: 12, flag: "mh", continent: "Oceania" },
    // North America (133)
    { name: "Calgary", lat: 51.0447, lon: -114.0719, offset: -6, flag: "ca", continent: "N America" },
    // South America (134)
    { name: "Campinas", lat: -22.9056, lon: -47.0608, offset: -3, flag: "br", continent: "S America" },
    // Europe (135)
    { name: "Zagreb", lat: 45.8150, lon: 15.9819, offset: 2, flag: "hr", continent: "Europe" },
    // Africa (136)
    { name: "Kigali", lat: -1.9441, lon: 30.0619, offset: 2, flag: "rw", continent: "Africa" },
    // Asia (137)
    { name: "Ahmedabad", lat: 23.0225, lon: 72.5714, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (138)
    { name: "Micronesia", lat: 6.9167, lon: 158.1561, offset: 11, flag: "fm", continent: "Oceania" },
    // North America (139)
    { name: "Edmonton", lat: 53.5444, lon: -113.4909, offset: -6, flag: "ca", continent: "N America" },
    // South America (140)
    { name: "Belem", lat: -1.4558, lon: -48.4902, offset: -3, flag: "br", continent: "S America" },
    // Europe (141)
    { name: "Bratislava", lat: 48.1486, lon: 17.1077, offset: 2, flag: "sk", continent: "Europe" },
    // Africa (142)
    { name: "Mogadishu", lat: 2.0469, lon: 45.3182, offset: 3, flag: "so", continent: "Africa" },
    // Asia (143)
    { name: "Pune", lat: 18.5204, lon: 73.8567, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (144)
    { name: "New Caledonia", lat: -22.2558, lon: 166.4505, offset: 11, flag: "nc", continent: "Oceania" },
    // North America (145)
    { name: "Winnipeg", lat: 49.8951, lon: -97.1384, offset: -5, flag: "ca", continent: "N America" },
    // South America (146)
    { name: "Natal", lat: -5.7793, lon: -35.2009, offset: -3, flag: "br", continent: "S America" },
    // Europe (147)
    { name: "Ljubljana", lat: 46.0569, lon: 14.5058, offset: 2, flag: "si", continent: "Europe" },
    // Africa (148)
    { name: "Juba", lat: 4.8594, lon: 31.5713, offset: 2, flag: "ss", continent: "Africa" },
    // Asia (149)
    { name: "Surat", lat: 21.1702, lon: 72.8311, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (150)
    { name: "Tahiti", lat: -17.6509, lon: -149.4260, offset: -10, flag: "pf", continent: "Oceania" },
    // North America (151)
    { name: "Halifax", lat: 44.6488, lon: -63.5752, offset: -3, flag: "ca", continent: "N America" },
    // South America (152)
    { name: "Joao Pessoa", lat: -7.1195, lon: -34.8450, offset: -3, flag: "br", continent: "S America" },
    // Europe (153)
    { name: "Riga", lat: 56.9496, lon: 24.1052, offset: 3, flag: "lv", continent: "Europe" },
    // Africa (154)
    { name: "Niamey", lat: 13.5116, lon: 2.1254, offset: 1, flag: "ne", continent: "Africa" },
    // Asia (155)
    { name: "Jaipur", lat: 26.9124, lon: 75.7873, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (156)
    { name: "Guam", lat: 13.4443, lon: 144.7937, offset: 10, flag: "gu", continent: "Oceania" },
    // North America (157)
    { name: "St. John's", lat: 47.5615, lon: -52.7126, offset: -2.5, flag: "ca", continent: "N America" },
    // South America (158)
    { name: "Aracaju", lat: -10.9472, lon: -37.0731, offset: -3, flag: "br", continent: "S America" },
    // Europe (159)
    { name: "Tallinn", lat: 59.4370, lon: 24.7535, offset: 3, flag: "ee", continent: "Europe" },
    // Africa (160)
    { name: "Ouagadougou", lat: 12.3714, lon: -1.5197, offset: 0, flag: "bf", continent: "Africa" },
    // Asia (161)
    { name: "Lucknow", lat: 26.8467, lon: 80.9462, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (162)
    { name: "Hawaii", lat: 21.3069, lon: -157.8583, offset: -10, flag: "us", continent: "Oceania" },
    // North America (163)
    { name: "Quebec City", lat: 46.8139, lon: -71.2080, offset: -4, flag: "ca", continent: "N America" },
    // South America (164)
    { name: "Teresina", lat: -5.0892, lon: -42.8016, offset: -3, flag: "br", continent: "S America" },
    // Europe (165)
    { name: "Vilnius", lat: 54.6872, lon: 25.2797, offset: 3, flag: "lt", continent: "Europe" },
    // Africa (166)
    { name: "Brazzaville", lat: -4.2634, lon: 15.2429, offset: 1, flag: "cg", continent: "Africa" },
    // Asia (167)
    { name: "Kanpur", lat: 26.4499, lon: 80.3319, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (168)
    { name: "Cook Islands", lat: -21.2367, lon: -159.7777, offset: -10, flag: "ck", continent: "Oceania" },
    // North America (169)
    { name: "Regina", lat: 50.4452, lon: -104.6189, offset: -6, flag: "ca", continent: "N America" },
    // South America (170)
    { name: "Maceio", lat: -9.6658, lon: -35.7353, offset: -3, flag: "br", continent: "S America" },
    // Europe (171)
    { name: "Skopje", lat: 41.9981, lon: 21.4254, offset: 2, flag: "mk", continent: "Europe" },
    // Africa (172)
    { name: "Libreville", lat: 0.4162, lon: 9.4673, offset: 1, flag: "ga", continent: "Africa" },
    // Asia (173)
    { name: "Nagpur", lat: 21.1458, lon: 79.0882, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (174)
    { name: "Niue", lat: -19.0544, lon: -169.8672, offset: -11, flag: "nu", continent: "Oceania" },
    // North America (175)
    { name: "Saskatoon", lat: 52.1332, lon: -106.6700, offset: -6, flag: "ca", continent: "N America" },
    // South America (176)
    { name: "Sao Luis", lat: -2.5297, lon: -44.3028, offset: -3, flag: "br", continent: "S America" },
    // Europe (177)
    { name: "Sarajevo", lat: 43.8563, lon: 18.4131, offset: 2, flag: "ba", continent: "Europe" },
    // Africa (178)
    { name: "Yaounde", lat: 3.8480, lon: 11.5021, offset: 1, flag: "cm", continent: "Africa" },
    // Asia (179)
    { name: "Indore", lat: 22.7196, lon: 75.8577, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (180)
    { name: "Pitcairn Islands", lat: -25.0667, lon: -130.1015, offset: -8, flag: "pn", continent: "Oceania" },
    // North America (181)
    { name: "Victoria", lat: 48.4284, lon: -123.3656, offset: -7, flag: "ca", continent: "N America" },
    // South America (182)
    { name: "Campo Grande", lat: -20.4697, lon: -54.6201, offset: -4, flag: "br", continent: "S America" },
    // Europe (183)
    { name: "Tirana", lat: 41.3275, lon: 19.8187, offset: 2, flag: "al", continent: "Europe" },
    // Africa (184)
    { name: "Ndjamena", lat: 12.1348, lon: 15.0557, offset: 1, flag: "td", continent: "Africa" },
    // Asia (185)
    { name: "Thane", lat: 19.2183, lon: 72.9781, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (186)
    { name: "Norfolk Island", lat: -29.0408, lon: 167.9547, offset: 11, flag: "nf", continent: "Oceania" },
    // North America (187)
    { name: "Anchorage", lat: 61.2181, lon: -149.9003, offset: -8, flag: "us", continent: "N America" },
    // South America (188)
    { name: "Cuiaba", lat: -15.6014, lon: -56.0979, offset: -4, flag: "br", continent: "S America" },
    // Europe (189)
    { name: "Chisinau", lat: 47.0105, lon: 28.8638, offset: 3, flag: "md", continent: "Europe" },
    // Africa (190)
    { name: "Lome", lat: 6.1319, lon: 1.2228, offset: 0, flag: "tg", continent: "Africa" },
    // Asia (191)
    { name: "Bhopal", lat: 23.2599, lon: 77.4126, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (192)
    { name: "Tokelau", lat: -9.2002, lon: -171.8484, offset: 13, flag: "tk", continent: "Oceania" },
    // North America (193)
    { name: "Fairbanks", lat: 64.8378, lon: -147.7164, offset: -8, flag: "us", continent: "N America" },
    // South America (194)
    { name: "Porto Velho", lat: -8.7612, lon: -63.9004, offset: -4, flag: "br", continent: "S America" },
    // Europe (195)
    { name: "Yerevan", lat: 40.1792, lon: 44.4991, offset: 4, flag: "am", continent: "Asia" },
    // Africa (196)
    { name: "Banjul", lat: 13.4549, lon: -16.5790, offset: 0, flag: "gm", continent: "Africa" },
    // Asia (197)
    { name: "Patna", lat: 25.5941, lon: 85.1376, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (198)
    { name: "Wallis and Futuna", lat: -13.7688, lon: -177.1561, offset: 12, flag: "wf", continent: "Oceania" },
    // North America (199)
    { name: "Juneau", lat: 58.3019, lon: -134.4197, offset: -8, flag: "us", continent: "N America" },
    // South America (200)
    { name: "Boa Vista", lat: 2.8195, lon: -60.6733, offset: -4, flag: "br", continent: "S America" },
    // Europe (201)
    { name: "Tbilisi", lat: 41.7151, lon: 44.8271, offset: 4, flag: "ge", continent: "Asia" },
    // Africa (202)
    { name: "Conakry", lat: 9.6412, lon: -13.5784, offset: 0, flag: "gn", continent: "Africa" },
    // Asia (203)
    { name: "Ranchi", lat: 23.3441, lon: 85.3096, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (204)
    { name: "American Samoa", lat: -14.2700, lon: -170.1322, offset: -11, flag: "as", continent: "Oceania" },
    // North America (205)
    { name: "Whitehorse", lat: 60.7212, lon: -135.0568, offset: -7, flag: "ca", continent: "N America" },
    // South America (206)
    { name: "Rio Branco", lat: -9.9748, lon: -67.8076, offset: -5, flag: "br", continent: "S America" },
    // Europe (207)
    { name: "Baku", lat: 40.4093, lon: 49.8671, offset: 4, flag: "az", continent: "Asia" },
    // Africa (208)
    { name: "Bissau", lat: 11.8817, lon: -15.6177, offset: 0, flag: "gw", continent: "Africa" },
    // Asia (209)
    { name: "Guwahati", lat: 26.1445, lon: 91.7362, offset: 5.5, flag: "in", continent: "Asia" },
    // Oceania (210)
    { name: "Easter Island", lat: -27.1127, lon: -109.3497, offset: -6, flag: "cl", continent: "Oceania" },
    // North America (211)
    { name: "Yellowknife", lat: 62.4540, lon: -114.3718, offset: -6, flag: "ca", continent: "N America" },
    // South America (212)
    { name: "Galapagos", lat: -0.9538, lon: -90.9656, offset: -6, flag: "ec", continent: "S America" },
    // Europe (213)
    { name: "Porto", lat: 41.1579, lon: -8.6291, offset: 1, flag: "pt", continent: "Europe" },
    // Africa (214)
    { name: "Freetown", lat: 8.4657, lon: -13.2317, offset: 0, flag: "sl", continent: "Africa" },
    // Asia (215)
    { name: "Amman", lat: 31.9539, lon: 35.9106, offset: 3, flag: "jo", continent: "Asia" },
    // North America (216)
    { name: "St. Louis", lat: 38.6270, lon: -90.1994, offset: -5, flag: "us", continent: "N America" },
    // Europe (217)
    { name: "Milan", lat: 45.4642, lon: 9.1900, offset: 2, flag: "it", continent: "Europe" },
    // Africa (218)
    { name: "Monrovia", lat: 6.3156, lon: -10.8074, offset: 0, flag: "lr", continent: "Africa" },
    // Asia (219)
    { name: "Baghdad", lat: 33.3152, lon: 44.3661, offset: 3, flag: "iq", continent: "Asia" },
    // North America (220)
    { name: "Kansas City", lat: 39.0997, lon: -94.5786, offset: -5, flag: "us", continent: "N America" },
    // Europe (221)
    { name: "Barcelona", lat: 41.3851, lon: 2.1734, offset: 2, flag: "es", continent: "Europe" },
    // Africa (222)
    { name: "Nouakchott", lat: 18.0735, lon: -15.9582, offset: 0, flag: "mr", continent: "Africa" },
    // Asia (223)
    { name: "Riyadh", lat: 24.7136, lon: 46.6753, offset: 3, flag: "sa", continent: "Asia" },
    // North America (224)
    { name: "Minneapolis", lat: 44.9778, lon: -93.2650, offset: -5, flag: "us", continent: "N America" },
    // Europe (225)
    { name: "Munich", lat: 48.1351, lon: 11.5820, offset: 2, flag: "de", continent: "Europe" },
    // Africa (226)
    { name: "Cape Verde", lat: 14.9330, lon: -23.5133, offset: -1, flag: "cv", continent: "Africa" },
    // Asia (227)
    { name: "Dubai", lat: 25.2048, lon: 55.2708, offset: 4, flag: "ae", continent: "Asia" },
    // North America (228)
    { name: "Cleveland", lat: 41.4993, lon: -81.6944, offset: -4, flag: "us", continent: "N America" },
    // Europe (229)
    { name: "Florence", lat: 43.7696, lon: 11.2558, offset: 2, flag: "it", continent: "Europe" },
    // Africa (230)
    { name: "Sao Tome", lat: 0.3365, lon: 6.7273, offset: 0, flag: "st", continent: "Africa" },
    // Asia (231)
    { name: "Kuwait City", lat: 29.3759, lon: 47.9774, offset: 3, flag: "kw", continent: "Asia" },
    // North America (232)
    { name: "Tampa", lat: 27.9506, lon: -82.4572, offset: -4, flag: "us", continent: "N America" },
    // Europe (233)
    { name: "Venice", lat: 45.4408, lon: 12.3155, offset: 2, flag: "it", continent: "Europe" },
    // Africa (234)
    { name: "Malabo", lat: 3.7504, lon: 8.7832, offset: 1, flag: "gq", continent: "Africa" }
];
let cityInfo = {};

async function loadCityInfo() {
    try {
        // 5개 JSON 파일 경로
        const files = [
            '/data/public/data/cities1.json',
            '/data/public/data/cities2.json',
            '/data/public/data/cities3.json',
            '/data/public/data/cities4.json',
            '/data/public/data/cities5.json'
        ];

        // 각 파일 로드
        const responses = await Promise.all(files.map(file => fetch(file)));
        const data = await Promise.all(responses.map(res => res.json()));

        // 데이터 병합
        cityInfo = Object.assign({}, ...data);
        console.log("City info loaded:", cityInfo);
    } catch (error) {
        console.error("Error loading city info:", error);
    }
}

const continentColors = {
    "N America": "#388E3C", /* 초록색 */
    "Europe": "#FBC02D",        /* 노란색 */
    "Asia": "#F57C00",          /* 주황색 */
    "S America": "#1976D2", /* 파란색 */
    "Africa": "#303F9F",        /* 남색 */
    "Oceania": "#7B1FA2"        /* 보라색 */
};
// 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const filterButtons = document.getElementById("filter-buttons");
    const loadMoreButton = document.getElementById("load-more");

    if (!searchInput || !filterButtons || !loadMoreButton) {
        console.error("Required elements not found:", { searchInput, filterButtons, loadMoreButton });
        return;
    }

    // JSON 파일 로드 후 초기화
    loadCityInfo().then(() => {
        // 검색
        searchInput.addEventListener("input", () => {
            const continent = document.querySelector(".filter-btn.active")?.dataset.continent || "";
            filterClocks(continent);
        });

        // 필터 버튼
        filterButtons.addEventListener("click", (event) => {
            if (event.target.classList.contains("filter-btn")) {
                document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
                event.target.classList.add("active");
                const continent = event.target.dataset.continent;
                filterClocks(continent);
            }
        });

        // 더 보기 버튼
        loadMoreButton.addEventListener("click", () => {
            console.log("Load More clicked");
            loadMoreClocks();
        });

        // 초기화 및 시간 업데이트
        initializeClocks().then(() => {
            console.log("Clocks initialized:", allClocks);
            setInterval(() => {
                allClocks.forEach(({ clock, city }) => {
                    if (clock.style.display === "block") {
                        updateClock(clock, city.offset, weatherCache.get(city.name));
                    }
                });
            }, 1000);
        }).catch(error => {
            console.error("Error initializing clocks:", error);
        });
    });
});

const weatherCache = new Map();
let allClocks = [];
let displayedClocks = 0;
const clocksPerLoad = 25;

async function fetchWeather(lat, lon, city) {
    const cacheKey = `${lat},${lon}`;
    const cached = weatherCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < 30 * 60 * 1000) return cached.data;
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code`
        );
        const data = await response.json();
        const weather = {
            temp: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            code: data.current.weather_code,
        };
        weatherCache.set(cacheKey, { data: weather, timestamp: Date.now() });
        return weather;
    } catch (error) {
        console.error(`Failed to fetch weather for ${city}:`, error);
        return { temp: 20, humidity: 50, code: 0 };
    }
}

function getWeatherIcon(code) {
    const weatherIcons = {
        0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️", 45: "🌫️", 48: "🌫️",
        51: "🌧️", 53: "🌧️", 55: "🌧️", 61: "🌧️", 63: "🌧️", 65: "🌧️",
        71: "❄️", 73: "❄️", 75: "❄️", 95: "⛈️",
    };
    return weatherIcons[code] || "🌍";
}

function createClock(city) {
    const container = document.createElement("div");
    container.className = "clock-container";
    container.dataset.city = city.name;
    container.dataset.continent = city.continent;

    const flag = document.createElement("img");
    flag.src = `https://flagcdn.com/64x48/${city.flag}.png`; // 여기만 변경
    flag.alt = `${city.name} flag`;

    const cityName = document.createElement("h2");
    cityName.appendChild(flag); // 국기 → 도시 이름 순서 복원
    cityName.append(` ${city.name}`);

    const time = document.createElement("div");
    time.className = "clock-time";
    time.style.color = continentColors[city.continent] || "#000";

    const weatherInfo = document.createElement("div");
    weatherInfo.className = "weather-info";

    container.append(cityName, time, weatherInfo);
    document.getElementById("clocks-container").appendChild(container);

    async function updateWeather() {
        const weather = await fetchWeather(city.lat, city.lon, city.name);
        weatherInfo.innerHTML = `Weather: ${getWeatherIcon(weather.code)} <span class="temp">${weather.temp}°C</span>, Humidity: <span class="humidity">${weather.humidity}%</span>`;
    }

    function updateClock() {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const localTime = new Date(utc + city.offset * 3600000);
        const hours = String(localTime.getHours()).padStart(2, "0");
        const minutes = String(localTime.getMinutes()).padStart(2, "0");
        const seconds = String(localTime.getSeconds()).padStart(2, "0");
        time.innerHTML = `${hours}:${minutes}<span class="seconds">:${seconds}</span>`;
    }

    updateClock();
    updateWeather();
    setInterval(updateClock, 1000);
    setInterval(updateWeather, 30 * 60 * 1000);

    return { clock: container, updateWeather };
}

async function initializeClocks() {
    document.getElementById("load-more").disabled = true;
    const chunk = cities.slice(0, 50);
    for (const city of chunk) {
        allClocks.push(await createClock(city));
    }
    displayedClocks = 50;
    document.getElementById("load-more").disabled = displayedClocks >= cities.length;
}

async function loadMoreClocks() {
    document.getElementById("load-more").disabled = true;
    const chunk = cities.slice(displayedClocks, displayedClocks + clocksPerLoad);
    for (const city of chunk) {
        allClocks.push(await createClock(city));
    }
    displayedClocks += clocksPerLoad;
    document.getElementById("load-more").disabled = displayedClocks >= cities.length;
}

function createFilterButtons() {
    const continents = ["", "Asia", "Europe", "N America", "S America", "Africa", "Oceania"];
    const filterContainer = document.getElementById("filter-buttons");
    continents.forEach(continent => {
        const button = document.createElement("button");
        button.className = "filter-btn";
        button.dataset.continent = continent;
        button.textContent = continent || "All";
        button.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            filterClocks();
        });
        filterContainer.appendChild(button);
    });
    filterContainer.firstChild.classList.add("active");
}

function filterClocks() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const activeContinent = document.querySelector(".filter-btn.active").dataset.continent;
    allClocks.forEach(({ clock }) => {
        const matchesSearch = searchQuery === "" || clock.dataset.city.toLowerCase().includes(searchQuery);
        const matchesContinent = activeContinent === "" || clock.dataset.continent === activeContinent;
        clock.style.display = matchesSearch && matchesContinent ? "block" : "none";
    });
}

function setupSearch() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        filterClocks();
        const query = searchInput.value.toLowerCase();
        const suggestions = cities.filter(city => city.name.toLowerCase().startsWith(query)).slice(0, 5);
        console.log("Suggestions:", suggestions.map(city => city.name));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createFilterButtons();
    setupSearch();
    initializeClocks();
    document.getElementById("load-more").addEventListener("click", loadMoreClocks);
});