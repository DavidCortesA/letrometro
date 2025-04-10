import { Card, CardDescription, CardTitle } from "./ui/card"

export const CardInfo = ({title, date, bgcolor}:{title:string, date:number, bgcolor:string}) => {
  return(
    <Card className={`md:w-[350px] w-full h-[150px] p-4 ${bgcolor}`}>
      <CardDescription className="font-semibold text-6xl text-black dark:text-white">{date < 9 ? `0${date}` : date}</CardDescription>
      <CardTitle className="text-black dark:text-white">{title}</CardTitle>
    </Card>
  )
}