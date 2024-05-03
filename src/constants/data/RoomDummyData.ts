import type { Rooms } from "../../interfaces";

export const ROOM_DATA: Rooms[] = [
  {
    _id: "9ec45179-6fb4-41be-8902-1e513562feb2",
    name: "The Watchers",
    banner:
      "https://i.pinimg.com/originals/2d/1a/15/2d1a15eda68d579814d32e18d8ec81e3.jpg",
    icon: "https://render.fineartamerica.com/images/rendered/default/print/8/8/break/images/artworkimages/medium/3/2-the-witcher-deer-fields.jpg",
    description: `"The Watchers" conjures images of a group of vigilant observers, keenly attuned to the nuances of their surroundings. As members of this chat room, you embody this sense of watchfulness, whether it's about current events, trends, or the lively discussions that unfold within. With a keen eye for detail and a commitment to staying informed, members of "The Watchers" engage in insightful conversations, offering perspectives that are both discerning and thought-provoking. Just like sentinels atop a tower, you keep a watchful gaze over the digital landscape, ready to share your insights and observations with fellow members.`,
    createdAt: new Date().toString(),
    membersCount: 10,
    owner: {
      _id: "5bee3347-33c4-449c-912b-ce8968a185c6",
      name: "rit3zh",
      icon: {
        url: "https://i.pinimg.com/564x/2c/3e/13/2c3e134df2475c4e97598115c1307814.jpg",
      },
    },
    tags: [
      "#ObservationStation",
      "#InsightInsiders",
      "#TrendTrackers",
      "#IntellectualInsights",
      "#VigilantVoices",
      "#InformedInsights",
      "#WatchfulWisdom",
      "#CurrentEventsCrew",
      "#MindfulMonitors",
      "#PerspectivePundits",
    ],
  },
];
