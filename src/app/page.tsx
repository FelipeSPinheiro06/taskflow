import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
        <h1 className="font-bold text-4xl">
          Taskflow
        </h1>
        
        <section className="flex flex-col">
          <div className="w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>

          <div className="w-full max-w-sm items-center gap-1.5 mt-9">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" placeholder="Password" />
          </div>

          <Button className="mt-[45px] bg-white text-black" asChild>
            <Link href="/login">Submit</Link>
          </Button>

        </section>
    </div>
  );
}
