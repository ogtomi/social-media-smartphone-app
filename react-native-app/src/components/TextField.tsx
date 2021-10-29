import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { TextInputProps } from './Themed'

const TextField: React.FC<TextInputProps> = (props) => {
    const [text, setText] = useState('')
    return (
        <TextInput
            {...props}
        />
    )
}

export default TextField