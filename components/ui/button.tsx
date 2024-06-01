
import { cn } from '@/utils/cn'
import React, { ReactNode } from 'react'

const Button = ({className,variant="primary",children}:{className?:string,variant?:"primary"|"secondary",children:ReactNode}) => {
  return (
    <button className={cn(
      "px-4 py-2 transition-all rounded-xl ",
      variant==="primary"&&"bg-primary hover:bg-primary/[.9]",
      variant==="secondary"&&"bg-[#272727] hover:bg-[#272727b3]",
      className
    )}>
      {children}
      </button>
  )
}

export default Button