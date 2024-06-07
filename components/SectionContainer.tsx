import { cn } from '@/utils/cn'
import React, { ReactNode } from 'react'

const SectionContainer = ({children,className,id}:{children:ReactNode,className?:string,id?:string}) => {
  return (
    <section id={id} className={cn('container mx-auto p-6 my-6 w-full scroll-smooth',className)}>{children}</section>
  )
}

export default SectionContainer