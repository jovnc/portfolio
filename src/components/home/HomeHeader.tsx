import { NameTypeAnimation } from "@/components/home/NameTypeAnimation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomeHeader() {
  return (
    <div className="w-full grid grid-cols-3 justify-start items-center gap-12">
      <div className="col-span-3 flex flex-col gap-4">
        <NameTypeAnimation />
        <p className="text-lg">
          Full Stack Developer | Entrepreneur | Y1 CS Student
        </p>
        <p></p>
        <p className="text-md">
          I am passionate about tinkering with technology to create meaningful
          solutions that make a difference in the world, with a keen interest in
          advancing innovation in the education and defense sectors.
        </p>
      </div>
      {/* <div>
        <Avatar className="w-1/2 h-1/2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div> */}
    </div>
  );
}
