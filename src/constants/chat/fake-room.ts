import { IMessage } from "react-native-gifted-chat";

// Function to generate a random user name
function generateRandomName(): string {
  const firstNames = [
    "Emma",
    "Liam",
    "Olivia",
    "Noah",
    "Ava",
    "William",
    "Sophia",
    "James",
    "Isabella",
    "Ethan",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
  ];
  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

// Function to generate a random message text
function generateRandomMessageText(messageNumber: number): string {
  const messageOptions = [
    "Hey, how's it going?",
    "I saw that movie too! It was great.",
    "Anyone up for a game of basketball this weekend?",
    "Just finished reading a fascinating book.",
    "What do you all think about the new project?",
    "I'm feeling hungry, anyone else?",
    "Did anyone catch the latest episode of that show?",
    "Looking forward to the weekend!",
    "It's been a long day...",
    "Excited for the concert tonight!",
  ];
  const randomMessage =
    messageOptions[Math.floor(Math.random() * messageOptions.length)];
  return `${randomMessage} Message ${messageNumber}`;
}

// Function to generate a random avatar URL
function generateRandomAvatar(): string {
  const avatarOptions = [
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/3.jpg",
    "https://randomuser.me/api/portraits/women/4.jpg",
    "https://randomuser.me/api/portraits/men/5.jpg",
  ];
  return avatarOptions[Math.floor(Math.random() * avatarOptions.length)];
}

// Function to generate a fake conversation
function generateFakeConversation(): IMessage[] {
  const numberOfMessages = Math.floor(Math.random() * 11) + 20; // Random number of messages between 20 and 30
  const conversation: IMessage[] = [];
  let lastMessageTime = Date.now();

  // Generate messages
  for (let i = 0; i < numberOfMessages; i++) {
    const messageDelay = Math.floor(Math.random() * 30000) + 10000; // Random delay between 10 and 40 seconds
    lastMessageTime += messageDelay;
    const message: IMessage = {
      _id: i + 1,
      text: generateRandomMessageText(i + 1),
      createdAt: new Date(lastMessageTime),
      user: {
        _id: i % 2 === 0 ? 1 : 8, // Alternate between two users
        name: generateRandomName(),
        avatar: generateRandomAvatar(),
      },
    };
    conversation.push({
      ...message,
    });
  }

  return conversation;
}

// Generate the fake conversation and export it
export const FAKE_ROOM_CONVERSATION: IMessage[] =
  generateFakeConversation().sort(
    (a: any, b: any) => a.createdAt - b.createdAt
  );
