// src/data/cities/citiesData.ts

export type City = {
    name: string;
    lat: number;
    lng: number;
    courseType?: string;
    link?: string;
};

export type District = {
    district: string;
    description?: string;
    cities: City[];
};

export type State = {
    state: string;
    description?: string;
    districts: District[];
};

export function getFlatLocations(states: State[]) {
    const flat: { name: string; lat: number; lng: number; type: string; link?: string }[] = [];
    states.forEach((state) => {
        state.districts.forEach((district) => {
            district.cities.forEach((city) => {
                flat.push({
                    name: city.name,
                    lat: city.lat,
                    lng: city.lng,
                    type: city.courseType || "general",
                    link: city.link,
                });
            });
        });
    });
    return flat;
}


export const statesData: State[] = [
    {
        "state": "Maharashtra",
        "description": "Premier courses in Maharashtra, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Maharashtra, training Maharashtra.",
        "districts": [
            {
                "district": "Mumbai",
                "description": "Key location for Maharashtra courses, including Mumbai area.",
                "cities": [
                    {
                        "name": "Mumbai",
                        "lat": 19.0759837,
                        "lng": 72.8776559,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-mumbai"
                    },
                    {
                        "name": "Mumbai",
                        "lat": 19.0759837,
                        "lng": 72.8776559,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mumbai"
                    },
                    {
                        "name": "Mumbai",
                        "lat": 19.0759837,
                        "lng": 72.8776559,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-mumbai"
                    },
                    {
                        "name": "Mumbai",
                        "lat": 19.0759837,
                        "lng": 72.8776559,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mumbai"
                    }
                ]
            },
            {
                "district": "Pune",
                "description": "Key location for Maharashtra courses, including Pune area.",
                "cities": [
                    {
                        "name": "Pune",
                        "lat": 18.5204303,
                        "lng": 73.8567437,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-pune"
                    },
                    {
                        "name": "Pune",
                        "lat": 18.5204303,
                        "lng": 73.8567437,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-pune"
                    },
                    {
                        "name": "Pune",
                        "lat": 18.5204303,
                        "lng": 73.8567437,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-pune"
                    },
                    {
                        "name": "Pune",
                        "lat": 18.5204303,
                        "lng": 73.8567437,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-pune"
                    }
                ]
            },
            {
                "district": "Amravati",
                "description": "Key location for Maharashtra courses, including Amravati area.",
                "cities": [
                    {
                        "name": "Amravati",
                        "lat": 20.9374238,
                        "lng": 77.7795513,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-amravati"
                    }
                ]
            },
            {
                "district": "Aurangabad",
                "description": "Key location for Maharashtra courses, including Aurangabad area.",
                "cities": [
                    {
                        "name": "Aurangabad",
                        "lat": 19.8761653,
                        "lng": 75.3433139,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-aurangabad"
                    },
                    {
                        "name": "Aurangabad",
                        "lat": 19.8761653,
                        "lng": 75.3433139,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-aurangabad"
                    }
                ]
            },
            {
                "district": "Nagpur",
                "description": "Key location for Maharashtra courses, including Nagpur area.",
                "cities": [
                    {
                        "name": "Nagpur",
                        "lat": 21.1458004,
                        "lng": 79.0881546,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-nagpur"
                    },
                    {
                        "name": "Nagpur",
                        "lat": 21.1458004,
                        "lng": 79.0881546,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-nagpur"
                    },
                    {
                        "name": "Nagpur",
                        "lat": 21.1458004,
                        "lng": 79.0881546,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-nagpur"
                    },
                    {
                        "name": "Nagpur",
                        "lat": 21.1458004,
                        "lng": 79.0881546,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-nagpur"
                    }
                ]
            },
            {
                "district": "Unmapped Locations",
                "description": "Key location for Maharashtra courses, including Unmapped Locations area.",
                "cities": [
                    {
                        "name": "Virar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-virar"
                    },
                    {
                        "name": "Nallasopara",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-nallasopara"
                    },
                    {
                        "name": "Vasai Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-vasai-road"
                    },
                    {
                        "name": "Naigaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-naigaon"
                    },
                    {
                        "name": "Bhayandar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-bhayandar"
                    },
                    {
                        "name": "Mira Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-mira-road"
                    },
                    {
                        "name": "Dahisar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-dahisar"
                    },
                    {
                        "name": "Borivali",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-borivali"
                    },
                    {
                        "name": "Kandivali",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-kandivali"
                    },
                    {
                        "name": "Malad",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-malad"
                    },
                    {
                        "name": "Goregaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-goregaon"
                    },
                    {
                        "name": "Ram Mandir",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-ram-mandir"
                    },
                    {
                        "name": "Jogeshwari",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-jogeshwari"
                    },
                    {
                        "name": "Andheri",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-andheri"
                    },
                    {
                        "name": "Vile Parle",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-vile-parle"
                    },
                    {
                        "name": "Santacruz",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-santacruz"
                    },
                    {
                        "name": "Khar Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-khar-road"
                    },
                    {
                        "name": "Bandra",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-bandra"
                    },
                    {
                        "name": "Mahim",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-mahim"
                    },
                    {
                        "name": "Matunga Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-matunga-road"
                    },
                    {
                        "name": "Dadar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-dadar"
                    },
                    {
                        "name": "Prabhadevi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-prabhadevi"
                    },
                    {
                        "name": "Lower Parel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-lower-parel"
                    },
                    {
                        "name": "Mahalaxmi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-mahalaxmi"
                    },
                    {
                        "name": "Mumbai Central",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-mumbai-central"
                    },
                    {
                        "name": "Grant Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-grant-road"
                    },
                    {
                        "name": "Charni Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-charni-road"
                    },
                    {
                        "name": "Marine Lines",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-marine-lines"
                    },
                    {
                        "name": "Churchgate",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-churchgate"
                    },
                    {
                        "name": "CSMT",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-csmt"
                    },
                    {
                        "name": "Masjid",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-masjid"
                    },
                    {
                        "name": "Sandhurst Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-sandhurst-road"
                    },
                    {
                        "name": "Byculla",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-byculla"
                    },
                    {
                        "name": "Chinchpokli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-chinchpokli"
                    },
                    {
                        "name": "Parel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-parel"
                    },
                    {
                        "name": "Matunga",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-matunga"
                    },
                    {
                        "name": "Sion",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-sion"
                    },
                    {
                        "name": "Kurla",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-kurla"
                    },
                    {
                        "name": "Wadala Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-wadala-road"
                    },
                    {
                        "name": "Chembur",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-chembur"
                    },
                    {
                        "name": "Vashi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-vashi"
                    },
                    {
                        "name": "Nerul",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-nerul"
                    },
                    {
                        "name": "Seawoods-Darave",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-seawoods-darave"
                    },
                    {
                        "name": "CBD Belapur",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-cbd-belapur"
                    },
                    {
                        "name": "Panvel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-panvel"
                    },
                    {
                        "name": "Bandra",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-bandra"
                    },
                    {
                        "name": "Virar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-virar"
                    },
                    {
                        "name": "Nalasopara",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-nalasopara"
                    },
                    {
                        "name": "Vasai Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-vasai-road"
                    },
                    {
                        "name": "Naigaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-naigaon"
                    },
                    {
                        "name": "Bhayandar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-bhayandar"
                    },
                    {
                        "name": "Mira Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mira-road"
                    },
                    {
                        "name": "Dahisar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-dahisar"
                    },
                    {
                        "name": "Borivali",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-borivali"
                    },
                    {
                        "name": "Kandivali",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kandivali"
                    },
                    {
                        "name": "Malad",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-malad"
                    },
                    {
                        "name": "Goregaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-goregaon"
                    },
                    {
                        "name": "Ram Mandir",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-ram-mandir"
                    },
                    {
                        "name": "Jogeshwari",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-jogeshwari"
                    },
                    {
                        "name": "Andheri",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-andheri"
                    },
                    {
                        "name": "Vile Parle",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-vile-parle"
                    },
                    {
                        "name": "Santacruz",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-santacruz"
                    },
                    {
                        "name": "Khar Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-khar-road"
                    },
                    {
                        "name": "Mahim Junction",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mahim-junction"
                    },
                    {
                        "name": "Matunga Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-matunga-road"
                    },
                    {
                        "name": "Dadar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-dadar"
                    },
                    {
                        "name": "Prabhadevi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-prabhadevi"
                    },
                    {
                        "name": "Lower Parel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-lower-parel"
                    },
                    {
                        "name": "Mahalaxmi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mahalaxmi"
                    },
                    {
                        "name": "Mumbai Central",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mumbai-central"
                    },
                    {
                        "name": "Grant Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-grant-road"
                    },
                    {
                        "name": "Charni Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-charni-road"
                    },
                    {
                        "name": "Marine Lines",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-marine-lines"
                    },
                    {
                        "name": "Churchgate",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-churchgate"
                    },
                    {
                        "name": "Mumbai CST",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mumbai-cst"
                    },
                    {
                        "name": "Masjid",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-masjid"
                    },
                    {
                        "name": "Sandhurst Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-sandhurst-road"
                    },
                    {
                        "name": "Dockyard Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-dockyard-road"
                    },
                    {
                        "name": "Reay Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-reay-road"
                    },
                    {
                        "name": "Cotton Green",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-cotton-green"
                    },
                    {
                        "name": "Sewri",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-sewri"
                    },
                    {
                        "name": "Wadala Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-wadala-road"
                    },
                    {
                        "name": "King's Circle",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kings-circle"
                    },
                    {
                        "name": "Vashi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-vashi"
                    },
                    {
                        "name": "Sanpada",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-sanpada"
                    },
                    {
                        "name": "Turbhe",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-turbhe"
                    },
                    {
                        "name": "Kopar Khairane",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kopar-khairane"
                    },
                    {
                        "name": "Ghansoli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-ghansoli"
                    },
                    {
                        "name": "Rabale",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-rabale"
                    },
                    {
                        "name": "Airoli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-airoli"
                    },
                    {
                        "name": "Juinagar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-juinagar"
                    },
                    {
                        "name": "Kharghar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kharghar"
                    },
                    {
                        "name": "Mansarovar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mansarovar"
                    },
                    {
                        "name": "Khandeshwar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-khandeshwar"
                    },
                    {
                        "name": "Nerul",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-nerul"
                    },
                    {
                        "name": "Panvel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-panvel"
                    },
                    {
                        "name": "CSMT",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-csmt"
                    },
                    {
                        "name": "Byculla",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-byculla"
                    },
                    {
                        "name": "Chinchpokli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-chinchpokli"
                    },
                    {
                        "name": "Currey Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-currey-road"
                    },
                    {
                        "name": "Parel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-parel"
                    },
                    {
                        "name": "Kurla",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kurla"
                    },
                    {
                        "name": "Vidyavihar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-vidyavihar"
                    },
                    {
                        "name": "Ghatkopar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-ghatkopar"
                    },
                    {
                        "name": "Vikhroli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-vikhroli"
                    },
                    {
                        "name": "Kanjurmarg",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kanjurmarg"
                    },
                    {
                        "name": "Bhandup",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-bhandup"
                    },
                    {
                        "name": "Nahur",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-nahur"
                    },
                    {
                        "name": "Mulund",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mulund"
                    },
                    {
                        "name": "Thane",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-thane"
                    },
                    {
                        "name": "Kalva",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kalva"
                    },
                    {
                        "name": "Mumbra",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-mumbra"
                    },
                    {
                        "name": "Diva",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-diva"
                    },
                    {
                        "name": "Dombivli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-dombivli"
                    },
                    {
                        "name": "Kalyan",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kalyan"
                    },
                    {
                        "name": "Churchgate",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-churchgate"
                    },
                    {
                        "name": "Marine Lines",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-marine-lines"
                    },
                    {
                        "name": "Charni Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-charni-road"
                    },
                    {
                        "name": "Grant Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-grant-road"
                    },
                    {
                        "name": "Mumbai Central",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-mumbai-central"
                    },
                    {
                        "name": "Dadar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-dadar"
                    },
                    {
                        "name": "Matunga Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-matunga-road"
                    },
                    {
                        "name": "Mahim Jn",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-mahim-jn"
                    },
                    {
                        "name": "Bandra",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-bandra"
                    },
                    {
                        "name": "Khar Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-khar-road"
                    },
                    {
                        "name": "Santacruz",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-santacruz"
                    },
                    {
                        "name": "Vile Parle",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vile-parle"
                    },
                    {
                        "name": "Andheri",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-andheri"
                    },
                    {
                        "name": "Jogeshwari",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-jogeshwari"
                    },
                    {
                        "name": "Ram Mandir",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-ram-mandir"
                    },
                    {
                        "name": "Goregaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-goregaon"
                    },
                    {
                        "name": "Malad",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-malad"
                    },
                    {
                        "name": "Kandivali",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kandivali"
                    },
                    {
                        "name": "Borivali",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-borivali"
                    },
                    {
                        "name": "Dahisar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-dahisar"
                    },
                    {
                        "name": "Mira Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-mira-road"
                    },
                    {
                        "name": "Bhayandar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-bhayandar"
                    },
                    {
                        "name": "Naigaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-naigaon"
                    },
                    {
                        "name": "Vasai Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vasai-road"
                    },
                    {
                        "name": "Nalasopara",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-nalasopara"
                    },
                    {
                        "name": "Virar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-virar"
                    },
                    {
                        "name": "Vaitarna",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vaitarna"
                    },
                    {
                        "name": "Saphale",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-saphale"
                    },
                    {
                        "name": "Kelve Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kelve-road"
                    },
                    {
                        "name": "Palghar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-palghar"
                    },
                    {
                        "name": "Umroli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-umroli"
                    },
                    {
                        "name": "Boisar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-boisar"
                    },
                    {
                        "name": "Vangaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vangaon"
                    },
                    {
                        "name": "Dahanu Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-dahanu-road"
                    },
                    {
                        "name": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-csmt"
                    },
                    {
                        "name": "Masjid",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-masjid"
                    },
                    {
                        "name": "Sandhurst Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-sandhurst-road"
                    },
                    {
                        "name": "Byculla",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-byculla"
                    },
                    {
                        "name": "Chinchpokli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-chinchpokli"
                    },
                    {
                        "name": "Currey Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-currey-road"
                    },
                    {
                        "name": "Parel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-parel"
                    },
                    {
                        "name": "Matunga",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-matunga"
                    },
                    {
                        "name": "Sion",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-sion"
                    },
                    {
                        "name": "Kurla",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kurla"
                    },
                    {
                        "name": "Vidyavihar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vidyavihar"
                    },
                    {
                        "name": "Ghatkopar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-ghatkopar"
                    },
                    {
                        "name": "Vikhroli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vikhroli"
                    },
                    {
                        "name": "Kanjur Marg",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kanjur-marg"
                    },
                    {
                        "name": "Bhandup",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-bhandup"
                    },
                    {
                        "name": "Nahur",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-nahur"
                    },
                    {
                        "name": "Mulund",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-mulund"
                    },
                    {
                        "name": "Thane",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-thane"
                    },
                    {
                        "name": "Kalva",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kalva"
                    },
                    {
                        "name": "Mumbra",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-mumbra"
                    },
                    {
                        "name": "Diva Junction",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-diva-junction"
                    },
                    {
                        "name": "Kopar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kopar"
                    },
                    {
                        "name": "Dombivli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-dombivli"
                    },
                    {
                        "name": "Thakurli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-thakurli"
                    },
                    {
                        "name": "Kalyan Junction",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kalyan-junction"
                    },
                    {
                        "name": "Dockyard Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-dockyard-road"
                    },
                    {
                        "name": "King\u2019s Circle",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kings-circle"
                    },
                    {
                        "name": "Reay Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-reay-road"
                    },
                    {
                        "name": "Cotton Green",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-cotton-green"
                    },
                    {
                        "name": "Sewri",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-sewri"
                    },
                    {
                        "name": "Wadala Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-wadala-road"
                    },
                    {
                        "name": "Vashi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vashi"
                    },
                    {
                        "name": "Sanpada",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-sanpada"
                    },
                    {
                        "name": "Juinagar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-juinagar"
                    },
                    {
                        "name": "Nerul",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-nerul"
                    },
                    {
                        "name": "Seawoods\u2013Darave",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-seawoods-darave"
                    },
                    {
                        "name": "Belapur",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-belapur"
                    },
                    {
                        "name": "Kharghar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kharghar"
                    },
                    {
                        "name": "Mansarovar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-mansarovar"
                    },
                    {
                        "name": "Khandeshwar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-khandeshwar"
                    },
                    {
                        "name": "Panvel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-panvel"
                    },
                    {
                        "name": "Churchgate",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-churchgate"
                    },
                    {
                        "name": "Marine Lines",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-marine-lines"
                    },
                    {
                        "name": "Charni Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-charni-road"
                    },
                    {
                        "name": "Grant Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-grant-road"
                    },
                    {
                        "name": "Mumbai Central",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mumbai-central"
                    },
                    {
                        "name": "Mahalaxmi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mahalaxmi"
                    },
                    {
                        "name": "Lower Parel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-lower-parel"
                    },
                    {
                        "name": "Prabhadevi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-prabhadevi"
                    },
                    {
                        "name": "Dadar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-dadar"
                    },
                    {
                        "name": "Matunga Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-matunga-road"
                    },
                    {
                        "name": "Mahim Jn",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mahim-jn"
                    },
                    {
                        "name": "Bandra",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-bandra"
                    },
                    {
                        "name": "Khar Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-khar-road"
                    },
                    {
                        "name": "Santacruz",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-santacruz"
                    },
                    {
                        "name": "Vile Parle",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vile-parle"
                    },
                    {
                        "name": "Andheri",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-andheri"
                    },
                    {
                        "name": "Jogeshwari",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-jogeshwari"
                    },
                    {
                        "name": "Ram Mandir",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-ram-mandir"
                    },
                    {
                        "name": "Goregaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-goregaon"
                    },
                    {
                        "name": "Malad",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-malad"
                    },
                    {
                        "name": "Kandivali",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kandivali"
                    },
                    {
                        "name": "Borivali",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-borivali"
                    },
                    {
                        "name": "Dahisar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-dahisar"
                    },
                    {
                        "name": "Mira Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mira-road"
                    },
                    {
                        "name": "Bhayandar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-bhayandar"
                    },
                    {
                        "name": "Naigaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-naigaon"
                    },
                    {
                        "name": "Vasai Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vasai-road"
                    },
                    {
                        "name": "Nalasopara",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-nalasopara"
                    },
                    {
                        "name": "Virar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-virar"
                    },
                    {
                        "name": "Vaitarna",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vaitarna"
                    },
                    {
                        "name": "Saphale",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-saphale"
                    },
                    {
                        "name": "Kelve Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kelve-road"
                    },
                    {
                        "name": "Palghar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-palghar"
                    },
                    {
                        "name": "Umroli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-umroli"
                    },
                    {
                        "name": "Boisar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-boisar"
                    },
                    {
                        "name": "Vangaon",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vangaon"
                    },
                    {
                        "name": "Dahanu Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-dahanu-road"
                    },
                    {
                        "name": "CSMT",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-csmt"
                    },
                    {
                        "name": "Masjid",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-masjid"
                    },
                    {
                        "name": "Sandhurst Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-sandhurst-road"
                    },
                    {
                        "name": "Byculla",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-byculla"
                    },
                    {
                        "name": "Chinchpokli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-chinchpokli"
                    },
                    {
                        "name": "Currey Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-currey-road"
                    },
                    {
                        "name": "Parel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-parel"
                    },
                    {
                        "name": "Matunga",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-matunga"
                    },
                    {
                        "name": "Sion",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-sion"
                    },
                    {
                        "name": "Kurla",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kurla"
                    },
                    {
                        "name": "Vidyavihar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vidyavihar"
                    },
                    {
                        "name": "Ghatkopar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-ghatkopar"
                    },
                    {
                        "name": "Vikhroli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vikhroli"
                    },
                    {
                        "name": "Kanjur Marg",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kanjur-marg"
                    },
                    {
                        "name": "Bhandup",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-bhandup"
                    },
                    {
                        "name": "Nahur",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-nahur"
                    },
                    {
                        "name": "Mulund",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mulund"
                    },
                    {
                        "name": "Thane",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-thane"
                    },
                    {
                        "name": "Kalva",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kalva"
                    },
                    {
                        "name": "Mumbra",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mumbra"
                    },
                    {
                        "name": "Diva Junction",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-diva-junction"
                    },
                    {
                        "name": "Kopar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kopar"
                    },
                    {
                        "name": "Dombivli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-dombivli"
                    },
                    {
                        "name": "Thakurli",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-thakurli"
                    },
                    {
                        "name": "Kalyan Junction",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kalyan-junction"
                    },
                    {
                        "name": "Dockyard Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-dockyard-road"
                    },
                    {
                        "name": "Reay Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-reay-road"
                    },
                    {
                        "name": "Cotton Green",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-cotton-green"
                    },
                    {
                        "name": "Sewri",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-sewri"
                    },
                    {
                        "name": "Wadala Road",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-wadala-road"
                    },
                    {
                        "name": "Vashi",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vashi"
                    },
                    {
                        "name": "Sanpada",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-sanpada"
                    },
                    {
                        "name": "Juinagar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-juinagar"
                    },
                    {
                        "name": "Nerul",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-nerul"
                    },
                    {
                        "name": "Seawoods\u2013Darave",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-seawoods-darave"
                    },
                    {
                        "name": "CBD Belapur",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-cbd-belapur"
                    },
                    {
                        "name": "Kharghar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kharghar"
                    },
                    {
                        "name": "Mansarovar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mansarovar"
                    },
                    {
                        "name": "Khandeshwar",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-khandeshwar"
                    },
                    {
                        "name": "Panvel",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-panvel"
                    }
                ]
            }
        ]
    },
    {
        "state": "Karnataka",
        "description": "Premier courses in Karnataka, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Karnataka, training Karnataka.",
        "districts": [
            {
                "district": "Bengaluru Urban",
                "description": "Key location for Karnataka courses, including Bengaluru Urban area.",
                "cities": [
                    {
                        "name": "Bengaluru",
                        "lat": 12.9715987,
                        "lng": 77.5945627,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-bengaluru"
                    },
                    {
                        "name": "Bengaluru",
                        "lat": 12.9715987,
                        "lng": 77.5945627,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-bengaluru"
                    }
                ]
            },
            {
                "district": "Unmapped Locations",
                "description": "Key location for Karnataka courses, including Unmapped Locations area.",
                "cities": [
                    {
                        "name": "Bangalore",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-bangalore"
                    },
                    {
                        "name": "Bangalore",
                        "lat": 0.0,
                        "lng": 0.0,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-bangalore"
                    }
                ]
            },
            {
                "district": "South Canara",
                "description": "Key location for Karnataka courses, including South Canara area.",
                "cities": [
                    {
                        "name": "Mangalore",
                        "lat": 12.9141417,
                        "lng": 74.8559568,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-mangalore"
                    },
                    {
                        "name": "Mangalore",
                        "lat": 12.9141417,
                        "lng": 74.8559568,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mangalore"
                    }
                ]
            },
            {
                "district": "Mysuru",
                "description": "Key location for Karnataka courses, including Mysuru area.",
                "cities": [
                    {
                        "name": "Mysore",
                        "lat": 12.2958104,
                        "lng": 76.6393805,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-mysore"
                    }
                ]
            }
        ]
    },
    {
        "state": "Delhi",
        "description": "Premier courses in Delhi, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Delhi, training Delhi.",
        "districts": [
            {
                "district": "Delhi",
                "description": "Key location for Delhi courses, including Delhi area.",
                "cities": [
                    {
                        "name": "Delhi",
                        "lat": 28.6139391,
                        "lng": 77.2090212,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-delhi"
                    },
                    {
                        "name": "Delhi",
                        "lat": 28.6139391,
                        "lng": 77.2090212,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-delhi"
                    },
                    {
                        "name": "Delhi",
                        "lat": 28.6139391,
                        "lng": 77.2090212,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-delhi"
                    },
                    {
                        "name": "Delhi",
                        "lat": 28.6139391,
                        "lng": 77.2090212,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-delhi"
                    }
                ]
            }
        ]
    },
    {
        "state": "West Bengal",
        "description": "Premier courses in West Bengal, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses West Bengal, training West Bengal.",
        "districts": [
            {
                "district": "Kolkata",
                "description": "Key location for West Bengal courses, including Kolkata area.",
                "cities": [
                    {
                        "name": "Kolkata",
                        "lat": 22.572646,
                        "lng": 88.363895,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-kolkata"
                    },
                    {
                        "name": "Kolkata",
                        "lat": 22.572646,
                        "lng": 88.363895,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kolkata"
                    },
                    {
                        "name": "Kolkata",
                        "lat": 22.572646,
                        "lng": 88.363895,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kolkata"
                    },
                    {
                        "name": "Kolkata",
                        "lat": 22.572646,
                        "lng": 88.363895,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kolkata"
                    }
                ]
            }
        ]
    },
    {
        "state": "Tamil Nadu",
        "description": "Premier courses in Tamil Nadu, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Tamil Nadu, training Tamil Nadu.",
        "districts": [
            {
                "district": "Chennai",
                "description": "Key location for Tamil Nadu courses, including Chennai area.",
                "cities": [
                    {
                        "name": "Chennai",
                        "lat": 13.0826802,
                        "lng": 80.2707184,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-chennai"
                    },
                    {
                        "name": "Chennai",
                        "lat": 13.0826802,
                        "lng": 80.2707184,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-chennai"
                    },
                    {
                        "name": "Chennai",
                        "lat": 13.0826802,
                        "lng": 80.2707184,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-chennai"
                    },
                    {
                        "name": "Chennai",
                        "lat": 13.0826802,
                        "lng": 80.2707184,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-chennai"
                    }
                ]
            },
            {
                "district": "Coimbatore",
                "description": "Key location for Tamil Nadu courses, including Coimbatore area.",
                "cities": [
                    {
                        "name": "Coimbatore",
                        "lat": 11.0168445,
                        "lng": 76.9558321,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-coimbatore"
                    },
                    {
                        "name": "Coimbatore",
                        "lat": 11.0168445,
                        "lng": 76.9558321,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-coimbatore"
                    },
                    {
                        "name": "Coimbatore",
                        "lat": 11.0168445,
                        "lng": 76.9558321,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-coimbatore"
                    }
                ]
            },
            {
                "district": "Madurai",
                "description": "Key location for Tamil Nadu courses, including Madurai area.",
                "cities": [
                    {
                        "name": "Madurai",
                        "lat": 9.9252007,
                        "lng": 78.1197754,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-madurai"
                    },
                    {
                        "name": "Madurai",
                        "lat": 9.9252007,
                        "lng": 78.1197754,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-madurai"
                    }
                ]
            }
        ]
    },
    {
        "state": "Gujarat",
        "description": "Premier courses in Gujarat, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Gujarat, training Gujarat.",
        "districts": [
            {
                "district": "Ahmedabad",
                "description": "Key location for Gujarat courses, including Ahmedabad area.",
                "cities": [
                    {
                        "name": "Ahmedabad",
                        "lat": 23.022505,
                        "lng": 72.5713621,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-ahmedabad"
                    },
                    {
                        "name": "Ahmedabad",
                        "lat": 23.022505,
                        "lng": 72.5713621,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-ahmedabad"
                    },
                    {
                        "name": "Ahmedabad",
                        "lat": 23.022505,
                        "lng": 72.5713621,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-ahmedabad"
                    },
                    {
                        "name": "Ahmedabad",
                        "lat": 23.022505,
                        "lng": 72.5713621,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-ahmedabad"
                    }
                ]
            },
            {
                "district": "Surat",
                "description": "Key location for Gujarat courses, including Surat area.",
                "cities": [
                    {
                        "name": "Surat",
                        "lat": 21.1702401,
                        "lng": 72.8310607,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-surat"
                    },
                    {
                        "name": "Surat",
                        "lat": 21.1702401,
                        "lng": 72.8310607,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-surat"
                    },
                    {
                        "name": "Surat",
                        "lat": 21.1702401,
                        "lng": 72.8310607,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-surat"
                    }
                ]
            },
            {
                "district": "Vadodara",
                "description": "Key location for Gujarat courses, including Vadodara area.",
                "cities": [
                    {
                        "name": "Vadodara",
                        "lat": 22.3071588,
                        "lng": 73.1812187,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-vadodara"
                    },
                    {
                        "name": "Vadodara",
                        "lat": 22.3071588,
                        "lng": 73.1812187,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-vadodara"
                    },
                    {
                        "name": "Vadodara",
                        "lat": 22.3071588,
                        "lng": 73.1812187,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vadodara"
                    },
                    {
                        "name": "Vadodara",
                        "lat": 22.3071588,
                        "lng": 73.1812187,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vadodara"
                    }
                ]
            },
            {
                "district": "Rajkot",
                "description": "Key location for Gujarat courses, including Rajkot area.",
                "cities": [
                    {
                        "name": "Rajkot",
                        "lat": 22.3038945,
                        "lng": 70.8021599,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-rajkot"
                    },
                    {
                        "name": "Rajkot",
                        "lat": 22.3038945,
                        "lng": 70.8021599,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-rajkot"
                    }
                ]
            }
        ]
    },
    {
        "state": "Rajasthan",
        "description": "Premier courses in Rajasthan, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Rajasthan, training Rajasthan.",
        "districts": [
            {
                "district": "Jaipur",
                "description": "Key location for Rajasthan courses, including Jaipur area.",
                "cities": [
                    {
                        "name": "Jaipur",
                        "lat": 26.9124336,
                        "lng": 75.7872709,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-jaipur"
                    },
                    {
                        "name": "Jaipur",
                        "lat": 26.9124336,
                        "lng": 75.7872709,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-jaipur"
                    },
                    {
                        "name": "Jaipur",
                        "lat": 26.9124336,
                        "lng": 75.7872709,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-jaipur"
                    },
                    {
                        "name": "Jaipur",
                        "lat": 26.9124336,
                        "lng": 75.7872709,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-jaipur"
                    }
                ]
            },
            {
                "district": "Ajmer",
                "description": "Key location for Rajasthan courses, including Ajmer area.",
                "cities": [
                    {
                        "name": "Ajmer",
                        "lat": 26.4498954,
                        "lng": 74.6399163,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-ajmer"
                    }
                ]
            },
            {
                "district": "Jodhpur",
                "description": "Key location for Rajasthan courses, including Jodhpur area.",
                "cities": [
                    {
                        "name": "Jodhpur",
                        "lat": 26.2389469,
                        "lng": 73.0243094,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-jodhpur"
                    },
                    {
                        "name": "Jodhpur",
                        "lat": 26.2389469,
                        "lng": 73.0243094,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-jodhpur"
                    },
                    {
                        "name": "Jodhpur",
                        "lat": 26.2389469,
                        "lng": 73.0243094,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-jodhpur"
                    }
                ]
            }
        ]
    },
    {
        "state": "Chandigarh",
        "description": "Premier courses in Chandigarh, including Data Science, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, programming, software testing courses Chandigarh, training Chandigarh.",
        "districts": [
            {
                "district": "Chandigarh",
                "description": "Key location for Chandigarh courses, including Chandigarh area.",
                "cities": [
                    {
                        "name": "Chandigarh",
                        "lat": 30.7399738,
                        "lng": 76.7567368,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-chandigarh"
                    },
                    {
                        "name": "Chandigarh",
                        "lat": 30.7399738,
                        "lng": 76.7567368,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-chandigarh"
                    },
                    {
                        "name": "Chandigarh",
                        "lat": 30.7399738,
                        "lng": 76.7567368,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-chandigarh"
                    }
                ]
            }
        ]
    },
    {
        "state": "Tripura",
        "description": "Premier courses in Tripura, including Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: software testing courses Tripura, training Tripura.",
        "districts": [
            {
                "district": "West Tripura",
                "description": "Key location for Tripura courses, including West Tripura area.",
                "cities": [
                    {
                        "name": "Agartala",
                        "lat": 23.831457,
                        "lng": 91.2867777,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-agartala"
                    }
                ]
            }
        ]
    },
    {
        "state": "Uttar Pradesh",
        "description": "Premier courses in Uttar Pradesh, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Uttar Pradesh, training Uttar Pradesh.",
        "districts": [
            {
                "district": "Agra",
                "description": "Key location for Uttar Pradesh courses, including Agra area.",
                "cities": [
                    {
                        "name": "Agra",
                        "lat": 27.1766701,
                        "lng": 78.0080745,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-agra"
                    }
                ]
            },
            {
                "district": "Allahabad",
                "description": "Key location for Uttar Pradesh courses, including Allahabad area.",
                "cities": [
                    {
                        "name": "Allahabad",
                        "lat": 25.4358011,
                        "lng": 81.846311,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-allahabad"
                    }
                ]
            },
            {
                "district": "Lucknow",
                "description": "Key location for Uttar Pradesh courses, including Lucknow area.",
                "cities": [
                    {
                        "name": "Lucknow",
                        "lat": 26.8466937,
                        "lng": 80.946166,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-lucknow"
                    },
                    {
                        "name": "Lucknow",
                        "lat": 26.8466937,
                        "lng": 80.946166,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-lucknow"
                    },
                    {
                        "name": "Lucknow",
                        "lat": 26.8466937,
                        "lng": 80.946166,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-lucknow"
                    }
                ]
            },
            {
                "district": "Varanasi",
                "description": "Key location for Uttar Pradesh courses, including Varanasi area.",
                "cities": [
                    {
                        "name": "Varanasi",
                        "lat": 25.3176452,
                        "lng": 82.9739144,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-varanasi"
                    }
                ]
            },
            {
                "district": "Kanpur",
                "description": "Key location for Uttar Pradesh courses, including Kanpur area.",
                "cities": [
                    {
                        "name": "Kanpur",
                        "lat": 26.447965,
                        "lng": 80.330572,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kanpur"
                    }
                ]
            }
        ]
    },
    {
        "state": "Punjab",
        "description": "Premier courses in Punjab, including General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: general, programming, software testing courses Punjab, training Punjab.",
        "districts": [
            {
                "district": "Amritsar",
                "description": "Key location for Punjab courses, including Amritsar area.",
                "cities": [
                    {
                        "name": "Amritsar",
                        "lat": 31.6339793,
                        "lng": 74.8722642,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-amritsar"
                    },
                    {
                        "name": "Amritsar",
                        "lat": 31.6339793,
                        "lng": 74.8722642,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-amritsar"
                    },
                    {
                        "name": "Amritsar",
                        "lat": 31.6339793,
                        "lng": 74.8722642,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-amritsar"
                    }
                ]
            },
            {
                "district": "Chandigarh",
                "description": "Key location for Punjab courses, including Chandigarh area.",
                "cities": [
                    {
                        "name": "Chandigarh",
                        "lat": 30.7399738,
                        "lng": 76.7567368,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-chandigarh"
                    }
                ]
            },
            {
                "district": "Ludhiana",
                "description": "Key location for Punjab courses, including Ludhiana area.",
                "cities": [
                    {
                        "name": "Ludhiana",
                        "lat": 30.900965,
                        "lng": 75.8572758,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-ludhiana"
                    },
                    {
                        "name": "Ludhiana",
                        "lat": 30.900965,
                        "lng": 75.8572758,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-ludhiana"
                    }
                ]
            }
        ]
    },
    {
        "state": "Madhya Pradesh",
        "description": "Premier courses in Madhya Pradesh, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Madhya Pradesh, training Madhya Pradesh.",
        "districts": [
            {
                "district": "Bhopal",
                "description": "Key location for Madhya Pradesh courses, including Bhopal area.",
                "cities": [
                    {
                        "name": "Bhopal",
                        "lat": 23.2599333,
                        "lng": 77.412615,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-bhopal"
                    },
                    {
                        "name": "Bhopal",
                        "lat": 23.2599333,
                        "lng": 77.412615,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-bhopal"
                    },
                    {
                        "name": "Bhopal",
                        "lat": 23.2599333,
                        "lng": 77.412615,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-bhopal"
                    },
                    {
                        "name": "Bhopal",
                        "lat": 23.2599333,
                        "lng": 77.412615,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-bhopal"
                    }
                ]
            },
            {
                "district": "Indore",
                "description": "Key location for Madhya Pradesh courses, including Indore area.",
                "cities": [
                    {
                        "name": "Indore",
                        "lat": 22.7195687,
                        "lng": 75.8577258,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-indore"
                    },
                    {
                        "name": "Indore",
                        "lat": 22.7195687,
                        "lng": 75.8577258,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-indore"
                    },
                    {
                        "name": "Indore",
                        "lat": 22.7195687,
                        "lng": 75.8577258,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-indore"
                    },
                    {
                        "name": "Indore",
                        "lat": 22.7195687,
                        "lng": 75.8577258,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-indore"
                    }
                ]
            }
        ]
    },
    {
        "state": "Odisha",
        "description": "Premier courses in Odisha, including Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: programming, software testing courses Odisha, training Odisha.",
        "districts": [
            {
                "district": "Khurda",
                "description": "Key location for Odisha courses, including Khurda area.",
                "cities": [
                    {
                        "name": "Bhubaneswar",
                        "lat": 20.295515,
                        "lng": 85.824797,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-bhubaneswar"
                    },
                    {
                        "name": "Bhubaneswar",
                        "lat": 20.295515,
                        "lng": 85.824797,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-bhubaneswar"
                    }
                ]
            }
        ]
    },
    {
        "state": "Uttarakhand",
        "description": "Premier courses in Uttarakhand, including General, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: general, software testing courses Uttarakhand, training Uttarakhand.",
        "districts": [
            {
                "district": "Dehradun",
                "description": "Key location for Uttarakhand courses, including Dehradun area.",
                "cities": [
                    {
                        "name": "Dehradun",
                        "lat": 30.3164945,
                        "lng": 78.0321918,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-dehradun"
                    },
                    {
                        "name": "Dehradun",
                        "lat": 30.3164945,
                        "lng": 78.0321918,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-dehradun"
                    }
                ]
            }
        ]
    },
    {
        "state": "Kerala",
        "description": "Premier courses in Kerala, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Kerala, training Kerala.",
        "districts": [
            {
                "district": "Ernakulam",
                "description": "Key location for Kerala courses, including Ernakulam area.",
                "cities": [
                    {
                        "name": "Kochi",
                        "lat": 9.9312328,
                        "lng": 76.2673041,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-kochi"
                    },
                    {
                        "name": "Kochi",
                        "lat": 9.9312328,
                        "lng": 76.2673041,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-kochi"
                    },
                    {
                        "name": "Kochi",
                        "lat": 9.9312328,
                        "lng": 76.2673041,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-kochi"
                    },
                    {
                        "name": "Kochi",
                        "lat": 9.9312328,
                        "lng": 76.2673041,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-kochi"
                    }
                ]
            },
            {
                "district": "Thiruvananthapuram",
                "description": "Key location for Kerala courses, including Thiruvananthapuram area.",
                "cities": [
                    {
                        "name": "Thiruvananthapuram",
                        "lat": 8.5241391,
                        "lng": 76.9366376,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-thiruvananthapuram"
                    },
                    {
                        "name": "Thiruvananthapuram",
                        "lat": 8.5241391,
                        "lng": 76.9366376,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-thiruvananthapuram"
                    },
                    {
                        "name": "Thiruvananthapuram",
                        "lat": 8.5241391,
                        "lng": 76.9366376,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-thiruvananthapuram"
                    }
                ]
            }
        ]
    },
    {
        "state": "Bihar",
        "description": "Premier courses in Bihar, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Bihar, training Bihar.",
        "districts": [
            {
                "district": "Patna",
                "description": "Key location for Bihar courses, including Patna area.",
                "cities": [
                    {
                        "name": "Patna",
                        "lat": 25.5940947,
                        "lng": 85.1375645,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-patna"
                    },
                    {
                        "name": "Patna",
                        "lat": 25.5940947,
                        "lng": 85.1375645,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-patna"
                    },
                    {
                        "name": "Patna",
                        "lat": 25.5940947,
                        "lng": 85.1375645,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-patna"
                    },
                    {
                        "name": "Patna",
                        "lat": 25.5940947,
                        "lng": 85.1375645,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-patna"
                    }
                ]
            }
        ]
    },
    {
        "state": "Andhra Pradesh",
        "description": "Premier courses in Andhra Pradesh, including Data Science, General, Programming, Software Testing. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming, software testing courses Andhra Pradesh, training Andhra Pradesh.",
        "districts": [
            {
                "district": "Krishna",
                "description": "Key location for Andhra Pradesh courses, including Krishna area.",
                "cities": [
                    {
                        "name": "Vijayawada",
                        "lat": 16.5061743,
                        "lng": 80.6480153,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-vijayawada"
                    },
                    {
                        "name": "Vijayawada",
                        "lat": 16.5061743,
                        "lng": 80.6480153,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-vijayawada"
                    },
                    {
                        "name": "Vijayawada",
                        "lat": 16.5061743,
                        "lng": 80.6480153,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-vijayawada"
                    }
                ]
            },
            {
                "district": "Visakhapatnam",
                "description": "Key location for Andhra Pradesh courses, including Visakhapatnam area.",
                "cities": [
                    {
                        "name": "Visakhapatnam",
                        "lat": 17.6868159,
                        "lng": 83.2184815,
                        "courseType": "software-testing",
                        "link": "/courses/software-testing-course-in-visakhapatnam"
                    },
                    {
                        "name": "Visakhapatnam",
                        "lat": 17.6868159,
                        "lng": 83.2184815,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-visakhapatnam"
                    },
                    {
                        "name": "Visakhapatnam",
                        "lat": 17.6868159,
                        "lng": 83.2184815,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-visakhapatnam"
                    },
                    {
                        "name": "Visakhapatnam",
                        "lat": 17.6868159,
                        "lng": 83.2184815,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-visakhapatnam"
                    }
                ]
            }
        ]
    },
    {
        "state": "Telangana",
        "description": "Premier courses in Telangana, including Data Science, General, Programming. Find top-rated training and bootcamps in major cities across the state. Keywords: data science, general, programming courses Telangana, training Telangana.",
        "districts": [
            {
                "district": "Hyderabad",
                "description": "Key location for Telangana courses, including Hyderabad area.",
                "cities": [
                    {
                        "name": "Hyderabad",
                        "lat": 17.384934,
                        "lng": 78.486616,
                        "courseType": "data-science",
                        "link": "/courses/data-science-ai-ml-bi-course-in-hyderabad"
                    },
                    {
                        "name": "Hyderabad",
                        "lat": 17.384934,
                        "lng": 78.486616,
                        "courseType": "general",
                        "link": "/courses/digital-marketing-course-in-hyderabad"
                    },
                    {
                        "name": "Hyderabad",
                        "lat": 17.384934,
                        "lng": 78.486616,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-hyderabad"
                    }
                ]
            }
        ]
    },
    {
        "state": "Chhattisgarh",
        "description": "Premier courses in Chhattisgarh, including Programming. Find top-rated training and bootcamps in major cities across the state. Keywords: programming courses Chhattisgarh, training Chhattisgarh.",
        "districts": [
            {
                "district": "Raipur",
                "description": "Key location for Chhattisgarh courses, including Raipur area.",
                "cities": [
                    {
                        "name": "Raipur",
                        "lat": 21.2513844,
                        "lng": 81.6296413,
                        "courseType": "programming",
                        "link": "/courses/programming-courses-in-raipur"
                    }
                ]
            }
        ]
    }
] as const;