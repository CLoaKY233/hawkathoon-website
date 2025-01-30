import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image Gallery | InnoHand Prosthetics',
  description: 'A showcase of our innovative prosthetic designs and the lives they have touched.',
}

export default function GalleryLayout({
                                        children,
                                      }: {
  children: React.ReactNode
}) {
  return (
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
  )
}

