const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Federal University Of Abuja, Nigeria',
                degree: 'BSC, Computer Science',
                detail: "Bachelor's Degree in Computer Science from University Of Abuja",
                year: '2018-2023'
            },
            // {
            //     id: 1,
            //     title: 'Peshawar Model Degree College',
            //     degree: 'HSSC, Pre Engineering',
            //     detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
            //     year: '2015-2017'
            // },
            // {
            //     id: 2,
            //     title: 'Falcon Academy',
            //     degree: 'SSC, Science Subjects',
            //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
            //     year: '2013-2015'
            // },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'SToR Technologies',
                role: 'Full Stack Developer',
                // url: 'https://jmm.ltd/',
                desc: 'Coordinated efficient large-scale software deployments; Managed development milestones from initial steps through final delivery.',
                year: '06/2021 - 01/2022',
                location: 'Abuja, Nigeria'
            },
            {
                id: 2,
                title: 'C-CHU Global',
                role: 'Frontend Developer',
                // url: 'no website',
                desc: 'Collaborated with web content editors to facilitate website maintenance',
                year: '02/2022 - 05/2022',
                location: 'Karu, Nigeria'
            },
            {
                id: 3,
                title: 'Leeway Education',
                role: 'App Developer',
                // url: 'https://www.encoderbytes.com/',
                desc: "Created and Deployed a blockchian application on Plastore, with option for multiple African Languages",
                year: '06/2022 - 01/2023',
                location: 'Abuja, Nigeria'
            },
            {
                id: 4,
                title: 'Crypto Stores',
                role: 'Telegram App Developer',
                // url: 'https://www.encoderbytes.com/',
                desc: "Created a Scalable application built on the Ton Blockchain",
                year: '02/2023 - 03/2023',
                location: 'Abuja, Nigeria'
            },
            {
                id: 5,
                title: 'Loadxchange',
                role: 'App Developer',
                // url: 'https://www.encoderbytes.com/',
                desc: "Designed and developed a comprehensive truck haulage solution, seamlessly integrated with Google Maps for enhanced navigation and real-time tracking for truck drivers.",
                year: '04/2023 - 06/2023',
                location: 'United Kingdom'
            },
            {
                id: 6,
                title: 'Leeway Smart Contract',
                role: 'Frontend Developer',
                // url: 'https://www.encoderbytes.com/',
                desc: "Developed a virtual learning hub tailored for the Web3 space, providing resources, interactive modules, and community support for blockchain, decentralized technologies, and digital asset education.",
                year: '06/2023 - 08/2023',
                location: 'Nigeria'
            },
            {
                id: 7,
                title: 'Tron',
                role: 'App Developer',
                // url: 'https://www.encoderbytes.com/',
                desc: "Developed a peer-to-peer transport assistant designed for seamless city-wide navigation, enabling efficient and convenient movement through real-time ride-sharing and local route optimization.",
                year: '08/2023 - present',
                location: 'Ghana'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
