import { Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import {
  type OnPressMenuItemEventObject,
  ContextMenuView
} from 'react-native-ios-context-menu'
import { MENU_PROPS } from '../../../constants/context-menu/Config'
import { Bubble, MessageText, type IMessage } from 'react-native-gifted-chat'
import type { ExtendedMessage } from '../../../interfaces'

import Reaction from './Reaction'
import { responsiveWidth } from 'react-native-responsive-dimensions'
interface Props {
  onMenuPress?: (nativeEvent: OnPressMenuItemEventObject) => any | void
  initialBubbleProps?: Bubble<ExtendedMessage>['props']
  contextMenu?: boolean | false
}

const GiftedChatBubble: React.FC<Props> = ({
  onMenuPress,
  initialBubbleProps,
  contextMenu
}: Props) => {
  return contextMenu === false ? (
    <ContextMenuView {...MENU_PROPS} onPressMenuItem={onMenuPress} style={{}}>
      <Bubble
        wrapperStyle={{
          left: {
            borderBottomLeftRadius: 1,
            backgroundColor: '#e6e6e6'
          },
          right: {
            backgroundColor: '#383838'
          }
        }}
        {...initialBubbleProps}
      />
    </ContextMenuView>
  ) : (
    <Bubble
      wrapperStyle={{
        left: {
          borderBottomLeftRadius: 1,
          backgroundColor: '#e6e6e6'
        },
        right: {
          backgroundColor: '#383838'
        }
      }}
      {...initialBubbleProps}
    />
  )
}

export default GiftedChatBubble

//  console.log(
//                   item.nativeEvent.actionKey === "key-01-02"
//                     ? setOpen(true)
//                     : null
