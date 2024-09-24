import { notFound } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(_req: NextRequest, { params }: { params: { aeroSandbox: string } }) {
  const requestedFile = params.aeroSandbox
  try {
    const res = await fetch(`https://unpkg.com/browse/aero-sandbox@0.0.3/dist/${requestedFile}`)
    const file = await res.text()
    const fileBlob = new Blob([file])
    return new Response(fileBlob, {
      headers: {
        'Content-Type': 'application/javascript'
      }
    })
  } catch {
    notFound()
  }
}
