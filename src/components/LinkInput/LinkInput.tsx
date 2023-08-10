'use client'

import link from '../../../public/Link.svg'

import Image from 'next/image'
import { ChangeEvent, useState, MouseEvent } from 'react'

const httpRegex =
  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/

export default function LinkInput() {
  const [url, setUrl] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(httpRegex.test(url))
  const [loading, setLoading] = useState<boolean>(false)

  function handleInput({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    setUrl(value)
    setDisabled(httpRegex.test(value))
  }

  function handleSubmit(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    setLoading(loading)
    console.log(e.nativeEvent)
  }

  return (
    <>
      <input
        type="text"
        name="urlInput"
        placeholder="Insira um link para encurtar..."
        className="h-12 w-full max-w-[474px] rounded-lg border-2 border-zinc-300 text-base text-zinc-400 outline-none"
        disabled={loading}
        onChange={handleInput}
        value={url}
      />
      <button
        disabled={!disabled || loading}
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={`ml-4 h-12 min-h-[48px] w-12 min-w-[48px] rounded-lg ${
          loading
            ? 'bg-amber-800'
            : !disabled
            ? 'bg-zinc-800'
            : 'bg-amber-500 hover:bg-amber-300'
        } `}
      >
        <Image
          src={link}
          alt="link"
          height={30}
          width={30}
          className="m-auto"
        />
      </button>
    </>
  )
}
