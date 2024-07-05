import React from 'react'
import { BentoGrid , BentoGridItem } from './ui/BentoGrid'
import { GridItems } from '@/Data'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {GridItems.map((item, i) => 
          <BentoGridItem key={i} title={item.title} description={item.description} />
        )}
      </BentoGrid>
    </section>
  )
}

export default Grid