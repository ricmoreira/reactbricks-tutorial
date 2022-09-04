// Gallery.tsx
import React from 'react'
import { types, Repeater, Text } from 'react-bricks/frontend'

const Gallery: types.Brick = () => {
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <Text
        propName="title"
        renderBlock={({ children }) => <h1 className="text-4xl font-bold text-center">{children}</h1>}
        placeholder="Type a title..."
        // multiline={false} : boolean
        // softLineBreak={false} : boolean
      />
      <div className="sm:grid grid-cols-3 gap-5">
        <Repeater propName="thumbnails" />
      </div>
    </div>
  )
}

Gallery.schema = {
  name: 'gallery',
  label: 'Gallery',
  getDefaultProps: () => ({
    thumbnails: [],
  }),
  repeaterItems: [
    {
      name: 'thumbnails',
      itemType: 'thumbnail',
      itemLabel: 'Thumbnail',
      max: 3,
    },
  ],
}

export default Gallery