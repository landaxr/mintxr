import * as React from 'react'

import { Setup } from '../Setup'
import { ImageNft } from '../../src'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.zora.co/graphql',
  cache: new InMemoryCache(),
})

export const ImageNftStory = ({ ...args }) => (
  <ApolloProvider client={client}>
    <ImageNft {...args} />
  </ApolloProvider>
)

ImageNftStory.args = {
  contractAddress: '0x39508183cEd59522F072293af4E485A1b9fc102B',
  tokenId: '14081',
}

ImageNftStory.storyName = 'Default'

export default {
  title: 'Controls/FlyControls',
  component: ImageNft,
  decorators: [(storyFn) => <Setup controls={false}>{storyFn()}</Setup>],
}
