import { cn } from '@/utils/cn'
import React, { ReactNode } from 'react'

const SectionContainer = ({children,className}:{children:ReactNode,className?:string}) => {
  return (
    <section className={cn('container mx-auto p-6 my-6 w-full',className)}>{children}</section>
  )
}

export default SectionContainer