const review = [
    {
        id: 0,
        clientName: 'Toyin',
        clientLocation: 'Nigeria',
        clientSource: 'linkedin',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 2,
        clientName: 'Uzo',
        clientLocation: 'United Kindom',
        // clientSource: 'Fiverr',
        clientReview: 'He is very good with communication and experienced App developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Tunde',
        clientLocation: 'Nigeria',
        clientSource: 'linkedin',
        clientReview: "Franklin is extremely knowledgeable and helpful. He knows in and out of App development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: 'Felix',
        clientLocation: 'Ghana',
        clientSource: 'Lindln',
        clientReview: 'I have worked with Franklin and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
