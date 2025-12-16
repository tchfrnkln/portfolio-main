const review = [
    {
        id: 2,
        clientName: 'Uzo',
        clientLocation: 'United Kindom',
        clientSource: 'Referral',
        clientReview: 'He is very good with communication and experienced App developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Devron Williams',
        clientLocation: 'Nigeria',
        clientSource: 'Linkedin',
        clientReview: "Franklin is extremely knowledgeable and helpful. He knows in and out of App development . His understanding of different technologies and frameworks in the space is also very impressive."
    },
    {
        id: 4,
        clientName: 'Felix',
        clientLocation: 'Ghana',
        clientSource: 'Referral',
        clientReview: 'I have worked with Franklin and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
