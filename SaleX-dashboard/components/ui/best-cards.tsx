

import React from 'react'
import {
Card,
CardHeader,
CardTitle,
CardContent,
CardDescription,

} from '@/components/ui/card'

const CardForBest = ({title,description,name,price}:{
    title:string,
    description:string,
    name:string,
    price:number
}) => {
return (
 <Card className='mx-4 mt-10 w-[90vw]'>
    <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
        <div className="space-y-8">
            <div className="flex items-center">
                <div className=" space-y-1">
                    <p className="text-sm font-medium leading-none">
                        {name} - ₹{price}
                    </p>
                </div>
            </div>
        </div>
    </CardContent>
    </Card>
)
}

export default CardForBest