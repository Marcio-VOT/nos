import { cookies } from 'next/headers'
import LinkInput from '../LinkInput/LinkInput'

export default function LinkShortener() {
  async function addTest(data: FormData) {
    'use server'
    const url = data.get('urlInput') ?? ''
    console.log(url)
    cookies().set('test', JSON.stringify(url), { maxAge: 10 })
  }
  return (
    <div className="mt-24 flex w-full flex-wrap justify-center align-middle">
      <form
        action={addTest}
        className="flex w-11/12 justify-center align-middle"
      >
        <LinkInput />
      </form>
      <p className="mt-2 text-xs">Visualizar os últimos links encurtados</p>
    </div>
  )
}
