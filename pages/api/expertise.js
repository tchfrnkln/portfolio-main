const expertise = [
    {
        id: 0,
        title: 'App Development',
        desc: "I am a skilled React Native developer with extensive experience in building high-performance iOS and Android applications. Leveraging React Native's 'write once, run everywhere' capability, I create cross-platform mobile apps that provide a seamless user experience on both operating systems. I possess a strong understanding of mobile UI/UX principles, API integration, and state management. With my expertise, I deliver dynamic, responsive, and efficient mobile solutions tailored to meet clients' unique needs.",
    },
    // {
    //     id: 1,
    //     title: 'Scrum and Jira',
    //     desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    // },
    {
        id: 2,
        title: 'Frontend Development',
        desc: "I am a skilled Frontend Developer with extensive experience in building responsive and interactive web applications. Proficient in HTML, CSS, JavaScript, and frameworks like React.js, I create user-focused, dynamic interfaces that enhance usability and engagement. I have a strong understanding of responsive design, state management, API integration, and performance optimization. With a keen eye for detail and a passion for delivering intuitive user experiences, I build web solutions tailored to meet clients' specific needs.",
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    // {
    //     id: 4,
    //     title: 'Open Source Contributor',
    //     desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    // },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
