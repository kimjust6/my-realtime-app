import Image from "next/image";
import { Resource } from "sst";
import Chat from "@/components/chat";
import styles from "../components/chat.module.css";

const topic = "sst-chat";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <Image
                    className={styles.logo}
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div>
                Super Cool Wilber Demo
                <Chat
                    endpoint={Resource.MyRealtime.endpoint}
                    authorizer={Resource.MyRealtime.authorizer}
                    topic={`${Resource.App.name}/${Resource.App.stage}/${topic}`}
                />
            </div>
        </main>
    );
}
