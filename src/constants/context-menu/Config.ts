import type {
  MenuElementConfig,
  ContextMenuViewProps,
} from "react-native-ios-context-menu";

const MENU_ITEM_KEYS = {
  reply: "reply",
  undo_send: "undo_send",
  remove_reactions: "remove_reactions",
  delete: "delete",
  copy: "copy",
  pin: "pin",
};

type MenuItemKeys = keyof typeof MENU_ITEM_KEYS;

export const MENU_CONFIGS: Record<MenuItemKeys, MenuElementConfig> = {
  reply: {
    type: "action",
    actionKey: MENU_ITEM_KEYS.reply,
    actionTitle: "Reply",
    icon: {
      type: "IMAGE_SYSTEM",
      imageValue: {
        systemName: "arrow.turn.down.left",
      },
    },
  },

  undo_send: {
    actionKey: MENU_ITEM_KEYS.undo_send,
    actionTitle: "Undo Send",
    actionSubtitle: "gurl they might've seen it already tho...",
    icon: {
      type: "IMAGE_SYSTEM",
      imageValue: {
        systemName: "arrow.uturn.left",
      },
    },
  },

  remove_reactions: {
    actionKey: MENU_ITEM_KEYS.remove_reactions,
    actionTitle: "Remove Reactions",
    icon: {
      type: "IMAGE_SYSTEM",
      imageValue: {
        systemName: "heart.slash",
      },
    },
  },

  delete: {
    actionKey: MENU_ITEM_KEYS.delete,
    actionTitle: "Delete Message",
    menuAttributes: ["destructive"],
    icon: {
      type: "IMAGE_SYSTEM",
      imageValue: {
        systemName: "trash",
      },
    },
  },
  copy: {
    actionKey: MENU_ITEM_KEYS.copy,
    actionTitle: "Copy",
    menuAttributes: ["keepsMenuPresented"],
    icon: {
      type: "IMAGE_SYSTEM",
      imageValue: {
        systemName: "doc.on.doc",
      },
    },
  },
  pin: {
    actionKey: MENU_ITEM_KEYS.pin,
    actionTitle: "Pin",
    menuAttributes: ["keepsMenuPresented"],
    icon: {
      type: "IMAGE_SYSTEM",
      imageValue: {
        systemName: "mappin",
      },
    },
  },
};

export const MENU_ITEMS = [
  {
    type: "menu",
    menuTitle: "",
    menuOptions: ["displayInline"],
    menuPreferredElementSize: "small",
    menuItems: [
      {
        actionKey: "key-01-01",
        actionTitle: "",
        icon: {
          type: "IMAGE_SYSTEM",
          imageValue: {
            systemName: "hand.thumbsup",
          },
          imageOptions: {
            renderingMode: "alwaysOriginal",
            tint: "#00C853",
          },
        },
      },
      {
        actionKey: "key-01-02",
        actionTitle: "",

        icon: {
          type: "IMAGE_SYSTEM",
          imageValue: {
            systemName: "plus.circle",
          },
          imageOptions: {
            renderingMode: "alwaysOriginal",
            tint: "#2962FF",
          },
        },
      },
      {
        actionKey: "key-01-03",
        actionTitle: "",
        icon: {
          type: "IMAGE_SYSTEM",
          imageValue: {
            systemName: "hand.thumbsdown",
          },
          imageOptions: {
            renderingMode: "alwaysOriginal",
            tint: "#D50000",
          },
        },
      },
    ],
  },
  {
    type: "menu",
    menuTitle: "",
    menuOptions: ["displayInline"],
    menuPreferredElementSize: "small",
    menuItems: [
      {
        actionKey: "key-02-01",
        actionTitle: "",
        icon: {
          type: "IMAGE_SYSTEM",
          imageValue: {
            systemName: "star",
          },
          imageOptions: {
            renderingMode: "alwaysOriginal",
            tint: "#FFAB00",
          },
        },
      },
      {
        actionKey: "key-02-02",
        actionTitle: "",
        icon: {
          type: "IMAGE_SYSTEM",
          imageValue: {
            systemName: "star.lefthalf.fill",
          },
          imageOptions: {
            renderingMode: "alwaysOriginal",
            tint: "#FFAB00",
          },
        },
      },
      {
        actionKey: "key-02-03",
        actionTitle: "",
        icon: {
          type: "IMAGE_SYSTEM",
          imageValue: {
            systemName: "star.fill",
          },
          imageOptions: {
            renderingMode: "alwaysOriginal",
            tint: "#FFAB00",
          },
        },
      },
    ],
  },
];

export const MENU_COMBINER = [
  MENU_CONFIGS.reply,
  MENU_CONFIGS.copy,
  MENU_CONFIGS.pin,

  MENU_CONFIGS.delete,
  MENU_CONFIGS.remove_reactions,
  ...(MENU_ITEMS as any),
];

export const MENU_PROPS: ContextMenuViewProps = {
  menuConfig: {
    menuTitle: "",
    menuItems: [...MENU_COMBINER],
  },
};
