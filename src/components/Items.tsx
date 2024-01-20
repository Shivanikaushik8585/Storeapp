'use client'
import Item from './Item';
import { PRODUCT_CATEGORIES } from '@/config'
import { useOnClickOutside } from '@/hooks/use-on';
import { useEffect, useRef, useState } from 'react';


const Items = () => {
    const [activeIndex, setActiveIndex] = useState<
    null | number
  >(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
    const handler = (e:KeyboardEvent) =>{
      if(e.key ==="Escape"){
        setActiveIndex(null);
      }
    }
    document.addEventListener("keydown",handler)
     return() =>{
      document.removeEventListener('keydown',handler)
     }
  })
  useOnClickOutside(navRef,()=>setActiveIndex(null))
  const isAnyOpen = activeIndex !== null
  return (
    <div className='flex gap-4 h-full' ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }

        const close = () => setActiveIndex(null)

        const isOpen = i === activeIndex

        return (
          <Item
            category={category}
            close={close}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
    }
 
export default Items;