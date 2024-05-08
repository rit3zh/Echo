import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Dimensions,
  Keyboard,
  ActivityIndicator
} from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'

import { ContextMenuView } from 'react-native-ios-context-menu'

// @GiftedChat
import {
  Avatar,
  Bubble,
  GiftedChat,
  MessageContainer,
  Time,
  User,
  type IMessage
} from 'react-native-gifted-chat'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Theme } from '../../../theme/app/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import {
  GiftedChatBubbleComponent,
  GiftedChatInputToolBarComponent
} from '../../import'
import { Constants } from '../../../constants'

interface Props {
  name: string
}

export default function GiftedChatContext(requiredProps: Props) {
  const [messages, setMessages] = useState<IMessage[]>(
    Constants.Chat.FakeConversation
  )
  const [user, setUser] = useState<User>({
    _id: 2,
    name: 'rit3zh',
    avatar: 'https://avatars.githubusercontent.com/u/119659853?v=4'
  })
  const [topValue, setTopValue] = useState<number>(10)
  const [text, setText] = useState<string>('')

  useLayoutEffect(() => {
    const keyboardDidOpenListener = Keyboard.addListener(
      'keyboardWillShow',
      () => setTopValue(0)
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => setTopValue(10)
    )
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidOpenListener.remove()
    }
  }, [])

  useLayoutEffect(() => {
    setMessages(Constants.Chat.FakeConversation)
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])
  return (
    <GiftedChat
      messagesContainerStyle={{
        backgroundColor: Theme.dark.backgroundColor
      }}
      renderAvatar={(props) => (
        <Avatar
          {...props}
          imageStyle={{
            left: { top: 20 }
          }}
        />
      )}
      textInputProps={{
        ...styles.textInputStyle
      }}
      renderBubble={(props) => (
        <>
          <GiftedChatBubbleComponent
            contextMenu={true}
            initialBubbleProps={props}
          />
        </>
      )}
      renderTime={(props) => (
        <>
          <Time {...props} />
        </>
      )}
      renderFooter={() => <View style={{ marginBottom: 50 }} />}
      renderInputToolbar={() => (
        <GiftedChatInputToolBarComponent
          onSendPress={() => {}}
          username={requiredProps.name}
          onValueChange={(text) => setText(text)}
          value={topValue}
          text={text}
        />
      )}
      messages={messages}
      user={user}
      onLongPress={() => {
        return
      }}
    />
  )
}

const styles = StyleSheet.create({
  textInputStyle: {
    borderRadius: 20,
    backgroundColor: 'black',
    paddingHorizontal: 12,
    marginTop: 6,
    borderWidth: 0.6,
    borderColor: 'gray'
  }
})
