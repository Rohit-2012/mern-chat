import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
    const { loading, conversations } = useGetConversations()
    
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((conversation, index) => {
                return <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIndex={ index === conversations.length - 1} />
            })}
            {loading && <span className="loading loading-spinner mx-auto"></span>}
        </div>
    );
}

export default Conversations;