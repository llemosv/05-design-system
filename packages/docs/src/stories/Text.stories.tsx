import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus accusantium quo deserunt perspiciatis, culpa quam quae odio aspernatur laboriosam optio veniam provident voluptates nihil earum nemo. Placeat voluptates iusto provident.',
  },
} as Meta

export const Primary: StoryObj<TextProps> = {}
export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
