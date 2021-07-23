import { Headbar } from "./Headbar";
import { Stay } from "./Stay";
import { Rate } from "./Rate";
import { Flight } from "./Flight";

export function Home() {
    return (
        <div>
            <Headbar />
            <Flight />
            <Stay />
            <Rate />
        </div>
    )
}