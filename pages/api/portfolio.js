const portfolio = [
    {
        id: 0,
        projectName: "SToR Technologies",
        image: "projects/stor.png",
        projectDetail: "Scalable Retail Ecommerce Platform",
        technologiesUsed: [
            {
                tech: "Alpine Js"
            },
            {
                tech: "Express"
            },
            {
                tech: "Firebase"
            },
            {
                tech: "Sendgrid"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "C-CHU Global",
        // url: "https://absco.sa/",
        image: "projects/cchuGlobal.png",
        projectDetail: "Get Premium Advices and Assistance to making informed decision in the Financial Market",
        technologiesUsed: [
            {
                tech: "Javascript"
            },
            {
                tech: "PHP"
            },
            {
                tech: "TailwindCSS"
            }
        ]
    },
    {
        id: 2,
        projectName: "Leeway Education",
        url: "https://leewayedu.com/",
        image: "projects/LeewayEdu.png",
        projectDetail: "Incentivised Online Business Education on Blockchain",
        technologiesUsed: [
            {
                tech: "React Native"
            },
            {
                tech: "Expo"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 3,
        projectName: "Crypto Stores",
        image: "projects/cstz.jpg",
        projectDetail: "Reward System For Early adopters on Telegram",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Axios"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Telegram-ui"
            }
        ]
    },
    {
        id: 4,
        projectName: "Loadxchange",
        image: "projects/loadxchange.jpg",
        projectDetail: "Long distance Truck haulage solution, with enhanced navigation and real-time trackings",
        technologiesUsed: [
            {
                tech: "React Native"
            },
            {
                tech: "Expo"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "GitLab"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Google Maps"
            },
        ]
    },
    {
        id: 5,
        projectName: "Leeway Smart Contract",
        image: "projects/smartContract.png",
        projectDetail: "Virtual learning hub tailored for the Web3 space, providing resources, interactive modules, and community support for blockchain, decentralized technologies, and digital asset education.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NextJS"
            },
            {
                tech: "Typescript"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 6,
        projectName: "Tron",
        image: "projects/tron.jpg",
        projectDetail: "A peer-to-peer transport assistant designed for seamless city-wide navigation, enabling efficient and convenient movement through real-time ride-sharing and local route optimization.",
        technologiesUsed: [
            {
                tech: "React Native"
            },
            {
                tech: "Expo"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Google Maps"
            }
        ]
    }
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
