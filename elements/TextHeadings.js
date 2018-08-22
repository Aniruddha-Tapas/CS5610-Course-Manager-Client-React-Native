import React from 'react'
import { View } from 'react-native'
import { Text, Divider } from 'react-native-elements'

const TextHeadings = () =>
    <View>
        <Text h1>This is Heading 1</Text>
        <Text h2>This is Heading 2</Text>
        <Text h3>This is Heading 3</Text>
        <Text h4>This is Heading 4</Text>
        <Text h5>This is Heading 5</Text>

        <Divider
            style={{
                backgroundColor:
                    'blue' }} />

        <Text>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
        </Text>
    </View>;

export default TextHeadings