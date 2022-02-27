import StoryCard from "./StoryCard"
import Image from "next/image";

const stories = [
    {
        name: "Jack Ma",
        src: "https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/32f768a0-f465-11e9-bf9e-bda6fdc1efbd.jpg?alt=media&token=98399db5-db71-4066-a89d-4c11540bfb5b",
        profile: "https://firebasestorage.googleapis.com/v0/b/midterm-redux.appspot.com/o/eb01abd0-5ba7-11e7-98d7-232f56a99798_1280x720_102819.webp?alt=media&token=a0a768f7-9979-4bd0-866b-4025c147f44b"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
]

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories