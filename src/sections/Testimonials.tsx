
import CustomCard from '@/components/CustomCard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { USERS } from '@/lib/constants'
import clsx from 'clsx'
import { randomUUID } from 'crypto'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Testimonials = () => {
  return (
    <section className='relative'>
      <div
        className="w-full
        blur-[120px]
        rounded-full
        h-32
        absolute
        bg-secondary-foreground/50
        -z-10
        top-56
        "
      />
      <div className="mt-20
      px-4
      sm:px-6
      flex
      flex-col
      overflow-x-hidden
      overflow-visible
      ">
        <div className='bg-gradient-to-r from-primary to-secondary-foreground
        text-transparent bg-clip-text relative'>
            <h1 className='text-2xl sm:text-3xl 
            md:text-4xl font-bold text-center'>
                WHAT OUR CLIENTS SAYS</h1>
        </div>

        {[...Array(2)].map((arr,index)=>(
            <div
            key={randomUUID()}
            className={twMerge(
                clsx('mt-10 flex flex-nowrap gap-6 self-start',{
                    'flex-row-reverse':index===1,
                    'animate-[slide_200s_linear_infinite]':true,
                    'animate-[slide_200s_linear_infinite_reverse]':index===1,
                    'ml-[100vw]':index===1,
                }),'hover:paused'
            )}
            >
                {USERS.map((testimonial,index)=>(
                    <CustomCard 
                        key={testimonial.name}
                        className="w-[500px]
                        shrink-0
                        rounded-xl
                        dark:bg-gradient-to-t
                        dark:from-border dark:to-background
                    "
                        cardHeader={
                            <div className='flex
                            items-center
                            gap-4
                            '>
                                <Avatar>
                                    <AvatarImage src={`/avatars/${index + 1}.png`}/>
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className='text-foreground'>
                                        {testimonial.name}
                                    </CardTitle>
                                    <CardDescription className='text-foreground'>
                                        {testimonial.name.toLocaleLowerCase()}
                                    </CardDescription>
                                </div>
                            </div>
                        }
                        cardContent={
                            <p>{testimonial.message}</p>
                        }
                    ></CustomCard>
                    ))}
            </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
