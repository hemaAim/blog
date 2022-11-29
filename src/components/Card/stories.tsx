import { Story, Meta } from '@storybook/react'
import Card from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'title default',
    description: 'description default',

    img: 'img/card-lg.svg',
    sizeCard: 'sm',
    sizeText: 'sm'
  }
} as Meta

export const Basic: Story = (args) => <Card {...args} />
Basic.args = {
  title: 'example',
  description: 'this description basic API'
}

export const Default: Story = () => <Card />
