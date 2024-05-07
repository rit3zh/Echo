// importing app constants

export * from "./data/MessageDummyData";
export * from "./time/TimeConstants";
export * from "./data/StoriesDummyData";
export * from "./chat/rooms";
export * from "./data/TotalMembers";
export * from "./app/disappearOptions";
import { FAKE_CONVERSATION } from "./chat/fake-conversation";
import { FAKE_ROOM_CONVERSATION } from "./chat/fake-room";

export namespace Constants {
  export namespace App {
    export enum Text {
      DescriptiveEndCreditsText = "Made with the ❤️ of Ritesh",
    }
  }

  export namespace Chat {
    export const Names = ["Chats", "Rooms"];

    export const FakeConversation = FAKE_CONVERSATION;
    export const FakeRoomConversation = FAKE_ROOM_CONVERSATION;
  }
}
