import moment from 'moment'
import { CalendarDays } from 'lucide-react'

export const blogDate = (blog: any) => {
    return (
        <p className="text-sm font-medium flex gap-2 items-center my-4">
            <CalendarDays />
            {moment(blog.date).format("DD-MM-YYYY")}
        </p>
    )
}