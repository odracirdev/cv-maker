import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Chat() {
  return (
    <>
    <section className="w-1/2 max-h-screen bg-zinc-950 flex flex-col justify-between overflow-hidden">
      <div>
        <div className="space-y-1.5 p-6 flex flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none text-white">Elena Banana</p>
              <p className="text-sm text-gray-400">m@example.com</p>
            </div>
          </div>
          <Button variant="outline" size="icon" className="text-white flex items-center justify-center whitespace-nowrap rounded-full h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"/></svg>
          </Button>
        </div>
        <div className="p-6 pt-0">
          <div className='space-y-4'>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 px-3 py-2 text-sm bg-gray-700 rounded-xl text-white">
              Hi, how can I help you today?
            </div>
            <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-xl px-3 py-2 text-sm ml-auto bg-white text-black">
              Hey, Im having trouble with my account.
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center p-6 pt-0'>
        <form className='flex w-full items-center space-x-2'>
          <input className="flex h-10 w-full rounded-xl border px-3 py-2 text-sm file:border-0 file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-transparent" id="message" placeholder="Type your message..." autoComplete="off" value=""></input>
          <Button variant="ghost" size="icon" className="text-white flex items-center justify-center whitespace-nowrap rounded-full h-10 w-10 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634L21.044 2.32c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8l-8 6z"/></svg>
          </Button>
        </form>
      </div>
    </section>
    </>
  )
}

